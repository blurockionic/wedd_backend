
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.VendorScalarFieldEnum = {
  id: 'id',
  name: 'name',
  business_name: 'business_name',
  business_category: 'business_category',
  license_number: 'license_number',
  service_type: 'service_type',
  description: 'description',
  logo_url: 'logo_url',
  country: 'country',
  state: 'state',
  latitude: 'latitude',
  longitude: 'longitude',
  city: 'city',
  email: 'email',
  password_hash: 'password_hash',
  phone_number: 'phone_number',
  social_networks: 'social_networks',
  created_at: 'created_at',
  updated_at: 'updated_at',
  is_verified: 'is_verified',
  refresh_Token: 'refresh_Token',
  resetPassword_Token: 'resetPassword_Token',
  role: 'role'
};

exports.Prisma.ServiceScalarFieldEnum = {
  id: 'id',
  vendorId: 'vendorId',
  service_name: 'service_name',
  description: 'description',
  min_price: 'min_price',
  max_price: 'max_price',
  price: 'price',
  service_type: 'service_type',
  rating: 'rating',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.AvailabilityScalarFieldEnum = {
  id: 'id',
  serviceId: 'serviceId',
  available_date: 'available_date',
  wedding_date: 'wedding_date',
  is_available: 'is_available',
  created_at: 'created_at'
};

exports.Prisma.MediaScalarFieldEnum = {
  id: 'id',
  serviceId: 'serviceId',
  image_urls: 'image_urls',
  video_urls: 'video_urls',
  uploaded_at: 'uploaded_at'
};

exports.Prisma.TeamMemberScalarFieldEnum = {
  id: 'id',
  vendorId: 'vendorId',
  name: 'name',
  position: 'position',
  bio: 'bio',
  email: 'email',
  photo_url: 'photo_url',
  social_links: 'social_links',
  created_at: 'created_at'
};

exports.Prisma.PromotionScalarFieldEnum = {
  id: 'id',
  vendorId: 'vendorId',
  promotion_title: 'promotion_title',
  description: 'description',
  discount_percentage: 'discount_percentage',
  start_date: 'start_date',
  end_date: 'end_date',
  created_at: 'created_at'
};

exports.Prisma.FAQScalarFieldEnum = {
  id: 'id',
  vendorId: 'vendorId',
  question: 'question',
  answer: 'answer',
  created_at: 'created_at'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  vendorId: 'vendorId',
  serviceId: 'serviceId',
  reviewerId: 'reviewerId',
  comment: 'comment',
  type: 'type',
  created_at: 'created_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.ReviewType = exports.$Enums.ReviewType = {
  VENDOR: 'VENDOR',
  SERVICE: 'SERVICE'
};

exports.Prisma.ModelName = {
  Vendor: 'Vendor',
  Service: 'Service',
  Availability: 'Availability',
  Media: 'Media',
  TeamMember: 'TeamMember',
  Promotion: 'Promotion',
  FAQ: 'FAQ',
  Review: 'Review'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
