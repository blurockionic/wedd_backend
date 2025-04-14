
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
 * Prisma Client JS version: 6.2.1
 * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
 */
Prisma.prismaVersion = {
  client: "6.2.1",
  engine: "4123509d24aa4dede1e864b46351bf2790323b69"
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

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  refresh_Token: 'refresh_Token',
  password_hash: 'password_hash',
  googleUid: 'googleUid',
  resetPassword_Token: 'resetPassword_Token',
  profile_photo: 'profile_photo',
  user_name: 'user_name',
  phone_number: 'phone_number',
  role: 'role',
  wedding_date: 'wedding_date',
  wedding_location: 'wedding_location',
  created_at: 'created_at',
  is_verified: 'is_verified',
  updated_at: 'updated_at'
};

exports.Prisma.BookingScalarFieldEnum = {
  id: 'id',
  booking_id: 'booking_id',
  service_id: 'service_id',
  vendor_id: 'vendor_id',
  booking_date: 'booking_date',
  status: 'status',
  negotiated_price: 'negotiated_price',
  is_negotiable: 'is_negotiable',
  totalAmount: 'totalAmount',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CartScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  serviceId: 'serviceId',
  createdAt: 'createdAt'
};

exports.Prisma.ChecklistScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  items: 'items',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EventScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  eventName: 'eventName',
  eventDescription: 'eventDescription',
  eventDate: 'eventDate',
  eventStartTime: 'eventStartTime',
  eventEndTime: 'eventEndTime',
  eventBudget: 'eventBudget',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EventVendorsScalarFieldEnum = {
  id: 'id',
  eventId: 'eventId',
  serviceId: 'serviceId',
  createdAt: 'createdAt'
};

exports.Prisma.EventTaskScalarFieldEnum = {
  id: 'id',
  eventId: 'eventId',
  name: 'name',
  priority: 'priority',
  done: 'done',
  scheduleDate: 'scheduleDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubEventScalarFieldEnum = {
  id: 'id',
  eventId: 'eventId',
  subEventName: 'subEventName',
  subEventDescription: 'subEventDescription',
  subEventBudget: 'subEventBudget',
  subEventDate: 'subEventDate',
  subEventStartTime: 'subEventStartTime',
  subEventEndTime: 'subEventEndTime',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubEventVendorsScalarFieldEnum = {
  id: 'id',
  subEventId: 'subEventId',
  userId: 'userId',
  serviceId: 'serviceId',
  createdAt: 'createdAt'
};

exports.Prisma.SubEventTaskScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  subEventId: 'subEventId',
  items: 'items',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentDetailsScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  paymentId: 'paymentId',
  razorpayResponse: 'razorpayResponse',
  orderStatus: 'orderStatus',
  paymentStatus: 'paymentStatus',
  amount: 'amount',
  currency: 'currency',
  purchasedAt: 'purchasedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  userId: 'userId',
  templateId: 'templateId'
};

exports.Prisma.ReviewScalarFieldEnum = {
  review_id: 'review_id',
  vendor_id: 'vendor_id',
  id: 'id',
  rating: 'rating',
  review_text: 'review_text',
  created_at: 'created_at'
};

exports.Prisma.EventScheduleScalarFieldEnum = {
  event_id: 'event_id',
  vendor_id: 'vendor_id',
  media_id: 'media_id',
  event_name: 'event_name',
  event_start_date: 'event_start_date',
  event_end_date: 'event_end_date',
  event_location: 'event_location',
  description: 'description',
  created_at: 'created_at'
};

exports.Prisma.GuestScalarFieldEnum = {
  id: 'id',
  name: 'name',
  phone: 'phone',
  status: 'status',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InvitationTemplateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  userId: 'userId',
  jsonData: 'jsonData',
  price: 'price',
  categoryByAmount: 'categoryByAmount',
  categoryByMood: 'categoryByMood',
  categoryByRequirement: 'categoryByRequirement',
  additionalTags: 'additionalTags',
  designedBy: 'designedBy',
  thumbnailUrl: 'thumbnailUrl',
  rating: 'rating',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TemplateWatchHistoryScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  templateId: 'templateId',
  watchedAt: 'watchedAt'
};

exports.Prisma.UserDataTemplateScalarFieldEnum = {
  userId: 'userId',
  template_id: 'template_id',
  eventHeading: 'eventHeading',
  eventSubheading: 'eventSubheading',
  brideName: 'brideName',
  groomName: 'groomName',
  eventDate: 'eventDate',
  weddingTime: 'weddingTime',
  weddingLocation: 'weddingLocation',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.BlogScalarFieldEnum = {
  id: 'id',
  title: 'title',
  status: 'status',
  urlTitle: 'urlTitle',
  coverImage: 'coverImage',
  content: 'content',
  viewCount: 'viewCount',
  likes: 'likes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  authorId: 'authorId'
};

exports.Prisma.TagsScalarFieldEnum = {
  id: 'id',
  tagName: 'tagName'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  content: 'content',
  createdAt: 'createdAt',
  blogId: 'blogId',
  authorId: 'authorId'
};

exports.Prisma.LikedBlogScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  blogId: 'blogId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  USER: 'USER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

exports.GuestStatus = exports.$Enums.GuestStatus = {
  NOT_INVITED: 'NOT_INVITED',
  INVITED: 'INVITED'
};

exports.CategoryByAmount = exports.$Enums.CategoryByAmount = {
  FREE: 'FREE',
  PAID: 'PAID'
};

exports.CategoryByMood = exports.$Enums.CategoryByMood = {
  BIRTHDAY: 'BIRTHDAY',
  ROMANCE: 'ROMANCE',
  WEDDING: 'WEDDING',
  ANNIVERSARY: 'ANNIVERSARY',
  CORPORATE: 'CORPORATE',
  LOVE: 'LOVE',
  COUPLE: 'COUPLE'
};

exports.CategoryByRequirement = exports.$Enums.CategoryByRequirement = {
  HOT: 'HOT',
  POPULAR: 'POPULAR',
  LATEST: 'LATEST'
};

exports.TemplateStatus = exports.$Enums.TemplateStatus = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

exports.Status = exports.$Enums.Status = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED'
};

exports.Prisma.ModelName = {
  User: 'User',
  Booking: 'Booking',
  Cart: 'Cart',
  Checklist: 'Checklist',
  Event: 'Event',
  EventVendors: 'EventVendors',
  EventTask: 'EventTask',
  SubEvent: 'SubEvent',
  SubEventVendors: 'SubEventVendors',
  SubEventTask: 'SubEventTask',
  PaymentDetails: 'PaymentDetails',
  Review: 'Review',
  EventSchedule: 'EventSchedule',
  Guest: 'Guest',
  InvitationTemplate: 'InvitationTemplate',
  TemplateWatchHistory: 'TemplateWatchHistory',
  UserDataTemplate: 'UserDataTemplate',
  Blog: 'Blog',
  Tags: 'Tags',
  Comment: 'Comment',
  LikedBlog: 'LikedBlog'
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
