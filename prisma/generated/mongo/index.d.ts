
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Vendor
 * 
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Views
 * 
 */
export type Views = $Result.DefaultSelection<Prisma.$ViewsPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model EditorAsset
 * 
 */
export type EditorAsset = $Result.DefaultSelection<Prisma.$EditorAssetPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Counter
 * 
 */
export type Counter = $Result.DefaultSelection<Prisma.$CounterPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SubscriptionStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vendors
 * const vendors = await prisma.vendor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Vendors
   * const vendors = await prisma.vendor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.views`: Exposes CRUD operations for the **Views** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.views.findMany()
    * ```
    */
  get views(): Prisma.ViewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.editorAsset`: Exposes CRUD operations for the **EditorAsset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EditorAssets
    * const editorAssets = await prisma.editorAsset.findMany()
    * ```
    */
  get editorAsset(): Prisma.EditorAssetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.counter`: Exposes CRUD operations for the **Counter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Counters
    * const counters = await prisma.counter.findMany()
    * ```
    */
  get counter(): Prisma.CounterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Vendor: 'Vendor',
    Service: 'Service',
    Views: 'Views',
    Feedback: 'Feedback',
    Availability: 'Availability',
    Media: 'Media',
    EditorAsset: 'EditorAsset',
    TeamMember: 'TeamMember',
    Promotion: 'Promotion',
    Plan: 'Plan',
    Subscription: 'Subscription',
    Payment: 'Payment',
    Invoice: 'Invoice',
    Counter: 'Counter'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "vendor" | "service" | "views" | "feedback" | "availability" | "media" | "editorAsset" | "teamMember" | "promotion" | "plan" | "subscription" | "payment" | "invoice" | "counter"
      txIsolationLevel: never
    }
    model: {
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.VendorFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.VendorAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ServiceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ServiceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Views: {
        payload: Prisma.$ViewsPayload<ExtArgs>
        fields: Prisma.ViewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          findFirst: {
            args: Prisma.ViewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          findMany: {
            args: Prisma.ViewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>[]
          }
          create: {
            args: Prisma.ViewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          createMany: {
            args: Prisma.ViewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ViewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          update: {
            args: Prisma.ViewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          deleteMany: {
            args: Prisma.ViewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ViewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewsPayload>
          }
          aggregate: {
            args: Prisma.ViewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViews>
          }
          groupBy: {
            args: Prisma.ViewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ViewsFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ViewsAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ViewsCountArgs<ExtArgs>
            result: $Utils.Optional<ViewsCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FeedbackFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FeedbackAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AvailabilityFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AvailabilityAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MediaFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MediaAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      EditorAsset: {
        payload: Prisma.$EditorAssetPayload<ExtArgs>
        fields: Prisma.EditorAssetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EditorAssetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorAssetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EditorAssetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorAssetPayload>
          }
          findFirst: {
            args: Prisma.EditorAssetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorAssetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EditorAssetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorAssetPayload>
          }
          findMany: {
            args: Prisma.EditorAssetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorAssetPayload>[]
          }
          create: {
            args: Prisma.EditorAssetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorAssetPayload>
          }
          createMany: {
            args: Prisma.EditorAssetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EditorAssetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorAssetPayload>
          }
          update: {
            args: Prisma.EditorAssetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorAssetPayload>
          }
          deleteMany: {
            args: Prisma.EditorAssetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EditorAssetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EditorAssetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorAssetPayload>
          }
          aggregate: {
            args: Prisma.EditorAssetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEditorAsset>
          }
          groupBy: {
            args: Prisma.EditorAssetGroupByArgs<ExtArgs>
            result: $Utils.Optional<EditorAssetGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.EditorAssetFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.EditorAssetAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.EditorAssetCountArgs<ExtArgs>
            result: $Utils.Optional<EditorAssetCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TeamMemberFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TeamMemberAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PromotionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PromotionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlanFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlanAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SubscriptionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SubscriptionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PaymentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PaymentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.InvoiceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.InvoiceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Counter: {
        payload: Prisma.$CounterPayload<ExtArgs>
        fields: Prisma.CounterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CounterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CounterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          findFirst: {
            args: Prisma.CounterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CounterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          findMany: {
            args: Prisma.CounterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>[]
          }
          create: {
            args: Prisma.CounterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          createMany: {
            args: Prisma.CounterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CounterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          update: {
            args: Prisma.CounterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          deleteMany: {
            args: Prisma.CounterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CounterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CounterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounterPayload>
          }
          aggregate: {
            args: Prisma.CounterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCounter>
          }
          groupBy: {
            args: Prisma.CounterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CounterGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CounterFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CounterAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CounterCountArgs<ExtArgs>
            result: $Utils.Optional<CounterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    vendor?: VendorOmit
    service?: ServiceOmit
    views?: ViewsOmit
    feedback?: FeedbackOmit
    availability?: AvailabilityOmit
    media?: MediaOmit
    editorAsset?: EditorAssetOmit
    teamMember?: TeamMemberOmit
    promotion?: PromotionOmit
    plan?: PlanOmit
    subscription?: SubscriptionOmit
    payment?: PaymentOmit
    invoice?: InvoiceOmit
    counter?: CounterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    services: number
    promotions: number
    team_members: number
    payment: number
    invoices: number
    Subscription: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | VendorCountOutputTypeCountServicesArgs
    promotions?: boolean | VendorCountOutputTypeCountPromotionsArgs
    team_members?: boolean | VendorCountOutputTypeCountTeam_membersArgs
    payment?: boolean | VendorCountOutputTypeCountPaymentArgs
    invoices?: boolean | VendorCountOutputTypeCountInvoicesArgs
    Subscription?: boolean | VendorCountOutputTypeCountSubscriptionArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountPromotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountTeam_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    availabilities: number
    feedback: number
    media: number
    views: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | ServiceCountOutputTypeCountAvailabilitiesArgs
    feedback?: boolean | ServiceCountOutputTypeCountFeedbackArgs
    media?: boolean | ServiceCountOutputTypeCountMediaArgs
    views?: boolean | ServiceCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountFeedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewsWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    subscriptions: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | PlanCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    payments: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | SubscriptionCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    invoices: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    invoices?: boolean | PaymentCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    name: string | null
    business_name: string | null
    business_category: string | null
    license_number: string | null
    description: string | null
    country: string | null
    latitude: string | null
    longitude: string | null
    city: string | null
    email: string | null
    state: string | null
    password_hash: string | null
    phone_number: string | null
    created_at: Date | null
    updated_at: Date | null
    is_verified: boolean | null
    refresh_Token: string | null
    resetPassword_Token: string | null
    role: string | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    business_name: string | null
    business_category: string | null
    license_number: string | null
    description: string | null
    country: string | null
    latitude: string | null
    longitude: string | null
    city: string | null
    email: string | null
    state: string | null
    password_hash: string | null
    phone_number: string | null
    created_at: Date | null
    updated_at: Date | null
    is_verified: boolean | null
    refresh_Token: string | null
    resetPassword_Token: string | null
    role: string | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    name: number
    business_name: number
    business_category: number
    license_number: number
    service_type: number
    description: number
    logo_url: number
    country: number
    latitude: number
    longitude: number
    city: number
    email: number
    state: number
    password_hash: number
    phone_number: number
    social_networks: number
    faqs: number
    created_at: number
    updated_at: number
    is_verified: number
    refresh_Token: number
    resetPassword_Token: number
    role: number
    _all: number
  }


  export type VendorMinAggregateInputType = {
    id?: true
    name?: true
    business_name?: true
    business_category?: true
    license_number?: true
    description?: true
    country?: true
    latitude?: true
    longitude?: true
    city?: true
    email?: true
    state?: true
    password_hash?: true
    phone_number?: true
    created_at?: true
    updated_at?: true
    is_verified?: true
    refresh_Token?: true
    resetPassword_Token?: true
    role?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    name?: true
    business_name?: true
    business_category?: true
    license_number?: true
    description?: true
    country?: true
    latitude?: true
    longitude?: true
    city?: true
    email?: true
    state?: true
    password_hash?: true
    phone_number?: true
    created_at?: true
    updated_at?: true
    is_verified?: true
    refresh_Token?: true
    resetPassword_Token?: true
    role?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    name?: true
    business_name?: true
    business_category?: true
    license_number?: true
    service_type?: true
    description?: true
    logo_url?: true
    country?: true
    latitude?: true
    longitude?: true
    city?: true
    email?: true
    state?: true
    password_hash?: true
    phone_number?: true
    social_networks?: true
    faqs?: true
    created_at?: true
    updated_at?: true
    is_verified?: true
    refresh_Token?: true
    resetPassword_Token?: true
    role?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: string
    name: string
    business_name: string
    business_category: string
    license_number: string | null
    service_type: string[]
    description: string | null
    logo_url: JsonValue | null
    country: string | null
    latitude: string | null
    longitude: string | null
    city: string | null
    email: string
    state: string | null
    password_hash: string
    phone_number: string
    social_networks: JsonValue | null
    faqs: JsonValue | null
    created_at: Date
    updated_at: Date
    is_verified: boolean
    refresh_Token: string | null
    resetPassword_Token: string | null
    role: string
    _count: VendorCountAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    business_name?: boolean
    business_category?: boolean
    license_number?: boolean
    service_type?: boolean
    description?: boolean
    logo_url?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    email?: boolean
    state?: boolean
    password_hash?: boolean
    phone_number?: boolean
    social_networks?: boolean
    faqs?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_verified?: boolean
    refresh_Token?: boolean
    resetPassword_Token?: boolean
    role?: boolean
    services?: boolean | Vendor$servicesArgs<ExtArgs>
    promotions?: boolean | Vendor$promotionsArgs<ExtArgs>
    team_members?: boolean | Vendor$team_membersArgs<ExtArgs>
    payment?: boolean | Vendor$paymentArgs<ExtArgs>
    invoices?: boolean | Vendor$invoicesArgs<ExtArgs>
    Subscription?: boolean | Vendor$SubscriptionArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>



  export type VendorSelectScalar = {
    id?: boolean
    name?: boolean
    business_name?: boolean
    business_category?: boolean
    license_number?: boolean
    service_type?: boolean
    description?: boolean
    logo_url?: boolean
    country?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    email?: boolean
    state?: boolean
    password_hash?: boolean
    phone_number?: boolean
    social_networks?: boolean
    faqs?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_verified?: boolean
    refresh_Token?: boolean
    resetPassword_Token?: boolean
    role?: boolean
  }

  export type VendorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "business_name" | "business_category" | "license_number" | "service_type" | "description" | "logo_url" | "country" | "latitude" | "longitude" | "city" | "email" | "state" | "password_hash" | "phone_number" | "social_networks" | "faqs" | "created_at" | "updated_at" | "is_verified" | "refresh_Token" | "resetPassword_Token" | "role", ExtArgs["result"]["vendor"]>
  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Vendor$servicesArgs<ExtArgs>
    promotions?: boolean | Vendor$promotionsArgs<ExtArgs>
    team_members?: boolean | Vendor$team_membersArgs<ExtArgs>
    payment?: boolean | Vendor$paymentArgs<ExtArgs>
    invoices?: boolean | Vendor$invoicesArgs<ExtArgs>
    Subscription?: boolean | Vendor$SubscriptionArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
      promotions: Prisma.$PromotionPayload<ExtArgs>[]
      team_members: Prisma.$TeamMemberPayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
      Subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      business_name: string
      business_category: string
      license_number: string | null
      service_type: string[]
      description: string | null
      logo_url: Prisma.JsonValue | null
      country: string | null
      latitude: string | null
      longitude: string | null
      city: string | null
      email: string
      state: string | null
      password_hash: string
      phone_number: string
      social_networks: Prisma.JsonValue | null
      faqs: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
      is_verified: boolean
      refresh_Token: string | null
      resetPassword_Token: string | null
      role: string
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Vendors that matches the filter.
     * @param {VendorFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const vendor = await prisma.vendor.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: VendorFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Vendor.
     * @param {VendorAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const vendor = await prisma.vendor.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: VendorAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Vendor$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    promotions<T extends Vendor$promotionsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$promotionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    team_members<T extends Vendor$team_membersArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$team_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    payment<T extends Vendor$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$paymentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    invoices<T extends Vendor$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    Subscription<T extends Vendor$SubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$SubscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendor model
   */ 
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'String'>
    readonly name: FieldRef<"Vendor", 'String'>
    readonly business_name: FieldRef<"Vendor", 'String'>
    readonly business_category: FieldRef<"Vendor", 'String'>
    readonly license_number: FieldRef<"Vendor", 'String'>
    readonly service_type: FieldRef<"Vendor", 'String[]'>
    readonly description: FieldRef<"Vendor", 'String'>
    readonly logo_url: FieldRef<"Vendor", 'Json'>
    readonly country: FieldRef<"Vendor", 'String'>
    readonly latitude: FieldRef<"Vendor", 'String'>
    readonly longitude: FieldRef<"Vendor", 'String'>
    readonly city: FieldRef<"Vendor", 'String'>
    readonly email: FieldRef<"Vendor", 'String'>
    readonly state: FieldRef<"Vendor", 'String'>
    readonly password_hash: FieldRef<"Vendor", 'String'>
    readonly phone_number: FieldRef<"Vendor", 'String'>
    readonly social_networks: FieldRef<"Vendor", 'Json'>
    readonly faqs: FieldRef<"Vendor", 'Json'>
    readonly created_at: FieldRef<"Vendor", 'DateTime'>
    readonly updated_at: FieldRef<"Vendor", 'DateTime'>
    readonly is_verified: FieldRef<"Vendor", 'Boolean'>
    readonly refresh_Token: FieldRef<"Vendor", 'String'>
    readonly resetPassword_Token: FieldRef<"Vendor", 'String'>
    readonly role: FieldRef<"Vendor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
  }

  /**
   * Vendor findRaw
   */
  export type VendorFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vendor aggregateRaw
   */
  export type VendorAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Vendor.services
   */
  export type Vendor$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Vendor.promotions
   */
  export type Vendor$promotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    cursor?: PromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Vendor.team_members
   */
  export type Vendor$team_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * Vendor.payment
   */
  export type Vendor$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Vendor.invoices
   */
  export type Vendor$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Vendor.Subscription
   */
  export type Vendor$SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    min_price: number | null
    max_price: number | null
    price: number | null
    rating: number | null
  }

  export type ServiceSumAggregateOutputType = {
    min_price: number | null
    max_price: number | null
    price: number | null
    rating: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    service_name: string | null
    description: string | null
    min_price: number | null
    max_price: number | null
    city: string | null
    state: string | null
    price: number | null
    service_type: string | null
    service_category: string | null
    service_unit: string | null
    status: string | null
    rating: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    service_name: string | null
    description: string | null
    min_price: number | null
    max_price: number | null
    city: string | null
    state: string | null
    price: number | null
    service_type: string | null
    service_category: string | null
    service_unit: string | null
    status: string | null
    rating: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    vendorId: number
    service_name: number
    description: number
    min_price: number
    max_price: number
    city: number
    state: number
    price: number
    service_type: number
    service_category: number
    service_unit: number
    status: number
    rating: number
    faqs: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    min_price?: true
    max_price?: true
    price?: true
    rating?: true
  }

  export type ServiceSumAggregateInputType = {
    min_price?: true
    max_price?: true
    price?: true
    rating?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    vendorId?: true
    service_name?: true
    description?: true
    min_price?: true
    max_price?: true
    city?: true
    state?: true
    price?: true
    service_type?: true
    service_category?: true
    service_unit?: true
    status?: true
    rating?: true
    created_at?: true
    updated_at?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    vendorId?: true
    service_name?: true
    description?: true
    min_price?: true
    max_price?: true
    city?: true
    state?: true
    price?: true
    service_type?: true
    service_category?: true
    service_unit?: true
    status?: true
    rating?: true
    created_at?: true
    updated_at?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    vendorId?: true
    service_name?: true
    description?: true
    min_price?: true
    max_price?: true
    city?: true
    state?: true
    price?: true
    service_type?: true
    service_category?: true
    service_unit?: true
    status?: true
    rating?: true
    faqs?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    vendorId: string
    service_name: string
    description: string | null
    min_price: number | null
    max_price: number | null
    city: string | null
    state: string | null
    price: number | null
    service_type: string
    service_category: string | null
    service_unit: string | null
    status: string
    rating: number
    faqs: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    service_name?: boolean
    description?: boolean
    min_price?: boolean
    max_price?: boolean
    city?: boolean
    state?: boolean
    price?: boolean
    service_type?: boolean
    service_category?: boolean
    service_unit?: boolean
    status?: boolean
    rating?: boolean
    faqs?: boolean
    created_at?: boolean
    updated_at?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    availabilities?: boolean | Service$availabilitiesArgs<ExtArgs>
    feedback?: boolean | Service$feedbackArgs<ExtArgs>
    media?: boolean | Service$mediaArgs<ExtArgs>
    views?: boolean | Service$viewsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>



  export type ServiceSelectScalar = {
    id?: boolean
    vendorId?: boolean
    service_name?: boolean
    description?: boolean
    min_price?: boolean
    max_price?: boolean
    city?: boolean
    state?: boolean
    price?: boolean
    service_type?: boolean
    service_category?: boolean
    service_unit?: boolean
    status?: boolean
    rating?: boolean
    faqs?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "service_name" | "description" | "min_price" | "max_price" | "city" | "state" | "price" | "service_type" | "service_category" | "service_unit" | "status" | "rating" | "faqs" | "created_at" | "updated_at", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    availabilities?: boolean | Service$availabilitiesArgs<ExtArgs>
    feedback?: boolean | Service$feedbackArgs<ExtArgs>
    media?: boolean | Service$mediaArgs<ExtArgs>
    views?: boolean | Service$viewsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      availabilities: Prisma.$AvailabilityPayload<ExtArgs>[]
      feedback: Prisma.$FeedbackPayload<ExtArgs>[]
      media: Prisma.$MediaPayload<ExtArgs>[]
      views: Prisma.$ViewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      service_name: string
      description: string | null
      min_price: number | null
      max_price: number | null
      city: string | null
      state: string | null
      price: number | null
      service_type: string
      service_category: string | null
      service_unit: string | null
      status: string
      rating: number
      faqs: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Services that matches the filter.
     * @param {ServiceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const service = await prisma.service.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ServiceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Service.
     * @param {ServiceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const service = await prisma.service.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ServiceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    availabilities<T extends Service$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Service$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    feedback<T extends Service$feedbackArgs<ExtArgs> = {}>(args?: Subset<T, Service$feedbackArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    media<T extends Service$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Service$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    views<T extends Service$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Service$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */ 
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly vendorId: FieldRef<"Service", 'String'>
    readonly service_name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly min_price: FieldRef<"Service", 'Float'>
    readonly max_price: FieldRef<"Service", 'Float'>
    readonly city: FieldRef<"Service", 'String'>
    readonly state: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly service_type: FieldRef<"Service", 'String'>
    readonly service_category: FieldRef<"Service", 'String'>
    readonly service_unit: FieldRef<"Service", 'String'>
    readonly status: FieldRef<"Service", 'String'>
    readonly rating: FieldRef<"Service", 'Float'>
    readonly faqs: FieldRef<"Service", 'Json'>
    readonly created_at: FieldRef<"Service", 'DateTime'>
    readonly updated_at: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
  }

  /**
   * Service findRaw
   */
  export type ServiceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Service aggregateRaw
   */
  export type ServiceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Service.availabilities
   */
  export type Service$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Service.feedback
   */
  export type Service$feedbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Service.media
   */
  export type Service$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Service.views
   */
  export type Service$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    where?: ViewsWhereInput
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    cursor?: ViewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Views
   */

  export type AggregateViews = {
    _count: ViewsCountAggregateOutputType | null
    _avg: ViewsAvgAggregateOutputType | null
    _sum: ViewsSumAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  export type ViewsAvgAggregateOutputType = {
    viewCount: number | null
  }

  export type ViewsSumAggregateOutputType = {
    viewCount: number | null
  }

  export type ViewsMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    userId: string | null
    viewCount: number | null
    lead: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ViewsMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    userId: string | null
    viewCount: number | null
    lead: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ViewsCountAggregateOutputType = {
    id: number
    serviceId: number
    userId: number
    viewCount: number
    lead: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ViewsAvgAggregateInputType = {
    viewCount?: true
  }

  export type ViewsSumAggregateInputType = {
    viewCount?: true
  }

  export type ViewsMinAggregateInputType = {
    id?: true
    serviceId?: true
    userId?: true
    viewCount?: true
    lead?: true
    created_at?: true
    updated_at?: true
  }

  export type ViewsMaxAggregateInputType = {
    id?: true
    serviceId?: true
    userId?: true
    viewCount?: true
    lead?: true
    created_at?: true
    updated_at?: true
  }

  export type ViewsCountAggregateInputType = {
    id?: true
    serviceId?: true
    userId?: true
    viewCount?: true
    lead?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to aggregate.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Views
    **/
    _count?: true | ViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewsMaxAggregateInputType
  }

  export type GetViewsAggregateType<T extends ViewsAggregateArgs> = {
        [P in keyof T & keyof AggregateViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViews[P]>
      : GetScalarType<T[P], AggregateViews[P]>
  }




  export type ViewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewsWhereInput
    orderBy?: ViewsOrderByWithAggregationInput | ViewsOrderByWithAggregationInput[]
    by: ViewsScalarFieldEnum[] | ViewsScalarFieldEnum
    having?: ViewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewsCountAggregateInputType | true
    _avg?: ViewsAvgAggregateInputType
    _sum?: ViewsSumAggregateInputType
    _min?: ViewsMinAggregateInputType
    _max?: ViewsMaxAggregateInputType
  }

  export type ViewsGroupByOutputType = {
    id: string
    serviceId: string
    userId: string
    viewCount: number
    lead: boolean
    created_at: Date
    updated_at: Date
    _count: ViewsCountAggregateOutputType | null
    _avg: ViewsAvgAggregateOutputType | null
    _sum: ViewsSumAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  type GetViewsGroupByPayload<T extends ViewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewsGroupByOutputType[P]>
            : GetScalarType<T[P], ViewsGroupByOutputType[P]>
        }
      >
    >


  export type ViewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    userId?: boolean
    viewCount?: boolean
    lead?: boolean
    created_at?: boolean
    updated_at?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>



  export type ViewsSelectScalar = {
    id?: boolean
    serviceId?: boolean
    userId?: boolean
    viewCount?: boolean
    lead?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ViewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "userId" | "viewCount" | "lead" | "created_at" | "updated_at", ExtArgs["result"]["views"]>
  export type ViewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $ViewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Views"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      userId: string
      viewCount: number
      lead: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["views"]>
    composites: {}
  }

  type ViewsGetPayload<S extends boolean | null | undefined | ViewsDefaultArgs> = $Result.GetResult<Prisma.$ViewsPayload, S>

  type ViewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewsCountAggregateInputType | true
    }

  export interface ViewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Views'], meta: { name: 'Views' } }
    /**
     * Find zero or one Views that matches the filter.
     * @param {ViewsFindUniqueArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewsFindUniqueArgs>(args: SelectSubset<T, ViewsFindUniqueArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Views that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewsFindUniqueOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindFirstArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewsFindFirstArgs>(args?: SelectSubset<T, ViewsFindFirstArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Views that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindFirstOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.views.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.views.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewsWithIdOnly = await prisma.views.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewsFindManyArgs>(args?: SelectSubset<T, ViewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Views.
     * @param {ViewsCreateArgs} args - Arguments to create a Views.
     * @example
     * // Create one Views
     * const Views = await prisma.views.create({
     *   data: {
     *     // ... data to create a Views
     *   }
     * })
     * 
     */
    create<T extends ViewsCreateArgs>(args: SelectSubset<T, ViewsCreateArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Views.
     * @param {ViewsCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const views = await prisma.views.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewsCreateManyArgs>(args?: SelectSubset<T, ViewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Views.
     * @param {ViewsDeleteArgs} args - Arguments to delete one Views.
     * @example
     * // Delete one Views
     * const Views = await prisma.views.delete({
     *   where: {
     *     // ... filter to delete one Views
     *   }
     * })
     * 
     */
    delete<T extends ViewsDeleteArgs>(args: SelectSubset<T, ViewsDeleteArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Views.
     * @param {ViewsUpdateArgs} args - Arguments to update one Views.
     * @example
     * // Update one Views
     * const views = await prisma.views.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewsUpdateArgs>(args: SelectSubset<T, ViewsUpdateArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Views.
     * @param {ViewsDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.views.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewsDeleteManyArgs>(args?: SelectSubset<T, ViewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const views = await prisma.views.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewsUpdateManyArgs>(args: SelectSubset<T, ViewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Views.
     * @param {ViewsUpsertArgs} args - Arguments to update or create a Views.
     * @example
     * // Update or create a Views
     * const views = await prisma.views.upsert({
     *   create: {
     *     // ... data to create a Views
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Views we want to update
     *   }
     * })
     */
    upsert<T extends ViewsUpsertArgs>(args: SelectSubset<T, ViewsUpsertArgs<ExtArgs>>): Prisma__ViewsClient<$Result.GetResult<Prisma.$ViewsPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Views that matches the filter.
     * @param {ViewsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const views = await prisma.views.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ViewsFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Views.
     * @param {ViewsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const views = await prisma.views.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ViewsAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.views.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewsCountArgs>(
      args?: Subset<T, ViewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewsAggregateArgs>(args: Subset<T, ViewsAggregateArgs>): Prisma.PrismaPromise<GetViewsAggregateType<T>>

    /**
     * Group by Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewsGroupByArgs['orderBy'] }
        : { orderBy?: ViewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Views model
   */
  readonly fields: ViewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Views.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Views model
   */ 
  interface ViewsFieldRefs {
    readonly id: FieldRef<"Views", 'String'>
    readonly serviceId: FieldRef<"Views", 'String'>
    readonly userId: FieldRef<"Views", 'String'>
    readonly viewCount: FieldRef<"Views", 'Int'>
    readonly lead: FieldRef<"Views", 'Boolean'>
    readonly created_at: FieldRef<"Views", 'DateTime'>
    readonly updated_at: FieldRef<"Views", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Views findUnique
   */
  export type ViewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views findUniqueOrThrow
   */
  export type ViewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views findFirst
   */
  export type ViewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views findFirstOrThrow
   */
  export type ViewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views findMany
   */
  export type ViewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewsOrderByWithRelationInput | ViewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     */
    cursor?: ViewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }

  /**
   * Views create
   */
  export type ViewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Views.
     */
    data: XOR<ViewsCreateInput, ViewsUncheckedCreateInput>
  }

  /**
   * Views createMany
   */
  export type ViewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Views.
     */
    data: ViewsCreateManyInput | ViewsCreateManyInput[]
  }

  /**
   * Views update
   */
  export type ViewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Views.
     */
    data: XOR<ViewsUpdateInput, ViewsUncheckedUpdateInput>
    /**
     * Choose, which Views to update.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views updateMany
   */
  export type ViewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Views.
     */
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewsWhereInput
  }

  /**
   * Views upsert
   */
  export type ViewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Views to update in case it exists.
     */
    where: ViewsWhereUniqueInput
    /**
     * In case the Views found by the `where` argument doesn't exist, create a new Views with this data.
     */
    create: XOR<ViewsCreateInput, ViewsUncheckedCreateInput>
    /**
     * In case the Views was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewsUpdateInput, ViewsUncheckedUpdateInput>
  }

  /**
   * Views delete
   */
  export type ViewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
    /**
     * Filter which Views to delete.
     */
    where: ViewsWhereUniqueInput
  }

  /**
   * Views deleteMany
   */
  export type ViewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to delete
     */
    where?: ViewsWhereInput
  }

  /**
   * Views findRaw
   */
  export type ViewsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Views aggregateRaw
   */
  export type ViewsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Views without action
   */
  export type ViewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Views
     */
    select?: ViewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Views
     */
    omit?: ViewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewsInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    rating: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    rating: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: string | null
    userId: string | null
    serviceId: string | null
    comment: string | null
    rating: number | null
    user_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    serviceId: string | null
    comment: string | null
    rating: number | null
    user_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    userId: number
    serviceId: number
    comment: number
    rating: number
    user_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    rating?: true
  }

  export type FeedbackSumAggregateInputType = {
    rating?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    comment?: true
    rating?: true
    user_name?: true
    created_at?: true
    updated_at?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    comment?: true
    rating?: true
    user_name?: true
    created_at?: true
    updated_at?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    userId?: true
    serviceId?: true
    comment?: true
    rating?: true
    user_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: string
    userId: string
    serviceId: string
    comment: string
    rating: number
    user_name: string
    created_at: Date
    updated_at: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    comment?: boolean
    rating?: boolean
    user_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>



  export type FeedbackSelectScalar = {
    id?: boolean
    userId?: boolean
    serviceId?: boolean
    comment?: boolean
    rating?: boolean
    user_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "serviceId" | "comment" | "rating" | "user_name" | "created_at" | "updated_at", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      serviceId: string
      comment: string
      rating: number
      user_name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * @param {FeedbackFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const feedback = await prisma.feedback.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: FeedbackFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Feedback.
     * @param {FeedbackAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const feedback = await prisma.feedback.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FeedbackAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */ 
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'String'>
    readonly userId: FieldRef<"Feedback", 'String'>
    readonly serviceId: FieldRef<"Feedback", 'String'>
    readonly comment: FieldRef<"Feedback", 'String'>
    readonly rating: FieldRef<"Feedback", 'Float'>
    readonly user_name: FieldRef<"Feedback", 'String'>
    readonly created_at: FieldRef<"Feedback", 'DateTime'>
    readonly updated_at: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
  }

  /**
   * Feedback findRaw
   */
  export type FeedbackFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Feedback aggregateRaw
   */
  export type FeedbackAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    available_date: Date | null
    wedding_date: Date | null
    is_available: boolean | null
    created_at: Date | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    available_date: Date | null
    wedding_date: Date | null
    is_available: boolean | null
    created_at: Date | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    serviceId: number
    available_date: number
    wedding_date: number
    is_available: number
    created_at: number
    _all: number
  }


  export type AvailabilityMinAggregateInputType = {
    id?: true
    serviceId?: true
    available_date?: true
    wedding_date?: true
    is_available?: true
    created_at?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    serviceId?: true
    available_date?: true
    wedding_date?: true
    is_available?: true
    created_at?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    serviceId?: true
    available_date?: true
    wedding_date?: true
    is_available?: true
    created_at?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    serviceId: string
    available_date: Date
    wedding_date: Date
    is_available: boolean
    created_at: Date
    _count: AvailabilityCountAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    available_date?: boolean
    wedding_date?: boolean
    is_available?: boolean
    created_at?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>



  export type AvailabilitySelectScalar = {
    id?: boolean
    serviceId?: boolean
    available_date?: boolean
    wedding_date?: boolean
    is_available?: boolean
    created_at?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "available_date" | "wedding_date" | "is_available" | "created_at", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      available_date: Date
      wedding_date: Date
      is_available: boolean
      created_at: Date
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * @param {AvailabilityFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const availability = await prisma.availability.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AvailabilityFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Availability.
     * @param {AvailabilityAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const availability = await prisma.availability.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AvailabilityAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Availability model
   */ 
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly serviceId: FieldRef<"Availability", 'String'>
    readonly available_date: FieldRef<"Availability", 'DateTime'>
    readonly wedding_date: FieldRef<"Availability", 'DateTime'>
    readonly is_available: FieldRef<"Availability", 'Boolean'>
    readonly created_at: FieldRef<"Availability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
  }

  /**
   * Availability findRaw
   */
  export type AvailabilityFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Availability aggregateRaw
   */
  export type AvailabilityAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    uploaded_at: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    uploaded_at: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    serviceId: number
    image_urls: number
    video_urls: number
    uploaded_at: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    serviceId?: true
    uploaded_at?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    serviceId?: true
    uploaded_at?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    serviceId?: true
    image_urls?: true
    video_urls?: true
    uploaded_at?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    serviceId: string
    image_urls: JsonValue
    video_urls: JsonValue
    uploaded_at: Date
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    image_urls?: boolean
    video_urls?: boolean
    uploaded_at?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>



  export type MediaSelectScalar = {
    id?: boolean
    serviceId?: boolean
    image_urls?: boolean
    video_urls?: boolean
    uploaded_at?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceId" | "image_urls" | "video_urls" | "uploaded_at", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      image_urls: Prisma.JsonValue
      video_urls: Prisma.JsonValue
      uploaded_at: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Media that matches the filter.
     * @param {MediaFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const media = await prisma.media.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MediaFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Media.
     * @param {MediaAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const media = await prisma.media.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MediaAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Media model
   */ 
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly serviceId: FieldRef<"Media", 'String'>
    readonly image_urls: FieldRef<"Media", 'Json'>
    readonly video_urls: FieldRef<"Media", 'Json'>
    readonly uploaded_at: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
  }

  /**
   * Media findRaw
   */
  export type MediaFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Media aggregateRaw
   */
  export type MediaAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model EditorAsset
   */

  export type AggregateEditorAsset = {
    _count: EditorAssetCountAggregateOutputType | null
    _min: EditorAssetMinAggregateOutputType | null
    _max: EditorAssetMaxAggregateOutputType | null
  }

  export type EditorAssetMinAggregateOutputType = {
    id: string | null
    userId: string | null
    uploadedBy: string | null
    type: string | null
    public_id: string | null
    url: string | null
    preview_url: string | null
    asset_folder: string | null
    etag: string | null
    createdAt: Date | null
    name: string | null
  }

  export type EditorAssetMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    uploadedBy: string | null
    type: string | null
    public_id: string | null
    url: string | null
    preview_url: string | null
    asset_folder: string | null
    etag: string | null
    createdAt: Date | null
    name: string | null
  }

  export type EditorAssetCountAggregateOutputType = {
    id: number
    userId: number
    uploadedBy: number
    type: number
    public_id: number
    url: number
    preview_url: number
    tags: number
    asset_folder: number
    etag: number
    createdAt: number
    name: number
    _all: number
  }


  export type EditorAssetMinAggregateInputType = {
    id?: true
    userId?: true
    uploadedBy?: true
    type?: true
    public_id?: true
    url?: true
    preview_url?: true
    asset_folder?: true
    etag?: true
    createdAt?: true
    name?: true
  }

  export type EditorAssetMaxAggregateInputType = {
    id?: true
    userId?: true
    uploadedBy?: true
    type?: true
    public_id?: true
    url?: true
    preview_url?: true
    asset_folder?: true
    etag?: true
    createdAt?: true
    name?: true
  }

  export type EditorAssetCountAggregateInputType = {
    id?: true
    userId?: true
    uploadedBy?: true
    type?: true
    public_id?: true
    url?: true
    preview_url?: true
    tags?: true
    asset_folder?: true
    etag?: true
    createdAt?: true
    name?: true
    _all?: true
  }

  export type EditorAssetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EditorAsset to aggregate.
     */
    where?: EditorAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditorAssets to fetch.
     */
    orderBy?: EditorAssetOrderByWithRelationInput | EditorAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EditorAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditorAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditorAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EditorAssets
    **/
    _count?: true | EditorAssetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EditorAssetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EditorAssetMaxAggregateInputType
  }

  export type GetEditorAssetAggregateType<T extends EditorAssetAggregateArgs> = {
        [P in keyof T & keyof AggregateEditorAsset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEditorAsset[P]>
      : GetScalarType<T[P], AggregateEditorAsset[P]>
  }




  export type EditorAssetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditorAssetWhereInput
    orderBy?: EditorAssetOrderByWithAggregationInput | EditorAssetOrderByWithAggregationInput[]
    by: EditorAssetScalarFieldEnum[] | EditorAssetScalarFieldEnum
    having?: EditorAssetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EditorAssetCountAggregateInputType | true
    _min?: EditorAssetMinAggregateInputType
    _max?: EditorAssetMaxAggregateInputType
  }

  export type EditorAssetGroupByOutputType = {
    id: string
    userId: string | null
    uploadedBy: string
    type: string
    public_id: string
    url: string
    preview_url: string | null
    tags: string[]
    asset_folder: string | null
    etag: string
    createdAt: Date
    name: string | null
    _count: EditorAssetCountAggregateOutputType | null
    _min: EditorAssetMinAggregateOutputType | null
    _max: EditorAssetMaxAggregateOutputType | null
  }

  type GetEditorAssetGroupByPayload<T extends EditorAssetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EditorAssetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EditorAssetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EditorAssetGroupByOutputType[P]>
            : GetScalarType<T[P], EditorAssetGroupByOutputType[P]>
        }
      >
    >


  export type EditorAssetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    uploadedBy?: boolean
    type?: boolean
    public_id?: boolean
    url?: boolean
    preview_url?: boolean
    tags?: boolean
    asset_folder?: boolean
    etag?: boolean
    createdAt?: boolean
    name?: boolean
  }, ExtArgs["result"]["editorAsset"]>



  export type EditorAssetSelectScalar = {
    id?: boolean
    userId?: boolean
    uploadedBy?: boolean
    type?: boolean
    public_id?: boolean
    url?: boolean
    preview_url?: boolean
    tags?: boolean
    asset_folder?: boolean
    etag?: boolean
    createdAt?: boolean
    name?: boolean
  }

  export type EditorAssetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "uploadedBy" | "type" | "public_id" | "url" | "preview_url" | "tags" | "asset_folder" | "etag" | "createdAt" | "name", ExtArgs["result"]["editorAsset"]>

  export type $EditorAssetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EditorAsset"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      uploadedBy: string
      type: string
      public_id: string
      url: string
      preview_url: string | null
      tags: string[]
      asset_folder: string | null
      etag: string
      createdAt: Date
      name: string | null
    }, ExtArgs["result"]["editorAsset"]>
    composites: {}
  }

  type EditorAssetGetPayload<S extends boolean | null | undefined | EditorAssetDefaultArgs> = $Result.GetResult<Prisma.$EditorAssetPayload, S>

  type EditorAssetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EditorAssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EditorAssetCountAggregateInputType | true
    }

  export interface EditorAssetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EditorAsset'], meta: { name: 'EditorAsset' } }
    /**
     * Find zero or one EditorAsset that matches the filter.
     * @param {EditorAssetFindUniqueArgs} args - Arguments to find a EditorAsset
     * @example
     * // Get one EditorAsset
     * const editorAsset = await prisma.editorAsset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EditorAssetFindUniqueArgs>(args: SelectSubset<T, EditorAssetFindUniqueArgs<ExtArgs>>): Prisma__EditorAssetClient<$Result.GetResult<Prisma.$EditorAssetPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one EditorAsset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EditorAssetFindUniqueOrThrowArgs} args - Arguments to find a EditorAsset
     * @example
     * // Get one EditorAsset
     * const editorAsset = await prisma.editorAsset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EditorAssetFindUniqueOrThrowArgs>(args: SelectSubset<T, EditorAssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EditorAssetClient<$Result.GetResult<Prisma.$EditorAssetPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first EditorAsset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorAssetFindFirstArgs} args - Arguments to find a EditorAsset
     * @example
     * // Get one EditorAsset
     * const editorAsset = await prisma.editorAsset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EditorAssetFindFirstArgs>(args?: SelectSubset<T, EditorAssetFindFirstArgs<ExtArgs>>): Prisma__EditorAssetClient<$Result.GetResult<Prisma.$EditorAssetPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first EditorAsset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorAssetFindFirstOrThrowArgs} args - Arguments to find a EditorAsset
     * @example
     * // Get one EditorAsset
     * const editorAsset = await prisma.editorAsset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EditorAssetFindFirstOrThrowArgs>(args?: SelectSubset<T, EditorAssetFindFirstOrThrowArgs<ExtArgs>>): Prisma__EditorAssetClient<$Result.GetResult<Prisma.$EditorAssetPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more EditorAssets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorAssetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EditorAssets
     * const editorAssets = await prisma.editorAsset.findMany()
     * 
     * // Get first 10 EditorAssets
     * const editorAssets = await prisma.editorAsset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const editorAssetWithIdOnly = await prisma.editorAsset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EditorAssetFindManyArgs>(args?: SelectSubset<T, EditorAssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorAssetPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a EditorAsset.
     * @param {EditorAssetCreateArgs} args - Arguments to create a EditorAsset.
     * @example
     * // Create one EditorAsset
     * const EditorAsset = await prisma.editorAsset.create({
     *   data: {
     *     // ... data to create a EditorAsset
     *   }
     * })
     * 
     */
    create<T extends EditorAssetCreateArgs>(args: SelectSubset<T, EditorAssetCreateArgs<ExtArgs>>): Prisma__EditorAssetClient<$Result.GetResult<Prisma.$EditorAssetPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many EditorAssets.
     * @param {EditorAssetCreateManyArgs} args - Arguments to create many EditorAssets.
     * @example
     * // Create many EditorAssets
     * const editorAsset = await prisma.editorAsset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EditorAssetCreateManyArgs>(args?: SelectSubset<T, EditorAssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EditorAsset.
     * @param {EditorAssetDeleteArgs} args - Arguments to delete one EditorAsset.
     * @example
     * // Delete one EditorAsset
     * const EditorAsset = await prisma.editorAsset.delete({
     *   where: {
     *     // ... filter to delete one EditorAsset
     *   }
     * })
     * 
     */
    delete<T extends EditorAssetDeleteArgs>(args: SelectSubset<T, EditorAssetDeleteArgs<ExtArgs>>): Prisma__EditorAssetClient<$Result.GetResult<Prisma.$EditorAssetPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one EditorAsset.
     * @param {EditorAssetUpdateArgs} args - Arguments to update one EditorAsset.
     * @example
     * // Update one EditorAsset
     * const editorAsset = await prisma.editorAsset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EditorAssetUpdateArgs>(args: SelectSubset<T, EditorAssetUpdateArgs<ExtArgs>>): Prisma__EditorAssetClient<$Result.GetResult<Prisma.$EditorAssetPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more EditorAssets.
     * @param {EditorAssetDeleteManyArgs} args - Arguments to filter EditorAssets to delete.
     * @example
     * // Delete a few EditorAssets
     * const { count } = await prisma.editorAsset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EditorAssetDeleteManyArgs>(args?: SelectSubset<T, EditorAssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EditorAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorAssetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EditorAssets
     * const editorAsset = await prisma.editorAsset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EditorAssetUpdateManyArgs>(args: SelectSubset<T, EditorAssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EditorAsset.
     * @param {EditorAssetUpsertArgs} args - Arguments to update or create a EditorAsset.
     * @example
     * // Update or create a EditorAsset
     * const editorAsset = await prisma.editorAsset.upsert({
     *   create: {
     *     // ... data to create a EditorAsset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EditorAsset we want to update
     *   }
     * })
     */
    upsert<T extends EditorAssetUpsertArgs>(args: SelectSubset<T, EditorAssetUpsertArgs<ExtArgs>>): Prisma__EditorAssetClient<$Result.GetResult<Prisma.$EditorAssetPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more EditorAssets that matches the filter.
     * @param {EditorAssetFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const editorAsset = await prisma.editorAsset.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: EditorAssetFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a EditorAsset.
     * @param {EditorAssetAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const editorAsset = await prisma.editorAsset.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: EditorAssetAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of EditorAssets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorAssetCountArgs} args - Arguments to filter EditorAssets to count.
     * @example
     * // Count the number of EditorAssets
     * const count = await prisma.editorAsset.count({
     *   where: {
     *     // ... the filter for the EditorAssets we want to count
     *   }
     * })
    **/
    count<T extends EditorAssetCountArgs>(
      args?: Subset<T, EditorAssetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EditorAssetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EditorAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorAssetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EditorAssetAggregateArgs>(args: Subset<T, EditorAssetAggregateArgs>): Prisma.PrismaPromise<GetEditorAssetAggregateType<T>>

    /**
     * Group by EditorAsset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorAssetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EditorAssetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EditorAssetGroupByArgs['orderBy'] }
        : { orderBy?: EditorAssetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EditorAssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditorAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EditorAsset model
   */
  readonly fields: EditorAssetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EditorAsset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EditorAssetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EditorAsset model
   */ 
  interface EditorAssetFieldRefs {
    readonly id: FieldRef<"EditorAsset", 'String'>
    readonly userId: FieldRef<"EditorAsset", 'String'>
    readonly uploadedBy: FieldRef<"EditorAsset", 'String'>
    readonly type: FieldRef<"EditorAsset", 'String'>
    readonly public_id: FieldRef<"EditorAsset", 'String'>
    readonly url: FieldRef<"EditorAsset", 'String'>
    readonly preview_url: FieldRef<"EditorAsset", 'String'>
    readonly tags: FieldRef<"EditorAsset", 'String[]'>
    readonly asset_folder: FieldRef<"EditorAsset", 'String'>
    readonly etag: FieldRef<"EditorAsset", 'String'>
    readonly createdAt: FieldRef<"EditorAsset", 'DateTime'>
    readonly name: FieldRef<"EditorAsset", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EditorAsset findUnique
   */
  export type EditorAssetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorAsset
     */
    select?: EditorAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorAsset
     */
    omit?: EditorAssetOmit<ExtArgs> | null
    /**
     * Filter, which EditorAsset to fetch.
     */
    where: EditorAssetWhereUniqueInput
  }

  /**
   * EditorAsset findUniqueOrThrow
   */
  export type EditorAssetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorAsset
     */
    select?: EditorAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorAsset
     */
    omit?: EditorAssetOmit<ExtArgs> | null
    /**
     * Filter, which EditorAsset to fetch.
     */
    where: EditorAssetWhereUniqueInput
  }

  /**
   * EditorAsset findFirst
   */
  export type EditorAssetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorAsset
     */
    select?: EditorAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorAsset
     */
    omit?: EditorAssetOmit<ExtArgs> | null
    /**
     * Filter, which EditorAsset to fetch.
     */
    where?: EditorAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditorAssets to fetch.
     */
    orderBy?: EditorAssetOrderByWithRelationInput | EditorAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EditorAssets.
     */
    cursor?: EditorAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditorAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditorAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EditorAssets.
     */
    distinct?: EditorAssetScalarFieldEnum | EditorAssetScalarFieldEnum[]
  }

  /**
   * EditorAsset findFirstOrThrow
   */
  export type EditorAssetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorAsset
     */
    select?: EditorAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorAsset
     */
    omit?: EditorAssetOmit<ExtArgs> | null
    /**
     * Filter, which EditorAsset to fetch.
     */
    where?: EditorAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditorAssets to fetch.
     */
    orderBy?: EditorAssetOrderByWithRelationInput | EditorAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EditorAssets.
     */
    cursor?: EditorAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditorAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditorAssets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EditorAssets.
     */
    distinct?: EditorAssetScalarFieldEnum | EditorAssetScalarFieldEnum[]
  }

  /**
   * EditorAsset findMany
   */
  export type EditorAssetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorAsset
     */
    select?: EditorAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorAsset
     */
    omit?: EditorAssetOmit<ExtArgs> | null
    /**
     * Filter, which EditorAssets to fetch.
     */
    where?: EditorAssetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditorAssets to fetch.
     */
    orderBy?: EditorAssetOrderByWithRelationInput | EditorAssetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EditorAssets.
     */
    cursor?: EditorAssetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditorAssets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditorAssets.
     */
    skip?: number
    distinct?: EditorAssetScalarFieldEnum | EditorAssetScalarFieldEnum[]
  }

  /**
   * EditorAsset create
   */
  export type EditorAssetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorAsset
     */
    select?: EditorAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorAsset
     */
    omit?: EditorAssetOmit<ExtArgs> | null
    /**
     * The data needed to create a EditorAsset.
     */
    data: XOR<EditorAssetCreateInput, EditorAssetUncheckedCreateInput>
  }

  /**
   * EditorAsset createMany
   */
  export type EditorAssetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EditorAssets.
     */
    data: EditorAssetCreateManyInput | EditorAssetCreateManyInput[]
  }

  /**
   * EditorAsset update
   */
  export type EditorAssetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorAsset
     */
    select?: EditorAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorAsset
     */
    omit?: EditorAssetOmit<ExtArgs> | null
    /**
     * The data needed to update a EditorAsset.
     */
    data: XOR<EditorAssetUpdateInput, EditorAssetUncheckedUpdateInput>
    /**
     * Choose, which EditorAsset to update.
     */
    where: EditorAssetWhereUniqueInput
  }

  /**
   * EditorAsset updateMany
   */
  export type EditorAssetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EditorAssets.
     */
    data: XOR<EditorAssetUpdateManyMutationInput, EditorAssetUncheckedUpdateManyInput>
    /**
     * Filter which EditorAssets to update
     */
    where?: EditorAssetWhereInput
  }

  /**
   * EditorAsset upsert
   */
  export type EditorAssetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorAsset
     */
    select?: EditorAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorAsset
     */
    omit?: EditorAssetOmit<ExtArgs> | null
    /**
     * The filter to search for the EditorAsset to update in case it exists.
     */
    where: EditorAssetWhereUniqueInput
    /**
     * In case the EditorAsset found by the `where` argument doesn't exist, create a new EditorAsset with this data.
     */
    create: XOR<EditorAssetCreateInput, EditorAssetUncheckedCreateInput>
    /**
     * In case the EditorAsset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EditorAssetUpdateInput, EditorAssetUncheckedUpdateInput>
  }

  /**
   * EditorAsset delete
   */
  export type EditorAssetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorAsset
     */
    select?: EditorAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorAsset
     */
    omit?: EditorAssetOmit<ExtArgs> | null
    /**
     * Filter which EditorAsset to delete.
     */
    where: EditorAssetWhereUniqueInput
  }

  /**
   * EditorAsset deleteMany
   */
  export type EditorAssetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EditorAssets to delete
     */
    where?: EditorAssetWhereInput
  }

  /**
   * EditorAsset findRaw
   */
  export type EditorAssetFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EditorAsset aggregateRaw
   */
  export type EditorAssetAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * EditorAsset without action
   */
  export type EditorAssetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorAsset
     */
    select?: EditorAssetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorAsset
     */
    omit?: EditorAssetOmit<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    name: string | null
    position: string | null
    bio: string | null
    email: string | null
    photo_url: string | null
    created_at: Date | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    name: string | null
    position: string | null
    bio: string | null
    email: string | null
    photo_url: string | null
    created_at: Date | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    vendorId: number
    name: number
    position: number
    bio: number
    email: number
    photo_url: number
    social_links: number
    created_at: number
    _all: number
  }


  export type TeamMemberMinAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    position?: true
    bio?: true
    email?: true
    photo_url?: true
    created_at?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    position?: true
    bio?: true
    email?: true
    photo_url?: true
    created_at?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    vendorId?: true
    name?: true
    position?: true
    bio?: true
    email?: true
    photo_url?: true
    social_links?: true
    created_at?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: string
    vendorId: string
    name: string
    position: string
    bio: string
    email: string
    photo_url: string | null
    social_links: JsonValue | null
    created_at: Date
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    name?: boolean
    position?: boolean
    bio?: boolean
    email?: boolean
    photo_url?: boolean
    social_links?: boolean
    created_at?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>



  export type TeamMemberSelectScalar = {
    id?: boolean
    vendorId?: boolean
    name?: boolean
    position?: boolean
    bio?: boolean
    email?: boolean
    photo_url?: boolean
    social_links?: boolean
    created_at?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "name" | "position" | "bio" | "email" | "photo_url" | "social_links" | "created_at", ExtArgs["result"]["teamMember"]>
  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      name: string
      position: string
      bio: string
      email: string
      photo_url: string | null
      social_links: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * @param {TeamMemberFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const teamMember = await prisma.teamMember.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TeamMemberFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TeamMember.
     * @param {TeamMemberAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const teamMember = await prisma.teamMember.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TeamMemberAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeamMember model
   */ 
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'String'>
    readonly vendorId: FieldRef<"TeamMember", 'String'>
    readonly name: FieldRef<"TeamMember", 'String'>
    readonly position: FieldRef<"TeamMember", 'String'>
    readonly bio: FieldRef<"TeamMember", 'String'>
    readonly email: FieldRef<"TeamMember", 'String'>
    readonly photo_url: FieldRef<"TeamMember", 'String'>
    readonly social_links: FieldRef<"TeamMember", 'Json'>
    readonly created_at: FieldRef<"TeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
  }

  /**
   * TeamMember findRaw
   */
  export type TeamMemberFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TeamMember aggregateRaw
   */
  export type TeamMemberAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    discount_percentage: number | null
  }

  export type PromotionSumAggregateOutputType = {
    discount_percentage: number | null
  }

  export type PromotionMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    promotion_title: string | null
    description: string | null
    discount_percentage: number | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    promotion_title: string | null
    description: string | null
    discount_percentage: number | null
    start_date: Date | null
    end_date: Date | null
    created_at: Date | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    vendorId: number
    promotion_title: number
    description: number
    discount_percentage: number
    start_date: number
    end_date: number
    created_at: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    discount_percentage?: true
  }

  export type PromotionSumAggregateInputType = {
    discount_percentage?: true
  }

  export type PromotionMinAggregateInputType = {
    id?: true
    vendorId?: true
    promotion_title?: true
    description?: true
    discount_percentage?: true
    start_date?: true
    end_date?: true
    created_at?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    vendorId?: true
    promotion_title?: true
    description?: true
    discount_percentage?: true
    start_date?: true
    end_date?: true
    created_at?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    vendorId?: true
    promotion_title?: true
    description?: true
    discount_percentage?: true
    start_date?: true
    end_date?: true
    created_at?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: string
    vendorId: string
    promotion_title: string
    description: string
    discount_percentage: number
    start_date: Date
    end_date: Date
    created_at: Date
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    promotion_title?: boolean
    description?: boolean
    discount_percentage?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>



  export type PromotionSelectScalar = {
    id?: boolean
    vendorId?: boolean
    promotion_title?: boolean
    description?: boolean
    discount_percentage?: boolean
    start_date?: boolean
    end_date?: boolean
    created_at?: boolean
  }

  export type PromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "promotion_title" | "description" | "discount_percentage" | "start_date" | "end_date" | "created_at", ExtArgs["result"]["promotion"]>
  export type PromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      promotion_title: string
      description: string
      discount_percentage: number
      start_date: Date
      end_date: Date
      created_at: Date
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionFindUniqueArgs>(args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionFindFirstArgs>(args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotionFindManyArgs>(args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
     */
    create<T extends PromotionCreateArgs>(args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Promotions.
     * @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionCreateManyArgs>(args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
     */
    delete<T extends PromotionDeleteArgs>(args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionUpdateArgs>(args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionDeleteManyArgs>(args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionUpdateManyArgs>(args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     */
    upsert<T extends PromotionUpsertArgs>(args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Promotions that matches the filter.
     * @param {PromotionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const promotion = await prisma.promotion.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PromotionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Promotion.
     * @param {PromotionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const promotion = await prisma.promotion.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PromotionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Promotion model
   */ 
  interface PromotionFieldRefs {
    readonly id: FieldRef<"Promotion", 'String'>
    readonly vendorId: FieldRef<"Promotion", 'String'>
    readonly promotion_title: FieldRef<"Promotion", 'String'>
    readonly description: FieldRef<"Promotion", 'String'>
    readonly discount_percentage: FieldRef<"Promotion", 'Float'>
    readonly start_date: FieldRef<"Promotion", 'DateTime'>
    readonly end_date: FieldRef<"Promotion", 'DateTime'>
    readonly created_at: FieldRef<"Promotion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion findRaw
   */
  export type PromotionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Promotion aggregateRaw
   */
  export type PromotionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    price: number | null
    trial_period: number | null
  }

  export type PlanSumAggregateOutputType = {
    price: number | null
    trial_period: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    duration: string | null
    description: string | null
    trial_period: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    duration: string | null
    description: string | null
    trial_period: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    price: number
    duration: number
    description: number
    features: number
    trial_period: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    price?: true
    trial_period?: true
  }

  export type PlanSumAggregateInputType = {
    price?: true
    trial_period?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    description?: true
    trial_period?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    description?: true
    trial_period?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    description?: true
    features?: true
    trial_period?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    price: number
    duration: string
    description: string
    features: JsonValue | null
    trial_period: number | null
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    description?: boolean
    features?: boolean
    trial_period?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>



  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    description?: boolean
    features?: boolean
    trial_period?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "duration" | "description" | "features" | "trial_period" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | Plan$subscriptionsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      duration: string
      description: string
      features: Prisma.JsonValue | null
      trial_period: number | null
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * @param {PlanFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const plan = await prisma.plan.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PlanFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Plan.
     * @param {PlanAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const plan = await prisma.plan.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PlanAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends Plan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */ 
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly price: FieldRef<"Plan", 'Float'>
    readonly duration: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly features: FieldRef<"Plan", 'Json'>
    readonly trial_period: FieldRef<"Plan", 'Int'>
    readonly is_active: FieldRef<"Plan", 'Boolean'>
    readonly created_at: FieldRef<"Plan", 'DateTime'>
    readonly updated_at: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
  }

  /**
   * Plan findRaw
   */
  export type PlanFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Plan aggregateRaw
   */
  export type PlanAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Plan.subscriptions
   */
  export type Plan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    planId: string | null
    status: $Enums.SubscriptionStatus | null
    order_id: string | null
    payment_id: string | null
    start_date: Date | null
    end_date: Date | null
    auto_renew: boolean | null
    is_trial: boolean | null
    trial_end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    planId: string | null
    status: $Enums.SubscriptionStatus | null
    order_id: string | null
    payment_id: string | null
    start_date: Date | null
    end_date: Date | null
    auto_renew: boolean | null
    is_trial: boolean | null
    trial_end_date: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    vendorId: number
    planId: number
    status: number
    order_id: number
    payment_id: number
    start_date: number
    end_date: number
    auto_renew: number
    is_trial: number
    trial_end_date: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    vendorId?: true
    planId?: true
    status?: true
    order_id?: true
    payment_id?: true
    start_date?: true
    end_date?: true
    auto_renew?: true
    is_trial?: true
    trial_end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    vendorId?: true
    planId?: true
    status?: true
    order_id?: true
    payment_id?: true
    start_date?: true
    end_date?: true
    auto_renew?: true
    is_trial?: true
    trial_end_date?: true
    created_at?: true
    updated_at?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    vendorId?: true
    planId?: true
    status?: true
    order_id?: true
    payment_id?: true
    start_date?: true
    end_date?: true
    auto_renew?: true
    is_trial?: true
    trial_end_date?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    vendorId: string | null
    planId: string
    status: $Enums.SubscriptionStatus
    order_id: string
    payment_id: string | null
    start_date: Date
    end_date: Date | null
    auto_renew: boolean
    is_trial: boolean
    trial_end_date: Date | null
    created_at: Date
    updated_at: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    planId?: boolean
    status?: boolean
    order_id?: boolean
    payment_id?: boolean
    start_date?: boolean
    end_date?: boolean
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    vendor?: boolean | Subscription$vendorArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>



  export type SubscriptionSelectScalar = {
    id?: boolean
    vendorId?: boolean
    planId?: boolean
    status?: boolean
    order_id?: boolean
    payment_id?: boolean
    start_date?: boolean
    end_date?: boolean
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "planId" | "status" | "order_id" | "payment_id" | "start_date" | "end_date" | "auto_renew" | "is_trial" | "trial_end_date" | "created_at" | "updated_at", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | Subscription$vendorArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    payments?: boolean | Subscription$paymentsArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs> | null
      plan: Prisma.$PlanPayload<ExtArgs>
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string | null
      planId: string
      status: $Enums.SubscriptionStatus
      order_id: string
      payment_id: string | null
      start_date: Date
      end_date: Date | null
      auto_renew: boolean
      is_trial: boolean
      trial_end_date: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * @param {SubscriptionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const subscription = await prisma.subscription.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SubscriptionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Subscription.
     * @param {SubscriptionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const subscription = await prisma.subscription.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SubscriptionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends Subscription$vendorArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$vendorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    payments<T extends Subscription$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly vendorId: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly order_id: FieldRef<"Subscription", 'String'>
    readonly payment_id: FieldRef<"Subscription", 'String'>
    readonly start_date: FieldRef<"Subscription", 'DateTime'>
    readonly end_date: FieldRef<"Subscription", 'DateTime'>
    readonly auto_renew: FieldRef<"Subscription", 'Boolean'>
    readonly is_trial: FieldRef<"Subscription", 'Boolean'>
    readonly trial_end_date: FieldRef<"Subscription", 'DateTime'>
    readonly created_at: FieldRef<"Subscription", 'DateTime'>
    readonly updated_at: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription findRaw
   */
  export type SubscriptionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subscription aggregateRaw
   */
  export type SubscriptionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subscription.vendor
   */
  export type Subscription$vendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * Subscription.payments
   */
  export type Subscription$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
    fee: number | null
    tax: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
    fee: number | null
    tax: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    subscriptionId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    payment_method: string | null
    razorpay_order_id: string | null
    razorpay_payment_id: string | null
    refund_id: string | null
    is_refunded: boolean | null
    failure_reason: string | null
    vpa: string | null
    fee: number | null
    tax: number | null
    rrn: string | null
    upi_transaction_id: string | null
    email: string | null
    contact: string | null
    autoRenew: boolean | null
    created_at: Date | null
    updated_at: Date | null
    bill_generated: boolean | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    subscriptionId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    payment_method: string | null
    razorpay_order_id: string | null
    razorpay_payment_id: string | null
    refund_id: string | null
    is_refunded: boolean | null
    failure_reason: string | null
    vpa: string | null
    fee: number | null
    tax: number | null
    rrn: string | null
    upi_transaction_id: string | null
    email: string | null
    contact: string | null
    autoRenew: boolean | null
    created_at: Date | null
    updated_at: Date | null
    bill_generated: boolean | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    vendorId: number
    subscriptionId: number
    amount: number
    currency: number
    status: number
    payment_method: number
    razorpay_order_id: number
    razorpay_payment_id: number
    refund_id: number
    is_refunded: number
    failure_reason: number
    vpa: number
    fee: number
    tax: number
    rrn: number
    upi_transaction_id: number
    email: number
    contact: number
    acquirer_data: number
    notes: number
    autoRenew: number
    created_at: number
    updated_at: number
    bill_generated: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
    fee?: true
    tax?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
    fee?: true
    tax?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    vendorId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    status?: true
    payment_method?: true
    razorpay_order_id?: true
    razorpay_payment_id?: true
    refund_id?: true
    is_refunded?: true
    failure_reason?: true
    vpa?: true
    fee?: true
    tax?: true
    rrn?: true
    upi_transaction_id?: true
    email?: true
    contact?: true
    autoRenew?: true
    created_at?: true
    updated_at?: true
    bill_generated?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    vendorId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    status?: true
    payment_method?: true
    razorpay_order_id?: true
    razorpay_payment_id?: true
    refund_id?: true
    is_refunded?: true
    failure_reason?: true
    vpa?: true
    fee?: true
    tax?: true
    rrn?: true
    upi_transaction_id?: true
    email?: true
    contact?: true
    autoRenew?: true
    created_at?: true
    updated_at?: true
    bill_generated?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    vendorId?: true
    subscriptionId?: true
    amount?: true
    currency?: true
    status?: true
    payment_method?: true
    razorpay_order_id?: true
    razorpay_payment_id?: true
    refund_id?: true
    is_refunded?: true
    failure_reason?: true
    vpa?: true
    fee?: true
    tax?: true
    rrn?: true
    upi_transaction_id?: true
    email?: true
    contact?: true
    acquirer_data?: true
    notes?: true
    autoRenew?: true
    created_at?: true
    updated_at?: true
    bill_generated?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    vendorId: string | null
    subscriptionId: string | null
    amount: number
    currency: string
    status: $Enums.PaymentStatus
    payment_method: string | null
    razorpay_order_id: string | null
    razorpay_payment_id: string | null
    refund_id: string | null
    is_refunded: boolean
    failure_reason: string | null
    vpa: string | null
    fee: number | null
    tax: number | null
    rrn: string | null
    upi_transaction_id: string | null
    email: string | null
    contact: string | null
    acquirer_data: JsonValue | null
    notes: JsonValue | null
    autoRenew: boolean
    created_at: Date
    updated_at: Date
    bill_generated: boolean
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    payment_method?: boolean
    razorpay_order_id?: boolean
    razorpay_payment_id?: boolean
    refund_id?: boolean
    is_refunded?: boolean
    failure_reason?: boolean
    vpa?: boolean
    fee?: boolean
    tax?: boolean
    rrn?: boolean
    upi_transaction_id?: boolean
    email?: boolean
    contact?: boolean
    acquirer_data?: boolean
    notes?: boolean
    autoRenew?: boolean
    created_at?: boolean
    updated_at?: boolean
    bill_generated?: boolean
    vendor?: boolean | Payment$vendorArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
    invoices?: boolean | Payment$invoicesArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    vendorId?: boolean
    subscriptionId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    payment_method?: boolean
    razorpay_order_id?: boolean
    razorpay_payment_id?: boolean
    refund_id?: boolean
    is_refunded?: boolean
    failure_reason?: boolean
    vpa?: boolean
    fee?: boolean
    tax?: boolean
    rrn?: boolean
    upi_transaction_id?: boolean
    email?: boolean
    contact?: boolean
    acquirer_data?: boolean
    notes?: boolean
    autoRenew?: boolean
    created_at?: boolean
    updated_at?: boolean
    bill_generated?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vendorId" | "subscriptionId" | "amount" | "currency" | "status" | "payment_method" | "razorpay_order_id" | "razorpay_payment_id" | "refund_id" | "is_refunded" | "failure_reason" | "vpa" | "fee" | "tax" | "rrn" | "upi_transaction_id" | "email" | "contact" | "acquirer_data" | "notes" | "autoRenew" | "created_at" | "updated_at" | "bill_generated", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | Payment$vendorArgs<ExtArgs>
    subscription?: boolean | Payment$subscriptionArgs<ExtArgs>
    invoices?: boolean | Payment$invoicesArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs> | null
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string | null
      subscriptionId: string | null
      amount: number
      currency: string
      status: $Enums.PaymentStatus
      payment_method: string | null
      razorpay_order_id: string | null
      razorpay_payment_id: string | null
      refund_id: string | null
      is_refunded: boolean
      failure_reason: string | null
      vpa: string | null
      fee: number | null
      tax: number | null
      rrn: string | null
      upi_transaction_id: string | null
      email: string | null
      contact: string | null
      acquirer_data: Prisma.JsonValue | null
      notes: Prisma.JsonValue | null
      autoRenew: boolean
      created_at: Date
      updated_at: Date
      bill_generated: boolean
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * @param {PaymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const payment = await prisma.payment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PaymentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Payment.
     * @param {PaymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const payment = await prisma.payment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PaymentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends Payment$vendorArgs<ExtArgs> = {}>(args?: Subset<T, Payment$vendorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    subscription<T extends Payment$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Payment$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    invoices<T extends Payment$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Payment$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly vendorId: FieldRef<"Payment", 'String'>
    readonly subscriptionId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly payment_method: FieldRef<"Payment", 'String'>
    readonly razorpay_order_id: FieldRef<"Payment", 'String'>
    readonly razorpay_payment_id: FieldRef<"Payment", 'String'>
    readonly refund_id: FieldRef<"Payment", 'String'>
    readonly is_refunded: FieldRef<"Payment", 'Boolean'>
    readonly failure_reason: FieldRef<"Payment", 'String'>
    readonly vpa: FieldRef<"Payment", 'String'>
    readonly fee: FieldRef<"Payment", 'Float'>
    readonly tax: FieldRef<"Payment", 'Float'>
    readonly rrn: FieldRef<"Payment", 'String'>
    readonly upi_transaction_id: FieldRef<"Payment", 'String'>
    readonly email: FieldRef<"Payment", 'String'>
    readonly contact: FieldRef<"Payment", 'String'>
    readonly acquirer_data: FieldRef<"Payment", 'Json'>
    readonly notes: FieldRef<"Payment", 'Json'>
    readonly autoRenew: FieldRef<"Payment", 'Boolean'>
    readonly created_at: FieldRef<"Payment", 'DateTime'>
    readonly updated_at: FieldRef<"Payment", 'DateTime'>
    readonly bill_generated: FieldRef<"Payment", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
  }

  /**
   * Payment findRaw
   */
  export type PaymentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payment aggregateRaw
   */
  export type PaymentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payment.vendor
   */
  export type Payment$vendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * Payment.subscription
   */
  export type Payment$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Payment.invoices
   */
  export type Payment$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    discount: number | null
    totalExclIGST: number | null
    igstAmount: number | null
    igstTotal: number | null
    totalAmount: number | null
    amountDue: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    discount: number | null
    totalExclIGST: number | null
    igstAmount: number | null
    igstTotal: number | null
    totalAmount: number | null
    amountDue: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    vendorId: string | null
    paymentId: string | null
    nextBillingDate: Date | null
    discount: number | null
    totalExclIGST: number | null
    igstAmount: number | null
    igstTotal: number | null
    totalAmount: number | null
    amountDue: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    vendorId: string | null
    paymentId: string | null
    nextBillingDate: Date | null
    discount: number | null
    totalExclIGST: number | null
    igstAmount: number | null
    igstTotal: number | null
    totalAmount: number | null
    amountDue: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceNumber: number
    vendorId: number
    paymentId: number
    nextBillingDate: number
    discount: number
    totalExclIGST: number
    igstAmount: number
    igstTotal: number
    totalAmount: number
    amountDue: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    discount?: true
    totalExclIGST?: true
    igstAmount?: true
    igstTotal?: true
    totalAmount?: true
    amountDue?: true
  }

  export type InvoiceSumAggregateInputType = {
    discount?: true
    totalExclIGST?: true
    igstAmount?: true
    igstTotal?: true
    totalAmount?: true
    amountDue?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceNumber?: true
    vendorId?: true
    paymentId?: true
    nextBillingDate?: true
    discount?: true
    totalExclIGST?: true
    igstAmount?: true
    igstTotal?: true
    totalAmount?: true
    amountDue?: true
    created_at?: true
    updated_at?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceNumber?: true
    vendorId?: true
    paymentId?: true
    nextBillingDate?: true
    discount?: true
    totalExclIGST?: true
    igstAmount?: true
    igstTotal?: true
    totalAmount?: true
    amountDue?: true
    created_at?: true
    updated_at?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceNumber?: true
    vendorId?: true
    paymentId?: true
    nextBillingDate?: true
    discount?: true
    totalExclIGST?: true
    igstAmount?: true
    igstTotal?: true
    totalAmount?: true
    amountDue?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    invoiceNumber: string
    vendorId: string | null
    paymentId: string | null
    nextBillingDate: Date | null
    discount: number
    totalExclIGST: number
    igstAmount: number
    igstTotal: number
    totalAmount: number
    amountDue: number
    created_at: Date
    updated_at: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    vendorId?: boolean
    paymentId?: boolean
    nextBillingDate?: boolean
    discount?: boolean
    totalExclIGST?: boolean
    igstAmount?: boolean
    igstTotal?: boolean
    totalAmount?: boolean
    amountDue?: boolean
    created_at?: boolean
    updated_at?: boolean
    vendor?: boolean | Invoice$vendorArgs<ExtArgs>
    payment?: boolean | Invoice$paymentArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>



  export type InvoiceSelectScalar = {
    id?: boolean
    invoiceNumber?: boolean
    vendorId?: boolean
    paymentId?: boolean
    nextBillingDate?: boolean
    discount?: boolean
    totalExclIGST?: boolean
    igstAmount?: boolean
    igstTotal?: boolean
    totalAmount?: boolean
    amountDue?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceNumber" | "vendorId" | "paymentId" | "nextBillingDate" | "discount" | "totalExclIGST" | "igstAmount" | "igstTotal" | "totalAmount" | "amountDue" | "created_at" | "updated_at", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | Invoice$vendorArgs<ExtArgs>
    payment?: boolean | Invoice$paymentArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceNumber: string
      vendorId: string | null
      paymentId: string | null
      nextBillingDate: Date | null
      discount: number
      totalExclIGST: number
      igstAmount: number
      igstTotal: number
      totalAmount: number
      amountDue: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * @param {InvoiceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const invoice = await prisma.invoice.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: InvoiceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Invoice.
     * @param {InvoiceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const invoice = await prisma.invoice.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: InvoiceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends Invoice$vendorArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$vendorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    payment<T extends Invoice$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invoice model
   */ 
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly invoiceNumber: FieldRef<"Invoice", 'String'>
    readonly vendorId: FieldRef<"Invoice", 'String'>
    readonly paymentId: FieldRef<"Invoice", 'String'>
    readonly nextBillingDate: FieldRef<"Invoice", 'DateTime'>
    readonly discount: FieldRef<"Invoice", 'Float'>
    readonly totalExclIGST: FieldRef<"Invoice", 'Float'>
    readonly igstAmount: FieldRef<"Invoice", 'Float'>
    readonly igstTotal: FieldRef<"Invoice", 'Float'>
    readonly totalAmount: FieldRef<"Invoice", 'Float'>
    readonly amountDue: FieldRef<"Invoice", 'Float'>
    readonly created_at: FieldRef<"Invoice", 'DateTime'>
    readonly updated_at: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
  }

  /**
   * Invoice findRaw
   */
  export type InvoiceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Invoice aggregateRaw
   */
  export type InvoiceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Invoice.vendor
   */
  export type Invoice$vendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vendor
     */
    omit?: VendorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * Invoice.payment
   */
  export type Invoice$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Counter
   */

  export type AggregateCounter = {
    _count: CounterCountAggregateOutputType | null
    _avg: CounterAvgAggregateOutputType | null
    _sum: CounterSumAggregateOutputType | null
    _min: CounterMinAggregateOutputType | null
    _max: CounterMaxAggregateOutputType | null
  }

  export type CounterAvgAggregateOutputType = {
    value: number | null
  }

  export type CounterSumAggregateOutputType = {
    value: number | null
  }

  export type CounterMinAggregateOutputType = {
    id: string | null
    name: string | null
    value: number | null
  }

  export type CounterMaxAggregateOutputType = {
    id: string | null
    name: string | null
    value: number | null
  }

  export type CounterCountAggregateOutputType = {
    id: number
    name: number
    value: number
    _all: number
  }


  export type CounterAvgAggregateInputType = {
    value?: true
  }

  export type CounterSumAggregateInputType = {
    value?: true
  }

  export type CounterMinAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type CounterMaxAggregateInputType = {
    id?: true
    name?: true
    value?: true
  }

  export type CounterCountAggregateInputType = {
    id?: true
    name?: true
    value?: true
    _all?: true
  }

  export type CounterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counter to aggregate.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Counters
    **/
    _count?: true | CounterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CounterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CounterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CounterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CounterMaxAggregateInputType
  }

  export type GetCounterAggregateType<T extends CounterAggregateArgs> = {
        [P in keyof T & keyof AggregateCounter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCounter[P]>
      : GetScalarType<T[P], AggregateCounter[P]>
  }




  export type CounterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CounterWhereInput
    orderBy?: CounterOrderByWithAggregationInput | CounterOrderByWithAggregationInput[]
    by: CounterScalarFieldEnum[] | CounterScalarFieldEnum
    having?: CounterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CounterCountAggregateInputType | true
    _avg?: CounterAvgAggregateInputType
    _sum?: CounterSumAggregateInputType
    _min?: CounterMinAggregateInputType
    _max?: CounterMaxAggregateInputType
  }

  export type CounterGroupByOutputType = {
    id: string
    name: string
    value: number
    _count: CounterCountAggregateOutputType | null
    _avg: CounterAvgAggregateOutputType | null
    _sum: CounterSumAggregateOutputType | null
    _min: CounterMinAggregateOutputType | null
    _max: CounterMaxAggregateOutputType | null
  }

  type GetCounterGroupByPayload<T extends CounterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CounterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CounterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CounterGroupByOutputType[P]>
            : GetScalarType<T[P], CounterGroupByOutputType[P]>
        }
      >
    >


  export type CounterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["counter"]>



  export type CounterSelectScalar = {
    id?: boolean
    name?: boolean
    value?: boolean
  }

  export type CounterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "value", ExtArgs["result"]["counter"]>

  export type $CounterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Counter"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      value: number
    }, ExtArgs["result"]["counter"]>
    composites: {}
  }

  type CounterGetPayload<S extends boolean | null | undefined | CounterDefaultArgs> = $Result.GetResult<Prisma.$CounterPayload, S>

  type CounterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CounterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CounterCountAggregateInputType | true
    }

  export interface CounterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Counter'], meta: { name: 'Counter' } }
    /**
     * Find zero or one Counter that matches the filter.
     * @param {CounterFindUniqueArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CounterFindUniqueArgs>(args: SelectSubset<T, CounterFindUniqueArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Counter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CounterFindUniqueOrThrowArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CounterFindUniqueOrThrowArgs>(args: SelectSubset<T, CounterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Counter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindFirstArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CounterFindFirstArgs>(args?: SelectSubset<T, CounterFindFirstArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Counter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindFirstOrThrowArgs} args - Arguments to find a Counter
     * @example
     * // Get one Counter
     * const counter = await prisma.counter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CounterFindFirstOrThrowArgs>(args?: SelectSubset<T, CounterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Counters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Counters
     * const counters = await prisma.counter.findMany()
     * 
     * // Get first 10 Counters
     * const counters = await prisma.counter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const counterWithIdOnly = await prisma.counter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CounterFindManyArgs>(args?: SelectSubset<T, CounterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Counter.
     * @param {CounterCreateArgs} args - Arguments to create a Counter.
     * @example
     * // Create one Counter
     * const Counter = await prisma.counter.create({
     *   data: {
     *     // ... data to create a Counter
     *   }
     * })
     * 
     */
    create<T extends CounterCreateArgs>(args: SelectSubset<T, CounterCreateArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Counters.
     * @param {CounterCreateManyArgs} args - Arguments to create many Counters.
     * @example
     * // Create many Counters
     * const counter = await prisma.counter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CounterCreateManyArgs>(args?: SelectSubset<T, CounterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Counter.
     * @param {CounterDeleteArgs} args - Arguments to delete one Counter.
     * @example
     * // Delete one Counter
     * const Counter = await prisma.counter.delete({
     *   where: {
     *     // ... filter to delete one Counter
     *   }
     * })
     * 
     */
    delete<T extends CounterDeleteArgs>(args: SelectSubset<T, CounterDeleteArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Counter.
     * @param {CounterUpdateArgs} args - Arguments to update one Counter.
     * @example
     * // Update one Counter
     * const counter = await prisma.counter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CounterUpdateArgs>(args: SelectSubset<T, CounterUpdateArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Counters.
     * @param {CounterDeleteManyArgs} args - Arguments to filter Counters to delete.
     * @example
     * // Delete a few Counters
     * const { count } = await prisma.counter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CounterDeleteManyArgs>(args?: SelectSubset<T, CounterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Counters
     * const counter = await prisma.counter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CounterUpdateManyArgs>(args: SelectSubset<T, CounterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Counter.
     * @param {CounterUpsertArgs} args - Arguments to update or create a Counter.
     * @example
     * // Update or create a Counter
     * const counter = await prisma.counter.upsert({
     *   create: {
     *     // ... data to create a Counter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Counter we want to update
     *   }
     * })
     */
    upsert<T extends CounterUpsertArgs>(args: SelectSubset<T, CounterUpsertArgs<ExtArgs>>): Prisma__CounterClient<$Result.GetResult<Prisma.$CounterPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Counters that matches the filter.
     * @param {CounterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const counter = await prisma.counter.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CounterFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Counter.
     * @param {CounterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const counter = await prisma.counter.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CounterAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Counters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterCountArgs} args - Arguments to filter Counters to count.
     * @example
     * // Count the number of Counters
     * const count = await prisma.counter.count({
     *   where: {
     *     // ... the filter for the Counters we want to count
     *   }
     * })
    **/
    count<T extends CounterCountArgs>(
      args?: Subset<T, CounterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CounterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Counter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CounterAggregateArgs>(args: Subset<T, CounterAggregateArgs>): Prisma.PrismaPromise<GetCounterAggregateType<T>>

    /**
     * Group by Counter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CounterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CounterGroupByArgs['orderBy'] }
        : { orderBy?: CounterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CounterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Counter model
   */
  readonly fields: CounterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Counter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CounterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Counter model
   */ 
  interface CounterFieldRefs {
    readonly id: FieldRef<"Counter", 'String'>
    readonly name: FieldRef<"Counter", 'String'>
    readonly value: FieldRef<"Counter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Counter findUnique
   */
  export type CounterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter findUniqueOrThrow
   */
  export type CounterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter findFirst
   */
  export type CounterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counters.
     */
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter findFirstOrThrow
   */
  export type CounterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counter to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Counters.
     */
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter findMany
   */
  export type CounterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter, which Counters to fetch.
     */
    where?: CounterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Counters to fetch.
     */
    orderBy?: CounterOrderByWithRelationInput | CounterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Counters.
     */
    cursor?: CounterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Counters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Counters.
     */
    skip?: number
    distinct?: CounterScalarFieldEnum | CounterScalarFieldEnum[]
  }

  /**
   * Counter create
   */
  export type CounterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The data needed to create a Counter.
     */
    data: XOR<CounterCreateInput, CounterUncheckedCreateInput>
  }

  /**
   * Counter createMany
   */
  export type CounterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Counters.
     */
    data: CounterCreateManyInput | CounterCreateManyInput[]
  }

  /**
   * Counter update
   */
  export type CounterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The data needed to update a Counter.
     */
    data: XOR<CounterUpdateInput, CounterUncheckedUpdateInput>
    /**
     * Choose, which Counter to update.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter updateMany
   */
  export type CounterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Counters.
     */
    data: XOR<CounterUpdateManyMutationInput, CounterUncheckedUpdateManyInput>
    /**
     * Filter which Counters to update
     */
    where?: CounterWhereInput
  }

  /**
   * Counter upsert
   */
  export type CounterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * The filter to search for the Counter to update in case it exists.
     */
    where: CounterWhereUniqueInput
    /**
     * In case the Counter found by the `where` argument doesn't exist, create a new Counter with this data.
     */
    create: XOR<CounterCreateInput, CounterUncheckedCreateInput>
    /**
     * In case the Counter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CounterUpdateInput, CounterUncheckedUpdateInput>
  }

  /**
   * Counter delete
   */
  export type CounterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
    /**
     * Filter which Counter to delete.
     */
    where: CounterWhereUniqueInput
  }

  /**
   * Counter deleteMany
   */
  export type CounterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Counters to delete
     */
    where?: CounterWhereInput
  }

  /**
   * Counter findRaw
   */
  export type CounterFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Counter aggregateRaw
   */
  export type CounterAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Counter without action
   */
  export type CounterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Counter
     */
    select?: CounterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Counter
     */
    omit?: CounterOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const VendorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    business_name: 'business_name',
    business_category: 'business_category',
    license_number: 'license_number',
    service_type: 'service_type',
    description: 'description',
    logo_url: 'logo_url',
    country: 'country',
    latitude: 'latitude',
    longitude: 'longitude',
    city: 'city',
    email: 'email',
    state: 'state',
    password_hash: 'password_hash',
    phone_number: 'phone_number',
    social_networks: 'social_networks',
    faqs: 'faqs',
    created_at: 'created_at',
    updated_at: 'updated_at',
    is_verified: 'is_verified',
    refresh_Token: 'refresh_Token',
    resetPassword_Token: 'resetPassword_Token',
    role: 'role'
  };

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    service_name: 'service_name',
    description: 'description',
    min_price: 'min_price',
    max_price: 'max_price',
    city: 'city',
    state: 'state',
    price: 'price',
    service_type: 'service_type',
    service_category: 'service_category',
    service_unit: 'service_unit',
    status: 'status',
    rating: 'rating',
    faqs: 'faqs',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ViewsScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    userId: 'userId',
    viewCount: 'viewCount',
    lead: 'lead',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ViewsScalarFieldEnum = (typeof ViewsScalarFieldEnum)[keyof typeof ViewsScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    serviceId: 'serviceId',
    comment: 'comment',
    rating: 'rating',
    user_name: 'user_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    available_date: 'available_date',
    wedding_date: 'wedding_date',
    is_available: 'is_available',
    created_at: 'created_at'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    image_urls: 'image_urls',
    video_urls: 'video_urls',
    uploaded_at: 'uploaded_at'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const EditorAssetScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    uploadedBy: 'uploadedBy',
    type: 'type',
    public_id: 'public_id',
    url: 'url',
    preview_url: 'preview_url',
    tags: 'tags',
    asset_folder: 'asset_folder',
    etag: 'etag',
    createdAt: 'createdAt',
    name: 'name'
  };

  export type EditorAssetScalarFieldEnum = (typeof EditorAssetScalarFieldEnum)[keyof typeof EditorAssetScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
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

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    promotion_title: 'promotion_title',
    description: 'description',
    discount_percentage: 'discount_percentage',
    start_date: 'start_date',
    end_date: 'end_date',
    created_at: 'created_at'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    duration: 'duration',
    description: 'description',
    features: 'features',
    trial_period: 'trial_period',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    planId: 'planId',
    status: 'status',
    order_id: 'order_id',
    payment_id: 'payment_id',
    start_date: 'start_date',
    end_date: 'end_date',
    auto_renew: 'auto_renew',
    is_trial: 'is_trial',
    trial_end_date: 'trial_end_date',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    subscriptionId: 'subscriptionId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    payment_method: 'payment_method',
    razorpay_order_id: 'razorpay_order_id',
    razorpay_payment_id: 'razorpay_payment_id',
    refund_id: 'refund_id',
    is_refunded: 'is_refunded',
    failure_reason: 'failure_reason',
    vpa: 'vpa',
    fee: 'fee',
    tax: 'tax',
    rrn: 'rrn',
    upi_transaction_id: 'upi_transaction_id',
    email: 'email',
    contact: 'contact',
    acquirer_data: 'acquirer_data',
    notes: 'notes',
    autoRenew: 'autoRenew',
    created_at: 'created_at',
    updated_at: 'updated_at',
    bill_generated: 'bill_generated'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceNumber: 'invoiceNumber',
    vendorId: 'vendorId',
    paymentId: 'paymentId',
    nextBillingDate: 'nextBillingDate',
    discount: 'discount',
    totalExclIGST: 'totalExclIGST',
    igstAmount: 'igstAmount',
    igstTotal: 'igstTotal',
    totalAmount: 'totalAmount',
    amountDue: 'amountDue',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const CounterScalarFieldEnum: {
    id: 'id',
    name: 'name',
    value: 'value'
  };

  export type CounterScalarFieldEnum = (typeof CounterScalarFieldEnum)[keyof typeof CounterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: StringFilter<"Vendor"> | string
    name?: StringFilter<"Vendor"> | string
    business_name?: StringFilter<"Vendor"> | string
    business_category?: StringFilter<"Vendor"> | string
    license_number?: StringNullableFilter<"Vendor"> | string | null
    service_type?: StringNullableListFilter<"Vendor">
    description?: StringNullableFilter<"Vendor"> | string | null
    logo_url?: JsonNullableFilter<"Vendor">
    country?: StringNullableFilter<"Vendor"> | string | null
    latitude?: StringNullableFilter<"Vendor"> | string | null
    longitude?: StringNullableFilter<"Vendor"> | string | null
    city?: StringNullableFilter<"Vendor"> | string | null
    email?: StringFilter<"Vendor"> | string
    state?: StringNullableFilter<"Vendor"> | string | null
    password_hash?: StringFilter<"Vendor"> | string
    phone_number?: StringFilter<"Vendor"> | string
    social_networks?: JsonNullableFilter<"Vendor">
    faqs?: JsonNullableFilter<"Vendor">
    created_at?: DateTimeFilter<"Vendor"> | Date | string
    updated_at?: DateTimeFilter<"Vendor"> | Date | string
    is_verified?: BoolFilter<"Vendor"> | boolean
    refresh_Token?: StringNullableFilter<"Vendor"> | string | null
    resetPassword_Token?: StringNullableFilter<"Vendor"> | string | null
    role?: StringFilter<"Vendor"> | string
    services?: ServiceListRelationFilter
    promotions?: PromotionListRelationFilter
    team_members?: TeamMemberListRelationFilter
    payment?: PaymentListRelationFilter
    invoices?: InvoiceListRelationFilter
    Subscription?: SubscriptionListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    business_name?: SortOrder
    business_category?: SortOrder
    license_number?: SortOrder
    service_type?: SortOrder
    description?: SortOrder
    logo_url?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    email?: SortOrder
    state?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrder
    social_networks?: SortOrder
    faqs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_verified?: SortOrder
    refresh_Token?: SortOrder
    resetPassword_Token?: SortOrder
    role?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
    promotions?: PromotionOrderByRelationAggregateInput
    team_members?: TeamMemberOrderByRelationAggregateInput
    payment?: PaymentOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
    Subscription?: SubscriptionOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    name?: StringFilter<"Vendor"> | string
    business_name?: StringFilter<"Vendor"> | string
    business_category?: StringFilter<"Vendor"> | string
    license_number?: StringNullableFilter<"Vendor"> | string | null
    service_type?: StringNullableListFilter<"Vendor">
    description?: StringNullableFilter<"Vendor"> | string | null
    logo_url?: JsonNullableFilter<"Vendor">
    country?: StringNullableFilter<"Vendor"> | string | null
    latitude?: StringNullableFilter<"Vendor"> | string | null
    longitude?: StringNullableFilter<"Vendor"> | string | null
    city?: StringNullableFilter<"Vendor"> | string | null
    state?: StringNullableFilter<"Vendor"> | string | null
    password_hash?: StringFilter<"Vendor"> | string
    phone_number?: StringFilter<"Vendor"> | string
    social_networks?: JsonNullableFilter<"Vendor">
    faqs?: JsonNullableFilter<"Vendor">
    created_at?: DateTimeFilter<"Vendor"> | Date | string
    updated_at?: DateTimeFilter<"Vendor"> | Date | string
    is_verified?: BoolFilter<"Vendor"> | boolean
    refresh_Token?: StringNullableFilter<"Vendor"> | string | null
    resetPassword_Token?: StringNullableFilter<"Vendor"> | string | null
    role?: StringFilter<"Vendor"> | string
    services?: ServiceListRelationFilter
    promotions?: PromotionListRelationFilter
    team_members?: TeamMemberListRelationFilter
    payment?: PaymentListRelationFilter
    invoices?: InvoiceListRelationFilter
    Subscription?: SubscriptionListRelationFilter
  }, "id" | "email">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    business_name?: SortOrder
    business_category?: SortOrder
    license_number?: SortOrder
    service_type?: SortOrder
    description?: SortOrder
    logo_url?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    email?: SortOrder
    state?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrder
    social_networks?: SortOrder
    faqs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_verified?: SortOrder
    refresh_Token?: SortOrder
    resetPassword_Token?: SortOrder
    role?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vendor"> | string
    name?: StringWithAggregatesFilter<"Vendor"> | string
    business_name?: StringWithAggregatesFilter<"Vendor"> | string
    business_category?: StringWithAggregatesFilter<"Vendor"> | string
    license_number?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    service_type?: StringNullableListFilter<"Vendor">
    description?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    logo_url?: JsonNullableWithAggregatesFilter<"Vendor">
    country?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    latitude?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    longitude?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    city?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    email?: StringWithAggregatesFilter<"Vendor"> | string
    state?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    password_hash?: StringWithAggregatesFilter<"Vendor"> | string
    phone_number?: StringWithAggregatesFilter<"Vendor"> | string
    social_networks?: JsonNullableWithAggregatesFilter<"Vendor">
    faqs?: JsonNullableWithAggregatesFilter<"Vendor">
    created_at?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    is_verified?: BoolWithAggregatesFilter<"Vendor"> | boolean
    refresh_Token?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    resetPassword_Token?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    role?: StringWithAggregatesFilter<"Vendor"> | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    vendorId?: StringFilter<"Service"> | string
    service_name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    min_price?: FloatNullableFilter<"Service"> | number | null
    max_price?: FloatNullableFilter<"Service"> | number | null
    city?: StringNullableFilter<"Service"> | string | null
    state?: StringNullableFilter<"Service"> | string | null
    price?: FloatNullableFilter<"Service"> | number | null
    service_type?: StringFilter<"Service"> | string
    service_category?: StringNullableFilter<"Service"> | string | null
    service_unit?: StringNullableFilter<"Service"> | string | null
    status?: StringFilter<"Service"> | string
    rating?: FloatFilter<"Service"> | number
    faqs?: JsonNullableFilter<"Service">
    created_at?: DateTimeFilter<"Service"> | Date | string
    updated_at?: DateTimeFilter<"Service"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    availabilities?: AvailabilityListRelationFilter
    feedback?: FeedbackListRelationFilter
    media?: MediaListRelationFilter
    views?: ViewsListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    service_name?: SortOrder
    description?: SortOrder
    min_price?: SortOrder
    max_price?: SortOrder
    city?: SortOrder
    state?: SortOrder
    price?: SortOrder
    service_type?: SortOrder
    service_category?: SortOrder
    service_unit?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    faqs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    availabilities?: AvailabilityOrderByRelationAggregateInput
    feedback?: FeedbackOrderByRelationAggregateInput
    media?: MediaOrderByRelationAggregateInput
    views?: ViewsOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    vendorId?: StringFilter<"Service"> | string
    service_name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    min_price?: FloatNullableFilter<"Service"> | number | null
    max_price?: FloatNullableFilter<"Service"> | number | null
    city?: StringNullableFilter<"Service"> | string | null
    state?: StringNullableFilter<"Service"> | string | null
    price?: FloatNullableFilter<"Service"> | number | null
    service_type?: StringFilter<"Service"> | string
    service_category?: StringNullableFilter<"Service"> | string | null
    service_unit?: StringNullableFilter<"Service"> | string | null
    status?: StringFilter<"Service"> | string
    rating?: FloatFilter<"Service"> | number
    faqs?: JsonNullableFilter<"Service">
    created_at?: DateTimeFilter<"Service"> | Date | string
    updated_at?: DateTimeFilter<"Service"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
    availabilities?: AvailabilityListRelationFilter
    feedback?: FeedbackListRelationFilter
    media?: MediaListRelationFilter
    views?: ViewsListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    service_name?: SortOrder
    description?: SortOrder
    min_price?: SortOrder
    max_price?: SortOrder
    city?: SortOrder
    state?: SortOrder
    price?: SortOrder
    service_type?: SortOrder
    service_category?: SortOrder
    service_unit?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    faqs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    vendorId?: StringWithAggregatesFilter<"Service"> | string
    service_name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    min_price?: FloatNullableWithAggregatesFilter<"Service"> | number | null
    max_price?: FloatNullableWithAggregatesFilter<"Service"> | number | null
    city?: StringNullableWithAggregatesFilter<"Service"> | string | null
    state?: StringNullableWithAggregatesFilter<"Service"> | string | null
    price?: FloatNullableWithAggregatesFilter<"Service"> | number | null
    service_type?: StringWithAggregatesFilter<"Service"> | string
    service_category?: StringNullableWithAggregatesFilter<"Service"> | string | null
    service_unit?: StringNullableWithAggregatesFilter<"Service"> | string | null
    status?: StringWithAggregatesFilter<"Service"> | string
    rating?: FloatWithAggregatesFilter<"Service"> | number
    faqs?: JsonNullableWithAggregatesFilter<"Service">
    created_at?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type ViewsWhereInput = {
    AND?: ViewsWhereInput | ViewsWhereInput[]
    OR?: ViewsWhereInput[]
    NOT?: ViewsWhereInput | ViewsWhereInput[]
    id?: StringFilter<"Views"> | string
    serviceId?: StringFilter<"Views"> | string
    userId?: StringFilter<"Views"> | string
    viewCount?: IntFilter<"Views"> | number
    lead?: BoolFilter<"Views"> | boolean
    created_at?: DateTimeFilter<"Views"> | Date | string
    updated_at?: DateTimeFilter<"Views"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type ViewsOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
    lead?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type ViewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serviceId_userId?: ViewsServiceIdUserIdCompoundUniqueInput
    AND?: ViewsWhereInput | ViewsWhereInput[]
    OR?: ViewsWhereInput[]
    NOT?: ViewsWhereInput | ViewsWhereInput[]
    serviceId?: StringFilter<"Views"> | string
    userId?: StringFilter<"Views"> | string
    viewCount?: IntFilter<"Views"> | number
    lead?: BoolFilter<"Views"> | boolean
    created_at?: DateTimeFilter<"Views"> | Date | string
    updated_at?: DateTimeFilter<"Views"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id" | "serviceId_userId">

  export type ViewsOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
    lead?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ViewsCountOrderByAggregateInput
    _avg?: ViewsAvgOrderByAggregateInput
    _max?: ViewsMaxOrderByAggregateInput
    _min?: ViewsMinOrderByAggregateInput
    _sum?: ViewsSumOrderByAggregateInput
  }

  export type ViewsScalarWhereWithAggregatesInput = {
    AND?: ViewsScalarWhereWithAggregatesInput | ViewsScalarWhereWithAggregatesInput[]
    OR?: ViewsScalarWhereWithAggregatesInput[]
    NOT?: ViewsScalarWhereWithAggregatesInput | ViewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Views"> | string
    serviceId?: StringWithAggregatesFilter<"Views"> | string
    userId?: StringWithAggregatesFilter<"Views"> | string
    viewCount?: IntWithAggregatesFilter<"Views"> | number
    lead?: BoolWithAggregatesFilter<"Views"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Views"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Views"> | Date | string
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: StringFilter<"Feedback"> | string
    userId?: StringFilter<"Feedback"> | string
    serviceId?: StringFilter<"Feedback"> | string
    comment?: StringFilter<"Feedback"> | string
    rating?: FloatFilter<"Feedback"> | number
    user_name?: StringFilter<"Feedback"> | string
    created_at?: DateTimeFilter<"Feedback"> | Date | string
    updated_at?: DateTimeFilter<"Feedback"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    user_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    serviceId_userId?: FeedbackServiceIdUserIdCompoundUniqueInput
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    serviceId?: StringFilter<"Feedback"> | string
    comment?: StringFilter<"Feedback"> | string
    rating?: FloatFilter<"Feedback"> | number
    user_name?: StringFilter<"Feedback"> | string
    created_at?: DateTimeFilter<"Feedback"> | Date | string
    updated_at?: DateTimeFilter<"Feedback"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id" | "userId" | "serviceId_userId">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    user_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Feedback"> | string
    userId?: StringWithAggregatesFilter<"Feedback"> | string
    serviceId?: StringWithAggregatesFilter<"Feedback"> | string
    comment?: StringWithAggregatesFilter<"Feedback"> | string
    rating?: FloatWithAggregatesFilter<"Feedback"> | number
    user_name?: StringWithAggregatesFilter<"Feedback"> | string
    created_at?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: StringFilter<"Availability"> | string
    serviceId?: StringFilter<"Availability"> | string
    available_date?: DateTimeFilter<"Availability"> | Date | string
    wedding_date?: DateTimeFilter<"Availability"> | Date | string
    is_available?: BoolFilter<"Availability"> | boolean
    created_at?: DateTimeFilter<"Availability"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    available_date?: SortOrder
    wedding_date?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serviceId?: string
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    available_date?: DateTimeFilter<"Availability"> | Date | string
    wedding_date?: DateTimeFilter<"Availability"> | Date | string
    is_available?: BoolFilter<"Availability"> | boolean
    created_at?: DateTimeFilter<"Availability"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id" | "serviceId">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    available_date?: SortOrder
    wedding_date?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Availability"> | string
    serviceId?: StringWithAggregatesFilter<"Availability"> | string
    available_date?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
    wedding_date?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
    is_available?: BoolWithAggregatesFilter<"Availability"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    serviceId?: StringFilter<"Media"> | string
    image_urls?: JsonFilter<"Media">
    video_urls?: JsonFilter<"Media">
    uploaded_at?: DateTimeFilter<"Media"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    image_urls?: SortOrder
    video_urls?: SortOrder
    uploaded_at?: SortOrder
    service?: ServiceOrderByWithRelationInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serviceId?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    image_urls?: JsonFilter<"Media">
    video_urls?: JsonFilter<"Media">
    uploaded_at?: DateTimeFilter<"Media"> | Date | string
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
  }, "id" | "serviceId">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    image_urls?: SortOrder
    video_urls?: SortOrder
    uploaded_at?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    serviceId?: StringWithAggregatesFilter<"Media"> | string
    image_urls?: JsonWithAggregatesFilter<"Media">
    video_urls?: JsonWithAggregatesFilter<"Media">
    uploaded_at?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type EditorAssetWhereInput = {
    AND?: EditorAssetWhereInput | EditorAssetWhereInput[]
    OR?: EditorAssetWhereInput[]
    NOT?: EditorAssetWhereInput | EditorAssetWhereInput[]
    id?: StringFilter<"EditorAsset"> | string
    userId?: StringNullableFilter<"EditorAsset"> | string | null
    uploadedBy?: StringFilter<"EditorAsset"> | string
    type?: StringFilter<"EditorAsset"> | string
    public_id?: StringFilter<"EditorAsset"> | string
    url?: StringFilter<"EditorAsset"> | string
    preview_url?: StringNullableFilter<"EditorAsset"> | string | null
    tags?: StringNullableListFilter<"EditorAsset">
    asset_folder?: StringNullableFilter<"EditorAsset"> | string | null
    etag?: StringFilter<"EditorAsset"> | string
    createdAt?: DateTimeFilter<"EditorAsset"> | Date | string
    name?: StringNullableFilter<"EditorAsset"> | string | null
  }

  export type EditorAssetOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    uploadedBy?: SortOrder
    type?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    preview_url?: SortOrder
    tags?: SortOrder
    asset_folder?: SortOrder
    etag?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type EditorAssetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    public_id?: string
    userId_etag?: EditorAssetUserIdEtagCompoundUniqueInput
    AND?: EditorAssetWhereInput | EditorAssetWhereInput[]
    OR?: EditorAssetWhereInput[]
    NOT?: EditorAssetWhereInput | EditorAssetWhereInput[]
    userId?: StringNullableFilter<"EditorAsset"> | string | null
    uploadedBy?: StringFilter<"EditorAsset"> | string
    type?: StringFilter<"EditorAsset"> | string
    url?: StringFilter<"EditorAsset"> | string
    preview_url?: StringNullableFilter<"EditorAsset"> | string | null
    tags?: StringNullableListFilter<"EditorAsset">
    asset_folder?: StringNullableFilter<"EditorAsset"> | string | null
    etag?: StringFilter<"EditorAsset"> | string
    createdAt?: DateTimeFilter<"EditorAsset"> | Date | string
    name?: StringNullableFilter<"EditorAsset"> | string | null
  }, "id" | "public_id" | "userId_etag">

  export type EditorAssetOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    uploadedBy?: SortOrder
    type?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    preview_url?: SortOrder
    tags?: SortOrder
    asset_folder?: SortOrder
    etag?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
    _count?: EditorAssetCountOrderByAggregateInput
    _max?: EditorAssetMaxOrderByAggregateInput
    _min?: EditorAssetMinOrderByAggregateInput
  }

  export type EditorAssetScalarWhereWithAggregatesInput = {
    AND?: EditorAssetScalarWhereWithAggregatesInput | EditorAssetScalarWhereWithAggregatesInput[]
    OR?: EditorAssetScalarWhereWithAggregatesInput[]
    NOT?: EditorAssetScalarWhereWithAggregatesInput | EditorAssetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EditorAsset"> | string
    userId?: StringNullableWithAggregatesFilter<"EditorAsset"> | string | null
    uploadedBy?: StringWithAggregatesFilter<"EditorAsset"> | string
    type?: StringWithAggregatesFilter<"EditorAsset"> | string
    public_id?: StringWithAggregatesFilter<"EditorAsset"> | string
    url?: StringWithAggregatesFilter<"EditorAsset"> | string
    preview_url?: StringNullableWithAggregatesFilter<"EditorAsset"> | string | null
    tags?: StringNullableListFilter<"EditorAsset">
    asset_folder?: StringNullableWithAggregatesFilter<"EditorAsset"> | string | null
    etag?: StringWithAggregatesFilter<"EditorAsset"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EditorAsset"> | Date | string
    name?: StringNullableWithAggregatesFilter<"EditorAsset"> | string | null
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    vendorId?: StringFilter<"TeamMember"> | string
    name?: StringFilter<"TeamMember"> | string
    position?: StringFilter<"TeamMember"> | string
    bio?: StringFilter<"TeamMember"> | string
    email?: StringFilter<"TeamMember"> | string
    photo_url?: StringNullableFilter<"TeamMember"> | string | null
    social_links?: JsonNullableFilter<"TeamMember">
    created_at?: DateTimeFilter<"TeamMember"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    social_links?: SortOrder
    created_at?: SortOrder
    vendor?: VendorOrderByWithRelationInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    vendorId?: StringFilter<"TeamMember"> | string
    name?: StringFilter<"TeamMember"> | string
    position?: StringFilter<"TeamMember"> | string
    bio?: StringFilter<"TeamMember"> | string
    email?: StringFilter<"TeamMember"> | string
    photo_url?: StringNullableFilter<"TeamMember"> | string | null
    social_links?: JsonNullableFilter<"TeamMember">
    created_at?: DateTimeFilter<"TeamMember"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }, "id">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    social_links?: SortOrder
    created_at?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamMember"> | string
    vendorId?: StringWithAggregatesFilter<"TeamMember"> | string
    name?: StringWithAggregatesFilter<"TeamMember"> | string
    position?: StringWithAggregatesFilter<"TeamMember"> | string
    bio?: StringWithAggregatesFilter<"TeamMember"> | string
    email?: StringWithAggregatesFilter<"TeamMember"> | string
    photo_url?: StringNullableWithAggregatesFilter<"TeamMember"> | string | null
    social_links?: JsonNullableWithAggregatesFilter<"TeamMember">
    created_at?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    id?: StringFilter<"Promotion"> | string
    vendorId?: StringFilter<"Promotion"> | string
    promotion_title?: StringFilter<"Promotion"> | string
    description?: StringFilter<"Promotion"> | string
    discount_percentage?: FloatFilter<"Promotion"> | number
    start_date?: DateTimeFilter<"Promotion"> | Date | string
    end_date?: DateTimeFilter<"Promotion"> | Date | string
    created_at?: DateTimeFilter<"Promotion"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }

  export type PromotionOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    promotion_title?: SortOrder
    description?: SortOrder
    discount_percentage?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    vendor?: VendorOrderByWithRelationInput
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    vendorId?: StringFilter<"Promotion"> | string
    promotion_title?: StringFilter<"Promotion"> | string
    description?: StringFilter<"Promotion"> | string
    discount_percentage?: FloatFilter<"Promotion"> | number
    start_date?: DateTimeFilter<"Promotion"> | Date | string
    end_date?: DateTimeFilter<"Promotion"> | Date | string
    created_at?: DateTimeFilter<"Promotion"> | Date | string
    vendor?: XOR<VendorScalarRelationFilter, VendorWhereInput>
  }, "id">

  export type PromotionOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    promotion_title?: SortOrder
    description?: SortOrder
    discount_percentage?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _avg?: PromotionAvgOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
    _sum?: PromotionSumOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promotion"> | string
    vendorId?: StringWithAggregatesFilter<"Promotion"> | string
    promotion_title?: StringWithAggregatesFilter<"Promotion"> | string
    description?: StringWithAggregatesFilter<"Promotion"> | string
    discount_percentage?: FloatWithAggregatesFilter<"Promotion"> | number
    start_date?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    price?: FloatFilter<"Plan"> | number
    duration?: StringFilter<"Plan"> | string
    description?: StringFilter<"Plan"> | string
    features?: JsonNullableFilter<"Plan">
    trial_period?: IntNullableFilter<"Plan"> | number | null
    is_active?: BoolFilter<"Plan"> | boolean
    created_at?: DateTimeFilter<"Plan"> | Date | string
    updated_at?: DateTimeFilter<"Plan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    features?: SortOrder
    trial_period?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    price?: FloatFilter<"Plan"> | number
    duration?: StringFilter<"Plan"> | string
    description?: StringFilter<"Plan"> | string
    features?: JsonNullableFilter<"Plan">
    trial_period?: IntNullableFilter<"Plan"> | number | null
    is_active?: BoolFilter<"Plan"> | boolean
    created_at?: DateTimeFilter<"Plan"> | Date | string
    updated_at?: DateTimeFilter<"Plan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    features?: SortOrder
    trial_period?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    price?: FloatWithAggregatesFilter<"Plan"> | number
    duration?: StringWithAggregatesFilter<"Plan"> | string
    description?: StringWithAggregatesFilter<"Plan"> | string
    features?: JsonNullableWithAggregatesFilter<"Plan">
    trial_period?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    is_active?: BoolWithAggregatesFilter<"Plan"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    vendorId?: StringNullableFilter<"Subscription"> | string | null
    planId?: StringFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    order_id?: StringFilter<"Subscription"> | string
    payment_id?: StringNullableFilter<"Subscription"> | string | null
    start_date?: DateTimeFilter<"Subscription"> | Date | string
    end_date?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    auto_renew?: BoolFilter<"Subscription"> | boolean
    is_trial?: BoolFilter<"Subscription"> | boolean
    trial_end_date?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    created_at?: DateTimeFilter<"Subscription"> | Date | string
    updated_at?: DateTimeFilter<"Subscription"> | Date | string
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    payments?: PaymentListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    order_id?: SortOrder
    payment_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    auto_renew?: SortOrder
    is_trial?: SortOrder
    trial_end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    vendorId?: StringNullableFilter<"Subscription"> | string | null
    planId?: StringFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    order_id?: StringFilter<"Subscription"> | string
    payment_id?: StringNullableFilter<"Subscription"> | string | null
    start_date?: DateTimeFilter<"Subscription"> | Date | string
    end_date?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    auto_renew?: BoolFilter<"Subscription"> | boolean
    is_trial?: BoolFilter<"Subscription"> | boolean
    trial_end_date?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    created_at?: DateTimeFilter<"Subscription"> | Date | string
    updated_at?: DateTimeFilter<"Subscription"> | Date | string
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    payments?: PaymentListRelationFilter
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    order_id?: SortOrder
    payment_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    auto_renew?: SortOrder
    is_trial?: SortOrder
    trial_end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    vendorId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    order_id?: StringWithAggregatesFilter<"Subscription"> | string
    payment_id?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    start_date?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    auto_renew?: BoolWithAggregatesFilter<"Subscription"> | boolean
    is_trial?: BoolWithAggregatesFilter<"Subscription"> | boolean
    trial_end_date?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    vendorId?: StringNullableFilter<"Payment"> | string | null
    subscriptionId?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    payment_method?: StringNullableFilter<"Payment"> | string | null
    razorpay_order_id?: StringNullableFilter<"Payment"> | string | null
    razorpay_payment_id?: StringNullableFilter<"Payment"> | string | null
    refund_id?: StringNullableFilter<"Payment"> | string | null
    is_refunded?: BoolFilter<"Payment"> | boolean
    failure_reason?: StringNullableFilter<"Payment"> | string | null
    vpa?: StringNullableFilter<"Payment"> | string | null
    fee?: FloatNullableFilter<"Payment"> | number | null
    tax?: FloatNullableFilter<"Payment"> | number | null
    rrn?: StringNullableFilter<"Payment"> | string | null
    upi_transaction_id?: StringNullableFilter<"Payment"> | string | null
    email?: StringNullableFilter<"Payment"> | string | null
    contact?: StringNullableFilter<"Payment"> | string | null
    acquirer_data?: JsonNullableFilter<"Payment">
    notes?: JsonNullableFilter<"Payment">
    autoRenew?: BoolFilter<"Payment"> | boolean
    created_at?: DateTimeFilter<"Payment"> | Date | string
    updated_at?: DateTimeFilter<"Payment"> | Date | string
    bill_generated?: BoolFilter<"Payment"> | boolean
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    invoices?: InvoiceListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    refund_id?: SortOrder
    is_refunded?: SortOrder
    failure_reason?: SortOrder
    vpa?: SortOrder
    fee?: SortOrder
    tax?: SortOrder
    rrn?: SortOrder
    upi_transaction_id?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    acquirer_data?: SortOrder
    notes?: SortOrder
    autoRenew?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bill_generated?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    vendorId?: StringNullableFilter<"Payment"> | string | null
    subscriptionId?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    payment_method?: StringNullableFilter<"Payment"> | string | null
    razorpay_order_id?: StringNullableFilter<"Payment"> | string | null
    razorpay_payment_id?: StringNullableFilter<"Payment"> | string | null
    refund_id?: StringNullableFilter<"Payment"> | string | null
    is_refunded?: BoolFilter<"Payment"> | boolean
    failure_reason?: StringNullableFilter<"Payment"> | string | null
    vpa?: StringNullableFilter<"Payment"> | string | null
    fee?: FloatNullableFilter<"Payment"> | number | null
    tax?: FloatNullableFilter<"Payment"> | number | null
    rrn?: StringNullableFilter<"Payment"> | string | null
    upi_transaction_id?: StringNullableFilter<"Payment"> | string | null
    email?: StringNullableFilter<"Payment"> | string | null
    contact?: StringNullableFilter<"Payment"> | string | null
    acquirer_data?: JsonNullableFilter<"Payment">
    notes?: JsonNullableFilter<"Payment">
    autoRenew?: BoolFilter<"Payment"> | boolean
    created_at?: DateTimeFilter<"Payment"> | Date | string
    updated_at?: DateTimeFilter<"Payment"> | Date | string
    bill_generated?: BoolFilter<"Payment"> | boolean
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    invoices?: InvoiceListRelationFilter
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    refund_id?: SortOrder
    is_refunded?: SortOrder
    failure_reason?: SortOrder
    vpa?: SortOrder
    fee?: SortOrder
    tax?: SortOrder
    rrn?: SortOrder
    upi_transaction_id?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    acquirer_data?: SortOrder
    notes?: SortOrder
    autoRenew?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bill_generated?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    vendorId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    subscriptionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    currency?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    payment_method?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    razorpay_order_id?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    razorpay_payment_id?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    refund_id?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    is_refunded?: BoolWithAggregatesFilter<"Payment"> | boolean
    failure_reason?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    vpa?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    fee?: FloatNullableWithAggregatesFilter<"Payment"> | number | null
    tax?: FloatNullableWithAggregatesFilter<"Payment"> | number | null
    rrn?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    upi_transaction_id?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    email?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    contact?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    acquirer_data?: JsonNullableWithAggregatesFilter<"Payment">
    notes?: JsonNullableWithAggregatesFilter<"Payment">
    autoRenew?: BoolWithAggregatesFilter<"Payment"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    bill_generated?: BoolWithAggregatesFilter<"Payment"> | boolean
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    vendorId?: StringNullableFilter<"Invoice"> | string | null
    paymentId?: StringNullableFilter<"Invoice"> | string | null
    nextBillingDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    discount?: FloatFilter<"Invoice"> | number
    totalExclIGST?: FloatFilter<"Invoice"> | number
    igstAmount?: FloatFilter<"Invoice"> | number
    igstTotal?: FloatFilter<"Invoice"> | number
    totalAmount?: FloatFilter<"Invoice"> | number
    amountDue?: FloatFilter<"Invoice"> | number
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    updated_at?: DateTimeFilter<"Invoice"> | Date | string
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    vendorId?: SortOrder
    paymentId?: SortOrder
    nextBillingDate?: SortOrder
    discount?: SortOrder
    totalExclIGST?: SortOrder
    igstAmount?: SortOrder
    igstTotal?: SortOrder
    totalAmount?: SortOrder
    amountDue?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceNumber?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    vendorId?: StringNullableFilter<"Invoice"> | string | null
    paymentId?: StringNullableFilter<"Invoice"> | string | null
    nextBillingDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    discount?: FloatFilter<"Invoice"> | number
    totalExclIGST?: FloatFilter<"Invoice"> | number
    igstAmount?: FloatFilter<"Invoice"> | number
    igstTotal?: FloatFilter<"Invoice"> | number
    totalAmount?: FloatFilter<"Invoice"> | number
    amountDue?: FloatFilter<"Invoice"> | number
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    updated_at?: DateTimeFilter<"Invoice"> | Date | string
    vendor?: XOR<VendorNullableScalarRelationFilter, VendorWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "invoiceNumber">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    vendorId?: SortOrder
    paymentId?: SortOrder
    nextBillingDate?: SortOrder
    discount?: SortOrder
    totalExclIGST?: SortOrder
    igstAmount?: SortOrder
    igstTotal?: SortOrder
    totalAmount?: SortOrder
    amountDue?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceNumber?: StringWithAggregatesFilter<"Invoice"> | string
    vendorId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    paymentId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    nextBillingDate?: DateTimeNullableWithAggregatesFilter<"Invoice"> | Date | string | null
    discount?: FloatWithAggregatesFilter<"Invoice"> | number
    totalExclIGST?: FloatWithAggregatesFilter<"Invoice"> | number
    igstAmount?: FloatWithAggregatesFilter<"Invoice"> | number
    igstTotal?: FloatWithAggregatesFilter<"Invoice"> | number
    totalAmount?: FloatWithAggregatesFilter<"Invoice"> | number
    amountDue?: FloatWithAggregatesFilter<"Invoice"> | number
    created_at?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type CounterWhereInput = {
    AND?: CounterWhereInput | CounterWhereInput[]
    OR?: CounterWhereInput[]
    NOT?: CounterWhereInput | CounterWhereInput[]
    id?: StringFilter<"Counter"> | string
    name?: StringFilter<"Counter"> | string
    value?: IntFilter<"Counter"> | number
  }

  export type CounterOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type CounterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CounterWhereInput | CounterWhereInput[]
    OR?: CounterWhereInput[]
    NOT?: CounterWhereInput | CounterWhereInput[]
    value?: IntFilter<"Counter"> | number
  }, "id" | "name">

  export type CounterOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    _count?: CounterCountOrderByAggregateInput
    _avg?: CounterAvgOrderByAggregateInput
    _max?: CounterMaxOrderByAggregateInput
    _min?: CounterMinOrderByAggregateInput
    _sum?: CounterSumOrderByAggregateInput
  }

  export type CounterScalarWhereWithAggregatesInput = {
    AND?: CounterScalarWhereWithAggregatesInput | CounterScalarWhereWithAggregatesInput[]
    OR?: CounterScalarWhereWithAggregatesInput[]
    NOT?: CounterScalarWhereWithAggregatesInput | CounterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Counter"> | string
    name?: StringWithAggregatesFilter<"Counter"> | string
    value?: IntWithAggregatesFilter<"Counter"> | number
  }

  export type VendorCreateInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceCreateNestedManyWithoutVendorInput
    promotions?: PromotionCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberCreateNestedManyWithoutVendorInput
    payment?: PaymentCreateNestedManyWithoutVendorInput
    invoices?: InvoiceCreateNestedManyWithoutVendorInput
    Subscription?: SubscriptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceUncheckedCreateNestedManyWithoutVendorInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberUncheckedCreateNestedManyWithoutVendorInput
    payment?: PaymentUncheckedCreateNestedManyWithoutVendorInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutVendorInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUpdateManyWithoutVendorNestedInput
    payment?: PaymentUpdateManyWithoutVendorNestedInput
    invoices?: InvoiceUpdateManyWithoutVendorNestedInput
    Subscription?: SubscriptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUncheckedUpdateManyWithoutVendorNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutVendorNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutVendorNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
  }

  export type VendorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type VendorUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateInput = {
    id?: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    vendor: VendorCreateNestedOneWithoutServicesInput
    availabilities?: AvailabilityCreateNestedManyWithoutServiceInput
    feedback?: FeedbackCreateNestedManyWithoutServiceInput
    media?: MediaCreateNestedManyWithoutServiceInput
    views?: ViewsCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    vendorId: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutServiceInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutServiceInput
    media?: MediaUncheckedCreateNestedManyWithoutServiceInput
    views?: ViewsUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutServicesNestedInput
    availabilities?: AvailabilityUpdateManyWithoutServiceNestedInput
    feedback?: FeedbackUpdateManyWithoutServiceNestedInput
    media?: MediaUpdateManyWithoutServiceNestedInput
    views?: ViewsUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutServiceNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutServiceNestedInput
    media?: MediaUncheckedUpdateManyWithoutServiceNestedInput
    views?: ViewsUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    vendorId: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsCreateInput = {
    id?: string
    userId: string
    viewCount?: number
    lead?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    service: ServiceCreateNestedOneWithoutViewsInput
  }

  export type ViewsUncheckedCreateInput = {
    id?: string
    serviceId: string
    userId: string
    viewCount?: number
    lead?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ViewsUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    lead?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutViewsNestedInput
  }

  export type ViewsUncheckedUpdateInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    lead?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsCreateManyInput = {
    id?: string
    serviceId: string
    userId: string
    viewCount?: number
    lead?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ViewsUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    lead?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsUncheckedUpdateManyInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    lead?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateInput = {
    id?: string
    userId: string
    comment: string
    rating: number
    user_name?: string
    created_at?: Date | string
    updated_at?: Date | string
    service: ServiceCreateNestedOneWithoutFeedbackInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: string
    userId: string
    serviceId: string
    comment: string
    rating: number
    user_name?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FeedbackUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutFeedbackNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: string
    userId: string
    serviceId: string
    comment: string
    rating: number
    user_name?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateInput = {
    id?: string
    available_date: Date | string
    wedding_date: Date | string
    is_available: boolean
    created_at?: Date | string
    service: ServiceCreateNestedOneWithoutAvailabilitiesInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    serviceId: string
    available_date: Date | string
    wedding_date: Date | string
    is_available: boolean
    created_at?: Date | string
  }

  export type AvailabilityUpdateInput = {
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateManyInput = {
    id?: string
    serviceId: string
    available_date: Date | string
    wedding_date: Date | string
    is_available: boolean
    created_at?: Date | string
  }

  export type AvailabilityUpdateManyMutationInput = {
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id?: string
    image_urls: InputJsonValue
    video_urls: InputJsonValue
    uploaded_at?: Date | string
    service: ServiceCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    serviceId: string
    image_urls: InputJsonValue
    video_urls: InputJsonValue
    uploaded_at?: Date | string
  }

  export type MediaUpdateInput = {
    image_urls?: InputJsonValue | InputJsonValue
    video_urls?: InputJsonValue | InputJsonValue
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
    image_urls?: InputJsonValue | InputJsonValue
    video_urls?: InputJsonValue | InputJsonValue
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: string
    serviceId: string
    image_urls: InputJsonValue
    video_urls: InputJsonValue
    uploaded_at?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    image_urls?: InputJsonValue | InputJsonValue
    video_urls?: InputJsonValue | InputJsonValue
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
    image_urls?: InputJsonValue | InputJsonValue
    video_urls?: InputJsonValue | InputJsonValue
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditorAssetCreateInput = {
    id?: string
    userId?: string | null
    uploadedBy: string
    type: string
    public_id: string
    url: string
    preview_url?: string | null
    tags?: EditorAssetCreatetagsInput | string[]
    asset_folder?: string | null
    etag: string
    createdAt?: Date | string
    name?: string | null
  }

  export type EditorAssetUncheckedCreateInput = {
    id?: string
    userId?: string | null
    uploadedBy: string
    type: string
    public_id: string
    url: string
    preview_url?: string | null
    tags?: EditorAssetCreatetagsInput | string[]
    asset_folder?: string | null
    etag: string
    createdAt?: Date | string
    name?: string | null
  }

  export type EditorAssetUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: EditorAssetUpdatetagsInput | string[]
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EditorAssetUncheckedUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: EditorAssetUpdatetagsInput | string[]
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EditorAssetCreateManyInput = {
    id?: string
    userId?: string | null
    uploadedBy: string
    type: string
    public_id: string
    url: string
    preview_url?: string | null
    tags?: EditorAssetCreatetagsInput | string[]
    asset_folder?: string | null
    etag: string
    createdAt?: Date | string
    name?: string | null
  }

  export type EditorAssetUpdateManyMutationInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: EditorAssetUpdatetagsInput | string[]
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EditorAssetUncheckedUpdateManyInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    uploadedBy?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    preview_url?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: EditorAssetUpdatetagsInput | string[]
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamMemberCreateInput = {
    id?: string
    name: string
    position: string
    bio: string
    email: string
    photo_url?: string | null
    social_links?: InputJsonValue | null
    created_at?: Date | string
    vendor: VendorCreateNestedOneWithoutTeam_membersInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: string
    vendorId: string
    name: string
    position: string
    bio: string
    email: string
    photo_url?: string | null
    social_links?: InputJsonValue | null
    created_at?: Date | string
  }

  export type TeamMemberUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutTeam_membersNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyInput = {
    id?: string
    vendorId: string
    name: string
    position: string
    bio: string
    email: string
    photo_url?: string | null
    social_links?: InputJsonValue | null
    created_at?: Date | string
  }

  export type TeamMemberUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateInput = {
    id?: string
    promotion_title: string
    description: string
    discount_percentage?: number
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
    vendor: VendorCreateNestedOneWithoutPromotionsInput
  }

  export type PromotionUncheckedCreateInput = {
    id?: string
    vendorId: string
    promotion_title: string
    description: string
    discount_percentage?: number
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
  }

  export type PromotionUpdateInput = {
    promotion_title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount_percentage?: FloatFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutPromotionsNestedInput
  }

  export type PromotionUncheckedUpdateInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    promotion_title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount_percentage?: FloatFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateManyInput = {
    id?: string
    vendorId: string
    promotion_title: string
    description: string
    discount_percentage?: number
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
  }

  export type PromotionUpdateManyMutationInput = {
    promotion_title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount_percentage?: FloatFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateManyInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    promotion_title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount_percentage?: FloatFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    price: number
    duration: string
    description: string
    features?: InputJsonValue | null
    trial_period?: number | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    duration: string
    description: string
    features?: InputJsonValue | null
    trial_period?: number | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: InputJsonValue | InputJsonValue | null
    trial_period?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: InputJsonValue | InputJsonValue | null
    trial_period?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    price: number
    duration: string
    description: string
    features?: InputJsonValue | null
    trial_period?: number | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: InputJsonValue | InputJsonValue | null
    trial_period?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: InputJsonValue | InputJsonValue | null
    trial_period?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    status?: $Enums.SubscriptionStatus
    order_id: string
    payment_id?: string | null
    start_date?: Date | string
    end_date?: Date | string | null
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    vendor?: VendorCreateNestedOneWithoutSubscriptionInput
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    vendorId?: string | null
    planId: string
    status?: $Enums.SubscriptionStatus
    order_id: string
    payment_id?: string | null
    start_date?: Date | string
    end_date?: Date | string | null
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    order_id?: StringFieldUpdateOperationsInput | string
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    is_trial?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutSubscriptionNestedInput
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    order_id?: StringFieldUpdateOperationsInput | string
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    is_trial?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    vendorId?: string | null
    planId: string
    status?: $Enums.SubscriptionStatus
    order_id: string
    payment_id?: string | null
    start_date?: Date | string
    end_date?: Date | string | null
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    order_id?: StringFieldUpdateOperationsInput | string
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    is_trial?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    order_id?: StringFieldUpdateOperationsInput | string
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    is_trial?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    currency: string
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    refund_id?: string | null
    is_refunded?: boolean
    failure_reason?: string | null
    vpa?: string | null
    fee?: number | null
    tax?: number | null
    rrn?: string | null
    upi_transaction_id?: string | null
    email?: string | null
    contact?: string | null
    acquirer_data?: InputJsonValue | null
    notes?: InputJsonValue | null
    autoRenew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bill_generated?: boolean
    vendor?: VendorCreateNestedOneWithoutPaymentInput
    subscription?: SubscriptionCreateNestedOneWithoutPaymentsInput
    invoices?: InvoiceCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    vendorId?: string | null
    subscriptionId?: string | null
    amount: number
    currency: string
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    refund_id?: string | null
    is_refunded?: boolean
    failure_reason?: string | null
    vpa?: string | null
    fee?: number | null
    tax?: number | null
    rrn?: string | null
    upi_transaction_id?: string | null
    email?: string | null
    contact?: string | null
    acquirer_data?: InputJsonValue | null
    notes?: InputJsonValue | null
    autoRenew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bill_generated?: boolean
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    refund_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_refunded?: BoolFieldUpdateOperationsInput | boolean
    failure_reason?: NullableStringFieldUpdateOperationsInput | string | null
    vpa?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: NullableFloatFieldUpdateOperationsInput | number | null
    rrn?: NullableStringFieldUpdateOperationsInput | string | null
    upi_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    acquirer_data?: InputJsonValue | InputJsonValue | null
    notes?: InputJsonValue | InputJsonValue | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_generated?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneWithoutPaymentNestedInput
    subscription?: SubscriptionUpdateOneWithoutPaymentsNestedInput
    invoices?: InvoiceUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    refund_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_refunded?: BoolFieldUpdateOperationsInput | boolean
    failure_reason?: NullableStringFieldUpdateOperationsInput | string | null
    vpa?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: NullableFloatFieldUpdateOperationsInput | number | null
    rrn?: NullableStringFieldUpdateOperationsInput | string | null
    upi_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    acquirer_data?: InputJsonValue | InputJsonValue | null
    notes?: InputJsonValue | InputJsonValue | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_generated?: BoolFieldUpdateOperationsInput | boolean
    invoices?: InvoiceUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    vendorId?: string | null
    subscriptionId?: string | null
    amount: number
    currency: string
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    refund_id?: string | null
    is_refunded?: boolean
    failure_reason?: string | null
    vpa?: string | null
    fee?: number | null
    tax?: number | null
    rrn?: string | null
    upi_transaction_id?: string | null
    email?: string | null
    contact?: string | null
    acquirer_data?: InputJsonValue | null
    notes?: InputJsonValue | null
    autoRenew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bill_generated?: boolean
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    refund_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_refunded?: BoolFieldUpdateOperationsInput | boolean
    failure_reason?: NullableStringFieldUpdateOperationsInput | string | null
    vpa?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: NullableFloatFieldUpdateOperationsInput | number | null
    rrn?: NullableStringFieldUpdateOperationsInput | string | null
    upi_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    acquirer_data?: InputJsonValue | InputJsonValue | null
    notes?: InputJsonValue | InputJsonValue | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_generated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentUncheckedUpdateManyInput = {
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    refund_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_refunded?: BoolFieldUpdateOperationsInput | boolean
    failure_reason?: NullableStringFieldUpdateOperationsInput | string | null
    vpa?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: NullableFloatFieldUpdateOperationsInput | number | null
    rrn?: NullableStringFieldUpdateOperationsInput | string | null
    upi_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    acquirer_data?: InputJsonValue | InputJsonValue | null
    notes?: InputJsonValue | InputJsonValue | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_generated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceNumber: string
    nextBillingDate?: Date | string | null
    discount?: number
    totalExclIGST: number
    igstAmount: number
    igstTotal: number
    totalAmount: number
    amountDue?: number
    created_at?: Date | string
    updated_at?: Date | string
    vendor?: VendorCreateNestedOneWithoutInvoicesInput
    payment?: PaymentCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    invoiceNumber: string
    vendorId?: string | null
    paymentId?: string | null
    nextBillingDate?: Date | string | null
    discount?: number
    totalExclIGST: number
    igstAmount: number
    igstTotal: number
    totalAmount: number
    amountDue?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoiceUpdateInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    totalExclIGST?: FloatFieldUpdateOperationsInput | number
    igstAmount?: FloatFieldUpdateOperationsInput | number
    igstTotal?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutInvoicesNestedInput
    payment?: PaymentUpdateOneWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    totalExclIGST?: FloatFieldUpdateOperationsInput | number
    igstAmount?: FloatFieldUpdateOperationsInput | number
    igstTotal?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: string
    invoiceNumber: string
    vendorId?: string | null
    paymentId?: string | null
    nextBillingDate?: Date | string | null
    discount?: number
    totalExclIGST: number
    igstAmount: number
    igstTotal: number
    totalAmount: number
    amountDue?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    totalExclIGST?: FloatFieldUpdateOperationsInput | number
    igstAmount?: FloatFieldUpdateOperationsInput | number
    igstTotal?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    totalExclIGST?: FloatFieldUpdateOperationsInput | number
    igstAmount?: FloatFieldUpdateOperationsInput | number
    igstTotal?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CounterCreateInput = {
    id?: string
    name: string
    value: number
  }

  export type CounterUncheckedCreateInput = {
    id?: string
    name: string
    value: number
  }

  export type CounterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type CounterUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type CounterCreateManyInput = {
    id?: string
    name: string
    value: number
  }

  export type CounterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type CounterUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type PromotionListRelationFilter = {
    every?: PromotionWhereInput
    some?: PromotionWhereInput
    none?: PromotionWhereInput
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    business_name?: SortOrder
    business_category?: SortOrder
    license_number?: SortOrder
    service_type?: SortOrder
    description?: SortOrder
    logo_url?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    email?: SortOrder
    state?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrder
    social_networks?: SortOrder
    faqs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_verified?: SortOrder
    refresh_Token?: SortOrder
    resetPassword_Token?: SortOrder
    role?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    business_name?: SortOrder
    business_category?: SortOrder
    license_number?: SortOrder
    description?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    email?: SortOrder
    state?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_verified?: SortOrder
    refresh_Token?: SortOrder
    resetPassword_Token?: SortOrder
    role?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    business_name?: SortOrder
    business_category?: SortOrder
    license_number?: SortOrder
    description?: SortOrder
    country?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    email?: SortOrder
    state?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_verified?: SortOrder
    refresh_Token?: SortOrder
    resetPassword_Token?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type VendorScalarRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type ViewsListRelationFilter = {
    every?: ViewsWhereInput
    some?: ViewsWhereInput
    none?: ViewsWhereInput
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    service_name?: SortOrder
    description?: SortOrder
    min_price?: SortOrder
    max_price?: SortOrder
    city?: SortOrder
    state?: SortOrder
    price?: SortOrder
    service_type?: SortOrder
    service_category?: SortOrder
    service_unit?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    faqs?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    min_price?: SortOrder
    max_price?: SortOrder
    price?: SortOrder
    rating?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    service_name?: SortOrder
    description?: SortOrder
    min_price?: SortOrder
    max_price?: SortOrder
    city?: SortOrder
    state?: SortOrder
    price?: SortOrder
    service_type?: SortOrder
    service_category?: SortOrder
    service_unit?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    service_name?: SortOrder
    description?: SortOrder
    min_price?: SortOrder
    max_price?: SortOrder
    city?: SortOrder
    state?: SortOrder
    price?: SortOrder
    service_type?: SortOrder
    service_category?: SortOrder
    service_unit?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    min_price?: SortOrder
    max_price?: SortOrder
    price?: SortOrder
    rating?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ViewsServiceIdUserIdCompoundUniqueInput = {
    serviceId: string
    userId: string
  }

  export type ViewsCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
    lead?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ViewsAvgOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type ViewsMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
    lead?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ViewsMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    userId?: SortOrder
    viewCount?: SortOrder
    lead?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ViewsSumOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FeedbackServiceIdUserIdCompoundUniqueInput = {
    serviceId: string
    userId: string
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    user_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    user_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    serviceId?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    user_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    available_date?: SortOrder
    wedding_date?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    available_date?: SortOrder
    wedding_date?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    available_date?: SortOrder
    wedding_date?: SortOrder
    is_available?: SortOrder
    created_at?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    image_urls?: SortOrder
    video_urls?: SortOrder
    uploaded_at?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    uploaded_at?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    uploaded_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EditorAssetUserIdEtagCompoundUniqueInput = {
    userId: string
    etag: string
  }

  export type EditorAssetCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    uploadedBy?: SortOrder
    type?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    preview_url?: SortOrder
    tags?: SortOrder
    asset_folder?: SortOrder
    etag?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type EditorAssetMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    uploadedBy?: SortOrder
    type?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    preview_url?: SortOrder
    asset_folder?: SortOrder
    etag?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type EditorAssetMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    uploadedBy?: SortOrder
    type?: SortOrder
    public_id?: SortOrder
    url?: SortOrder
    preview_url?: SortOrder
    asset_folder?: SortOrder
    etag?: SortOrder
    createdAt?: SortOrder
    name?: SortOrder
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    social_links?: SortOrder
    created_at?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    created_at?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    bio?: SortOrder
    email?: SortOrder
    photo_url?: SortOrder
    created_at?: SortOrder
  }

  export type PromotionCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    promotion_title?: SortOrder
    description?: SortOrder
    discount_percentage?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type PromotionAvgOrderByAggregateInput = {
    discount_percentage?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    promotion_title?: SortOrder
    description?: SortOrder
    discount_percentage?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    promotion_title?: SortOrder
    description?: SortOrder
    discount_percentage?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    created_at?: SortOrder
  }

  export type PromotionSumOrderByAggregateInput = {
    discount_percentage?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    features?: SortOrder
    trial_period?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    price?: SortOrder
    trial_period?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    trial_period?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    description?: SortOrder
    trial_period?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    price?: SortOrder
    trial_period?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type VendorNullableScalarRelationFilter = {
    is?: VendorWhereInput | null
    isNot?: VendorWhereInput | null
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    order_id?: SortOrder
    payment_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    auto_renew?: SortOrder
    is_trial?: SortOrder
    trial_end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    order_id?: SortOrder
    payment_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    auto_renew?: SortOrder
    is_trial?: SortOrder
    trial_end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    order_id?: SortOrder
    payment_id?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    auto_renew?: SortOrder
    is_trial?: SortOrder
    trial_end_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    refund_id?: SortOrder
    is_refunded?: SortOrder
    failure_reason?: SortOrder
    vpa?: SortOrder
    fee?: SortOrder
    tax?: SortOrder
    rrn?: SortOrder
    upi_transaction_id?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    acquirer_data?: SortOrder
    notes?: SortOrder
    autoRenew?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bill_generated?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    fee?: SortOrder
    tax?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    refund_id?: SortOrder
    is_refunded?: SortOrder
    failure_reason?: SortOrder
    vpa?: SortOrder
    fee?: SortOrder
    tax?: SortOrder
    rrn?: SortOrder
    upi_transaction_id?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    autoRenew?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bill_generated?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    subscriptionId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    razorpay_order_id?: SortOrder
    razorpay_payment_id?: SortOrder
    refund_id?: SortOrder
    is_refunded?: SortOrder
    failure_reason?: SortOrder
    vpa?: SortOrder
    fee?: SortOrder
    tax?: SortOrder
    rrn?: SortOrder
    upi_transaction_id?: SortOrder
    email?: SortOrder
    contact?: SortOrder
    autoRenew?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bill_generated?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    fee?: SortOrder
    tax?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    vendorId?: SortOrder
    paymentId?: SortOrder
    nextBillingDate?: SortOrder
    discount?: SortOrder
    totalExclIGST?: SortOrder
    igstAmount?: SortOrder
    igstTotal?: SortOrder
    totalAmount?: SortOrder
    amountDue?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    discount?: SortOrder
    totalExclIGST?: SortOrder
    igstAmount?: SortOrder
    igstTotal?: SortOrder
    totalAmount?: SortOrder
    amountDue?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    vendorId?: SortOrder
    paymentId?: SortOrder
    nextBillingDate?: SortOrder
    discount?: SortOrder
    totalExclIGST?: SortOrder
    igstAmount?: SortOrder
    igstTotal?: SortOrder
    totalAmount?: SortOrder
    amountDue?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    vendorId?: SortOrder
    paymentId?: SortOrder
    nextBillingDate?: SortOrder
    discount?: SortOrder
    totalExclIGST?: SortOrder
    igstAmount?: SortOrder
    igstTotal?: SortOrder
    totalAmount?: SortOrder
    amountDue?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    discount?: SortOrder
    totalExclIGST?: SortOrder
    igstAmount?: SortOrder
    igstTotal?: SortOrder
    totalAmount?: SortOrder
    amountDue?: SortOrder
  }

  export type CounterCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type CounterAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type CounterMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type CounterMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type CounterSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type VendorCreateservice_typeInput = {
    set: string[]
  }

  export type ServiceCreateNestedManyWithoutVendorInput = {
    create?: XOR<ServiceCreateWithoutVendorInput, ServiceUncheckedCreateWithoutVendorInput> | ServiceCreateWithoutVendorInput[] | ServiceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutVendorInput | ServiceCreateOrConnectWithoutVendorInput[]
    createMany?: ServiceCreateManyVendorInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type PromotionCreateNestedManyWithoutVendorInput = {
    create?: XOR<PromotionCreateWithoutVendorInput, PromotionUncheckedCreateWithoutVendorInput> | PromotionCreateWithoutVendorInput[] | PromotionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutVendorInput | PromotionCreateOrConnectWithoutVendorInput[]
    createMany?: PromotionCreateManyVendorInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type TeamMemberCreateNestedManyWithoutVendorInput = {
    create?: XOR<TeamMemberCreateWithoutVendorInput, TeamMemberUncheckedCreateWithoutVendorInput> | TeamMemberCreateWithoutVendorInput[] | TeamMemberUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutVendorInput | TeamMemberCreateOrConnectWithoutVendorInput[]
    createMany?: TeamMemberCreateManyVendorInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutVendorInput = {
    create?: XOR<PaymentCreateWithoutVendorInput, PaymentUncheckedCreateWithoutVendorInput> | PaymentCreateWithoutVendorInput[] | PaymentUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutVendorInput | PaymentCreateOrConnectWithoutVendorInput[]
    createMany?: PaymentCreateManyVendorInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutVendorInput = {
    create?: XOR<InvoiceCreateWithoutVendorInput, InvoiceUncheckedCreateWithoutVendorInput> | InvoiceCreateWithoutVendorInput[] | InvoiceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutVendorInput | InvoiceCreateOrConnectWithoutVendorInput[]
    createMany?: InvoiceCreateManyVendorInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutVendorInput = {
    create?: XOR<SubscriptionCreateWithoutVendorInput, SubscriptionUncheckedCreateWithoutVendorInput> | SubscriptionCreateWithoutVendorInput[] | SubscriptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutVendorInput | SubscriptionCreateOrConnectWithoutVendorInput[]
    createMany?: SubscriptionCreateManyVendorInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<ServiceCreateWithoutVendorInput, ServiceUncheckedCreateWithoutVendorInput> | ServiceCreateWithoutVendorInput[] | ServiceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutVendorInput | ServiceCreateOrConnectWithoutVendorInput[]
    createMany?: ServiceCreateManyVendorInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type PromotionUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<PromotionCreateWithoutVendorInput, PromotionUncheckedCreateWithoutVendorInput> | PromotionCreateWithoutVendorInput[] | PromotionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutVendorInput | PromotionCreateOrConnectWithoutVendorInput[]
    createMany?: PromotionCreateManyVendorInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<TeamMemberCreateWithoutVendorInput, TeamMemberUncheckedCreateWithoutVendorInput> | TeamMemberCreateWithoutVendorInput[] | TeamMemberUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutVendorInput | TeamMemberCreateOrConnectWithoutVendorInput[]
    createMany?: TeamMemberCreateManyVendorInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<PaymentCreateWithoutVendorInput, PaymentUncheckedCreateWithoutVendorInput> | PaymentCreateWithoutVendorInput[] | PaymentUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutVendorInput | PaymentCreateOrConnectWithoutVendorInput[]
    createMany?: PaymentCreateManyVendorInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<InvoiceCreateWithoutVendorInput, InvoiceUncheckedCreateWithoutVendorInput> | InvoiceCreateWithoutVendorInput[] | InvoiceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutVendorInput | InvoiceCreateOrConnectWithoutVendorInput[]
    createMany?: InvoiceCreateManyVendorInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<SubscriptionCreateWithoutVendorInput, SubscriptionUncheckedCreateWithoutVendorInput> | SubscriptionCreateWithoutVendorInput[] | SubscriptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutVendorInput | SubscriptionCreateOrConnectWithoutVendorInput[]
    createMany?: SubscriptionCreateManyVendorInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type VendorUpdateservice_typeInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ServiceUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ServiceCreateWithoutVendorInput, ServiceUncheckedCreateWithoutVendorInput> | ServiceCreateWithoutVendorInput[] | ServiceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutVendorInput | ServiceCreateOrConnectWithoutVendorInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutVendorInput | ServiceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ServiceCreateManyVendorInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutVendorInput | ServiceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutVendorInput | ServiceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type PromotionUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PromotionCreateWithoutVendorInput, PromotionUncheckedCreateWithoutVendorInput> | PromotionCreateWithoutVendorInput[] | PromotionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutVendorInput | PromotionCreateOrConnectWithoutVendorInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutVendorInput | PromotionUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PromotionCreateManyVendorInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutVendorInput | PromotionUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutVendorInput | PromotionUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type TeamMemberUpdateManyWithoutVendorNestedInput = {
    create?: XOR<TeamMemberCreateWithoutVendorInput, TeamMemberUncheckedCreateWithoutVendorInput> | TeamMemberCreateWithoutVendorInput[] | TeamMemberUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutVendorInput | TeamMemberCreateOrConnectWithoutVendorInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutVendorInput | TeamMemberUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: TeamMemberCreateManyVendorInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutVendorInput | TeamMemberUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutVendorInput | TeamMemberUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PaymentCreateWithoutVendorInput, PaymentUncheckedCreateWithoutVendorInput> | PaymentCreateWithoutVendorInput[] | PaymentUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutVendorInput | PaymentCreateOrConnectWithoutVendorInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutVendorInput | PaymentUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PaymentCreateManyVendorInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutVendorInput | PaymentUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutVendorInput | PaymentUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutVendorNestedInput = {
    create?: XOR<InvoiceCreateWithoutVendorInput, InvoiceUncheckedCreateWithoutVendorInput> | InvoiceCreateWithoutVendorInput[] | InvoiceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutVendorInput | InvoiceCreateOrConnectWithoutVendorInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutVendorInput | InvoiceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: InvoiceCreateManyVendorInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutVendorInput | InvoiceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutVendorInput | InvoiceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SubscriptionCreateWithoutVendorInput, SubscriptionUncheckedCreateWithoutVendorInput> | SubscriptionCreateWithoutVendorInput[] | SubscriptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutVendorInput | SubscriptionCreateOrConnectWithoutVendorInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutVendorInput | SubscriptionUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SubscriptionCreateManyVendorInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutVendorInput | SubscriptionUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutVendorInput | SubscriptionUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ServiceCreateWithoutVendorInput, ServiceUncheckedCreateWithoutVendorInput> | ServiceCreateWithoutVendorInput[] | ServiceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutVendorInput | ServiceCreateOrConnectWithoutVendorInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutVendorInput | ServiceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ServiceCreateManyVendorInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutVendorInput | ServiceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutVendorInput | ServiceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type PromotionUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PromotionCreateWithoutVendorInput, PromotionUncheckedCreateWithoutVendorInput> | PromotionCreateWithoutVendorInput[] | PromotionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutVendorInput | PromotionCreateOrConnectWithoutVendorInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutVendorInput | PromotionUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PromotionCreateManyVendorInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutVendorInput | PromotionUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutVendorInput | PromotionUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type TeamMemberUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<TeamMemberCreateWithoutVendorInput, TeamMemberUncheckedCreateWithoutVendorInput> | TeamMemberCreateWithoutVendorInput[] | TeamMemberUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutVendorInput | TeamMemberCreateOrConnectWithoutVendorInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutVendorInput | TeamMemberUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: TeamMemberCreateManyVendorInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutVendorInput | TeamMemberUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutVendorInput | TeamMemberUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PaymentCreateWithoutVendorInput, PaymentUncheckedCreateWithoutVendorInput> | PaymentCreateWithoutVendorInput[] | PaymentUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutVendorInput | PaymentCreateOrConnectWithoutVendorInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutVendorInput | PaymentUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PaymentCreateManyVendorInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutVendorInput | PaymentUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutVendorInput | PaymentUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<InvoiceCreateWithoutVendorInput, InvoiceUncheckedCreateWithoutVendorInput> | InvoiceCreateWithoutVendorInput[] | InvoiceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutVendorInput | InvoiceCreateOrConnectWithoutVendorInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutVendorInput | InvoiceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: InvoiceCreateManyVendorInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutVendorInput | InvoiceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutVendorInput | InvoiceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<SubscriptionCreateWithoutVendorInput, SubscriptionUncheckedCreateWithoutVendorInput> | SubscriptionCreateWithoutVendorInput[] | SubscriptionUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutVendorInput | SubscriptionCreateOrConnectWithoutVendorInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutVendorInput | SubscriptionUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: SubscriptionCreateManyVendorInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutVendorInput | SubscriptionUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutVendorInput | SubscriptionUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutServicesInput = {
    create?: XOR<VendorCreateWithoutServicesInput, VendorUncheckedCreateWithoutServicesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutServicesInput
    connect?: VendorWhereUniqueInput
  }

  export type AvailabilityCreateNestedManyWithoutServiceInput = {
    create?: XOR<AvailabilityCreateWithoutServiceInput, AvailabilityUncheckedCreateWithoutServiceInput> | AvailabilityCreateWithoutServiceInput[] | AvailabilityUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutServiceInput | AvailabilityCreateOrConnectWithoutServiceInput[]
    createMany?: AvailabilityCreateManyServiceInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutServiceInput = {
    create?: XOR<FeedbackCreateWithoutServiceInput, FeedbackUncheckedCreateWithoutServiceInput> | FeedbackCreateWithoutServiceInput[] | FeedbackUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutServiceInput | FeedbackCreateOrConnectWithoutServiceInput[]
    createMany?: FeedbackCreateManyServiceInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type MediaCreateNestedManyWithoutServiceInput = {
    create?: XOR<MediaCreateWithoutServiceInput, MediaUncheckedCreateWithoutServiceInput> | MediaCreateWithoutServiceInput[] | MediaUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutServiceInput | MediaCreateOrConnectWithoutServiceInput[]
    createMany?: MediaCreateManyServiceInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ViewsCreateNestedManyWithoutServiceInput = {
    create?: XOR<ViewsCreateWithoutServiceInput, ViewsUncheckedCreateWithoutServiceInput> | ViewsCreateWithoutServiceInput[] | ViewsUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutServiceInput | ViewsCreateOrConnectWithoutServiceInput[]
    createMany?: ViewsCreateManyServiceInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AvailabilityCreateWithoutServiceInput, AvailabilityUncheckedCreateWithoutServiceInput> | AvailabilityCreateWithoutServiceInput[] | AvailabilityUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutServiceInput | AvailabilityCreateOrConnectWithoutServiceInput[]
    createMany?: AvailabilityCreateManyServiceInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<FeedbackCreateWithoutServiceInput, FeedbackUncheckedCreateWithoutServiceInput> | FeedbackCreateWithoutServiceInput[] | FeedbackUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutServiceInput | FeedbackCreateOrConnectWithoutServiceInput[]
    createMany?: FeedbackCreateManyServiceInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<MediaCreateWithoutServiceInput, MediaUncheckedCreateWithoutServiceInput> | MediaCreateWithoutServiceInput[] | MediaUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutServiceInput | MediaCreateOrConnectWithoutServiceInput[]
    createMany?: MediaCreateManyServiceInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type ViewsUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ViewsCreateWithoutServiceInput, ViewsUncheckedCreateWithoutServiceInput> | ViewsCreateWithoutServiceInput[] | ViewsUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutServiceInput | ViewsCreateOrConnectWithoutServiceInput[]
    createMany?: ViewsCreateManyServiceInputEnvelope
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VendorUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<VendorCreateWithoutServicesInput, VendorUncheckedCreateWithoutServicesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutServicesInput
    upsert?: VendorUpsertWithoutServicesInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutServicesInput, VendorUpdateWithoutServicesInput>, VendorUncheckedUpdateWithoutServicesInput>
  }

  export type AvailabilityUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AvailabilityCreateWithoutServiceInput, AvailabilityUncheckedCreateWithoutServiceInput> | AvailabilityCreateWithoutServiceInput[] | AvailabilityUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutServiceInput | AvailabilityCreateOrConnectWithoutServiceInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutServiceInput | AvailabilityUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AvailabilityCreateManyServiceInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutServiceInput | AvailabilityUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutServiceInput | AvailabilityUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutServiceNestedInput = {
    create?: XOR<FeedbackCreateWithoutServiceInput, FeedbackUncheckedCreateWithoutServiceInput> | FeedbackCreateWithoutServiceInput[] | FeedbackUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutServiceInput | FeedbackCreateOrConnectWithoutServiceInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutServiceInput | FeedbackUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: FeedbackCreateManyServiceInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutServiceInput | FeedbackUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutServiceInput | FeedbackUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type MediaUpdateManyWithoutServiceNestedInput = {
    create?: XOR<MediaCreateWithoutServiceInput, MediaUncheckedCreateWithoutServiceInput> | MediaCreateWithoutServiceInput[] | MediaUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutServiceInput | MediaCreateOrConnectWithoutServiceInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutServiceInput | MediaUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: MediaCreateManyServiceInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutServiceInput | MediaUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutServiceInput | MediaUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ViewsUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ViewsCreateWithoutServiceInput, ViewsUncheckedCreateWithoutServiceInput> | ViewsCreateWithoutServiceInput[] | ViewsUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutServiceInput | ViewsCreateOrConnectWithoutServiceInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutServiceInput | ViewsUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ViewsCreateManyServiceInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutServiceInput | ViewsUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutServiceInput | ViewsUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AvailabilityCreateWithoutServiceInput, AvailabilityUncheckedCreateWithoutServiceInput> | AvailabilityCreateWithoutServiceInput[] | AvailabilityUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutServiceInput | AvailabilityCreateOrConnectWithoutServiceInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutServiceInput | AvailabilityUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AvailabilityCreateManyServiceInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutServiceInput | AvailabilityUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutServiceInput | AvailabilityUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<FeedbackCreateWithoutServiceInput, FeedbackUncheckedCreateWithoutServiceInput> | FeedbackCreateWithoutServiceInput[] | FeedbackUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutServiceInput | FeedbackCreateOrConnectWithoutServiceInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutServiceInput | FeedbackUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: FeedbackCreateManyServiceInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutServiceInput | FeedbackUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutServiceInput | FeedbackUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<MediaCreateWithoutServiceInput, MediaUncheckedCreateWithoutServiceInput> | MediaCreateWithoutServiceInput[] | MediaUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutServiceInput | MediaCreateOrConnectWithoutServiceInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutServiceInput | MediaUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: MediaCreateManyServiceInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutServiceInput | MediaUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutServiceInput | MediaUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type ViewsUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ViewsCreateWithoutServiceInput, ViewsUncheckedCreateWithoutServiceInput> | ViewsCreateWithoutServiceInput[] | ViewsUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ViewsCreateOrConnectWithoutServiceInput | ViewsCreateOrConnectWithoutServiceInput[]
    upsert?: ViewsUpsertWithWhereUniqueWithoutServiceInput | ViewsUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ViewsCreateManyServiceInputEnvelope
    set?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    disconnect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    delete?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    connect?: ViewsWhereUniqueInput | ViewsWhereUniqueInput[]
    update?: ViewsUpdateWithWhereUniqueWithoutServiceInput | ViewsUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ViewsUpdateManyWithWhereWithoutServiceInput | ViewsUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutViewsInput = {
    create?: XOR<ServiceCreateWithoutViewsInput, ServiceUncheckedCreateWithoutViewsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutViewsInput
    connect?: ServiceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServiceUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<ServiceCreateWithoutViewsInput, ServiceUncheckedCreateWithoutViewsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutViewsInput
    upsert?: ServiceUpsertWithoutViewsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutViewsInput, ServiceUpdateWithoutViewsInput>, ServiceUncheckedUpdateWithoutViewsInput>
  }

  export type ServiceCreateNestedOneWithoutFeedbackInput = {
    create?: XOR<ServiceCreateWithoutFeedbackInput, ServiceUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFeedbackInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutFeedbackNestedInput = {
    create?: XOR<ServiceCreateWithoutFeedbackInput, ServiceUncheckedCreateWithoutFeedbackInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutFeedbackInput
    upsert?: ServiceUpsertWithoutFeedbackInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutFeedbackInput, ServiceUpdateWithoutFeedbackInput>, ServiceUncheckedUpdateWithoutFeedbackInput>
  }

  export type ServiceCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<ServiceCreateWithoutAvailabilitiesInput, ServiceUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAvailabilitiesInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<ServiceCreateWithoutAvailabilitiesInput, ServiceUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutAvailabilitiesInput
    upsert?: ServiceUpsertWithoutAvailabilitiesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutAvailabilitiesInput, ServiceUpdateWithoutAvailabilitiesInput>, ServiceUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type ServiceCreateNestedOneWithoutMediaInput = {
    create?: XOR<ServiceCreateWithoutMediaInput, ServiceUncheckedCreateWithoutMediaInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutMediaInput
    connect?: ServiceWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<ServiceCreateWithoutMediaInput, ServiceUncheckedCreateWithoutMediaInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutMediaInput
    upsert?: ServiceUpsertWithoutMediaInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutMediaInput, ServiceUpdateWithoutMediaInput>, ServiceUncheckedUpdateWithoutMediaInput>
  }

  export type EditorAssetCreatetagsInput = {
    set: string[]
  }

  export type EditorAssetUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VendorCreateNestedOneWithoutTeam_membersInput = {
    create?: XOR<VendorCreateWithoutTeam_membersInput, VendorUncheckedCreateWithoutTeam_membersInput>
    connectOrCreate?: VendorCreateOrConnectWithoutTeam_membersInput
    connect?: VendorWhereUniqueInput
  }

  export type VendorUpdateOneRequiredWithoutTeam_membersNestedInput = {
    create?: XOR<VendorCreateWithoutTeam_membersInput, VendorUncheckedCreateWithoutTeam_membersInput>
    connectOrCreate?: VendorCreateOrConnectWithoutTeam_membersInput
    upsert?: VendorUpsertWithoutTeam_membersInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutTeam_membersInput, VendorUpdateWithoutTeam_membersInput>, VendorUncheckedUpdateWithoutTeam_membersInput>
  }

  export type VendorCreateNestedOneWithoutPromotionsInput = {
    create?: XOR<VendorCreateWithoutPromotionsInput, VendorUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPromotionsInput
    connect?: VendorWhereUniqueInput
  }

  export type VendorUpdateOneRequiredWithoutPromotionsNestedInput = {
    create?: XOR<VendorCreateWithoutPromotionsInput, VendorUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPromotionsInput
    upsert?: VendorUpsertWithoutPromotionsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutPromotionsInput, VendorUpdateWithoutPromotionsInput>, VendorUncheckedUpdateWithoutPromotionsInput>
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<VendorCreateWithoutSubscriptionInput, VendorUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: VendorCreateOrConnectWithoutSubscriptionInput
    connect?: VendorWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type VendorUpdateOneWithoutSubscriptionNestedInput = {
    create?: XOR<VendorCreateWithoutSubscriptionInput, VendorUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: VendorCreateOrConnectWithoutSubscriptionInput
    upsert?: VendorUpsertWithoutSubscriptionInput
    disconnect?: boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutSubscriptionInput, VendorUpdateWithoutSubscriptionInput>, VendorUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: PlanUpsertWithoutSubscriptionsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutSubscriptionsInput, PlanUpdateWithoutSubscriptionsInput>, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PaymentUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput> | PaymentCreateWithoutSubscriptionInput[] | PaymentUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSubscriptionInput | PaymentCreateOrConnectWithoutSubscriptionInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSubscriptionInput | PaymentUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: PaymentCreateManySubscriptionInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSubscriptionInput | PaymentUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSubscriptionInput | PaymentUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutPaymentInput = {
    create?: XOR<VendorCreateWithoutPaymentInput, VendorUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPaymentInput
    connect?: VendorWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type InvoiceCreateNestedManyWithoutPaymentInput = {
    create?: XOR<InvoiceCreateWithoutPaymentInput, InvoiceUncheckedCreateWithoutPaymentInput> | InvoiceCreateWithoutPaymentInput[] | InvoiceUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentInput | InvoiceCreateOrConnectWithoutPaymentInput[]
    createMany?: InvoiceCreateManyPaymentInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<InvoiceCreateWithoutPaymentInput, InvoiceUncheckedCreateWithoutPaymentInput> | InvoiceCreateWithoutPaymentInput[] | InvoiceUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentInput | InvoiceCreateOrConnectWithoutPaymentInput[]
    createMany?: InvoiceCreateManyPaymentInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type VendorUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<VendorCreateWithoutPaymentInput, VendorUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPaymentInput
    upsert?: VendorUpsertWithoutPaymentInput
    disconnect?: boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutPaymentInput, VendorUpdateWithoutPaymentInput>, VendorUncheckedUpdateWithoutPaymentInput>
  }

  export type SubscriptionUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPaymentsInput
    upsert?: SubscriptionUpsertWithoutPaymentsInput
    disconnect?: boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutPaymentsInput, SubscriptionUpdateWithoutPaymentsInput>, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type InvoiceUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<InvoiceCreateWithoutPaymentInput, InvoiceUncheckedCreateWithoutPaymentInput> | InvoiceCreateWithoutPaymentInput[] | InvoiceUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentInput | InvoiceCreateOrConnectWithoutPaymentInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutPaymentInput | InvoiceUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: InvoiceCreateManyPaymentInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutPaymentInput | InvoiceUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutPaymentInput | InvoiceUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<InvoiceCreateWithoutPaymentInput, InvoiceUncheckedCreateWithoutPaymentInput> | InvoiceCreateWithoutPaymentInput[] | InvoiceUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutPaymentInput | InvoiceCreateOrConnectWithoutPaymentInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutPaymentInput | InvoiceUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: InvoiceCreateManyPaymentInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutPaymentInput | InvoiceUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutPaymentInput | InvoiceUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<VendorCreateWithoutInvoicesInput, VendorUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutInvoicesInput
    connect?: VendorWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<PaymentCreateWithoutInvoicesInput, PaymentUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoicesInput
    connect?: PaymentWhereUniqueInput
  }

  export type VendorUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<VendorCreateWithoutInvoicesInput, VendorUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: VendorCreateOrConnectWithoutInvoicesInput
    upsert?: VendorUpsertWithoutInvoicesInput
    disconnect?: boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutInvoicesInput, VendorUpdateWithoutInvoicesInput>, VendorUncheckedUpdateWithoutInvoicesInput>
  }

  export type PaymentUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<PaymentCreateWithoutInvoicesInput, PaymentUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutInvoicesInput
    upsert?: PaymentUpsertWithoutInvoicesInput
    disconnect?: boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutInvoicesInput, PaymentUpdateWithoutInvoicesInput>, PaymentUncheckedUpdateWithoutInvoicesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ServiceCreateWithoutVendorInput = {
    id?: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    availabilities?: AvailabilityCreateNestedManyWithoutServiceInput
    feedback?: FeedbackCreateNestedManyWithoutServiceInput
    media?: MediaCreateNestedManyWithoutServiceInput
    views?: ViewsCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutVendorInput = {
    id?: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutServiceInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutServiceInput
    media?: MediaUncheckedCreateNestedManyWithoutServiceInput
    views?: ViewsUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutVendorInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutVendorInput, ServiceUncheckedCreateWithoutVendorInput>
  }

  export type ServiceCreateManyVendorInputEnvelope = {
    data: ServiceCreateManyVendorInput | ServiceCreateManyVendorInput[]
  }

  export type PromotionCreateWithoutVendorInput = {
    id?: string
    promotion_title: string
    description: string
    discount_percentage?: number
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
  }

  export type PromotionUncheckedCreateWithoutVendorInput = {
    id?: string
    promotion_title: string
    description: string
    discount_percentage?: number
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
  }

  export type PromotionCreateOrConnectWithoutVendorInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutVendorInput, PromotionUncheckedCreateWithoutVendorInput>
  }

  export type PromotionCreateManyVendorInputEnvelope = {
    data: PromotionCreateManyVendorInput | PromotionCreateManyVendorInput[]
  }

  export type TeamMemberCreateWithoutVendorInput = {
    id?: string
    name: string
    position: string
    bio: string
    email: string
    photo_url?: string | null
    social_links?: InputJsonValue | null
    created_at?: Date | string
  }

  export type TeamMemberUncheckedCreateWithoutVendorInput = {
    id?: string
    name: string
    position: string
    bio: string
    email: string
    photo_url?: string | null
    social_links?: InputJsonValue | null
    created_at?: Date | string
  }

  export type TeamMemberCreateOrConnectWithoutVendorInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutVendorInput, TeamMemberUncheckedCreateWithoutVendorInput>
  }

  export type TeamMemberCreateManyVendorInputEnvelope = {
    data: TeamMemberCreateManyVendorInput | TeamMemberCreateManyVendorInput[]
  }

  export type PaymentCreateWithoutVendorInput = {
    id?: string
    amount: number
    currency: string
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    refund_id?: string | null
    is_refunded?: boolean
    failure_reason?: string | null
    vpa?: string | null
    fee?: number | null
    tax?: number | null
    rrn?: string | null
    upi_transaction_id?: string | null
    email?: string | null
    contact?: string | null
    acquirer_data?: InputJsonValue | null
    notes?: InputJsonValue | null
    autoRenew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bill_generated?: boolean
    subscription?: SubscriptionCreateNestedOneWithoutPaymentsInput
    invoices?: InvoiceCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutVendorInput = {
    id?: string
    subscriptionId?: string | null
    amount: number
    currency: string
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    refund_id?: string | null
    is_refunded?: boolean
    failure_reason?: string | null
    vpa?: string | null
    fee?: number | null
    tax?: number | null
    rrn?: string | null
    upi_transaction_id?: string | null
    email?: string | null
    contact?: string | null
    acquirer_data?: InputJsonValue | null
    notes?: InputJsonValue | null
    autoRenew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bill_generated?: boolean
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutVendorInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutVendorInput, PaymentUncheckedCreateWithoutVendorInput>
  }

  export type PaymentCreateManyVendorInputEnvelope = {
    data: PaymentCreateManyVendorInput | PaymentCreateManyVendorInput[]
  }

  export type InvoiceCreateWithoutVendorInput = {
    id?: string
    invoiceNumber: string
    nextBillingDate?: Date | string | null
    discount?: number
    totalExclIGST: number
    igstAmount: number
    igstTotal: number
    totalAmount: number
    amountDue?: number
    created_at?: Date | string
    updated_at?: Date | string
    payment?: PaymentCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutVendorInput = {
    id?: string
    invoiceNumber: string
    paymentId?: string | null
    nextBillingDate?: Date | string | null
    discount?: number
    totalExclIGST: number
    igstAmount: number
    igstTotal: number
    totalAmount: number
    amountDue?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutVendorInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutVendorInput, InvoiceUncheckedCreateWithoutVendorInput>
  }

  export type InvoiceCreateManyVendorInputEnvelope = {
    data: InvoiceCreateManyVendorInput | InvoiceCreateManyVendorInput[]
  }

  export type SubscriptionCreateWithoutVendorInput = {
    id?: string
    status?: $Enums.SubscriptionStatus
    order_id: string
    payment_id?: string | null
    start_date?: Date | string
    end_date?: Date | string | null
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutVendorInput = {
    id?: string
    planId: string
    status?: $Enums.SubscriptionStatus
    order_id: string
    payment_id?: string | null
    start_date?: Date | string
    end_date?: Date | string | null
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutVendorInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutVendorInput, SubscriptionUncheckedCreateWithoutVendorInput>
  }

  export type SubscriptionCreateManyVendorInputEnvelope = {
    data: SubscriptionCreateManyVendorInput | SubscriptionCreateManyVendorInput[]
  }

  export type ServiceUpsertWithWhereUniqueWithoutVendorInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutVendorInput, ServiceUncheckedUpdateWithoutVendorInput>
    create: XOR<ServiceCreateWithoutVendorInput, ServiceUncheckedCreateWithoutVendorInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutVendorInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutVendorInput, ServiceUncheckedUpdateWithoutVendorInput>
  }

  export type ServiceUpdateManyWithWhereWithoutVendorInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutVendorInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    vendorId?: StringFilter<"Service"> | string
    service_name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    min_price?: FloatNullableFilter<"Service"> | number | null
    max_price?: FloatNullableFilter<"Service"> | number | null
    city?: StringNullableFilter<"Service"> | string | null
    state?: StringNullableFilter<"Service"> | string | null
    price?: FloatNullableFilter<"Service"> | number | null
    service_type?: StringFilter<"Service"> | string
    service_category?: StringNullableFilter<"Service"> | string | null
    service_unit?: StringNullableFilter<"Service"> | string | null
    status?: StringFilter<"Service"> | string
    rating?: FloatFilter<"Service"> | number
    faqs?: JsonNullableFilter<"Service">
    created_at?: DateTimeFilter<"Service"> | Date | string
    updated_at?: DateTimeFilter<"Service"> | Date | string
  }

  export type PromotionUpsertWithWhereUniqueWithoutVendorInput = {
    where: PromotionWhereUniqueInput
    update: XOR<PromotionUpdateWithoutVendorInput, PromotionUncheckedUpdateWithoutVendorInput>
    create: XOR<PromotionCreateWithoutVendorInput, PromotionUncheckedCreateWithoutVendorInput>
  }

  export type PromotionUpdateWithWhereUniqueWithoutVendorInput = {
    where: PromotionWhereUniqueInput
    data: XOR<PromotionUpdateWithoutVendorInput, PromotionUncheckedUpdateWithoutVendorInput>
  }

  export type PromotionUpdateManyWithWhereWithoutVendorInput = {
    where: PromotionScalarWhereInput
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyWithoutVendorInput>
  }

  export type PromotionScalarWhereInput = {
    AND?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
    OR?: PromotionScalarWhereInput[]
    NOT?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
    id?: StringFilter<"Promotion"> | string
    vendorId?: StringFilter<"Promotion"> | string
    promotion_title?: StringFilter<"Promotion"> | string
    description?: StringFilter<"Promotion"> | string
    discount_percentage?: FloatFilter<"Promotion"> | number
    start_date?: DateTimeFilter<"Promotion"> | Date | string
    end_date?: DateTimeFilter<"Promotion"> | Date | string
    created_at?: DateTimeFilter<"Promotion"> | Date | string
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutVendorInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutVendorInput, TeamMemberUncheckedUpdateWithoutVendorInput>
    create: XOR<TeamMemberCreateWithoutVendorInput, TeamMemberUncheckedCreateWithoutVendorInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutVendorInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutVendorInput, TeamMemberUncheckedUpdateWithoutVendorInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutVendorInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutVendorInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    vendorId?: StringFilter<"TeamMember"> | string
    name?: StringFilter<"TeamMember"> | string
    position?: StringFilter<"TeamMember"> | string
    bio?: StringFilter<"TeamMember"> | string
    email?: StringFilter<"TeamMember"> | string
    photo_url?: StringNullableFilter<"TeamMember"> | string | null
    social_links?: JsonNullableFilter<"TeamMember">
    created_at?: DateTimeFilter<"TeamMember"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutVendorInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutVendorInput, PaymentUncheckedUpdateWithoutVendorInput>
    create: XOR<PaymentCreateWithoutVendorInput, PaymentUncheckedCreateWithoutVendorInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutVendorInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutVendorInput, PaymentUncheckedUpdateWithoutVendorInput>
  }

  export type PaymentUpdateManyWithWhereWithoutVendorInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutVendorInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    vendorId?: StringNullableFilter<"Payment"> | string | null
    subscriptionId?: StringNullableFilter<"Payment"> | string | null
    amount?: FloatFilter<"Payment"> | number
    currency?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    payment_method?: StringNullableFilter<"Payment"> | string | null
    razorpay_order_id?: StringNullableFilter<"Payment"> | string | null
    razorpay_payment_id?: StringNullableFilter<"Payment"> | string | null
    refund_id?: StringNullableFilter<"Payment"> | string | null
    is_refunded?: BoolFilter<"Payment"> | boolean
    failure_reason?: StringNullableFilter<"Payment"> | string | null
    vpa?: StringNullableFilter<"Payment"> | string | null
    fee?: FloatNullableFilter<"Payment"> | number | null
    tax?: FloatNullableFilter<"Payment"> | number | null
    rrn?: StringNullableFilter<"Payment"> | string | null
    upi_transaction_id?: StringNullableFilter<"Payment"> | string | null
    email?: StringNullableFilter<"Payment"> | string | null
    contact?: StringNullableFilter<"Payment"> | string | null
    acquirer_data?: JsonNullableFilter<"Payment">
    notes?: JsonNullableFilter<"Payment">
    autoRenew?: BoolFilter<"Payment"> | boolean
    created_at?: DateTimeFilter<"Payment"> | Date | string
    updated_at?: DateTimeFilter<"Payment"> | Date | string
    bill_generated?: BoolFilter<"Payment"> | boolean
  }

  export type InvoiceUpsertWithWhereUniqueWithoutVendorInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutVendorInput, InvoiceUncheckedUpdateWithoutVendorInput>
    create: XOR<InvoiceCreateWithoutVendorInput, InvoiceUncheckedCreateWithoutVendorInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutVendorInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutVendorInput, InvoiceUncheckedUpdateWithoutVendorInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutVendorInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutVendorInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    vendorId?: StringNullableFilter<"Invoice"> | string | null
    paymentId?: StringNullableFilter<"Invoice"> | string | null
    nextBillingDate?: DateTimeNullableFilter<"Invoice"> | Date | string | null
    discount?: FloatFilter<"Invoice"> | number
    totalExclIGST?: FloatFilter<"Invoice"> | number
    igstAmount?: FloatFilter<"Invoice"> | number
    igstTotal?: FloatFilter<"Invoice"> | number
    totalAmount?: FloatFilter<"Invoice"> | number
    amountDue?: FloatFilter<"Invoice"> | number
    created_at?: DateTimeFilter<"Invoice"> | Date | string
    updated_at?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutVendorInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutVendorInput, SubscriptionUncheckedUpdateWithoutVendorInput>
    create: XOR<SubscriptionCreateWithoutVendorInput, SubscriptionUncheckedCreateWithoutVendorInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutVendorInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutVendorInput, SubscriptionUncheckedUpdateWithoutVendorInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutVendorInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutVendorInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    vendorId?: StringNullableFilter<"Subscription"> | string | null
    planId?: StringFilter<"Subscription"> | string
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    order_id?: StringFilter<"Subscription"> | string
    payment_id?: StringNullableFilter<"Subscription"> | string | null
    start_date?: DateTimeFilter<"Subscription"> | Date | string
    end_date?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    auto_renew?: BoolFilter<"Subscription"> | boolean
    is_trial?: BoolFilter<"Subscription"> | boolean
    trial_end_date?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    created_at?: DateTimeFilter<"Subscription"> | Date | string
    updated_at?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type VendorCreateWithoutServicesInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    promotions?: PromotionCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberCreateNestedManyWithoutVendorInput
    payment?: PaymentCreateNestedManyWithoutVendorInput
    invoices?: InvoiceCreateNestedManyWithoutVendorInput
    Subscription?: SubscriptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    promotions?: PromotionUncheckedCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberUncheckedCreateNestedManyWithoutVendorInput
    payment?: PaymentUncheckedCreateNestedManyWithoutVendorInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutVendorInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutServicesInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutServicesInput, VendorUncheckedCreateWithoutServicesInput>
  }

  export type AvailabilityCreateWithoutServiceInput = {
    id?: string
    available_date: Date | string
    wedding_date: Date | string
    is_available: boolean
    created_at?: Date | string
  }

  export type AvailabilityUncheckedCreateWithoutServiceInput = {
    id?: string
    available_date: Date | string
    wedding_date: Date | string
    is_available: boolean
    created_at?: Date | string
  }

  export type AvailabilityCreateOrConnectWithoutServiceInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutServiceInput, AvailabilityUncheckedCreateWithoutServiceInput>
  }

  export type AvailabilityCreateManyServiceInputEnvelope = {
    data: AvailabilityCreateManyServiceInput | AvailabilityCreateManyServiceInput[]
  }

  export type FeedbackCreateWithoutServiceInput = {
    id?: string
    userId: string
    comment: string
    rating: number
    user_name?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FeedbackUncheckedCreateWithoutServiceInput = {
    id?: string
    userId: string
    comment: string
    rating: number
    user_name?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutServiceInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutServiceInput, FeedbackUncheckedCreateWithoutServiceInput>
  }

  export type FeedbackCreateManyServiceInputEnvelope = {
    data: FeedbackCreateManyServiceInput | FeedbackCreateManyServiceInput[]
  }

  export type MediaCreateWithoutServiceInput = {
    id?: string
    image_urls: InputJsonValue
    video_urls: InputJsonValue
    uploaded_at?: Date | string
  }

  export type MediaUncheckedCreateWithoutServiceInput = {
    id?: string
    image_urls: InputJsonValue
    video_urls: InputJsonValue
    uploaded_at?: Date | string
  }

  export type MediaCreateOrConnectWithoutServiceInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutServiceInput, MediaUncheckedCreateWithoutServiceInput>
  }

  export type MediaCreateManyServiceInputEnvelope = {
    data: MediaCreateManyServiceInput | MediaCreateManyServiceInput[]
  }

  export type ViewsCreateWithoutServiceInput = {
    id?: string
    userId: string
    viewCount?: number
    lead?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ViewsUncheckedCreateWithoutServiceInput = {
    id?: string
    userId: string
    viewCount?: number
    lead?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ViewsCreateOrConnectWithoutServiceInput = {
    where: ViewsWhereUniqueInput
    create: XOR<ViewsCreateWithoutServiceInput, ViewsUncheckedCreateWithoutServiceInput>
  }

  export type ViewsCreateManyServiceInputEnvelope = {
    data: ViewsCreateManyServiceInput | ViewsCreateManyServiceInput[]
  }

  export type VendorUpsertWithoutServicesInput = {
    update: XOR<VendorUpdateWithoutServicesInput, VendorUncheckedUpdateWithoutServicesInput>
    create: XOR<VendorCreateWithoutServicesInput, VendorUncheckedCreateWithoutServicesInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutServicesInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutServicesInput, VendorUncheckedUpdateWithoutServicesInput>
  }

  export type VendorUpdateWithoutServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    promotions?: PromotionUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUpdateManyWithoutVendorNestedInput
    payment?: PaymentUpdateManyWithoutVendorNestedInput
    invoices?: InvoiceUpdateManyWithoutVendorNestedInput
    Subscription?: SubscriptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    promotions?: PromotionUncheckedUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUncheckedUpdateManyWithoutVendorNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutVendorNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutVendorNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutServiceInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutServiceInput, AvailabilityUncheckedUpdateWithoutServiceInput>
    create: XOR<AvailabilityCreateWithoutServiceInput, AvailabilityUncheckedCreateWithoutServiceInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutServiceInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutServiceInput, AvailabilityUncheckedUpdateWithoutServiceInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutServiceInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutServiceInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: StringFilter<"Availability"> | string
    serviceId?: StringFilter<"Availability"> | string
    available_date?: DateTimeFilter<"Availability"> | Date | string
    wedding_date?: DateTimeFilter<"Availability"> | Date | string
    is_available?: BoolFilter<"Availability"> | boolean
    created_at?: DateTimeFilter<"Availability"> | Date | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutServiceInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutServiceInput, FeedbackUncheckedUpdateWithoutServiceInput>
    create: XOR<FeedbackCreateWithoutServiceInput, FeedbackUncheckedCreateWithoutServiceInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutServiceInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutServiceInput, FeedbackUncheckedUpdateWithoutServiceInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutServiceInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutServiceInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: StringFilter<"Feedback"> | string
    userId?: StringFilter<"Feedback"> | string
    serviceId?: StringFilter<"Feedback"> | string
    comment?: StringFilter<"Feedback"> | string
    rating?: FloatFilter<"Feedback"> | number
    user_name?: StringFilter<"Feedback"> | string
    created_at?: DateTimeFilter<"Feedback"> | Date | string
    updated_at?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type MediaUpsertWithWhereUniqueWithoutServiceInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutServiceInput, MediaUncheckedUpdateWithoutServiceInput>
    create: XOR<MediaCreateWithoutServiceInput, MediaUncheckedCreateWithoutServiceInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutServiceInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutServiceInput, MediaUncheckedUpdateWithoutServiceInput>
  }

  export type MediaUpdateManyWithWhereWithoutServiceInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutServiceInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    serviceId?: StringFilter<"Media"> | string
    image_urls?: JsonFilter<"Media">
    video_urls?: JsonFilter<"Media">
    uploaded_at?: DateTimeFilter<"Media"> | Date | string
  }

  export type ViewsUpsertWithWhereUniqueWithoutServiceInput = {
    where: ViewsWhereUniqueInput
    update: XOR<ViewsUpdateWithoutServiceInput, ViewsUncheckedUpdateWithoutServiceInput>
    create: XOR<ViewsCreateWithoutServiceInput, ViewsUncheckedCreateWithoutServiceInput>
  }

  export type ViewsUpdateWithWhereUniqueWithoutServiceInput = {
    where: ViewsWhereUniqueInput
    data: XOR<ViewsUpdateWithoutServiceInput, ViewsUncheckedUpdateWithoutServiceInput>
  }

  export type ViewsUpdateManyWithWhereWithoutServiceInput = {
    where: ViewsScalarWhereInput
    data: XOR<ViewsUpdateManyMutationInput, ViewsUncheckedUpdateManyWithoutServiceInput>
  }

  export type ViewsScalarWhereInput = {
    AND?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
    OR?: ViewsScalarWhereInput[]
    NOT?: ViewsScalarWhereInput | ViewsScalarWhereInput[]
    id?: StringFilter<"Views"> | string
    serviceId?: StringFilter<"Views"> | string
    userId?: StringFilter<"Views"> | string
    viewCount?: IntFilter<"Views"> | number
    lead?: BoolFilter<"Views"> | boolean
    created_at?: DateTimeFilter<"Views"> | Date | string
    updated_at?: DateTimeFilter<"Views"> | Date | string
  }

  export type ServiceCreateWithoutViewsInput = {
    id?: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    vendor: VendorCreateNestedOneWithoutServicesInput
    availabilities?: AvailabilityCreateNestedManyWithoutServiceInput
    feedback?: FeedbackCreateNestedManyWithoutServiceInput
    media?: MediaCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutViewsInput = {
    id?: string
    vendorId: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutServiceInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutServiceInput
    media?: MediaUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutViewsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutViewsInput, ServiceUncheckedCreateWithoutViewsInput>
  }

  export type ServiceUpsertWithoutViewsInput = {
    update: XOR<ServiceUpdateWithoutViewsInput, ServiceUncheckedUpdateWithoutViewsInput>
    create: XOR<ServiceCreateWithoutViewsInput, ServiceUncheckedCreateWithoutViewsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutViewsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutViewsInput, ServiceUncheckedUpdateWithoutViewsInput>
  }

  export type ServiceUpdateWithoutViewsInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutServicesNestedInput
    availabilities?: AvailabilityUpdateManyWithoutServiceNestedInput
    feedback?: FeedbackUpdateManyWithoutServiceNestedInput
    media?: MediaUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutViewsInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutServiceNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutServiceNestedInput
    media?: MediaUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateWithoutFeedbackInput = {
    id?: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    vendor: VendorCreateNestedOneWithoutServicesInput
    availabilities?: AvailabilityCreateNestedManyWithoutServiceInput
    media?: MediaCreateNestedManyWithoutServiceInput
    views?: ViewsCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutFeedbackInput = {
    id?: string
    vendorId: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutServiceInput
    media?: MediaUncheckedCreateNestedManyWithoutServiceInput
    views?: ViewsUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutFeedbackInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutFeedbackInput, ServiceUncheckedCreateWithoutFeedbackInput>
  }

  export type ServiceUpsertWithoutFeedbackInput = {
    update: XOR<ServiceUpdateWithoutFeedbackInput, ServiceUncheckedUpdateWithoutFeedbackInput>
    create: XOR<ServiceCreateWithoutFeedbackInput, ServiceUncheckedCreateWithoutFeedbackInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutFeedbackInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutFeedbackInput, ServiceUncheckedUpdateWithoutFeedbackInput>
  }

  export type ServiceUpdateWithoutFeedbackInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutServicesNestedInput
    availabilities?: AvailabilityUpdateManyWithoutServiceNestedInput
    media?: MediaUpdateManyWithoutServiceNestedInput
    views?: ViewsUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutFeedbackInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutServiceNestedInput
    media?: MediaUncheckedUpdateManyWithoutServiceNestedInput
    views?: ViewsUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateWithoutAvailabilitiesInput = {
    id?: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    vendor: VendorCreateNestedOneWithoutServicesInput
    feedback?: FeedbackCreateNestedManyWithoutServiceInput
    media?: MediaCreateNestedManyWithoutServiceInput
    views?: ViewsCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutAvailabilitiesInput = {
    id?: string
    vendorId: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    feedback?: FeedbackUncheckedCreateNestedManyWithoutServiceInput
    media?: MediaUncheckedCreateNestedManyWithoutServiceInput
    views?: ViewsUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutAvailabilitiesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAvailabilitiesInput, ServiceUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type ServiceUpsertWithoutAvailabilitiesInput = {
    update: XOR<ServiceUpdateWithoutAvailabilitiesInput, ServiceUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<ServiceCreateWithoutAvailabilitiesInput, ServiceUncheckedCreateWithoutAvailabilitiesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutAvailabilitiesInput, ServiceUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type ServiceUpdateWithoutAvailabilitiesInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutServicesNestedInput
    feedback?: FeedbackUpdateManyWithoutServiceNestedInput
    media?: MediaUpdateManyWithoutServiceNestedInput
    views?: ViewsUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAvailabilitiesInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feedback?: FeedbackUncheckedUpdateManyWithoutServiceNestedInput
    media?: MediaUncheckedUpdateManyWithoutServiceNestedInput
    views?: ViewsUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateWithoutMediaInput = {
    id?: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    vendor: VendorCreateNestedOneWithoutServicesInput
    availabilities?: AvailabilityCreateNestedManyWithoutServiceInput
    feedback?: FeedbackCreateNestedManyWithoutServiceInput
    views?: ViewsCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutMediaInput = {
    id?: string
    vendorId: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutServiceInput
    feedback?: FeedbackUncheckedCreateNestedManyWithoutServiceInput
    views?: ViewsUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutMediaInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutMediaInput, ServiceUncheckedCreateWithoutMediaInput>
  }

  export type ServiceUpsertWithoutMediaInput = {
    update: XOR<ServiceUpdateWithoutMediaInput, ServiceUncheckedUpdateWithoutMediaInput>
    create: XOR<ServiceCreateWithoutMediaInput, ServiceUncheckedCreateWithoutMediaInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutMediaInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutMediaInput, ServiceUncheckedUpdateWithoutMediaInput>
  }

  export type ServiceUpdateWithoutMediaInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutServicesNestedInput
    availabilities?: AvailabilityUpdateManyWithoutServiceNestedInput
    feedback?: FeedbackUpdateManyWithoutServiceNestedInput
    views?: ViewsUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutMediaInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutServiceNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutServiceNestedInput
    views?: ViewsUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type VendorCreateWithoutTeam_membersInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceCreateNestedManyWithoutVendorInput
    promotions?: PromotionCreateNestedManyWithoutVendorInput
    payment?: PaymentCreateNestedManyWithoutVendorInput
    invoices?: InvoiceCreateNestedManyWithoutVendorInput
    Subscription?: SubscriptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutTeam_membersInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceUncheckedCreateNestedManyWithoutVendorInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutVendorInput
    payment?: PaymentUncheckedCreateNestedManyWithoutVendorInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutVendorInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutTeam_membersInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutTeam_membersInput, VendorUncheckedCreateWithoutTeam_membersInput>
  }

  export type VendorUpsertWithoutTeam_membersInput = {
    update: XOR<VendorUpdateWithoutTeam_membersInput, VendorUncheckedUpdateWithoutTeam_membersInput>
    create: XOR<VendorCreateWithoutTeam_membersInput, VendorUncheckedCreateWithoutTeam_membersInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutTeam_membersInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutTeam_membersInput, VendorUncheckedUpdateWithoutTeam_membersInput>
  }

  export type VendorUpdateWithoutTeam_membersInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUpdateManyWithoutVendorNestedInput
    payment?: PaymentUpdateManyWithoutVendorNestedInput
    invoices?: InvoiceUpdateManyWithoutVendorNestedInput
    Subscription?: SubscriptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutTeam_membersInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutVendorNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutVendorNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutVendorNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateWithoutPromotionsInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberCreateNestedManyWithoutVendorInput
    payment?: PaymentCreateNestedManyWithoutVendorInput
    invoices?: InvoiceCreateNestedManyWithoutVendorInput
    Subscription?: SubscriptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutPromotionsInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceUncheckedCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberUncheckedCreateNestedManyWithoutVendorInput
    payment?: PaymentUncheckedCreateNestedManyWithoutVendorInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutVendorInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutPromotionsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutPromotionsInput, VendorUncheckedCreateWithoutPromotionsInput>
  }

  export type VendorUpsertWithoutPromotionsInput = {
    update: XOR<VendorUpdateWithoutPromotionsInput, VendorUncheckedUpdateWithoutPromotionsInput>
    create: XOR<VendorCreateWithoutPromotionsInput, VendorUncheckedCreateWithoutPromotionsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutPromotionsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutPromotionsInput, VendorUncheckedUpdateWithoutPromotionsInput>
  }

  export type VendorUpdateWithoutPromotionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUpdateManyWithoutVendorNestedInput
    payment?: PaymentUpdateManyWithoutVendorNestedInput
    invoices?: InvoiceUpdateManyWithoutVendorNestedInput
    Subscription?: SubscriptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutPromotionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUncheckedUpdateManyWithoutVendorNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutVendorNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutVendorNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string
    status?: $Enums.SubscriptionStatus
    order_id: string
    payment_id?: string | null
    start_date?: Date | string
    end_date?: Date | string | null
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    vendor?: VendorCreateNestedOneWithoutSubscriptionInput
    payments?: PaymentCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    vendorId?: string | null
    status?: $Enums.SubscriptionStatus
    order_id: string
    payment_id?: string | null
    start_date?: Date | string
    end_date?: Date | string | null
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type VendorCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceCreateNestedManyWithoutVendorInput
    promotions?: PromotionCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberCreateNestedManyWithoutVendorInput
    payment?: PaymentCreateNestedManyWithoutVendorInput
    invoices?: InvoiceCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceUncheckedCreateNestedManyWithoutVendorInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberUncheckedCreateNestedManyWithoutVendorInput
    payment?: PaymentUncheckedCreateNestedManyWithoutVendorInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutSubscriptionInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutSubscriptionInput, VendorUncheckedCreateWithoutSubscriptionInput>
  }

  export type PlanCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    price: number
    duration: string
    description: string
    features?: InputJsonValue | null
    trial_period?: number | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PlanUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    price: number
    duration: string
    description: string
    features?: InputJsonValue | null
    trial_period?: number | null
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PlanCreateOrConnectWithoutSubscriptionsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type PaymentCreateWithoutSubscriptionInput = {
    id?: string
    amount: number
    currency: string
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    refund_id?: string | null
    is_refunded?: boolean
    failure_reason?: string | null
    vpa?: string | null
    fee?: number | null
    tax?: number | null
    rrn?: string | null
    upi_transaction_id?: string | null
    email?: string | null
    contact?: string | null
    acquirer_data?: InputJsonValue | null
    notes?: InputJsonValue | null
    autoRenew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bill_generated?: boolean
    vendor?: VendorCreateNestedOneWithoutPaymentInput
    invoices?: InvoiceCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    vendorId?: string | null
    amount: number
    currency: string
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    refund_id?: string | null
    is_refunded?: boolean
    failure_reason?: string | null
    vpa?: string | null
    fee?: number | null
    tax?: number | null
    rrn?: string | null
    upi_transaction_id?: string | null
    email?: string | null
    contact?: string | null
    acquirer_data?: InputJsonValue | null
    notes?: InputJsonValue | null
    autoRenew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bill_generated?: boolean
    invoices?: InvoiceUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentCreateManySubscriptionInputEnvelope = {
    data: PaymentCreateManySubscriptionInput | PaymentCreateManySubscriptionInput[]
  }

  export type VendorUpsertWithoutSubscriptionInput = {
    update: XOR<VendorUpdateWithoutSubscriptionInput, VendorUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<VendorCreateWithoutSubscriptionInput, VendorUncheckedCreateWithoutSubscriptionInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutSubscriptionInput, VendorUncheckedUpdateWithoutSubscriptionInput>
  }

  export type VendorUpdateWithoutSubscriptionInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUpdateManyWithoutVendorNestedInput
    payment?: PaymentUpdateManyWithoutVendorNestedInput
    invoices?: InvoiceUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutSubscriptionInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUncheckedUpdateManyWithoutVendorNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutVendorNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type PlanUpsertWithoutSubscriptionsInput = {
    update: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<PlanCreateWithoutSubscriptionsInput, PlanUncheckedCreateWithoutSubscriptionsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutSubscriptionsInput, PlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanUpdateWithoutSubscriptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: InputJsonValue | InputJsonValue | null
    trial_period?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateWithoutSubscriptionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    features?: InputJsonValue | InputJsonValue | null
    trial_period?: NullableIntFieldUpdateOperationsInput | number | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<PaymentCreateWithoutSubscriptionInput, PaymentUncheckedCreateWithoutSubscriptionInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutSubscriptionInput, PaymentUncheckedUpdateWithoutSubscriptionInput>
  }

  export type PaymentUpdateManyWithWhereWithoutSubscriptionInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type VendorCreateWithoutPaymentInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceCreateNestedManyWithoutVendorInput
    promotions?: PromotionCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberCreateNestedManyWithoutVendorInput
    invoices?: InvoiceCreateNestedManyWithoutVendorInput
    Subscription?: SubscriptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutPaymentInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceUncheckedCreateNestedManyWithoutVendorInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberUncheckedCreateNestedManyWithoutVendorInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutVendorInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutPaymentInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutPaymentInput, VendorUncheckedCreateWithoutPaymentInput>
  }

  export type SubscriptionCreateWithoutPaymentsInput = {
    id?: string
    status?: $Enums.SubscriptionStatus
    order_id: string
    payment_id?: string | null
    start_date?: Date | string
    end_date?: Date | string | null
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
    vendor?: VendorCreateNestedOneWithoutSubscriptionInput
    plan: PlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutPaymentsInput = {
    id?: string
    vendorId?: string | null
    planId: string
    status?: $Enums.SubscriptionStatus
    order_id: string
    payment_id?: string | null
    start_date?: Date | string
    end_date?: Date | string | null
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutPaymentsInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
  }

  export type InvoiceCreateWithoutPaymentInput = {
    id?: string
    invoiceNumber: string
    nextBillingDate?: Date | string | null
    discount?: number
    totalExclIGST: number
    igstAmount: number
    igstTotal: number
    totalAmount: number
    amountDue?: number
    created_at?: Date | string
    updated_at?: Date | string
    vendor?: VendorCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateWithoutPaymentInput = {
    id?: string
    invoiceNumber: string
    vendorId?: string | null
    nextBillingDate?: Date | string | null
    discount?: number
    totalExclIGST: number
    igstAmount: number
    igstTotal: number
    totalAmount: number
    amountDue?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutPaymentInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutPaymentInput, InvoiceUncheckedCreateWithoutPaymentInput>
  }

  export type InvoiceCreateManyPaymentInputEnvelope = {
    data: InvoiceCreateManyPaymentInput | InvoiceCreateManyPaymentInput[]
  }

  export type VendorUpsertWithoutPaymentInput = {
    update: XOR<VendorUpdateWithoutPaymentInput, VendorUncheckedUpdateWithoutPaymentInput>
    create: XOR<VendorCreateWithoutPaymentInput, VendorUncheckedCreateWithoutPaymentInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutPaymentInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutPaymentInput, VendorUncheckedUpdateWithoutPaymentInput>
  }

  export type VendorUpdateWithoutPaymentInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUpdateManyWithoutVendorNestedInput
    invoices?: InvoiceUpdateManyWithoutVendorNestedInput
    Subscription?: SubscriptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutPaymentInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUncheckedUpdateManyWithoutVendorNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutVendorNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type SubscriptionUpsertWithoutPaymentsInput = {
    update: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
    create: XOR<SubscriptionCreateWithoutPaymentsInput, SubscriptionUncheckedCreateWithoutPaymentsInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutPaymentsInput, SubscriptionUncheckedUpdateWithoutPaymentsInput>
  }

  export type SubscriptionUpdateWithoutPaymentsInput = {
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    order_id?: StringFieldUpdateOperationsInput | string
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    is_trial?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutSubscriptionNestedInput
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPaymentsInput = {
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    order_id?: StringFieldUpdateOperationsInput | string
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    is_trial?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpsertWithWhereUniqueWithoutPaymentInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutPaymentInput, InvoiceUncheckedUpdateWithoutPaymentInput>
    create: XOR<InvoiceCreateWithoutPaymentInput, InvoiceUncheckedCreateWithoutPaymentInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutPaymentInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutPaymentInput, InvoiceUncheckedUpdateWithoutPaymentInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutPaymentInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutPaymentInput>
  }

  export type VendorCreateWithoutInvoicesInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceCreateNestedManyWithoutVendorInput
    promotions?: PromotionCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberCreateNestedManyWithoutVendorInput
    payment?: PaymentCreateNestedManyWithoutVendorInput
    Subscription?: SubscriptionCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description?: string | null
    logo_url?: InputJsonValue | null
    country?: string | null
    latitude?: string | null
    longitude?: string | null
    city?: string | null
    email: string
    state?: string | null
    password_hash: string
    phone_number: string
    social_networks?: InputJsonValue | null
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceUncheckedCreateNestedManyWithoutVendorInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberUncheckedCreateNestedManyWithoutVendorInput
    payment?: PaymentUncheckedCreateNestedManyWithoutVendorInput
    Subscription?: SubscriptionUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutInvoicesInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutInvoicesInput, VendorUncheckedCreateWithoutInvoicesInput>
  }

  export type PaymentCreateWithoutInvoicesInput = {
    id?: string
    amount: number
    currency: string
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    refund_id?: string | null
    is_refunded?: boolean
    failure_reason?: string | null
    vpa?: string | null
    fee?: number | null
    tax?: number | null
    rrn?: string | null
    upi_transaction_id?: string | null
    email?: string | null
    contact?: string | null
    acquirer_data?: InputJsonValue | null
    notes?: InputJsonValue | null
    autoRenew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bill_generated?: boolean
    vendor?: VendorCreateNestedOneWithoutPaymentInput
    subscription?: SubscriptionCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutInvoicesInput = {
    id?: string
    vendorId?: string | null
    subscriptionId?: string | null
    amount: number
    currency: string
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    refund_id?: string | null
    is_refunded?: boolean
    failure_reason?: string | null
    vpa?: string | null
    fee?: number | null
    tax?: number | null
    rrn?: string | null
    upi_transaction_id?: string | null
    email?: string | null
    contact?: string | null
    acquirer_data?: InputJsonValue | null
    notes?: InputJsonValue | null
    autoRenew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bill_generated?: boolean
  }

  export type PaymentCreateOrConnectWithoutInvoicesInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutInvoicesInput, PaymentUncheckedCreateWithoutInvoicesInput>
  }

  export type VendorUpsertWithoutInvoicesInput = {
    update: XOR<VendorUpdateWithoutInvoicesInput, VendorUncheckedUpdateWithoutInvoicesInput>
    create: XOR<VendorCreateWithoutInvoicesInput, VendorUncheckedCreateWithoutInvoicesInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutInvoicesInput, VendorUncheckedUpdateWithoutInvoicesInput>
  }

  export type VendorUpdateWithoutInvoicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUpdateManyWithoutVendorNestedInput
    payment?: PaymentUpdateManyWithoutVendorNestedInput
    Subscription?: SubscriptionUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutInvoicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logo_url?: InputJsonValue | InputJsonValue | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableStringFieldUpdateOperationsInput | string | null
    longitude?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    social_networks?: InputJsonValue | InputJsonValue | null
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUncheckedUpdateManyWithoutVendorNestedInput
    payment?: PaymentUncheckedUpdateManyWithoutVendorNestedInput
    Subscription?: SubscriptionUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type PaymentUpsertWithoutInvoicesInput = {
    update: XOR<PaymentUpdateWithoutInvoicesInput, PaymentUncheckedUpdateWithoutInvoicesInput>
    create: XOR<PaymentCreateWithoutInvoicesInput, PaymentUncheckedCreateWithoutInvoicesInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutInvoicesInput, PaymentUncheckedUpdateWithoutInvoicesInput>
  }

  export type PaymentUpdateWithoutInvoicesInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    refund_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_refunded?: BoolFieldUpdateOperationsInput | boolean
    failure_reason?: NullableStringFieldUpdateOperationsInput | string | null
    vpa?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: NullableFloatFieldUpdateOperationsInput | number | null
    rrn?: NullableStringFieldUpdateOperationsInput | string | null
    upi_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    acquirer_data?: InputJsonValue | InputJsonValue | null
    notes?: InputJsonValue | InputJsonValue | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_generated?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneWithoutPaymentNestedInput
    subscription?: SubscriptionUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutInvoicesInput = {
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    refund_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_refunded?: BoolFieldUpdateOperationsInput | boolean
    failure_reason?: NullableStringFieldUpdateOperationsInput | string | null
    vpa?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: NullableFloatFieldUpdateOperationsInput | number | null
    rrn?: NullableStringFieldUpdateOperationsInput | string | null
    upi_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    acquirer_data?: InputJsonValue | InputJsonValue | null
    notes?: InputJsonValue | InputJsonValue | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_generated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServiceCreateManyVendorInput = {
    id?: string
    service_name: string
    description?: string | null
    min_price?: number | null
    max_price?: number | null
    city?: string | null
    state?: string | null
    price?: number | null
    service_type: string
    service_category?: string | null
    service_unit?: string | null
    status?: string
    rating?: number
    faqs?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PromotionCreateManyVendorInput = {
    id?: string
    promotion_title: string
    description: string
    discount_percentage?: number
    start_date: Date | string
    end_date: Date | string
    created_at?: Date | string
  }

  export type TeamMemberCreateManyVendorInput = {
    id?: string
    name: string
    position: string
    bio: string
    email: string
    photo_url?: string | null
    social_links?: InputJsonValue | null
    created_at?: Date | string
  }

  export type PaymentCreateManyVendorInput = {
    id?: string
    subscriptionId?: string | null
    amount: number
    currency: string
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    refund_id?: string | null
    is_refunded?: boolean
    failure_reason?: string | null
    vpa?: string | null
    fee?: number | null
    tax?: number | null
    rrn?: string | null
    upi_transaction_id?: string | null
    email?: string | null
    contact?: string | null
    acquirer_data?: InputJsonValue | null
    notes?: InputJsonValue | null
    autoRenew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bill_generated?: boolean
  }

  export type InvoiceCreateManyVendorInput = {
    id?: string
    invoiceNumber: string
    paymentId?: string | null
    nextBillingDate?: Date | string | null
    discount?: number
    totalExclIGST: number
    igstAmount: number
    igstTotal: number
    totalAmount: number
    amountDue?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubscriptionCreateManyVendorInput = {
    id?: string
    planId: string
    status?: $Enums.SubscriptionStatus
    order_id: string
    payment_id?: string | null
    start_date?: Date | string
    end_date?: Date | string | null
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServiceUpdateWithoutVendorInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUpdateManyWithoutServiceNestedInput
    feedback?: FeedbackUpdateManyWithoutServiceNestedInput
    media?: MediaUpdateManyWithoutServiceNestedInput
    views?: ViewsUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutVendorInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutServiceNestedInput
    feedback?: FeedbackUncheckedUpdateManyWithoutServiceNestedInput
    media?: MediaUncheckedUpdateManyWithoutServiceNestedInput
    views?: ViewsUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutVendorInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    service_category?: NullableStringFieldUpdateOperationsInput | string | null
    service_unit?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    faqs?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUpdateWithoutVendorInput = {
    promotion_title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount_percentage?: FloatFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateWithoutVendorInput = {
    promotion_title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount_percentage?: FloatFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateManyWithoutVendorInput = {
    promotion_title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    discount_percentage?: FloatFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUpdateWithoutVendorInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateWithoutVendorInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutVendorInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    social_links?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutVendorInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    refund_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_refunded?: BoolFieldUpdateOperationsInput | boolean
    failure_reason?: NullableStringFieldUpdateOperationsInput | string | null
    vpa?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: NullableFloatFieldUpdateOperationsInput | number | null
    rrn?: NullableStringFieldUpdateOperationsInput | string | null
    upi_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    acquirer_data?: InputJsonValue | InputJsonValue | null
    notes?: InputJsonValue | InputJsonValue | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_generated?: BoolFieldUpdateOperationsInput | boolean
    subscription?: SubscriptionUpdateOneWithoutPaymentsNestedInput
    invoices?: InvoiceUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutVendorInput = {
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    refund_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_refunded?: BoolFieldUpdateOperationsInput | boolean
    failure_reason?: NullableStringFieldUpdateOperationsInput | string | null
    vpa?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: NullableFloatFieldUpdateOperationsInput | number | null
    rrn?: NullableStringFieldUpdateOperationsInput | string | null
    upi_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    acquirer_data?: InputJsonValue | InputJsonValue | null
    notes?: InputJsonValue | InputJsonValue | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_generated?: BoolFieldUpdateOperationsInput | boolean
    invoices?: InvoiceUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutVendorInput = {
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    refund_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_refunded?: BoolFieldUpdateOperationsInput | boolean
    failure_reason?: NullableStringFieldUpdateOperationsInput | string | null
    vpa?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: NullableFloatFieldUpdateOperationsInput | number | null
    rrn?: NullableStringFieldUpdateOperationsInput | string | null
    upi_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    acquirer_data?: InputJsonValue | InputJsonValue | null
    notes?: InputJsonValue | InputJsonValue | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_generated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InvoiceUpdateWithoutVendorInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    totalExclIGST?: FloatFieldUpdateOperationsInput | number
    igstAmount?: FloatFieldUpdateOperationsInput | number
    igstTotal?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutVendorInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    totalExclIGST?: FloatFieldUpdateOperationsInput | number
    igstAmount?: FloatFieldUpdateOperationsInput | number
    igstTotal?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutVendorInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    totalExclIGST?: FloatFieldUpdateOperationsInput | number
    igstAmount?: FloatFieldUpdateOperationsInput | number
    igstTotal?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutVendorInput = {
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    order_id?: StringFieldUpdateOperationsInput | string
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    is_trial?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutVendorInput = {
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    order_id?: StringFieldUpdateOperationsInput | string
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    is_trial?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutVendorInput = {
    planId?: StringFieldUpdateOperationsInput | string
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    order_id?: StringFieldUpdateOperationsInput | string
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    is_trial?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateManyServiceInput = {
    id?: string
    available_date: Date | string
    wedding_date: Date | string
    is_available: boolean
    created_at?: Date | string
  }

  export type FeedbackCreateManyServiceInput = {
    id?: string
    userId: string
    comment: string
    rating: number
    user_name?: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MediaCreateManyServiceInput = {
    id?: string
    image_urls: InputJsonValue
    video_urls: InputJsonValue
    uploaded_at?: Date | string
  }

  export type ViewsCreateManyServiceInput = {
    id?: string
    userId: string
    viewCount?: number
    lead?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AvailabilityUpdateWithoutServiceInput = {
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUncheckedUpdateWithoutServiceInput = {
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUncheckedUpdateManyWithoutServiceInput = {
    available_date?: DateTimeFieldUpdateOperationsInput | Date | string
    wedding_date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutServiceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateWithoutServiceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutServiceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    user_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpdateWithoutServiceInput = {
    image_urls?: InputJsonValue | InputJsonValue
    video_urls?: InputJsonValue | InputJsonValue
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateWithoutServiceInput = {
    image_urls?: InputJsonValue | InputJsonValue
    video_urls?: InputJsonValue | InputJsonValue
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutServiceInput = {
    image_urls?: InputJsonValue | InputJsonValue
    video_urls?: InputJsonValue | InputJsonValue
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsUpdateWithoutServiceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    lead?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsUncheckedUpdateWithoutServiceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    lead?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewsUncheckedUpdateManyWithoutServiceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    viewCount?: IntFieldUpdateOperationsInput | number
    lead?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: string
    vendorId?: string | null
    status?: $Enums.SubscriptionStatus
    order_id: string
    payment_id?: string | null
    start_date?: Date | string
    end_date?: Date | string | null
    auto_renew?: boolean
    is_trial?: boolean
    trial_end_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    order_id?: StringFieldUpdateOperationsInput | string
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    is_trial?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutSubscriptionNestedInput
    payments?: PaymentUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    order_id?: StringFieldUpdateOperationsInput | string
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    is_trial?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    order_id?: StringFieldUpdateOperationsInput | string
    payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auto_renew?: BoolFieldUpdateOperationsInput | boolean
    is_trial?: BoolFieldUpdateOperationsInput | boolean
    trial_end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManySubscriptionInput = {
    id?: string
    vendorId?: string | null
    amount: number
    currency: string
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    razorpay_order_id?: string | null
    razorpay_payment_id?: string | null
    refund_id?: string | null
    is_refunded?: boolean
    failure_reason?: string | null
    vpa?: string | null
    fee?: number | null
    tax?: number | null
    rrn?: string | null
    upi_transaction_id?: string | null
    email?: string | null
    contact?: string | null
    acquirer_data?: InputJsonValue | null
    notes?: InputJsonValue | null
    autoRenew?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    bill_generated?: boolean
  }

  export type PaymentUpdateWithoutSubscriptionInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    refund_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_refunded?: BoolFieldUpdateOperationsInput | boolean
    failure_reason?: NullableStringFieldUpdateOperationsInput | string | null
    vpa?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: NullableFloatFieldUpdateOperationsInput | number | null
    rrn?: NullableStringFieldUpdateOperationsInput | string | null
    upi_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    acquirer_data?: InputJsonValue | InputJsonValue | null
    notes?: InputJsonValue | InputJsonValue | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_generated?: BoolFieldUpdateOperationsInput | boolean
    vendor?: VendorUpdateOneWithoutPaymentNestedInput
    invoices?: InvoiceUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutSubscriptionInput = {
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    refund_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_refunded?: BoolFieldUpdateOperationsInput | boolean
    failure_reason?: NullableStringFieldUpdateOperationsInput | string | null
    vpa?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: NullableFloatFieldUpdateOperationsInput | number | null
    rrn?: NullableStringFieldUpdateOperationsInput | string | null
    upi_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    acquirer_data?: InputJsonValue | InputJsonValue | null
    notes?: InputJsonValue | InputJsonValue | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_generated?: BoolFieldUpdateOperationsInput | boolean
    invoices?: InvoiceUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutSubscriptionInput = {
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    razorpay_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    refund_id?: NullableStringFieldUpdateOperationsInput | string | null
    is_refunded?: BoolFieldUpdateOperationsInput | boolean
    failure_reason?: NullableStringFieldUpdateOperationsInput | string | null
    vpa?: NullableStringFieldUpdateOperationsInput | string | null
    fee?: NullableFloatFieldUpdateOperationsInput | number | null
    tax?: NullableFloatFieldUpdateOperationsInput | number | null
    rrn?: NullableStringFieldUpdateOperationsInput | string | null
    upi_transaction_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    acquirer_data?: InputJsonValue | InputJsonValue | null
    notes?: InputJsonValue | InputJsonValue | null
    autoRenew?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    bill_generated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type InvoiceCreateManyPaymentInput = {
    id?: string
    invoiceNumber: string
    vendorId?: string | null
    nextBillingDate?: Date | string | null
    discount?: number
    totalExclIGST: number
    igstAmount: number
    igstTotal: number
    totalAmount: number
    amountDue?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type InvoiceUpdateWithoutPaymentInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    totalExclIGST?: FloatFieldUpdateOperationsInput | number
    igstAmount?: FloatFieldUpdateOperationsInput | number
    igstTotal?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateWithoutPaymentInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    totalExclIGST?: FloatFieldUpdateOperationsInput | number
    igstAmount?: FloatFieldUpdateOperationsInput | number
    igstTotal?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutPaymentInput = {
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    vendorId?: NullableStringFieldUpdateOperationsInput | string | null
    nextBillingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    discount?: FloatFieldUpdateOperationsInput | number
    totalExclIGST?: FloatFieldUpdateOperationsInput | number
    igstAmount?: FloatFieldUpdateOperationsInput | number
    igstTotal?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}