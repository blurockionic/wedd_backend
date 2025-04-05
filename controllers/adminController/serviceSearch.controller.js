import { PrismaClient as PrismaClientMongo } from "../../prisma/generated/mongo/index.js";

const prismaMongo = new PrismaClientMongo();

const serviceSearch = async (req, res) => {
    try {
        const { serviceName, serviceType, vendorId, location, sortBy } = req.body;
        const match = {};
        console.log(req.body);

        if (serviceName) {
            match.service_name = { $regex: serviceName, $options: 'i' };
        }

        if (serviceType) {
            match.service_type = { $regex: serviceType, $options: 'i' };
        }

        if (vendorId) {
            try {
                // Convert vendorId to ObjectId for matching
                match.vendorId = { $oid: vendorId };
            } catch (error) {
                return res.status(400).json({ message: "Invalid vendorId format" });
            }
        }

        if (location) {
            match.$or = [
                { city: { $regex: location, $options: 'i' } },
                { state: { $regex: location, $options: 'i' } },
                { country: { $regex: location, $options: 'i' } }
            ];
        }

        const sort = {};
        if (sortBy === 'views') {
            sort.totalViews = -1;
        } else if (sortBy === 'rating') {
            sort.averageRating = -1;
        }

        const services = await prismaMongo.service.aggregateRaw({
            pipeline: [
                { $match: match },
                { $lookup: {
                    from: 'Views',
                    localField: '_id',
                    foreignField: 'serviceId',
                    as: 'views'
                }},
                { $unwind: { path: '$views', preserveNullAndEmptyArrays: true } },
                { $lookup: {
                    from: 'Feedback',
                    localField: '_id',
                    foreignField: 'serviceId',
                    as: 'feedback'
                }},
                { $unwind: { path: '$feedback', preserveNullAndEmptyArrays: true } },
                { $group: {
                    _id: '$_id',
                    service_name: { $first: '$service_name' },
                    service_type: { $first: '$service_type' },
                    vendorId: { $first: '$vendorId' },
                    city: { $first: '$city' },
                    state: { $first: '$state' },
                    country: { $first: '$country' },
                    totalViews: { $sum: { $ifNull: ['$views.viewCount', 0] } },
                    averageRating: { $avg: { $ifNull: ['$feedback.rating', 0] } }
                }},
                { $sort: sort }
            ]
        });

        return res.status(200).json({ success: true, data: services });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export default serviceSearch;