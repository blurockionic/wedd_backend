import { PrismaClient as PrismaClientMongo } from "../../prisma/generated/mongo/index.js";

const prismaMongo = new PrismaClientMongo();

const vendorSearch = async (req, res) => {
    try {
        const { name, id, serviceType, location } = req.body;
        const match = {};
        console.log(req.body);

        if (name) {
            match.name = { $regex: name, $options: 'i' };
        }

        if (id) {
            try {
                // Convert vendorId to ObjectId for matching
                match._id = { $oid: id };
            } catch (error) {
                return res.status(400).json({ message: "Invalid vendorId format" });
            }
        }

        if (serviceType) {
            match.service_type = { $elemMatch: { $regex: serviceType, $options: 'i' } };
        }

        if (location) {
            match.$or = [
                { city: { $regex: location, $options: 'i' } },
                { state: { $regex: location, $options: 'i' } },
                { country: { $regex: location, $options: 'i' } }
            ];
        }

        const vendors = await prismaMongo.vendor.aggregateRaw({
            pipeline: [
                { $match: match },
                { $lookup: {
                    from: 'Service',
                    localField: '_id',
                    foreignField: 'vendorId',
                    as: 'services'
                }},
                { $unwind: '$services' },
                { $lookup: {
                    from: 'Views',
                    localField: 'services._id',
                    foreignField: 'serviceId',
                    as: 'services.views'
                }},
                { $unwind: '$services.views' },
                { $group: {
                    _id: '$_id',
                    name: { $first: '$name' },
                    business_name: { $first: '$business_name' },
                    location: { $first: { $concat: ['$city', ', ', '$state', ', ', '$country'] } },
                    service_type: { $first: '$service_type' },
                    totalViews: { $sum: '$services.views.viewCount' },
                    services: { $push: '$services' },
                }},
                { $sort: { totalViews: -1 } }
            ]
        });

        return res.status(200).json({ success: true, data: vendors });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export default vendorSearch;