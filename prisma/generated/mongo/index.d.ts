
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
 * Model FAQ
 * 
 */
export type FAQ = $Result.DefaultSelection<Prisma.$FAQPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReviewType: {
  VENDOR: 'VENDOR',
  SERVICE: 'SERVICE'
};

export type ReviewType = (typeof ReviewType)[keyof typeof ReviewType]

}

export type ReviewType = $Enums.ReviewType

export const ReviewType: typeof $Enums.ReviewType

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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs>;

  /**
   * `prisma.fAQ`: Exposes CRUD operations for the **FAQ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FAQS
    * const fAQS = await prisma.fAQ.findMany()
    * ```
    */
  get fAQ(): Prisma.FAQDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    Availability: 'Availability',
    Media: 'Media',
    TeamMember: 'TeamMember',
    Promotion: 'Promotion',
    FAQ: 'FAQ',
    Review: 'Review'
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
      modelProps: "vendor" | "service" | "availability" | "media" | "teamMember" | "promotion" | "fAQ" | "review"
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
      FAQ: {
        payload: Prisma.$FAQPayload<ExtArgs>
        fields: Prisma.FAQFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FAQFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FAQFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findFirst: {
            args: Prisma.FAQFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FAQFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          findMany: {
            args: Prisma.FAQFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>[]
          }
          create: {
            args: Prisma.FAQCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          createMany: {
            args: Prisma.FAQCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FAQDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          update: {
            args: Prisma.FAQUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          deleteMany: {
            args: Prisma.FAQDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FAQUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FAQUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FAQPayload>
          }
          aggregate: {
            args: Prisma.FAQAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFAQ>
          }
          groupBy: {
            args: Prisma.FAQGroupByArgs<ExtArgs>
            result: $Utils.Optional<FAQGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FAQFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FAQAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FAQCountArgs<ExtArgs>
            result: $Utils.Optional<FAQCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReviewFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReviewAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
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
    faqs: number
    reviews: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | VendorCountOutputTypeCountServicesArgs
    promotions?: boolean | VendorCountOutputTypeCountPromotionsArgs
    team_members?: boolean | VendorCountOutputTypeCountTeam_membersArgs
    faqs?: boolean | VendorCountOutputTypeCountFaqsArgs
    reviews?: boolean | VendorCountOutputTypeCountReviewsArgs
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
  export type VendorCountOutputTypeCountFaqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    availabilities: number
    reviews: number
    media: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | ServiceCountOutputTypeCountAvailabilitiesArgs
    reviews?: boolean | ServiceCountOutputTypeCountReviewsArgs
    media?: boolean | ServiceCountOutputTypeCountMediaArgs
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
  export type ServiceCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
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
    logo_url: string | null
    location: string | null
    email: string | null
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
    logo_url: string | null
    location: string | null
    email: string | null
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
    location: number
    email: number
    password_hash: number
    phone_number: number
    map_location: number
    social_networks: number
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
    logo_url?: true
    location?: true
    email?: true
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
    logo_url?: true
    location?: true
    email?: true
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
    location?: true
    email?: true
    password_hash?: true
    phone_number?: true
    map_location?: true
    social_networks?: true
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
    description: string
    logo_url: string | null
    location: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: JsonValue
    social_networks: JsonValue | null
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
    location?: boolean
    email?: boolean
    password_hash?: boolean
    phone_number?: boolean
    map_location?: boolean
    social_networks?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_verified?: boolean
    refresh_Token?: boolean
    resetPassword_Token?: boolean
    role?: boolean
    services?: boolean | Vendor$servicesArgs<ExtArgs>
    promotions?: boolean | Vendor$promotionsArgs<ExtArgs>
    team_members?: boolean | Vendor$team_membersArgs<ExtArgs>
    faqs?: boolean | Vendor$faqsArgs<ExtArgs>
    reviews?: boolean | Vendor$reviewsArgs<ExtArgs>
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
    location?: boolean
    email?: boolean
    password_hash?: boolean
    phone_number?: boolean
    map_location?: boolean
    social_networks?: boolean
    created_at?: boolean
    updated_at?: boolean
    is_verified?: boolean
    refresh_Token?: boolean
    resetPassword_Token?: boolean
    role?: boolean
  }

  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Vendor$servicesArgs<ExtArgs>
    promotions?: boolean | Vendor$promotionsArgs<ExtArgs>
    team_members?: boolean | Vendor$team_membersArgs<ExtArgs>
    faqs?: boolean | Vendor$faqsArgs<ExtArgs>
    reviews?: boolean | Vendor$reviewsArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
      promotions: Prisma.$PromotionPayload<ExtArgs>[]
      team_members: Prisma.$TeamMemberPayload<ExtArgs>[]
      faqs: Prisma.$FAQPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      business_name: string
      business_category: string
      license_number: string | null
      service_type: string[]
      description: string
      logo_url: string | null
      location: string | null
      email: string
      password_hash: string
      phone_number: string
      map_location: Prisma.JsonValue
      social_networks: Prisma.JsonValue | null
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
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany">>

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
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

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
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Vendor$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany"> | Null>
    promotions<T extends Vendor$promotionsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$promotionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany"> | Null>
    team_members<T extends Vendor$team_membersArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$team_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany"> | Null>
    faqs<T extends Vendor$faqsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$faqsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Vendor$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly logo_url: FieldRef<"Vendor", 'String'>
    readonly location: FieldRef<"Vendor", 'String'>
    readonly email: FieldRef<"Vendor", 'String'>
    readonly password_hash: FieldRef<"Vendor", 'String'>
    readonly phone_number: FieldRef<"Vendor", 'String'>
    readonly map_location: FieldRef<"Vendor", 'Json'>
    readonly social_networks: FieldRef<"Vendor", 'Json'>
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
   * Vendor.faqs
   */
  export type Vendor$faqsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    cursor?: FAQWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * Vendor.reviews
   */
  export type Vendor$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
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
    rating: number | null
  }

  export type ServiceSumAggregateOutputType = {
    min_price: number | null
    max_price: number | null
    rating: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    service_name: string | null
    description: string | null
    min_price: number | null
    max_price: number | null
    service_type: string | null
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
    service_type: string | null
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
    service_type: number
    rating: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    min_price?: true
    max_price?: true
    rating?: true
  }

  export type ServiceSumAggregateInputType = {
    min_price?: true
    max_price?: true
    rating?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    vendorId?: true
    service_name?: true
    description?: true
    min_price?: true
    max_price?: true
    service_type?: true
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
    service_type?: true
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
    service_type?: true
    rating?: true
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
    description: string
    min_price: number | null
    max_price: number | null
    service_type: string
    rating: number
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
    service_type?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    availabilities?: boolean | Service$availabilitiesArgs<ExtArgs>
    reviews?: boolean | Service$reviewsArgs<ExtArgs>
    media?: boolean | Service$mediaArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>


  export type ServiceSelectScalar = {
    id?: boolean
    vendorId?: boolean
    service_name?: boolean
    description?: boolean
    min_price?: boolean
    max_price?: boolean
    service_type?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    availabilities?: boolean | Service$availabilitiesArgs<ExtArgs>
    reviews?: boolean | Service$reviewsArgs<ExtArgs>
    media?: boolean | Service$mediaArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      availabilities: Prisma.$AvailabilityPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      media: Prisma.$MediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      service_name: string
      description: string
      min_price: number | null
      max_price: number | null
      service_type: string
      rating: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany">>

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
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>

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
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    availabilities<T extends Service$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Service$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Service$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Service$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    media<T extends Service$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Service$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly service_type: FieldRef<"Service", 'String'>
    readonly rating: FieldRef<"Service", 'Float'>
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
   * Service.reviews
   */
  export type Service$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
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
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
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
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany">>

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
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

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
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    image_urls: string[]
    video_urls: string[]
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
      image_urls: string[]
      video_urls: string[]
      uploaded_at: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany">>

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
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

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
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    readonly image_urls: FieldRef<"Media", 'String[]'>
    readonly video_urls: FieldRef<"Media", 'String[]'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
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
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany">>

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
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

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
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends PromotionFindUniqueArgs>(args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends PromotionFindFirstArgs>(args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends PromotionFindManyArgs>(args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany">>

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
    create<T extends PromotionCreateArgs>(args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    delete<T extends PromotionDeleteArgs>(args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends PromotionUpdateArgs>(args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends PromotionUpsertArgs>(args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

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
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
  }


  /**
   * Model FAQ
   */

  export type AggregateFAQ = {
    _count: FAQCountAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  export type FAQMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    question: string | null
    answer: string | null
    created_at: Date | null
  }

  export type FAQMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    question: string | null
    answer: string | null
    created_at: Date | null
  }

  export type FAQCountAggregateOutputType = {
    id: number
    vendorId: number
    question: number
    answer: number
    created_at: number
    _all: number
  }


  export type FAQMinAggregateInputType = {
    id?: true
    vendorId?: true
    question?: true
    answer?: true
    created_at?: true
  }

  export type FAQMaxAggregateInputType = {
    id?: true
    vendorId?: true
    question?: true
    answer?: true
    created_at?: true
  }

  export type FAQCountAggregateInputType = {
    id?: true
    vendorId?: true
    question?: true
    answer?: true
    created_at?: true
    _all?: true
  }

  export type FAQAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQ to aggregate.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FAQS
    **/
    _count?: true | FAQCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FAQMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FAQMaxAggregateInputType
  }

  export type GetFAQAggregateType<T extends FAQAggregateArgs> = {
        [P in keyof T & keyof AggregateFAQ]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFAQ[P]>
      : GetScalarType<T[P], AggregateFAQ[P]>
  }




  export type FAQGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FAQWhereInput
    orderBy?: FAQOrderByWithAggregationInput | FAQOrderByWithAggregationInput[]
    by: FAQScalarFieldEnum[] | FAQScalarFieldEnum
    having?: FAQScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FAQCountAggregateInputType | true
    _min?: FAQMinAggregateInputType
    _max?: FAQMaxAggregateInputType
  }

  export type FAQGroupByOutputType = {
    id: string
    vendorId: string
    question: string
    answer: string | null
    created_at: Date
    _count: FAQCountAggregateOutputType | null
    _min: FAQMinAggregateOutputType | null
    _max: FAQMaxAggregateOutputType | null
  }

  type GetFAQGroupByPayload<T extends FAQGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FAQGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FAQGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FAQGroupByOutputType[P]>
            : GetScalarType<T[P], FAQGroupByOutputType[P]>
        }
      >
    >


  export type FAQSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    question?: boolean
    answer?: boolean
    created_at?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fAQ"]>


  export type FAQSelectScalar = {
    id?: boolean
    vendorId?: boolean
    question?: boolean
    answer?: boolean
    created_at?: boolean
  }

  export type FAQInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $FAQPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FAQ"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      question: string
      answer: string | null
      created_at: Date
    }, ExtArgs["result"]["fAQ"]>
    composites: {}
  }

  type FAQGetPayload<S extends boolean | null | undefined | FAQDefaultArgs> = $Result.GetResult<Prisma.$FAQPayload, S>

  type FAQCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FAQFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FAQCountAggregateInputType | true
    }

  export interface FAQDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FAQ'], meta: { name: 'FAQ' } }
    /**
     * Find zero or one FAQ that matches the filter.
     * @param {FAQFindUniqueArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FAQFindUniqueArgs>(args: SelectSubset<T, FAQFindUniqueArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FAQ that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FAQFindUniqueOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FAQFindUniqueOrThrowArgs>(args: SelectSubset<T, FAQFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FAQ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FAQFindFirstArgs>(args?: SelectSubset<T, FAQFindFirstArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FAQ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindFirstOrThrowArgs} args - Arguments to find a FAQ
     * @example
     * // Get one FAQ
     * const fAQ = await prisma.fAQ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FAQFindFirstOrThrowArgs>(args?: SelectSubset<T, FAQFindFirstOrThrowArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FAQS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FAQS
     * const fAQS = await prisma.fAQ.findMany()
     * 
     * // Get first 10 FAQS
     * const fAQS = await prisma.fAQ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fAQWithIdOnly = await prisma.fAQ.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FAQFindManyArgs>(args?: SelectSubset<T, FAQFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FAQ.
     * @param {FAQCreateArgs} args - Arguments to create a FAQ.
     * @example
     * // Create one FAQ
     * const FAQ = await prisma.fAQ.create({
     *   data: {
     *     // ... data to create a FAQ
     *   }
     * })
     * 
     */
    create<T extends FAQCreateArgs>(args: SelectSubset<T, FAQCreateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FAQS.
     * @param {FAQCreateManyArgs} args - Arguments to create many FAQS.
     * @example
     * // Create many FAQS
     * const fAQ = await prisma.fAQ.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FAQCreateManyArgs>(args?: SelectSubset<T, FAQCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FAQ.
     * @param {FAQDeleteArgs} args - Arguments to delete one FAQ.
     * @example
     * // Delete one FAQ
     * const FAQ = await prisma.fAQ.delete({
     *   where: {
     *     // ... filter to delete one FAQ
     *   }
     * })
     * 
     */
    delete<T extends FAQDeleteArgs>(args: SelectSubset<T, FAQDeleteArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FAQ.
     * @param {FAQUpdateArgs} args - Arguments to update one FAQ.
     * @example
     * // Update one FAQ
     * const fAQ = await prisma.fAQ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FAQUpdateArgs>(args: SelectSubset<T, FAQUpdateArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FAQS.
     * @param {FAQDeleteManyArgs} args - Arguments to filter FAQS to delete.
     * @example
     * // Delete a few FAQS
     * const { count } = await prisma.fAQ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FAQDeleteManyArgs>(args?: SelectSubset<T, FAQDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FAQS
     * const fAQ = await prisma.fAQ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FAQUpdateManyArgs>(args: SelectSubset<T, FAQUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FAQ.
     * @param {FAQUpsertArgs} args - Arguments to update or create a FAQ.
     * @example
     * // Update or create a FAQ
     * const fAQ = await prisma.fAQ.upsert({
     *   create: {
     *     // ... data to create a FAQ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FAQ we want to update
     *   }
     * })
     */
    upsert<T extends FAQUpsertArgs>(args: SelectSubset<T, FAQUpsertArgs<ExtArgs>>): Prisma__FAQClient<$Result.GetResult<Prisma.$FAQPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more FAQS that matches the filter.
     * @param {FAQFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const fAQ = await prisma.fAQ.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: FAQFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FAQ.
     * @param {FAQAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const fAQ = await prisma.fAQ.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FAQAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FAQS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQCountArgs} args - Arguments to filter FAQS to count.
     * @example
     * // Count the number of FAQS
     * const count = await prisma.fAQ.count({
     *   where: {
     *     // ... the filter for the FAQS we want to count
     *   }
     * })
    **/
    count<T extends FAQCountArgs>(
      args?: Subset<T, FAQCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FAQCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FAQAggregateArgs>(args: Subset<T, FAQAggregateArgs>): Prisma.PrismaPromise<GetFAQAggregateType<T>>

    /**
     * Group by FAQ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FAQGroupByArgs} args - Group by arguments.
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
      T extends FAQGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FAQGroupByArgs['orderBy'] }
        : { orderBy?: FAQGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FAQGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFAQGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FAQ model
   */
  readonly fields: FAQFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FAQ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FAQClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the FAQ model
   */ 
  interface FAQFieldRefs {
    readonly id: FieldRef<"FAQ", 'String'>
    readonly vendorId: FieldRef<"FAQ", 'String'>
    readonly question: FieldRef<"FAQ", 'String'>
    readonly answer: FieldRef<"FAQ", 'String'>
    readonly created_at: FieldRef<"FAQ", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FAQ findUnique
   */
  export type FAQFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findUniqueOrThrow
   */
  export type FAQFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ findFirst
   */
  export type FAQFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findFirstOrThrow
   */
  export type FAQFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQ to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FAQS.
     */
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ findMany
   */
  export type FAQFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter, which FAQS to fetch.
     */
    where?: FAQWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FAQS to fetch.
     */
    orderBy?: FAQOrderByWithRelationInput | FAQOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FAQS.
     */
    cursor?: FAQWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FAQS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FAQS.
     */
    skip?: number
    distinct?: FAQScalarFieldEnum | FAQScalarFieldEnum[]
  }

  /**
   * FAQ create
   */
  export type FAQCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * The data needed to create a FAQ.
     */
    data: XOR<FAQCreateInput, FAQUncheckedCreateInput>
  }

  /**
   * FAQ createMany
   */
  export type FAQCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FAQS.
     */
    data: FAQCreateManyInput | FAQCreateManyInput[]
  }

  /**
   * FAQ update
   */
  export type FAQUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * The data needed to update a FAQ.
     */
    data: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
    /**
     * Choose, which FAQ to update.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ updateMany
   */
  export type FAQUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FAQS.
     */
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyInput>
    /**
     * Filter which FAQS to update
     */
    where?: FAQWhereInput
  }

  /**
   * FAQ upsert
   */
  export type FAQUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * The filter to search for the FAQ to update in case it exists.
     */
    where: FAQWhereUniqueInput
    /**
     * In case the FAQ found by the `where` argument doesn't exist, create a new FAQ with this data.
     */
    create: XOR<FAQCreateInput, FAQUncheckedCreateInput>
    /**
     * In case the FAQ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FAQUpdateInput, FAQUncheckedUpdateInput>
  }

  /**
   * FAQ delete
   */
  export type FAQDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
    /**
     * Filter which FAQ to delete.
     */
    where: FAQWhereUniqueInput
  }

  /**
   * FAQ deleteMany
   */
  export type FAQDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FAQS to delete
     */
    where?: FAQWhereInput
  }

  /**
   * FAQ findRaw
   */
  export type FAQFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FAQ aggregateRaw
   */
  export type FAQAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * FAQ without action
   */
  export type FAQDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FAQ
     */
    select?: FAQSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FAQInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    vendorId: string | null
    serviceId: string | null
    reviewerId: string | null
    comment: string | null
    type: $Enums.ReviewType | null
    created_at: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    vendorId: string | null
    serviceId: string | null
    reviewerId: string | null
    comment: string | null
    type: $Enums.ReviewType | null
    created_at: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    vendorId: number
    serviceId: number
    reviewerId: number
    comment: number
    type: number
    created_at: number
    _all: number
  }


  export type ReviewMinAggregateInputType = {
    id?: true
    vendorId?: true
    serviceId?: true
    reviewerId?: true
    comment?: true
    type?: true
    created_at?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    vendorId?: true
    serviceId?: true
    reviewerId?: true
    comment?: true
    type?: true
    created_at?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    vendorId?: true
    serviceId?: true
    reviewerId?: true
    comment?: true
    type?: true
    created_at?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    vendorId: string
    serviceId: string | null
    reviewerId: string
    comment: string | null
    type: $Enums.ReviewType
    created_at: Date
    _count: ReviewCountAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendorId?: boolean
    serviceId?: boolean
    reviewerId?: boolean
    comment?: boolean
    type?: boolean
    created_at?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    service?: boolean | Review$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>


  export type ReviewSelectScalar = {
    id?: boolean
    vendorId?: boolean
    serviceId?: boolean
    reviewerId?: boolean
    comment?: boolean
    type?: boolean
    created_at?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    service?: boolean | Review$serviceArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendorId: string
      serviceId: string | null
      reviewerId: string
      comment: string | null
      type: $Enums.ReviewType
      created_at: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * @param {ReviewFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const review = await prisma.review.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ReviewFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Review.
     * @param {ReviewAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const review = await prisma.review.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ReviewAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    service<T extends Review$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Review$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly vendorId: FieldRef<"Review", 'String'>
    readonly serviceId: FieldRef<"Review", 'String'>
    readonly reviewerId: FieldRef<"Review", 'String'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly type: FieldRef<"Review", 'ReviewType'>
    readonly created_at: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review findRaw
   */
  export type ReviewFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Review aggregateRaw
   */
  export type ReviewAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Review.service
   */
  export type Review$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
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
    location: 'location',
    email: 'email',
    password_hash: 'password_hash',
    phone_number: 'phone_number',
    map_location: 'map_location',
    social_networks: 'social_networks',
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
    service_type: 'service_type',
    rating: 'rating',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


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


  export const FAQScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    question: 'question',
    answer: 'answer',
    created_at: 'created_at'
  };

  export type FAQScalarFieldEnum = (typeof FAQScalarFieldEnum)[keyof typeof FAQScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    vendorId: 'vendorId',
    serviceId: 'serviceId',
    reviewerId: 'reviewerId',
    comment: 'comment',
    type: 'type',
    created_at: 'created_at'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


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
   * Reference to a field of type 'ReviewType'
   */
  export type EnumReviewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewType'>
    


  /**
   * Reference to a field of type 'ReviewType[]'
   */
  export type ListEnumReviewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReviewType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
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
    description?: StringFilter<"Vendor"> | string
    logo_url?: StringNullableFilter<"Vendor"> | string | null
    location?: StringNullableFilter<"Vendor"> | string | null
    email?: StringFilter<"Vendor"> | string
    password_hash?: StringFilter<"Vendor"> | string
    phone_number?: StringFilter<"Vendor"> | string
    map_location?: JsonFilter<"Vendor">
    social_networks?: JsonNullableFilter<"Vendor">
    created_at?: DateTimeFilter<"Vendor"> | Date | string
    updated_at?: DateTimeFilter<"Vendor"> | Date | string
    is_verified?: BoolFilter<"Vendor"> | boolean
    refresh_Token?: StringNullableFilter<"Vendor"> | string | null
    resetPassword_Token?: StringNullableFilter<"Vendor"> | string | null
    role?: StringFilter<"Vendor"> | string
    services?: ServiceListRelationFilter
    promotions?: PromotionListRelationFilter
    team_members?: TeamMemberListRelationFilter
    faqs?: FAQListRelationFilter
    reviews?: ReviewListRelationFilter
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
    location?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrder
    map_location?: SortOrder
    social_networks?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    is_verified?: SortOrder
    refresh_Token?: SortOrder
    resetPassword_Token?: SortOrder
    role?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
    promotions?: PromotionOrderByRelationAggregateInput
    team_members?: TeamMemberOrderByRelationAggregateInput
    faqs?: FAQOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
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
    description?: StringFilter<"Vendor"> | string
    logo_url?: StringNullableFilter<"Vendor"> | string | null
    location?: StringNullableFilter<"Vendor"> | string | null
    password_hash?: StringFilter<"Vendor"> | string
    phone_number?: StringFilter<"Vendor"> | string
    map_location?: JsonFilter<"Vendor">
    social_networks?: JsonNullableFilter<"Vendor">
    created_at?: DateTimeFilter<"Vendor"> | Date | string
    updated_at?: DateTimeFilter<"Vendor"> | Date | string
    is_verified?: BoolFilter<"Vendor"> | boolean
    refresh_Token?: StringNullableFilter<"Vendor"> | string | null
    resetPassword_Token?: StringNullableFilter<"Vendor"> | string | null
    role?: StringFilter<"Vendor"> | string
    services?: ServiceListRelationFilter
    promotions?: PromotionListRelationFilter
    team_members?: TeamMemberListRelationFilter
    faqs?: FAQListRelationFilter
    reviews?: ReviewListRelationFilter
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
    location?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrder
    map_location?: SortOrder
    social_networks?: SortOrder
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
    description?: StringWithAggregatesFilter<"Vendor"> | string
    logo_url?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    location?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    email?: StringWithAggregatesFilter<"Vendor"> | string
    password_hash?: StringWithAggregatesFilter<"Vendor"> | string
    phone_number?: StringWithAggregatesFilter<"Vendor"> | string
    map_location?: JsonWithAggregatesFilter<"Vendor">
    social_networks?: JsonNullableWithAggregatesFilter<"Vendor">
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
    description?: StringFilter<"Service"> | string
    min_price?: FloatNullableFilter<"Service"> | number | null
    max_price?: FloatNullableFilter<"Service"> | number | null
    service_type?: StringFilter<"Service"> | string
    rating?: FloatFilter<"Service"> | number
    created_at?: DateTimeFilter<"Service"> | Date | string
    updated_at?: DateTimeFilter<"Service"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    availabilities?: AvailabilityListRelationFilter
    reviews?: ReviewListRelationFilter
    media?: MediaListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    service_name?: SortOrder
    description?: SortOrder
    min_price?: SortOrder
    max_price?: SortOrder
    service_type?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    availabilities?: AvailabilityOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    media?: MediaOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    vendorId?: StringFilter<"Service"> | string
    service_name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    min_price?: FloatNullableFilter<"Service"> | number | null
    max_price?: FloatNullableFilter<"Service"> | number | null
    service_type?: StringFilter<"Service"> | string
    rating?: FloatFilter<"Service"> | number
    created_at?: DateTimeFilter<"Service"> | Date | string
    updated_at?: DateTimeFilter<"Service"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    availabilities?: AvailabilityListRelationFilter
    reviews?: ReviewListRelationFilter
    media?: MediaListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    service_name?: SortOrder
    description?: SortOrder
    min_price?: SortOrder
    max_price?: SortOrder
    service_type?: SortOrder
    rating?: SortOrder
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
    description?: StringWithAggregatesFilter<"Service"> | string
    min_price?: FloatNullableWithAggregatesFilter<"Service"> | number | null
    max_price?: FloatNullableWithAggregatesFilter<"Service"> | number | null
    service_type?: StringWithAggregatesFilter<"Service"> | string
    rating?: FloatWithAggregatesFilter<"Service"> | number
    created_at?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Service"> | Date | string
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
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
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
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    serviceId?: StringFilter<"Availability"> | string
    available_date?: DateTimeFilter<"Availability"> | Date | string
    wedding_date?: DateTimeFilter<"Availability"> | Date | string
    is_available?: BoolFilter<"Availability"> | boolean
    created_at?: DateTimeFilter<"Availability"> | Date | string
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
  }, "id">

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
    image_urls?: StringNullableListFilter<"Media">
    video_urls?: StringNullableListFilter<"Media">
    uploaded_at?: DateTimeFilter<"Media"> | Date | string
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
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
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    serviceId?: StringFilter<"Media"> | string
    image_urls?: StringNullableListFilter<"Media">
    video_urls?: StringNullableListFilter<"Media">
    uploaded_at?: DateTimeFilter<"Media"> | Date | string
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
  }, "id">

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
    image_urls?: StringNullableListFilter<"Media">
    video_urls?: StringNullableListFilter<"Media">
    uploaded_at?: DateTimeWithAggregatesFilter<"Media"> | Date | string
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
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
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
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
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
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
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
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
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

  export type FAQWhereInput = {
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    id?: StringFilter<"FAQ"> | string
    vendorId?: StringFilter<"FAQ"> | string
    question?: StringFilter<"FAQ"> | string
    answer?: StringNullableFilter<"FAQ"> | string | null
    created_at?: DateTimeFilter<"FAQ"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
  }

  export type FAQOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    created_at?: SortOrder
    vendor?: VendorOrderByWithRelationInput
  }

  export type FAQWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FAQWhereInput | FAQWhereInput[]
    OR?: FAQWhereInput[]
    NOT?: FAQWhereInput | FAQWhereInput[]
    vendorId?: StringFilter<"FAQ"> | string
    question?: StringFilter<"FAQ"> | string
    answer?: StringNullableFilter<"FAQ"> | string | null
    created_at?: DateTimeFilter<"FAQ"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
  }, "id">

  export type FAQOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    created_at?: SortOrder
    _count?: FAQCountOrderByAggregateInput
    _max?: FAQMaxOrderByAggregateInput
    _min?: FAQMinOrderByAggregateInput
  }

  export type FAQScalarWhereWithAggregatesInput = {
    AND?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    OR?: FAQScalarWhereWithAggregatesInput[]
    NOT?: FAQScalarWhereWithAggregatesInput | FAQScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FAQ"> | string
    vendorId?: StringWithAggregatesFilter<"FAQ"> | string
    question?: StringWithAggregatesFilter<"FAQ"> | string
    answer?: StringNullableWithAggregatesFilter<"FAQ"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"FAQ"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    vendorId?: StringFilter<"Review"> | string
    serviceId?: StringNullableFilter<"Review"> | string | null
    reviewerId?: StringFilter<"Review"> | string
    comment?: StringNullableFilter<"Review"> | string | null
    type?: EnumReviewTypeFilter<"Review"> | $Enums.ReviewType
    created_at?: DateTimeFilter<"Review"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    service?: XOR<ServiceNullableRelationFilter, ServiceWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    serviceId?: SortOrder
    reviewerId?: SortOrder
    comment?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    vendorId?: StringFilter<"Review"> | string
    serviceId?: StringNullableFilter<"Review"> | string | null
    reviewerId?: StringFilter<"Review"> | string
    comment?: StringNullableFilter<"Review"> | string | null
    type?: EnumReviewTypeFilter<"Review"> | $Enums.ReviewType
    created_at?: DateTimeFilter<"Review"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    service?: XOR<ServiceNullableRelationFilter, ServiceWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    vendorId?: SortOrder
    serviceId?: SortOrder
    reviewerId?: SortOrder
    comment?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    vendorId?: StringWithAggregatesFilter<"Review"> | string
    serviceId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    reviewerId?: StringWithAggregatesFilter<"Review"> | string
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    type?: EnumReviewTypeWithAggregatesFilter<"Review"> | $Enums.ReviewType
    created_at?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type VendorCreateInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceCreateNestedManyWithoutVendorInput
    promotions?: PromotionCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberCreateNestedManyWithoutVendorInput
    faqs?: FAQCreateNestedManyWithoutVendorInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceUncheckedCreateNestedManyWithoutVendorInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberUncheckedCreateNestedManyWithoutVendorInput
    faqs?: FAQUncheckedCreateNestedManyWithoutVendorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUpdateManyWithoutVendorNestedInput
    faqs?: FAQUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUncheckedUpdateManyWithoutVendorNestedInput
    faqs?: FAQUncheckedUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
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
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
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
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
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
    description: string
    min_price?: number | null
    max_price?: number | null
    service_type: string
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
    vendor: VendorCreateNestedOneWithoutServicesInput
    availabilities?: AvailabilityCreateNestedManyWithoutServiceInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
    media?: MediaCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    vendorId: string
    service_name: string
    description: string
    min_price?: number | null
    max_price?: number | null
    service_type: string
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutServiceInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
    media?: MediaUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutServicesNestedInput
    availabilities?: AvailabilityUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
    media?: MediaUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    service_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
    media?: MediaUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    vendorId: string
    service_name: string
    description: string
    min_price?: number | null
    max_price?: number | null
    service_type: string
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    service_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
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
    image_urls?: MediaCreateimage_urlsInput | string[]
    video_urls?: MediaCreatevideo_urlsInput | string[]
    uploaded_at?: Date | string
    service: ServiceCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    serviceId: string
    image_urls?: MediaCreateimage_urlsInput | string[]
    video_urls?: MediaCreatevideo_urlsInput | string[]
    uploaded_at?: Date | string
  }

  export type MediaUpdateInput = {
    image_urls?: MediaUpdateimage_urlsInput | string[]
    video_urls?: MediaUpdatevideo_urlsInput | string[]
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
    image_urls?: MediaUpdateimage_urlsInput | string[]
    video_urls?: MediaUpdatevideo_urlsInput | string[]
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateManyInput = {
    id?: string
    serviceId: string
    image_urls?: MediaCreateimage_urlsInput | string[]
    video_urls?: MediaCreatevideo_urlsInput | string[]
    uploaded_at?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    image_urls?: MediaUpdateimage_urlsInput | string[]
    video_urls?: MediaUpdatevideo_urlsInput | string[]
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
    image_urls?: MediaUpdateimage_urlsInput | string[]
    video_urls?: MediaUpdatevideo_urlsInput | string[]
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FAQCreateInput = {
    id?: string
    question: string
    answer?: string | null
    created_at?: Date | string
    vendor: VendorCreateNestedOneWithoutFaqsInput
  }

  export type FAQUncheckedCreateInput = {
    id?: string
    vendorId: string
    question: string
    answer?: string | null
    created_at?: Date | string
  }

  export type FAQUpdateInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutFaqsNestedInput
  }

  export type FAQUncheckedUpdateInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQCreateManyInput = {
    id?: string
    vendorId: string
    question: string
    answer?: string | null
    created_at?: Date | string
  }

  export type FAQUpdateManyMutationInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateManyInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    reviewerId: string
    comment?: string | null
    type: $Enums.ReviewType
    created_at?: Date | string
    vendor: VendorCreateNestedOneWithoutReviewsInput
    service?: ServiceCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    vendorId: string
    serviceId?: string | null
    reviewerId: string
    comment?: string | null
    type: $Enums.ReviewType
    created_at?: Date | string
  }

  export type ReviewUpdateInput = {
    reviewerId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutReviewsNestedInput
    service?: ServiceUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    vendorId: string
    serviceId?: string | null
    reviewerId: string
    comment?: string | null
    type: $Enums.ReviewType
    created_at?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    reviewerId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type FAQListRelationFilter = {
    every?: FAQWhereInput
    some?: FAQWhereInput
    none?: FAQWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
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

  export type FAQOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
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
    location?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    phone_number?: SortOrder
    map_location?: SortOrder
    social_networks?: SortOrder
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
    logo_url?: SortOrder
    location?: SortOrder
    email?: SortOrder
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
    logo_url?: SortOrder
    location?: SortOrder
    email?: SortOrder
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

  export type VendorRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    service_name?: SortOrder
    description?: SortOrder
    min_price?: SortOrder
    max_price?: SortOrder
    service_type?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    min_price?: SortOrder
    max_price?: SortOrder
    rating?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    service_name?: SortOrder
    description?: SortOrder
    min_price?: SortOrder
    max_price?: SortOrder
    service_type?: SortOrder
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
    service_type?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    min_price?: SortOrder
    max_price?: SortOrder
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

  export type ServiceRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
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

  export type FAQCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    created_at?: SortOrder
  }

  export type FAQMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    created_at?: SortOrder
  }

  export type FAQMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    created_at?: SortOrder
  }

  export type EnumReviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | EnumReviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewType[] | ListEnumReviewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewType[] | ListEnumReviewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewTypeFilter<$PrismaModel> | $Enums.ReviewType
  }

  export type ServiceNullableRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    serviceId?: SortOrder
    reviewerId?: SortOrder
    comment?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    serviceId?: SortOrder
    reviewerId?: SortOrder
    comment?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    vendorId?: SortOrder
    serviceId?: SortOrder
    reviewerId?: SortOrder
    comment?: SortOrder
    type?: SortOrder
    created_at?: SortOrder
  }

  export type EnumReviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | EnumReviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewType[] | ListEnumReviewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewType[] | ListEnumReviewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReviewType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewTypeFilter<$PrismaModel>
    _max?: NestedEnumReviewTypeFilter<$PrismaModel>
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

  export type FAQCreateNestedManyWithoutVendorInput = {
    create?: XOR<FAQCreateWithoutVendorInput, FAQUncheckedCreateWithoutVendorInput> | FAQCreateWithoutVendorInput[] | FAQUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutVendorInput | FAQCreateOrConnectWithoutVendorInput[]
    createMany?: FAQCreateManyVendorInputEnvelope
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutVendorInput = {
    create?: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput> | ReviewCreateWithoutVendorInput[] | ReviewUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorInput | ReviewCreateOrConnectWithoutVendorInput[]
    createMany?: ReviewCreateManyVendorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
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

  export type FAQUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<FAQCreateWithoutVendorInput, FAQUncheckedCreateWithoutVendorInput> | FAQCreateWithoutVendorInput[] | FAQUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutVendorInput | FAQCreateOrConnectWithoutVendorInput[]
    createMany?: FAQCreateManyVendorInputEnvelope
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput> | ReviewCreateWithoutVendorInput[] | ReviewUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorInput | ReviewCreateOrConnectWithoutVendorInput[]
    createMany?: ReviewCreateManyVendorInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
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

  export type FAQUpdateManyWithoutVendorNestedInput = {
    create?: XOR<FAQCreateWithoutVendorInput, FAQUncheckedCreateWithoutVendorInput> | FAQCreateWithoutVendorInput[] | FAQUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutVendorInput | FAQCreateOrConnectWithoutVendorInput[]
    upsert?: FAQUpsertWithWhereUniqueWithoutVendorInput | FAQUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: FAQCreateManyVendorInputEnvelope
    set?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    disconnect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    delete?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    update?: FAQUpdateWithWhereUniqueWithoutVendorInput | FAQUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: FAQUpdateManyWithWhereWithoutVendorInput | FAQUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: FAQScalarWhereInput | FAQScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput> | ReviewCreateWithoutVendorInput[] | ReviewUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorInput | ReviewCreateOrConnectWithoutVendorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutVendorInput | ReviewUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ReviewCreateManyVendorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutVendorInput | ReviewUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutVendorInput | ReviewUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
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

  export type FAQUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<FAQCreateWithoutVendorInput, FAQUncheckedCreateWithoutVendorInput> | FAQCreateWithoutVendorInput[] | FAQUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: FAQCreateOrConnectWithoutVendorInput | FAQCreateOrConnectWithoutVendorInput[]
    upsert?: FAQUpsertWithWhereUniqueWithoutVendorInput | FAQUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: FAQCreateManyVendorInputEnvelope
    set?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    disconnect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    delete?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    connect?: FAQWhereUniqueInput | FAQWhereUniqueInput[]
    update?: FAQUpdateWithWhereUniqueWithoutVendorInput | FAQUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: FAQUpdateManyWithWhereWithoutVendorInput | FAQUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: FAQScalarWhereInput | FAQScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput> | ReviewCreateWithoutVendorInput[] | ReviewUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutVendorInput | ReviewCreateOrConnectWithoutVendorInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutVendorInput | ReviewUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ReviewCreateManyVendorInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutVendorInput | ReviewUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutVendorInput | ReviewUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
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

  export type ReviewCreateNestedManyWithoutServiceInput = {
    create?: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput> | ReviewCreateWithoutServiceInput[] | ReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceInput | ReviewCreateOrConnectWithoutServiceInput[]
    createMany?: ReviewCreateManyServiceInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MediaCreateNestedManyWithoutServiceInput = {
    create?: XOR<MediaCreateWithoutServiceInput, MediaUncheckedCreateWithoutServiceInput> | MediaCreateWithoutServiceInput[] | MediaUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutServiceInput | MediaCreateOrConnectWithoutServiceInput[]
    createMany?: MediaCreateManyServiceInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AvailabilityCreateWithoutServiceInput, AvailabilityUncheckedCreateWithoutServiceInput> | AvailabilityCreateWithoutServiceInput[] | AvailabilityUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutServiceInput | AvailabilityCreateOrConnectWithoutServiceInput[]
    createMany?: AvailabilityCreateManyServiceInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput> | ReviewCreateWithoutServiceInput[] | ReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceInput | ReviewCreateOrConnectWithoutServiceInput[]
    createMany?: ReviewCreateManyServiceInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<MediaCreateWithoutServiceInput, MediaUncheckedCreateWithoutServiceInput> | MediaCreateWithoutServiceInput[] | MediaUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutServiceInput | MediaCreateOrConnectWithoutServiceInput[]
    createMany?: MediaCreateManyServiceInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
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

  export type ReviewUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput> | ReviewCreateWithoutServiceInput[] | ReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceInput | ReviewCreateOrConnectWithoutServiceInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutServiceInput | ReviewUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ReviewCreateManyServiceInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutServiceInput | ReviewUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutServiceInput | ReviewUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
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

  export type ReviewUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput> | ReviewCreateWithoutServiceInput[] | ReviewUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutServiceInput | ReviewCreateOrConnectWithoutServiceInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutServiceInput | ReviewUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ReviewCreateManyServiceInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutServiceInput | ReviewUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutServiceInput | ReviewUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
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

  export type MediaCreateimage_urlsInput = {
    set: string[]
  }

  export type MediaCreatevideo_urlsInput = {
    set: string[]
  }

  export type ServiceCreateNestedOneWithoutMediaInput = {
    create?: XOR<ServiceCreateWithoutMediaInput, ServiceUncheckedCreateWithoutMediaInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutMediaInput
    connect?: ServiceWhereUniqueInput
  }

  export type MediaUpdateimage_urlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MediaUpdatevideo_urlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ServiceUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<ServiceCreateWithoutMediaInput, ServiceUncheckedCreateWithoutMediaInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutMediaInput
    upsert?: ServiceUpsertWithoutMediaInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutMediaInput, ServiceUpdateWithoutMediaInput>, ServiceUncheckedUpdateWithoutMediaInput>
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

  export type VendorCreateNestedOneWithoutFaqsInput = {
    create?: XOR<VendorCreateWithoutFaqsInput, VendorUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutFaqsInput
    connect?: VendorWhereUniqueInput
  }

  export type VendorUpdateOneRequiredWithoutFaqsNestedInput = {
    create?: XOR<VendorCreateWithoutFaqsInput, VendorUncheckedCreateWithoutFaqsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutFaqsInput
    upsert?: VendorUpsertWithoutFaqsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutFaqsInput, VendorUpdateWithoutFaqsInput>, VendorUncheckedUpdateWithoutFaqsInput>
  }

  export type VendorCreateNestedOneWithoutReviewsInput = {
    create?: XOR<VendorCreateWithoutReviewsInput, VendorUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutReviewsInput
    connect?: VendorWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ServiceCreateWithoutReviewsInput, ServiceUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutReviewsInput
    connect?: ServiceWhereUniqueInput
  }

  export type EnumReviewTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReviewType
  }

  export type VendorUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<VendorCreateWithoutReviewsInput, VendorUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: VendorCreateOrConnectWithoutReviewsInput
    upsert?: VendorUpsertWithoutReviewsInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutReviewsInput, VendorUpdateWithoutReviewsInput>, VendorUncheckedUpdateWithoutReviewsInput>
  }

  export type ServiceUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<ServiceCreateWithoutReviewsInput, ServiceUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutReviewsInput
    upsert?: ServiceUpsertWithoutReviewsInput
    disconnect?: boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutReviewsInput, ServiceUpdateWithoutReviewsInput>, ServiceUncheckedUpdateWithoutReviewsInput>
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

  export type NestedEnumReviewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | EnumReviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewType[] | ListEnumReviewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewType[] | ListEnumReviewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewTypeFilter<$PrismaModel> | $Enums.ReviewType
  }

  export type NestedEnumReviewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReviewType | EnumReviewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReviewType[] | ListEnumReviewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReviewType[] | ListEnumReviewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReviewTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReviewType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReviewTypeFilter<$PrismaModel>
    _max?: NestedEnumReviewTypeFilter<$PrismaModel>
  }

  export type ServiceCreateWithoutVendorInput = {
    id?: string
    service_name: string
    description: string
    min_price?: number | null
    max_price?: number | null
    service_type: string
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
    availabilities?: AvailabilityCreateNestedManyWithoutServiceInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
    media?: MediaCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutVendorInput = {
    id?: string
    service_name: string
    description: string
    min_price?: number | null
    max_price?: number | null
    service_type: string
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutServiceInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
    media?: MediaUncheckedCreateNestedManyWithoutServiceInput
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

  export type FAQCreateWithoutVendorInput = {
    id?: string
    question: string
    answer?: string | null
    created_at?: Date | string
  }

  export type FAQUncheckedCreateWithoutVendorInput = {
    id?: string
    question: string
    answer?: string | null
    created_at?: Date | string
  }

  export type FAQCreateOrConnectWithoutVendorInput = {
    where: FAQWhereUniqueInput
    create: XOR<FAQCreateWithoutVendorInput, FAQUncheckedCreateWithoutVendorInput>
  }

  export type FAQCreateManyVendorInputEnvelope = {
    data: FAQCreateManyVendorInput | FAQCreateManyVendorInput[]
  }

  export type ReviewCreateWithoutVendorInput = {
    id?: string
    reviewerId: string
    comment?: string | null
    type: $Enums.ReviewType
    created_at?: Date | string
    service?: ServiceCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutVendorInput = {
    id?: string
    serviceId?: string | null
    reviewerId: string
    comment?: string | null
    type: $Enums.ReviewType
    created_at?: Date | string
  }

  export type ReviewCreateOrConnectWithoutVendorInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput>
  }

  export type ReviewCreateManyVendorInputEnvelope = {
    data: ReviewCreateManyVendorInput | ReviewCreateManyVendorInput[]
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
    description?: StringFilter<"Service"> | string
    min_price?: FloatNullableFilter<"Service"> | number | null
    max_price?: FloatNullableFilter<"Service"> | number | null
    service_type?: StringFilter<"Service"> | string
    rating?: FloatFilter<"Service"> | number
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

  export type FAQUpsertWithWhereUniqueWithoutVendorInput = {
    where: FAQWhereUniqueInput
    update: XOR<FAQUpdateWithoutVendorInput, FAQUncheckedUpdateWithoutVendorInput>
    create: XOR<FAQCreateWithoutVendorInput, FAQUncheckedCreateWithoutVendorInput>
  }

  export type FAQUpdateWithWhereUniqueWithoutVendorInput = {
    where: FAQWhereUniqueInput
    data: XOR<FAQUpdateWithoutVendorInput, FAQUncheckedUpdateWithoutVendorInput>
  }

  export type FAQUpdateManyWithWhereWithoutVendorInput = {
    where: FAQScalarWhereInput
    data: XOR<FAQUpdateManyMutationInput, FAQUncheckedUpdateManyWithoutVendorInput>
  }

  export type FAQScalarWhereInput = {
    AND?: FAQScalarWhereInput | FAQScalarWhereInput[]
    OR?: FAQScalarWhereInput[]
    NOT?: FAQScalarWhereInput | FAQScalarWhereInput[]
    id?: StringFilter<"FAQ"> | string
    vendorId?: StringFilter<"FAQ"> | string
    question?: StringFilter<"FAQ"> | string
    answer?: StringNullableFilter<"FAQ"> | string | null
    created_at?: DateTimeFilter<"FAQ"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutVendorInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutVendorInput, ReviewUncheckedUpdateWithoutVendorInput>
    create: XOR<ReviewCreateWithoutVendorInput, ReviewUncheckedCreateWithoutVendorInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutVendorInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutVendorInput, ReviewUncheckedUpdateWithoutVendorInput>
  }

  export type ReviewUpdateManyWithWhereWithoutVendorInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutVendorInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    vendorId?: StringFilter<"Review"> | string
    serviceId?: StringNullableFilter<"Review"> | string | null
    reviewerId?: StringFilter<"Review"> | string
    comment?: StringNullableFilter<"Review"> | string | null
    type?: EnumReviewTypeFilter<"Review"> | $Enums.ReviewType
    created_at?: DateTimeFilter<"Review"> | Date | string
  }

  export type VendorCreateWithoutServicesInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    promotions?: PromotionCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberCreateNestedManyWithoutVendorInput
    faqs?: FAQCreateNestedManyWithoutVendorInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    promotions?: PromotionUncheckedCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberUncheckedCreateNestedManyWithoutVendorInput
    faqs?: FAQUncheckedCreateNestedManyWithoutVendorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
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

  export type ReviewCreateWithoutServiceInput = {
    id?: string
    reviewerId: string
    comment?: string | null
    type: $Enums.ReviewType
    created_at?: Date | string
    vendor: VendorCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutServiceInput = {
    id?: string
    vendorId: string
    reviewerId: string
    comment?: string | null
    type: $Enums.ReviewType
    created_at?: Date | string
  }

  export type ReviewCreateOrConnectWithoutServiceInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput>
  }

  export type ReviewCreateManyServiceInputEnvelope = {
    data: ReviewCreateManyServiceInput | ReviewCreateManyServiceInput[]
  }

  export type MediaCreateWithoutServiceInput = {
    id?: string
    image_urls?: MediaCreateimage_urlsInput | string[]
    video_urls?: MediaCreatevideo_urlsInput | string[]
    uploaded_at?: Date | string
  }

  export type MediaUncheckedCreateWithoutServiceInput = {
    id?: string
    image_urls?: MediaCreateimage_urlsInput | string[]
    video_urls?: MediaCreatevideo_urlsInput | string[]
    uploaded_at?: Date | string
  }

  export type MediaCreateOrConnectWithoutServiceInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutServiceInput, MediaUncheckedCreateWithoutServiceInput>
  }

  export type MediaCreateManyServiceInputEnvelope = {
    data: MediaCreateManyServiceInput | MediaCreateManyServiceInput[]
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
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    promotions?: PromotionUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUpdateManyWithoutVendorNestedInput
    faqs?: FAQUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    promotions?: PromotionUncheckedUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUncheckedUpdateManyWithoutVendorNestedInput
    faqs?: FAQUncheckedUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
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

  export type ReviewUpsertWithWhereUniqueWithoutServiceInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutServiceInput, ReviewUncheckedUpdateWithoutServiceInput>
    create: XOR<ReviewCreateWithoutServiceInput, ReviewUncheckedCreateWithoutServiceInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutServiceInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutServiceInput, ReviewUncheckedUpdateWithoutServiceInput>
  }

  export type ReviewUpdateManyWithWhereWithoutServiceInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutServiceInput>
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
    image_urls?: StringNullableListFilter<"Media">
    video_urls?: StringNullableListFilter<"Media">
    uploaded_at?: DateTimeFilter<"Media"> | Date | string
  }

  export type ServiceCreateWithoutAvailabilitiesInput = {
    id?: string
    service_name: string
    description: string
    min_price?: number | null
    max_price?: number | null
    service_type: string
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
    vendor: VendorCreateNestedOneWithoutServicesInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
    media?: MediaCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutAvailabilitiesInput = {
    id?: string
    vendorId: string
    service_name: string
    description: string
    min_price?: number | null
    max_price?: number | null
    service_type: string
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
    media?: MediaUncheckedCreateNestedManyWithoutServiceInput
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
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutServicesNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
    media?: MediaUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAvailabilitiesInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    service_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
    media?: MediaUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateWithoutMediaInput = {
    id?: string
    service_name: string
    description: string
    min_price?: number | null
    max_price?: number | null
    service_type: string
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
    vendor: VendorCreateNestedOneWithoutServicesInput
    availabilities?: AvailabilityCreateNestedManyWithoutServiceInput
    reviews?: ReviewCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutMediaInput = {
    id?: string
    vendorId: string
    service_name: string
    description: string
    min_price?: number | null
    max_price?: number | null
    service_type: string
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutServiceInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutServiceInput
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
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutServicesNestedInput
    availabilities?: AvailabilityUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutMediaInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    service_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type VendorCreateWithoutTeam_membersInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceCreateNestedManyWithoutVendorInput
    promotions?: PromotionCreateNestedManyWithoutVendorInput
    faqs?: FAQCreateNestedManyWithoutVendorInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutTeam_membersInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceUncheckedCreateNestedManyWithoutVendorInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutVendorInput
    faqs?: FAQUncheckedCreateNestedManyWithoutVendorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
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
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUpdateManyWithoutVendorNestedInput
    faqs?: FAQUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutTeam_membersInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutVendorNestedInput
    faqs?: FAQUncheckedUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateWithoutPromotionsInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberCreateNestedManyWithoutVendorInput
    faqs?: FAQCreateNestedManyWithoutVendorInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutPromotionsInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceUncheckedCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberUncheckedCreateNestedManyWithoutVendorInput
    faqs?: FAQUncheckedCreateNestedManyWithoutVendorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
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
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUpdateManyWithoutVendorNestedInput
    faqs?: FAQUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutPromotionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUncheckedUpdateManyWithoutVendorNestedInput
    faqs?: FAQUncheckedUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateWithoutFaqsInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceCreateNestedManyWithoutVendorInput
    promotions?: PromotionCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberCreateNestedManyWithoutVendorInput
    reviews?: ReviewCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutFaqsInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceUncheckedCreateNestedManyWithoutVendorInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberUncheckedCreateNestedManyWithoutVendorInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutFaqsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutFaqsInput, VendorUncheckedCreateWithoutFaqsInput>
  }

  export type VendorUpsertWithoutFaqsInput = {
    update: XOR<VendorUpdateWithoutFaqsInput, VendorUncheckedUpdateWithoutFaqsInput>
    create: XOR<VendorCreateWithoutFaqsInput, VendorUncheckedCreateWithoutFaqsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutFaqsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutFaqsInput, VendorUncheckedUpdateWithoutFaqsInput>
  }

  export type VendorUpdateWithoutFaqsInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutFaqsInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUncheckedUpdateManyWithoutVendorNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateWithoutReviewsInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceCreateNestedManyWithoutVendorInput
    promotions?: PromotionCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberCreateNestedManyWithoutVendorInput
    faqs?: FAQCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    business_name: string
    business_category: string
    license_number?: string | null
    service_type?: VendorCreateservice_typeInput | string[]
    description: string
    logo_url?: string | null
    location?: string | null
    email: string
    password_hash: string
    phone_number: string
    map_location: InputJsonValue
    social_networks?: InputJsonValue | null
    created_at?: Date | string
    updated_at?: Date | string
    is_verified?: boolean
    refresh_Token?: string | null
    resetPassword_Token?: string | null
    role?: string
    services?: ServiceUncheckedCreateNestedManyWithoutVendorInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutVendorInput
    team_members?: TeamMemberUncheckedCreateNestedManyWithoutVendorInput
    faqs?: FAQUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutReviewsInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutReviewsInput, VendorUncheckedCreateWithoutReviewsInput>
  }

  export type ServiceCreateWithoutReviewsInput = {
    id?: string
    service_name: string
    description: string
    min_price?: number | null
    max_price?: number | null
    service_type: string
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
    vendor: VendorCreateNestedOneWithoutServicesInput
    availabilities?: AvailabilityCreateNestedManyWithoutServiceInput
    media?: MediaCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutReviewsInput = {
    id?: string
    vendorId: string
    service_name: string
    description: string
    min_price?: number | null
    max_price?: number | null
    service_type: string
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutServiceInput
    media?: MediaUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutReviewsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutReviewsInput, ServiceUncheckedCreateWithoutReviewsInput>
  }

  export type VendorUpsertWithoutReviewsInput = {
    update: XOR<VendorUpdateWithoutReviewsInput, VendorUncheckedUpdateWithoutReviewsInput>
    create: XOR<VendorCreateWithoutReviewsInput, VendorUncheckedCreateWithoutReviewsInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutReviewsInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutReviewsInput, VendorUncheckedUpdateWithoutReviewsInput>
  }

  export type VendorUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUpdateManyWithoutVendorNestedInput
    faqs?: FAQUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    business_name?: StringFieldUpdateOperationsInput | string
    business_category?: StringFieldUpdateOperationsInput | string
    license_number?: NullableStringFieldUpdateOperationsInput | string | null
    service_type?: VendorUpdateservice_typeInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    map_location?: InputJsonValue | InputJsonValue
    social_networks?: InputJsonValue | InputJsonValue | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    refresh_Token?: NullableStringFieldUpdateOperationsInput | string | null
    resetPassword_Token?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutVendorNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutVendorNestedInput
    team_members?: TeamMemberUncheckedUpdateManyWithoutVendorNestedInput
    faqs?: FAQUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type ServiceUpsertWithoutReviewsInput = {
    update: XOR<ServiceUpdateWithoutReviewsInput, ServiceUncheckedUpdateWithoutReviewsInput>
    create: XOR<ServiceCreateWithoutReviewsInput, ServiceUncheckedCreateWithoutReviewsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutReviewsInput, ServiceUncheckedUpdateWithoutReviewsInput>
  }

  export type ServiceUpdateWithoutReviewsInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutServicesNestedInput
    availabilities?: AvailabilityUpdateManyWithoutServiceNestedInput
    media?: MediaUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutReviewsInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    service_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutServiceNestedInput
    media?: MediaUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyVendorInput = {
    id?: string
    service_name: string
    description: string
    min_price?: number | null
    max_price?: number | null
    service_type: string
    rating?: number
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

  export type FAQCreateManyVendorInput = {
    id?: string
    question: string
    answer?: string | null
    created_at?: Date | string
  }

  export type ReviewCreateManyVendorInput = {
    id?: string
    serviceId?: string | null
    reviewerId: string
    comment?: string | null
    type: $Enums.ReviewType
    created_at?: Date | string
  }

  export type ServiceUpdateWithoutVendorInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUpdateManyWithoutServiceNestedInput
    media?: MediaUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutVendorInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutServiceNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutServiceNestedInput
    media?: MediaUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutVendorInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    min_price?: NullableFloatFieldUpdateOperationsInput | number | null
    max_price?: NullableFloatFieldUpdateOperationsInput | number | null
    service_type?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
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

  export type FAQUpdateWithoutVendorInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateWithoutVendorInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FAQUncheckedUpdateManyWithoutVendorInput = {
    question?: StringFieldUpdateOperationsInput | string
    answer?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutVendorInput = {
    reviewerId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutVendorInput = {
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutVendorInput = {
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateManyServiceInput = {
    id?: string
    available_date: Date | string
    wedding_date: Date | string
    is_available: boolean
    created_at?: Date | string
  }

  export type ReviewCreateManyServiceInput = {
    id?: string
    vendorId: string
    reviewerId: string
    comment?: string | null
    type: $Enums.ReviewType
    created_at?: Date | string
  }

  export type MediaCreateManyServiceInput = {
    id?: string
    image_urls?: MediaCreateimage_urlsInput | string[]
    video_urls?: MediaCreatevideo_urlsInput | string[]
    uploaded_at?: Date | string
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

  export type ReviewUpdateWithoutServiceInput = {
    reviewerId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutServiceInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutServiceInput = {
    vendorId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumReviewTypeFieldUpdateOperationsInput | $Enums.ReviewType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpdateWithoutServiceInput = {
    image_urls?: MediaUpdateimage_urlsInput | string[]
    video_urls?: MediaUpdatevideo_urlsInput | string[]
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateWithoutServiceInput = {
    image_urls?: MediaUpdateimage_urlsInput | string[]
    video_urls?: MediaUpdatevideo_urlsInput | string[]
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyWithoutServiceInput = {
    image_urls?: MediaUpdateimage_urlsInput | string[]
    video_urls?: MediaUpdatevideo_urlsInput | string[]
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use VendorCountOutputTypeDefaultArgs instead
     */
    export type VendorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VendorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceCountOutputTypeDefaultArgs instead
     */
    export type ServiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VendorDefaultArgs instead
     */
    export type VendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VendorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceDefaultArgs instead
     */
    export type ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvailabilityDefaultArgs instead
     */
    export type AvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvailabilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaDefaultArgs instead
     */
    export type MediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamMemberDefaultArgs instead
     */
    export type TeamMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamMemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromotionDefaultArgs instead
     */
    export type PromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromotionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FAQDefaultArgs instead
     */
    export type FAQArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FAQDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>

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