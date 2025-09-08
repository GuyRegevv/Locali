
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Place
 * 
 */
export type Place = $Result.DefaultSelection<Prisma.$PlacePayload>
/**
 * Model List
 * 
 */
export type List = $Result.DefaultSelection<Prisma.$ListPayload>
/**
 * Model ListPlace
 * 
 */
export type ListPlace = $Result.DefaultSelection<Prisma.$ListPlacePayload>
/**
 * Model ListLike
 * 
 */
export type ListLike = $Result.DefaultSelection<Prisma.$ListLikePayload>
/**
 * Model UserLocation
 * 
 */
export type UserLocation = $Result.DefaultSelection<Prisma.$UserLocationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LocalStatus: {
  BORN_THERE: 'BORN_THERE',
  LIVED_PAST: 'LIVED_PAST',
  CURRENTLY_LIVING: 'CURRENTLY_LIVING'
};

export type LocalStatus = (typeof LocalStatus)[keyof typeof LocalStatus]

}

export type LocalStatus = $Enums.LocalStatus

export const LocalStatus: typeof $Enums.LocalStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.place`: Exposes CRUD operations for the **Place** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Places
    * const places = await prisma.place.findMany()
    * ```
    */
  get place(): Prisma.PlaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.list`: Exposes CRUD operations for the **List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lists
    * const lists = await prisma.list.findMany()
    * ```
    */
  get list(): Prisma.ListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listPlace`: Exposes CRUD operations for the **ListPlace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListPlaces
    * const listPlaces = await prisma.listPlace.findMany()
    * ```
    */
  get listPlace(): Prisma.ListPlaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listLike`: Exposes CRUD operations for the **ListLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListLikes
    * const listLikes = await prisma.listLike.findMany()
    * ```
    */
  get listLike(): Prisma.ListLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userLocation`: Exposes CRUD operations for the **UserLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLocations
    * const userLocations = await prisma.userLocation.findMany()
    * ```
    */
  get userLocation(): Prisma.UserLocationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Country: 'Country',
    City: 'City',
    Place: 'Place',
    List: 'List',
    ListPlace: 'ListPlace',
    ListLike: 'ListLike',
    UserLocation: 'UserLocation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "country" | "city" | "place" | "list" | "listPlace" | "listLike" | "userLocation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Place: {
        payload: Prisma.$PlacePayload<ExtArgs>
        fields: Prisma.PlaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findFirst: {
            args: Prisma.PlaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          findMany: {
            args: Prisma.PlaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          create: {
            args: Prisma.PlaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          createMany: {
            args: Prisma.PlaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          delete: {
            args: Prisma.PlaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          update: {
            args: Prisma.PlaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          deleteMany: {
            args: Prisma.PlaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>[]
          }
          upsert: {
            args: Prisma.PlaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlacePayload>
          }
          aggregate: {
            args: Prisma.PlaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlace>
          }
          groupBy: {
            args: Prisma.PlaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaceCountArgs<ExtArgs>
            result: $Utils.Optional<PlaceCountAggregateOutputType> | number
          }
        }
      }
      List: {
        payload: Prisma.$ListPayload<ExtArgs>
        fields: Prisma.ListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findFirst: {
            args: Prisma.ListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findMany: {
            args: Prisma.ListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          create: {
            args: Prisma.ListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          createMany: {
            args: Prisma.ListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          delete: {
            args: Prisma.ListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          update: {
            args: Prisma.ListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          deleteMany: {
            args: Prisma.ListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          upsert: {
            args: Prisma.ListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          aggregate: {
            args: Prisma.ListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateList>
          }
          groupBy: {
            args: Prisma.ListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListCountArgs<ExtArgs>
            result: $Utils.Optional<ListCountAggregateOutputType> | number
          }
        }
      }
      ListPlace: {
        payload: Prisma.$ListPlacePayload<ExtArgs>
        fields: Prisma.ListPlaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListPlaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPlacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListPlaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPlacePayload>
          }
          findFirst: {
            args: Prisma.ListPlaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPlacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListPlaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPlacePayload>
          }
          findMany: {
            args: Prisma.ListPlaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPlacePayload>[]
          }
          create: {
            args: Prisma.ListPlaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPlacePayload>
          }
          createMany: {
            args: Prisma.ListPlaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListPlaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPlacePayload>[]
          }
          delete: {
            args: Prisma.ListPlaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPlacePayload>
          }
          update: {
            args: Prisma.ListPlaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPlacePayload>
          }
          deleteMany: {
            args: Prisma.ListPlaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListPlaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListPlaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPlacePayload>[]
          }
          upsert: {
            args: Prisma.ListPlaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPlacePayload>
          }
          aggregate: {
            args: Prisma.ListPlaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListPlace>
          }
          groupBy: {
            args: Prisma.ListPlaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListPlaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListPlaceCountArgs<ExtArgs>
            result: $Utils.Optional<ListPlaceCountAggregateOutputType> | number
          }
        }
      }
      ListLike: {
        payload: Prisma.$ListLikePayload<ExtArgs>
        fields: Prisma.ListLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListLikePayload>
          }
          findFirst: {
            args: Prisma.ListLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListLikePayload>
          }
          findMany: {
            args: Prisma.ListLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListLikePayload>[]
          }
          create: {
            args: Prisma.ListLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListLikePayload>
          }
          createMany: {
            args: Prisma.ListLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListLikePayload>[]
          }
          delete: {
            args: Prisma.ListLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListLikePayload>
          }
          update: {
            args: Prisma.ListLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListLikePayload>
          }
          deleteMany: {
            args: Prisma.ListLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListLikePayload>[]
          }
          upsert: {
            args: Prisma.ListLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListLikePayload>
          }
          aggregate: {
            args: Prisma.ListLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListLike>
          }
          groupBy: {
            args: Prisma.ListLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListLikeCountArgs<ExtArgs>
            result: $Utils.Optional<ListLikeCountAggregateOutputType> | number
          }
        }
      }
      UserLocation: {
        payload: Prisma.$UserLocationPayload<ExtArgs>
        fields: Prisma.UserLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          findFirst: {
            args: Prisma.UserLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          findMany: {
            args: Prisma.UserLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          create: {
            args: Prisma.UserLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          createMany: {
            args: Prisma.UserLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          delete: {
            args: Prisma.UserLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          update: {
            args: Prisma.UserLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          deleteMany: {
            args: Prisma.UserLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>[]
          }
          upsert: {
            args: Prisma.UserLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLocationPayload>
          }
          aggregate: {
            args: Prisma.UserLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLocation>
          }
          groupBy: {
            args: Prisma.UserLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLocationCountArgs<ExtArgs>
            result: $Utils.Optional<UserLocationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
      isolationLevel?: Prisma.TransactionIsolationLevel
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
    user?: UserOmit
    country?: CountryOmit
    city?: CityOmit
    place?: PlaceOmit
    list?: ListOmit
    listPlace?: ListPlaceOmit
    listLike?: ListLikeOmit
    userLocation?: UserLocationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    lists: number
    likes: number
    locations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | UserCountOutputTypeCountListsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    locations?: boolean | UserCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    cities: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | CountryCountOutputTypeCountCitiesArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    lists: number
    places: number
    userLocations: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | CityCountOutputTypeCountListsArgs
    places?: boolean | CityCountOutputTypeCountPlacesArgs
    userLocations?: boolean | CityCountOutputTypeCountUserLocationsArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountPlacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountUserLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationWhereInput
  }


  /**
   * Count Type PlaceCountOutputType
   */

  export type PlaceCountOutputType = {
    listItems: number
  }

  export type PlaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listItems?: boolean | PlaceCountOutputTypeCountListItemsArgs
  }

  // Custom InputTypes
  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaceCountOutputType
     */
    select?: PlaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaceCountOutputType without action
   */
  export type PlaceCountOutputTypeCountListItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListPlaceWhereInput
  }


  /**
   * Count Type ListCountOutputType
   */

  export type ListCountOutputType = {
    likes: number
    places: number
  }

  export type ListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | ListCountOutputTypeCountLikesArgs
    places?: boolean | ListCountOutputTypeCountPlacesArgs
  }

  // Custom InputTypes
  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCountOutputType
     */
    select?: ListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListLikeWhereInput
  }

  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountPlacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListPlaceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    avatar: string | null
    address: string | null
    isLocal: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    avatar: string | null
    address: string | null
    isLocal: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    avatar: number
    address: number
    isLocal: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    avatar?: true
    address?: true
    isLocal?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    avatar?: true
    address?: true
    isLocal?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    avatar?: true
    address?: true
    isLocal?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    createdAt: Date
    avatar: string | null
    address: string | null
    isLocal: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    avatar?: boolean
    address?: boolean
    isLocal?: boolean
    lists?: boolean | User$listsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    locations?: boolean | User$locationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    avatar?: boolean
    address?: boolean
    isLocal?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    avatar?: boolean
    address?: boolean
    isLocal?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    avatar?: boolean
    address?: boolean
    isLocal?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "avatar" | "address" | "isLocal", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lists?: boolean | User$listsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    locations?: boolean | User$locationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      lists: Prisma.$ListPayload<ExtArgs>[]
      likes: Prisma.$ListLikePayload<ExtArgs>[]
      locations: Prisma.$UserLocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      createdAt: Date
      avatar: string | null
      address: string | null
      isLocal: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lists<T extends User$listsArgs<ExtArgs> = {}>(args?: Subset<T, User$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locations<T extends User$locationsArgs<ExtArgs> = {}>(args?: Subset<T, User$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly isLocal: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.lists
   */
  export type User$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    where?: ListWhereInput
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    cursor?: ListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeInclude<ExtArgs> | null
    where?: ListLikeWhereInput
    orderBy?: ListLikeOrderByWithRelationInput | ListLikeOrderByWithRelationInput[]
    cursor?: ListLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListLikeScalarFieldEnum | ListLikeScalarFieldEnum[]
  }

  /**
   * User.locations
   */
  export type User$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    where?: UserLocationWhereInput
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    cursor?: UserLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    slug: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    slug: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    code: number
    slug: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    slug?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    slug?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    slug?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: string
    name: string
    code: string | null
    slug: string | null
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    slug?: boolean
    cities?: boolean | Country$citiesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    slug?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    slug?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    slug?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "slug", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | Country$citiesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      cities: Prisma.$CityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string | null
      slug: string | null
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cities<T extends Country$citiesArgs<ExtArgs> = {}>(args?: Subset<T, Country$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
    readonly code: FieldRef<"Country", 'String'>
    readonly slug: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.cities
   */
  export type Country$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
    listCount: number | null
  }

  export type CitySumAggregateOutputType = {
    lat: number | null
    lng: number | null
    listCount: number | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    countryId: string | null
    name: string | null
    slug: string | null
    lat: number | null
    lng: number | null
    listCount: number | null
    googlePlaceId: string | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    countryId: string | null
    name: string | null
    slug: string | null
    lat: number | null
    lng: number | null
    listCount: number | null
    googlePlaceId: string | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    countryId: number
    name: number
    slug: number
    lat: number
    lng: number
    listCount: number
    googlePlaceId: number
    _all: number
  }


  export type CityAvgAggregateInputType = {
    lat?: true
    lng?: true
    listCount?: true
  }

  export type CitySumAggregateInputType = {
    lat?: true
    lng?: true
    listCount?: true
  }

  export type CityMinAggregateInputType = {
    id?: true
    countryId?: true
    name?: true
    slug?: true
    lat?: true
    lng?: true
    listCount?: true
    googlePlaceId?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    countryId?: true
    name?: true
    slug?: true
    lat?: true
    lng?: true
    listCount?: true
    googlePlaceId?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    countryId?: true
    name?: true
    slug?: true
    lat?: true
    lng?: true
    listCount?: true
    googlePlaceId?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _avg?: CityAvgAggregateInputType
    _sum?: CitySumAggregateInputType
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: string
    countryId: string
    name: string
    slug: string | null
    lat: number | null
    lng: number | null
    listCount: number
    googlePlaceId: string | null
    _count: CityCountAggregateOutputType | null
    _avg: CityAvgAggregateOutputType | null
    _sum: CitySumAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    name?: boolean
    slug?: boolean
    lat?: boolean
    lng?: boolean
    listCount?: boolean
    googlePlaceId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    lists?: boolean | City$listsArgs<ExtArgs>
    places?: boolean | City$placesArgs<ExtArgs>
    userLocations?: boolean | City$userLocationsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    name?: boolean
    slug?: boolean
    lat?: boolean
    lng?: boolean
    listCount?: boolean
    googlePlaceId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    countryId?: boolean
    name?: boolean
    slug?: boolean
    lat?: boolean
    lng?: boolean
    listCount?: boolean
    googlePlaceId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    countryId?: boolean
    name?: boolean
    slug?: boolean
    lat?: boolean
    lng?: boolean
    listCount?: boolean
    googlePlaceId?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "countryId" | "name" | "slug" | "lat" | "lng" | "listCount" | "googlePlaceId", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    lists?: boolean | City$listsArgs<ExtArgs>
    places?: boolean | City$placesArgs<ExtArgs>
    userLocations?: boolean | City$userLocationsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type CityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      lists: Prisma.$ListPayload<ExtArgs>[]
      places: Prisma.$PlacePayload<ExtArgs>[]
      userLocations: Prisma.$UserLocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      countryId: string
      name: string
      slug: string | null
      lat: number | null
      lng: number | null
      listCount: number
      googlePlaceId: string | null
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {CityUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CityUpdateManyAndReturnArgs>(args: SelectSubset<T, CityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lists<T extends City$listsArgs<ExtArgs> = {}>(args?: Subset<T, City$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    places<T extends City$placesArgs<ExtArgs> = {}>(args?: Subset<T, City$placesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userLocations<T extends City$userLocationsArgs<ExtArgs> = {}>(args?: Subset<T, City$userLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'String'>
    readonly countryId: FieldRef<"City", 'String'>
    readonly name: FieldRef<"City", 'String'>
    readonly slug: FieldRef<"City", 'String'>
    readonly lat: FieldRef<"City", 'Float'>
    readonly lng: FieldRef<"City", 'Float'>
    readonly listCount: FieldRef<"City", 'Int'>
    readonly googlePlaceId: FieldRef<"City", 'String'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City updateManyAndReturn
   */
  export type CityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City.lists
   */
  export type City$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    where?: ListWhereInput
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    cursor?: ListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * City.places
   */
  export type City$placesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    cursor?: PlaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * City.userLocations
   */
  export type City$userLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    where?: UserLocationWhereInput
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    cursor?: UserLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model Place
   */

  export type AggregatePlace = {
    _count: PlaceCountAggregateOutputType | null
    _avg: PlaceAvgAggregateOutputType | null
    _sum: PlaceSumAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  export type PlaceAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type PlaceSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type PlaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    lat: number | null
    lng: number | null
    googlePlaceId: string | null
    description: string | null
    primaryImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    cityId: string | null
  }

  export type PlaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    lat: number | null
    lng: number | null
    googlePlaceId: string | null
    description: string | null
    primaryImageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    cityId: string | null
  }

  export type PlaceCountAggregateOutputType = {
    id: number
    name: number
    address: number
    lat: number
    lng: number
    googlePlaceId: number
    description: number
    primaryImageUrl: number
    createdAt: number
    updatedAt: number
    cityId: number
    _all: number
  }


  export type PlaceAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type PlaceSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type PlaceMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    lat?: true
    lng?: true
    googlePlaceId?: true
    description?: true
    primaryImageUrl?: true
    createdAt?: true
    updatedAt?: true
    cityId?: true
  }

  export type PlaceMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    lat?: true
    lng?: true
    googlePlaceId?: true
    description?: true
    primaryImageUrl?: true
    createdAt?: true
    updatedAt?: true
    cityId?: true
  }

  export type PlaceCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    lat?: true
    lng?: true
    googlePlaceId?: true
    description?: true
    primaryImageUrl?: true
    createdAt?: true
    updatedAt?: true
    cityId?: true
    _all?: true
  }

  export type PlaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Place to aggregate.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Places
    **/
    _count?: true | PlaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaceMaxAggregateInputType
  }

  export type GetPlaceAggregateType<T extends PlaceAggregateArgs> = {
        [P in keyof T & keyof AggregatePlace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlace[P]>
      : GetScalarType<T[P], AggregatePlace[P]>
  }




  export type PlaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaceWhereInput
    orderBy?: PlaceOrderByWithAggregationInput | PlaceOrderByWithAggregationInput[]
    by: PlaceScalarFieldEnum[] | PlaceScalarFieldEnum
    having?: PlaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaceCountAggregateInputType | true
    _avg?: PlaceAvgAggregateInputType
    _sum?: PlaceSumAggregateInputType
    _min?: PlaceMinAggregateInputType
    _max?: PlaceMaxAggregateInputType
  }

  export type PlaceGroupByOutputType = {
    id: string
    name: string
    address: string
    lat: number
    lng: number
    googlePlaceId: string
    description: string | null
    primaryImageUrl: string | null
    createdAt: Date
    updatedAt: Date
    cityId: string
    _count: PlaceCountAggregateOutputType | null
    _avg: PlaceAvgAggregateOutputType | null
    _sum: PlaceSumAggregateOutputType | null
    _min: PlaceMinAggregateOutputType | null
    _max: PlaceMaxAggregateOutputType | null
  }

  type GetPlaceGroupByPayload<T extends PlaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaceGroupByOutputType[P]>
            : GetScalarType<T[P], PlaceGroupByOutputType[P]>
        }
      >
    >


  export type PlaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    googlePlaceId?: boolean
    description?: boolean
    primaryImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cityId?: boolean
    listItems?: boolean | Place$listItemsArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    _count?: boolean | PlaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    googlePlaceId?: boolean
    description?: boolean
    primaryImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    googlePlaceId?: boolean
    description?: boolean
    primaryImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["place"]>

  export type PlaceSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    lat?: boolean
    lng?: boolean
    googlePlaceId?: boolean
    description?: boolean
    primaryImageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cityId?: boolean
  }

  export type PlaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "lat" | "lng" | "googlePlaceId" | "description" | "primaryImageUrl" | "createdAt" | "updatedAt" | "cityId", ExtArgs["result"]["place"]>
  export type PlaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listItems?: boolean | Place$listItemsArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    _count?: boolean | PlaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type PlaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $PlacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Place"
    objects: {
      listItems: Prisma.$ListPlacePayload<ExtArgs>[]
      city: Prisma.$CityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      lat: number
      lng: number
      googlePlaceId: string
      description: string | null
      primaryImageUrl: string | null
      createdAt: Date
      updatedAt: Date
      cityId: string
    }, ExtArgs["result"]["place"]>
    composites: {}
  }

  type PlaceGetPayload<S extends boolean | null | undefined | PlaceDefaultArgs> = $Result.GetResult<Prisma.$PlacePayload, S>

  type PlaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaceCountAggregateInputType | true
    }

  export interface PlaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Place'], meta: { name: 'Place' } }
    /**
     * Find zero or one Place that matches the filter.
     * @param {PlaceFindUniqueArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaceFindUniqueArgs>(args: SelectSubset<T, PlaceFindUniqueArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Place that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaceFindUniqueOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaceFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Place that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaceFindFirstArgs>(args?: SelectSubset<T, PlaceFindFirstArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Place that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindFirstOrThrowArgs} args - Arguments to find a Place
     * @example
     * // Get one Place
     * const place = await prisma.place.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaceFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Places that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Places
     * const places = await prisma.place.findMany()
     * 
     * // Get first 10 Places
     * const places = await prisma.place.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const placeWithIdOnly = await prisma.place.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaceFindManyArgs>(args?: SelectSubset<T, PlaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Place.
     * @param {PlaceCreateArgs} args - Arguments to create a Place.
     * @example
     * // Create one Place
     * const Place = await prisma.place.create({
     *   data: {
     *     // ... data to create a Place
     *   }
     * })
     * 
     */
    create<T extends PlaceCreateArgs>(args: SelectSubset<T, PlaceCreateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Places.
     * @param {PlaceCreateManyArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const place = await prisma.place.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaceCreateManyArgs>(args?: SelectSubset<T, PlaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Places and returns the data saved in the database.
     * @param {PlaceCreateManyAndReturnArgs} args - Arguments to create many Places.
     * @example
     * // Create many Places
     * const place = await prisma.place.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Places and only return the `id`
     * const placeWithIdOnly = await prisma.place.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaceCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Place.
     * @param {PlaceDeleteArgs} args - Arguments to delete one Place.
     * @example
     * // Delete one Place
     * const Place = await prisma.place.delete({
     *   where: {
     *     // ... filter to delete one Place
     *   }
     * })
     * 
     */
    delete<T extends PlaceDeleteArgs>(args: SelectSubset<T, PlaceDeleteArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Place.
     * @param {PlaceUpdateArgs} args - Arguments to update one Place.
     * @example
     * // Update one Place
     * const place = await prisma.place.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaceUpdateArgs>(args: SelectSubset<T, PlaceUpdateArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Places.
     * @param {PlaceDeleteManyArgs} args - Arguments to filter Places to delete.
     * @example
     * // Delete a few Places
     * const { count } = await prisma.place.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaceDeleteManyArgs>(args?: SelectSubset<T, PlaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaceUpdateManyArgs>(args: SelectSubset<T, PlaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Places and returns the data updated in the database.
     * @param {PlaceUpdateManyAndReturnArgs} args - Arguments to update many Places.
     * @example
     * // Update many Places
     * const place = await prisma.place.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Places and only return the `id`
     * const placeWithIdOnly = await prisma.place.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaceUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Place.
     * @param {PlaceUpsertArgs} args - Arguments to update or create a Place.
     * @example
     * // Update or create a Place
     * const place = await prisma.place.upsert({
     *   create: {
     *     // ... data to create a Place
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Place we want to update
     *   }
     * })
     */
    upsert<T extends PlaceUpsertArgs>(args: SelectSubset<T, PlaceUpsertArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Places.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceCountArgs} args - Arguments to filter Places to count.
     * @example
     * // Count the number of Places
     * const count = await prisma.place.count({
     *   where: {
     *     // ... the filter for the Places we want to count
     *   }
     * })
    **/
    count<T extends PlaceCountArgs>(
      args?: Subset<T, PlaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaceAggregateArgs>(args: Subset<T, PlaceAggregateArgs>): Prisma.PrismaPromise<GetPlaceAggregateType<T>>

    /**
     * Group by Place.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaceGroupByArgs} args - Group by arguments.
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
      T extends PlaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaceGroupByArgs['orderBy'] }
        : { orderBy?: PlaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Place model
   */
  readonly fields: PlaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Place.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listItems<T extends Place$listItemsArgs<ExtArgs> = {}>(args?: Subset<T, Place$listItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Place model
   */
  interface PlaceFieldRefs {
    readonly id: FieldRef<"Place", 'String'>
    readonly name: FieldRef<"Place", 'String'>
    readonly address: FieldRef<"Place", 'String'>
    readonly lat: FieldRef<"Place", 'Float'>
    readonly lng: FieldRef<"Place", 'Float'>
    readonly googlePlaceId: FieldRef<"Place", 'String'>
    readonly description: FieldRef<"Place", 'String'>
    readonly primaryImageUrl: FieldRef<"Place", 'String'>
    readonly createdAt: FieldRef<"Place", 'DateTime'>
    readonly updatedAt: FieldRef<"Place", 'DateTime'>
    readonly cityId: FieldRef<"Place", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Place findUnique
   */
  export type PlaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findUniqueOrThrow
   */
  export type PlaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place findFirst
   */
  export type PlaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findFirstOrThrow
   */
  export type PlaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Place to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Places.
     */
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place findMany
   */
  export type PlaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter, which Places to fetch.
     */
    where?: PlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Places to fetch.
     */
    orderBy?: PlaceOrderByWithRelationInput | PlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Places.
     */
    cursor?: PlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Places from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Places.
     */
    skip?: number
    distinct?: PlaceScalarFieldEnum | PlaceScalarFieldEnum[]
  }

  /**
   * Place create
   */
  export type PlaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Place.
     */
    data: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
  }

  /**
   * Place createMany
   */
  export type PlaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Place createManyAndReturn
   */
  export type PlaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * The data used to create many Places.
     */
    data: PlaceCreateManyInput | PlaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Place update
   */
  export type PlaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Place.
     */
    data: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
    /**
     * Choose, which Place to update.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place updateMany
   */
  export type PlaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to update.
     */
    limit?: number
  }

  /**
   * Place updateManyAndReturn
   */
  export type PlaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * The data used to update Places.
     */
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyInput>
    /**
     * Filter which Places to update
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Place upsert
   */
  export type PlaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Place to update in case it exists.
     */
    where: PlaceWhereUniqueInput
    /**
     * In case the Place found by the `where` argument doesn't exist, create a new Place with this data.
     */
    create: XOR<PlaceCreateInput, PlaceUncheckedCreateInput>
    /**
     * In case the Place was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaceUpdateInput, PlaceUncheckedUpdateInput>
  }

  /**
   * Place delete
   */
  export type PlaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
    /**
     * Filter which Place to delete.
     */
    where: PlaceWhereUniqueInput
  }

  /**
   * Place deleteMany
   */
  export type PlaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Places to delete
     */
    where?: PlaceWhereInput
    /**
     * Limit how many Places to delete.
     */
    limit?: number
  }

  /**
   * Place.listItems
   */
  export type Place$listItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceInclude<ExtArgs> | null
    where?: ListPlaceWhereInput
    orderBy?: ListPlaceOrderByWithRelationInput | ListPlaceOrderByWithRelationInput[]
    cursor?: ListPlaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListPlaceScalarFieldEnum | ListPlaceScalarFieldEnum[]
  }

  /**
   * Place without action
   */
  export type PlaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Place
     */
    select?: PlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Place
     */
    omit?: PlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaceInclude<ExtArgs> | null
  }


  /**
   * Model List
   */

  export type AggregateList = {
    _count: ListCountAggregateOutputType | null
    _avg: ListAvgAggregateOutputType | null
    _sum: ListSumAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  export type ListAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
    averageRating: number | null
    ratingCount: number | null
    likeCount: number | null
    placeCount: number | null
  }

  export type ListSumAggregateOutputType = {
    lat: number | null
    lng: number | null
    averageRating: number | null
    ratingCount: number | null
    likeCount: number | null
    placeCount: number | null
  }

  export type ListMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    genre: string | null
    subgenre: string | null
    cityId: string | null
    lat: number | null
    lng: number | null
    creatorId: string | null
    averageRating: number | null
    ratingCount: number | null
    likeCount: number | null
    placeCount: number | null
    coverImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    genre: string | null
    subgenre: string | null
    cityId: string | null
    lat: number | null
    lng: number | null
    creatorId: string | null
    averageRating: number | null
    ratingCount: number | null
    likeCount: number | null
    placeCount: number | null
    coverImage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListCountAggregateOutputType = {
    id: number
    name: number
    description: number
    genre: number
    subgenre: number
    cityId: number
    lat: number
    lng: number
    creatorId: number
    averageRating: number
    ratingCount: number
    likeCount: number
    placeCount: number
    coverImage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListAvgAggregateInputType = {
    lat?: true
    lng?: true
    averageRating?: true
    ratingCount?: true
    likeCount?: true
    placeCount?: true
  }

  export type ListSumAggregateInputType = {
    lat?: true
    lng?: true
    averageRating?: true
    ratingCount?: true
    likeCount?: true
    placeCount?: true
  }

  export type ListMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    genre?: true
    subgenre?: true
    cityId?: true
    lat?: true
    lng?: true
    creatorId?: true
    averageRating?: true
    ratingCount?: true
    likeCount?: true
    placeCount?: true
    coverImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    genre?: true
    subgenre?: true
    cityId?: true
    lat?: true
    lng?: true
    creatorId?: true
    averageRating?: true
    ratingCount?: true
    likeCount?: true
    placeCount?: true
    coverImage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    genre?: true
    subgenre?: true
    cityId?: true
    lat?: true
    lng?: true
    creatorId?: true
    averageRating?: true
    ratingCount?: true
    likeCount?: true
    placeCount?: true
    coverImage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List to aggregate.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lists
    **/
    _count?: true | ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListMaxAggregateInputType
  }

  export type GetListAggregateType<T extends ListAggregateArgs> = {
        [P in keyof T & keyof AggregateList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList[P]>
      : GetScalarType<T[P], AggregateList[P]>
  }




  export type ListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
    orderBy?: ListOrderByWithAggregationInput | ListOrderByWithAggregationInput[]
    by: ListScalarFieldEnum[] | ListScalarFieldEnum
    having?: ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListCountAggregateInputType | true
    _avg?: ListAvgAggregateInputType
    _sum?: ListSumAggregateInputType
    _min?: ListMinAggregateInputType
    _max?: ListMaxAggregateInputType
  }

  export type ListGroupByOutputType = {
    id: string
    name: string
    description: string | null
    genre: string | null
    subgenre: string | null
    cityId: string
    lat: number | null
    lng: number | null
    creatorId: string
    averageRating: number
    ratingCount: number
    likeCount: number
    placeCount: number
    coverImage: string | null
    createdAt: Date
    updatedAt: Date
    _count: ListCountAggregateOutputType | null
    _avg: ListAvgAggregateOutputType | null
    _sum: ListSumAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  type GetListGroupByPayload<T extends ListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListGroupByOutputType[P]>
            : GetScalarType<T[P], ListGroupByOutputType[P]>
        }
      >
    >


  export type ListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    genre?: boolean
    subgenre?: boolean
    cityId?: boolean
    lat?: boolean
    lng?: boolean
    creatorId?: boolean
    averageRating?: boolean
    ratingCount?: boolean
    likeCount?: boolean
    placeCount?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | List$likesArgs<ExtArgs>
    places?: boolean | List$placesArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    genre?: boolean
    subgenre?: boolean
    cityId?: boolean
    lat?: boolean
    lng?: boolean
    creatorId?: boolean
    averageRating?: boolean
    ratingCount?: boolean
    likeCount?: boolean
    placeCount?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    genre?: boolean
    subgenre?: boolean
    cityId?: boolean
    lat?: boolean
    lng?: boolean
    creatorId?: boolean
    averageRating?: boolean
    ratingCount?: boolean
    likeCount?: boolean
    placeCount?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    genre?: boolean
    subgenre?: boolean
    cityId?: boolean
    lat?: boolean
    lng?: boolean
    creatorId?: boolean
    averageRating?: boolean
    ratingCount?: boolean
    likeCount?: boolean
    placeCount?: boolean
    coverImage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "genre" | "subgenre" | "cityId" | "lat" | "lng" | "creatorId" | "averageRating" | "ratingCount" | "likeCount" | "placeCount" | "coverImage" | "createdAt" | "updatedAt", ExtArgs["result"]["list"]>
  export type ListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | List$likesArgs<ExtArgs>
    places?: boolean | List$placesArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      likes: Prisma.$ListLikePayload<ExtArgs>[]
      places: Prisma.$ListPlacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      genre: string | null
      subgenre: string | null
      cityId: string
      lat: number | null
      lng: number | null
      creatorId: string
      averageRating: number
      ratingCount: number
      likeCount: number
      placeCount: number
      coverImage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["list"]>
    composites: {}
  }

  type ListGetPayload<S extends boolean | null | undefined | ListDefaultArgs> = $Result.GetResult<Prisma.$ListPayload, S>

  type ListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListCountAggregateInputType | true
    }

  export interface ListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List'], meta: { name: 'List' } }
    /**
     * Find zero or one List that matches the filter.
     * @param {ListFindUniqueArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListFindUniqueArgs>(args: SelectSubset<T, ListFindUniqueArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one List that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListFindUniqueOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListFindUniqueOrThrowArgs>(args: SelectSubset<T, ListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListFindFirstArgs>(args?: SelectSubset<T, ListFindFirstArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListFindFirstOrThrowArgs>(args?: SelectSubset<T, ListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lists
     * const lists = await prisma.list.findMany()
     * 
     * // Get first 10 Lists
     * const lists = await prisma.list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listWithIdOnly = await prisma.list.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListFindManyArgs>(args?: SelectSubset<T, ListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a List.
     * @param {ListCreateArgs} args - Arguments to create a List.
     * @example
     * // Create one List
     * const List = await prisma.list.create({
     *   data: {
     *     // ... data to create a List
     *   }
     * })
     * 
     */
    create<T extends ListCreateArgs>(args: SelectSubset<T, ListCreateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lists.
     * @param {ListCreateManyArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListCreateManyArgs>(args?: SelectSubset<T, ListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lists and returns the data saved in the database.
     * @param {ListCreateManyAndReturnArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListCreateManyAndReturnArgs>(args?: SelectSubset<T, ListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a List.
     * @param {ListDeleteArgs} args - Arguments to delete one List.
     * @example
     * // Delete one List
     * const List = await prisma.list.delete({
     *   where: {
     *     // ... filter to delete one List
     *   }
     * })
     * 
     */
    delete<T extends ListDeleteArgs>(args: SelectSubset<T, ListDeleteArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one List.
     * @param {ListUpdateArgs} args - Arguments to update one List.
     * @example
     * // Update one List
     * const list = await prisma.list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListUpdateArgs>(args: SelectSubset<T, ListUpdateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lists.
     * @param {ListDeleteManyArgs} args - Arguments to filter Lists to delete.
     * @example
     * // Delete a few Lists
     * const { count } = await prisma.list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListDeleteManyArgs>(args?: SelectSubset<T, ListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListUpdateManyArgs>(args: SelectSubset<T, ListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists and returns the data updated in the database.
     * @param {ListUpdateManyAndReturnArgs} args - Arguments to update many Lists.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListUpdateManyAndReturnArgs>(args: SelectSubset<T, ListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one List.
     * @param {ListUpsertArgs} args - Arguments to update or create a List.
     * @example
     * // Update or create a List
     * const list = await prisma.list.upsert({
     *   create: {
     *     // ... data to create a List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List we want to update
     *   }
     * })
     */
    upsert<T extends ListUpsertArgs>(args: SelectSubset<T, ListUpsertArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCountArgs} args - Arguments to filter Lists to count.
     * @example
     * // Count the number of Lists
     * const count = await prisma.list.count({
     *   where: {
     *     // ... the filter for the Lists we want to count
     *   }
     * })
    **/
    count<T extends ListCountArgs>(
      args?: Subset<T, ListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListAggregateArgs>(args: Subset<T, ListAggregateArgs>): Prisma.PrismaPromise<GetListAggregateType<T>>

    /**
     * Group by List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListGroupByArgs} args - Group by arguments.
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
      T extends ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListGroupByArgs['orderBy'] }
        : { orderBy?: ListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List model
   */
  readonly fields: ListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends List$likesArgs<ExtArgs> = {}>(args?: Subset<T, List$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    places<T extends List$placesArgs<ExtArgs> = {}>(args?: Subset<T, List$placesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the List model
   */
  interface ListFieldRefs {
    readonly id: FieldRef<"List", 'String'>
    readonly name: FieldRef<"List", 'String'>
    readonly description: FieldRef<"List", 'String'>
    readonly genre: FieldRef<"List", 'String'>
    readonly subgenre: FieldRef<"List", 'String'>
    readonly cityId: FieldRef<"List", 'String'>
    readonly lat: FieldRef<"List", 'Float'>
    readonly lng: FieldRef<"List", 'Float'>
    readonly creatorId: FieldRef<"List", 'String'>
    readonly averageRating: FieldRef<"List", 'Float'>
    readonly ratingCount: FieldRef<"List", 'Int'>
    readonly likeCount: FieldRef<"List", 'Int'>
    readonly placeCount: FieldRef<"List", 'Int'>
    readonly coverImage: FieldRef<"List", 'String'>
    readonly createdAt: FieldRef<"List", 'DateTime'>
    readonly updatedAt: FieldRef<"List", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * List findUnique
   */
  export type ListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findUniqueOrThrow
   */
  export type ListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findFirst
   */
  export type ListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findFirstOrThrow
   */
  export type ListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findMany
   */
  export type ListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List create
   */
  export type ListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to create a List.
     */
    data: XOR<ListCreateInput, ListUncheckedCreateInput>
  }

  /**
   * List createMany
   */
  export type ListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * List createManyAndReturn
   */
  export type ListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * List update
   */
  export type ListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to update a List.
     */
    data: XOR<ListUpdateInput, ListUncheckedUpdateInput>
    /**
     * Choose, which List to update.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List updateMany
   */
  export type ListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
  }

  /**
   * List updateManyAndReturn
   */
  export type ListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * List upsert
   */
  export type ListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The filter to search for the List to update in case it exists.
     */
    where: ListWhereUniqueInput
    /**
     * In case the List found by the `where` argument doesn't exist, create a new List with this data.
     */
    create: XOR<ListCreateInput, ListUncheckedCreateInput>
    /**
     * In case the List was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListUpdateInput, ListUncheckedUpdateInput>
  }

  /**
   * List delete
   */
  export type ListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter which List to delete.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List deleteMany
   */
  export type ListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lists to delete
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to delete.
     */
    limit?: number
  }

  /**
   * List.likes
   */
  export type List$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeInclude<ExtArgs> | null
    where?: ListLikeWhereInput
    orderBy?: ListLikeOrderByWithRelationInput | ListLikeOrderByWithRelationInput[]
    cursor?: ListLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListLikeScalarFieldEnum | ListLikeScalarFieldEnum[]
  }

  /**
   * List.places
   */
  export type List$placesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceInclude<ExtArgs> | null
    where?: ListPlaceWhereInput
    orderBy?: ListPlaceOrderByWithRelationInput | ListPlaceOrderByWithRelationInput[]
    cursor?: ListPlaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListPlaceScalarFieldEnum | ListPlaceScalarFieldEnum[]
  }

  /**
   * List without action
   */
  export type ListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
  }


  /**
   * Model ListPlace
   */

  export type AggregateListPlace = {
    _count: ListPlaceCountAggregateOutputType | null
    _avg: ListPlaceAvgAggregateOutputType | null
    _sum: ListPlaceSumAggregateOutputType | null
    _min: ListPlaceMinAggregateOutputType | null
    _max: ListPlaceMaxAggregateOutputType | null
  }

  export type ListPlaceAvgAggregateOutputType = {
    order: number | null
  }

  export type ListPlaceSumAggregateOutputType = {
    order: number | null
  }

  export type ListPlaceMinAggregateOutputType = {
    id: string | null
    listId: string | null
    placeId: string | null
    order: number | null
    note: string | null
    priceRange: string | null
    createdAt: Date | null
  }

  export type ListPlaceMaxAggregateOutputType = {
    id: string | null
    listId: string | null
    placeId: string | null
    order: number | null
    note: string | null
    priceRange: string | null
    createdAt: Date | null
  }

  export type ListPlaceCountAggregateOutputType = {
    id: number
    listId: number
    placeId: number
    order: number
    note: number
    priceRange: number
    createdAt: number
    _all: number
  }


  export type ListPlaceAvgAggregateInputType = {
    order?: true
  }

  export type ListPlaceSumAggregateInputType = {
    order?: true
  }

  export type ListPlaceMinAggregateInputType = {
    id?: true
    listId?: true
    placeId?: true
    order?: true
    note?: true
    priceRange?: true
    createdAt?: true
  }

  export type ListPlaceMaxAggregateInputType = {
    id?: true
    listId?: true
    placeId?: true
    order?: true
    note?: true
    priceRange?: true
    createdAt?: true
  }

  export type ListPlaceCountAggregateInputType = {
    id?: true
    listId?: true
    placeId?: true
    order?: true
    note?: true
    priceRange?: true
    createdAt?: true
    _all?: true
  }

  export type ListPlaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListPlace to aggregate.
     */
    where?: ListPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListPlaces to fetch.
     */
    orderBy?: ListPlaceOrderByWithRelationInput | ListPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListPlaces
    **/
    _count?: true | ListPlaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListPlaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListPlaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListPlaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListPlaceMaxAggregateInputType
  }

  export type GetListPlaceAggregateType<T extends ListPlaceAggregateArgs> = {
        [P in keyof T & keyof AggregateListPlace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListPlace[P]>
      : GetScalarType<T[P], AggregateListPlace[P]>
  }




  export type ListPlaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListPlaceWhereInput
    orderBy?: ListPlaceOrderByWithAggregationInput | ListPlaceOrderByWithAggregationInput[]
    by: ListPlaceScalarFieldEnum[] | ListPlaceScalarFieldEnum
    having?: ListPlaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListPlaceCountAggregateInputType | true
    _avg?: ListPlaceAvgAggregateInputType
    _sum?: ListPlaceSumAggregateInputType
    _min?: ListPlaceMinAggregateInputType
    _max?: ListPlaceMaxAggregateInputType
  }

  export type ListPlaceGroupByOutputType = {
    id: string
    listId: string
    placeId: string
    order: number
    note: string | null
    priceRange: string | null
    createdAt: Date
    _count: ListPlaceCountAggregateOutputType | null
    _avg: ListPlaceAvgAggregateOutputType | null
    _sum: ListPlaceSumAggregateOutputType | null
    _min: ListPlaceMinAggregateOutputType | null
    _max: ListPlaceMaxAggregateOutputType | null
  }

  type GetListPlaceGroupByPayload<T extends ListPlaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListPlaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListPlaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListPlaceGroupByOutputType[P]>
            : GetScalarType<T[P], ListPlaceGroupByOutputType[P]>
        }
      >
    >


  export type ListPlaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    placeId?: boolean
    order?: boolean
    note?: boolean
    priceRange?: boolean
    createdAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listPlace"]>

  export type ListPlaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    placeId?: boolean
    order?: boolean
    note?: boolean
    priceRange?: boolean
    createdAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listPlace"]>

  export type ListPlaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    placeId?: boolean
    order?: boolean
    note?: boolean
    priceRange?: boolean
    createdAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listPlace"]>

  export type ListPlaceSelectScalar = {
    id?: boolean
    listId?: boolean
    placeId?: boolean
    order?: boolean
    note?: boolean
    priceRange?: boolean
    createdAt?: boolean
  }

  export type ListPlaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listId" | "placeId" | "order" | "note" | "priceRange" | "createdAt", ExtArgs["result"]["listPlace"]>
  export type ListPlaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }
  export type ListPlaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }
  export type ListPlaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    place?: boolean | PlaceDefaultArgs<ExtArgs>
  }

  export type $ListPlacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListPlace"
    objects: {
      list: Prisma.$ListPayload<ExtArgs>
      place: Prisma.$PlacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listId: string
      placeId: string
      order: number
      note: string | null
      priceRange: string | null
      createdAt: Date
    }, ExtArgs["result"]["listPlace"]>
    composites: {}
  }

  type ListPlaceGetPayload<S extends boolean | null | undefined | ListPlaceDefaultArgs> = $Result.GetResult<Prisma.$ListPlacePayload, S>

  type ListPlaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListPlaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListPlaceCountAggregateInputType | true
    }

  export interface ListPlaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListPlace'], meta: { name: 'ListPlace' } }
    /**
     * Find zero or one ListPlace that matches the filter.
     * @param {ListPlaceFindUniqueArgs} args - Arguments to find a ListPlace
     * @example
     * // Get one ListPlace
     * const listPlace = await prisma.listPlace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListPlaceFindUniqueArgs>(args: SelectSubset<T, ListPlaceFindUniqueArgs<ExtArgs>>): Prisma__ListPlaceClient<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListPlace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListPlaceFindUniqueOrThrowArgs} args - Arguments to find a ListPlace
     * @example
     * // Get one ListPlace
     * const listPlace = await prisma.listPlace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListPlaceFindUniqueOrThrowArgs>(args: SelectSubset<T, ListPlaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListPlaceClient<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListPlace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListPlaceFindFirstArgs} args - Arguments to find a ListPlace
     * @example
     * // Get one ListPlace
     * const listPlace = await prisma.listPlace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListPlaceFindFirstArgs>(args?: SelectSubset<T, ListPlaceFindFirstArgs<ExtArgs>>): Prisma__ListPlaceClient<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListPlace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListPlaceFindFirstOrThrowArgs} args - Arguments to find a ListPlace
     * @example
     * // Get one ListPlace
     * const listPlace = await prisma.listPlace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListPlaceFindFirstOrThrowArgs>(args?: SelectSubset<T, ListPlaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListPlaceClient<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListPlaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListPlaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListPlaces
     * const listPlaces = await prisma.listPlace.findMany()
     * 
     * // Get first 10 ListPlaces
     * const listPlaces = await prisma.listPlace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listPlaceWithIdOnly = await prisma.listPlace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListPlaceFindManyArgs>(args?: SelectSubset<T, ListPlaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListPlace.
     * @param {ListPlaceCreateArgs} args - Arguments to create a ListPlace.
     * @example
     * // Create one ListPlace
     * const ListPlace = await prisma.listPlace.create({
     *   data: {
     *     // ... data to create a ListPlace
     *   }
     * })
     * 
     */
    create<T extends ListPlaceCreateArgs>(args: SelectSubset<T, ListPlaceCreateArgs<ExtArgs>>): Prisma__ListPlaceClient<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListPlaces.
     * @param {ListPlaceCreateManyArgs} args - Arguments to create many ListPlaces.
     * @example
     * // Create many ListPlaces
     * const listPlace = await prisma.listPlace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListPlaceCreateManyArgs>(args?: SelectSubset<T, ListPlaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListPlaces and returns the data saved in the database.
     * @param {ListPlaceCreateManyAndReturnArgs} args - Arguments to create many ListPlaces.
     * @example
     * // Create many ListPlaces
     * const listPlace = await prisma.listPlace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListPlaces and only return the `id`
     * const listPlaceWithIdOnly = await prisma.listPlace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListPlaceCreateManyAndReturnArgs>(args?: SelectSubset<T, ListPlaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListPlace.
     * @param {ListPlaceDeleteArgs} args - Arguments to delete one ListPlace.
     * @example
     * // Delete one ListPlace
     * const ListPlace = await prisma.listPlace.delete({
     *   where: {
     *     // ... filter to delete one ListPlace
     *   }
     * })
     * 
     */
    delete<T extends ListPlaceDeleteArgs>(args: SelectSubset<T, ListPlaceDeleteArgs<ExtArgs>>): Prisma__ListPlaceClient<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListPlace.
     * @param {ListPlaceUpdateArgs} args - Arguments to update one ListPlace.
     * @example
     * // Update one ListPlace
     * const listPlace = await prisma.listPlace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListPlaceUpdateArgs>(args: SelectSubset<T, ListPlaceUpdateArgs<ExtArgs>>): Prisma__ListPlaceClient<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListPlaces.
     * @param {ListPlaceDeleteManyArgs} args - Arguments to filter ListPlaces to delete.
     * @example
     * // Delete a few ListPlaces
     * const { count } = await prisma.listPlace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListPlaceDeleteManyArgs>(args?: SelectSubset<T, ListPlaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListPlaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListPlaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListPlaces
     * const listPlace = await prisma.listPlace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListPlaceUpdateManyArgs>(args: SelectSubset<T, ListPlaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListPlaces and returns the data updated in the database.
     * @param {ListPlaceUpdateManyAndReturnArgs} args - Arguments to update many ListPlaces.
     * @example
     * // Update many ListPlaces
     * const listPlace = await prisma.listPlace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListPlaces and only return the `id`
     * const listPlaceWithIdOnly = await prisma.listPlace.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListPlaceUpdateManyAndReturnArgs>(args: SelectSubset<T, ListPlaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListPlace.
     * @param {ListPlaceUpsertArgs} args - Arguments to update or create a ListPlace.
     * @example
     * // Update or create a ListPlace
     * const listPlace = await prisma.listPlace.upsert({
     *   create: {
     *     // ... data to create a ListPlace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListPlace we want to update
     *   }
     * })
     */
    upsert<T extends ListPlaceUpsertArgs>(args: SelectSubset<T, ListPlaceUpsertArgs<ExtArgs>>): Prisma__ListPlaceClient<$Result.GetResult<Prisma.$ListPlacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListPlaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListPlaceCountArgs} args - Arguments to filter ListPlaces to count.
     * @example
     * // Count the number of ListPlaces
     * const count = await prisma.listPlace.count({
     *   where: {
     *     // ... the filter for the ListPlaces we want to count
     *   }
     * })
    **/
    count<T extends ListPlaceCountArgs>(
      args?: Subset<T, ListPlaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListPlaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListPlace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListPlaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListPlaceAggregateArgs>(args: Subset<T, ListPlaceAggregateArgs>): Prisma.PrismaPromise<GetListPlaceAggregateType<T>>

    /**
     * Group by ListPlace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListPlaceGroupByArgs} args - Group by arguments.
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
      T extends ListPlaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListPlaceGroupByArgs['orderBy'] }
        : { orderBy?: ListPlaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListPlaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListPlaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListPlace model
   */
  readonly fields: ListPlaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListPlace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListPlaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListDefaultArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    place<T extends PlaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaceDefaultArgs<ExtArgs>>): Prisma__PlaceClient<$Result.GetResult<Prisma.$PlacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ListPlace model
   */
  interface ListPlaceFieldRefs {
    readonly id: FieldRef<"ListPlace", 'String'>
    readonly listId: FieldRef<"ListPlace", 'String'>
    readonly placeId: FieldRef<"ListPlace", 'String'>
    readonly order: FieldRef<"ListPlace", 'Int'>
    readonly note: FieldRef<"ListPlace", 'String'>
    readonly priceRange: FieldRef<"ListPlace", 'String'>
    readonly createdAt: FieldRef<"ListPlace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ListPlace findUnique
   */
  export type ListPlaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceInclude<ExtArgs> | null
    /**
     * Filter, which ListPlace to fetch.
     */
    where: ListPlaceWhereUniqueInput
  }

  /**
   * ListPlace findUniqueOrThrow
   */
  export type ListPlaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceInclude<ExtArgs> | null
    /**
     * Filter, which ListPlace to fetch.
     */
    where: ListPlaceWhereUniqueInput
  }

  /**
   * ListPlace findFirst
   */
  export type ListPlaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceInclude<ExtArgs> | null
    /**
     * Filter, which ListPlace to fetch.
     */
    where?: ListPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListPlaces to fetch.
     */
    orderBy?: ListPlaceOrderByWithRelationInput | ListPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListPlaces.
     */
    cursor?: ListPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListPlaces.
     */
    distinct?: ListPlaceScalarFieldEnum | ListPlaceScalarFieldEnum[]
  }

  /**
   * ListPlace findFirstOrThrow
   */
  export type ListPlaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceInclude<ExtArgs> | null
    /**
     * Filter, which ListPlace to fetch.
     */
    where?: ListPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListPlaces to fetch.
     */
    orderBy?: ListPlaceOrderByWithRelationInput | ListPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListPlaces.
     */
    cursor?: ListPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListPlaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListPlaces.
     */
    distinct?: ListPlaceScalarFieldEnum | ListPlaceScalarFieldEnum[]
  }

  /**
   * ListPlace findMany
   */
  export type ListPlaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceInclude<ExtArgs> | null
    /**
     * Filter, which ListPlaces to fetch.
     */
    where?: ListPlaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListPlaces to fetch.
     */
    orderBy?: ListPlaceOrderByWithRelationInput | ListPlaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListPlaces.
     */
    cursor?: ListPlaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListPlaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListPlaces.
     */
    skip?: number
    distinct?: ListPlaceScalarFieldEnum | ListPlaceScalarFieldEnum[]
  }

  /**
   * ListPlace create
   */
  export type ListPlaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceInclude<ExtArgs> | null
    /**
     * The data needed to create a ListPlace.
     */
    data: XOR<ListPlaceCreateInput, ListPlaceUncheckedCreateInput>
  }

  /**
   * ListPlace createMany
   */
  export type ListPlaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListPlaces.
     */
    data: ListPlaceCreateManyInput | ListPlaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListPlace createManyAndReturn
   */
  export type ListPlaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * The data used to create many ListPlaces.
     */
    data: ListPlaceCreateManyInput | ListPlaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListPlace update
   */
  export type ListPlaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceInclude<ExtArgs> | null
    /**
     * The data needed to update a ListPlace.
     */
    data: XOR<ListPlaceUpdateInput, ListPlaceUncheckedUpdateInput>
    /**
     * Choose, which ListPlace to update.
     */
    where: ListPlaceWhereUniqueInput
  }

  /**
   * ListPlace updateMany
   */
  export type ListPlaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListPlaces.
     */
    data: XOR<ListPlaceUpdateManyMutationInput, ListPlaceUncheckedUpdateManyInput>
    /**
     * Filter which ListPlaces to update
     */
    where?: ListPlaceWhereInput
    /**
     * Limit how many ListPlaces to update.
     */
    limit?: number
  }

  /**
   * ListPlace updateManyAndReturn
   */
  export type ListPlaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * The data used to update ListPlaces.
     */
    data: XOR<ListPlaceUpdateManyMutationInput, ListPlaceUncheckedUpdateManyInput>
    /**
     * Filter which ListPlaces to update
     */
    where?: ListPlaceWhereInput
    /**
     * Limit how many ListPlaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListPlace upsert
   */
  export type ListPlaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceInclude<ExtArgs> | null
    /**
     * The filter to search for the ListPlace to update in case it exists.
     */
    where: ListPlaceWhereUniqueInput
    /**
     * In case the ListPlace found by the `where` argument doesn't exist, create a new ListPlace with this data.
     */
    create: XOR<ListPlaceCreateInput, ListPlaceUncheckedCreateInput>
    /**
     * In case the ListPlace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListPlaceUpdateInput, ListPlaceUncheckedUpdateInput>
  }

  /**
   * ListPlace delete
   */
  export type ListPlaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceInclude<ExtArgs> | null
    /**
     * Filter which ListPlace to delete.
     */
    where: ListPlaceWhereUniqueInput
  }

  /**
   * ListPlace deleteMany
   */
  export type ListPlaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListPlaces to delete
     */
    where?: ListPlaceWhereInput
    /**
     * Limit how many ListPlaces to delete.
     */
    limit?: number
  }

  /**
   * ListPlace without action
   */
  export type ListPlaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListPlace
     */
    select?: ListPlaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListPlace
     */
    omit?: ListPlaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListPlaceInclude<ExtArgs> | null
  }


  /**
   * Model ListLike
   */

  export type AggregateListLike = {
    _count: ListLikeCountAggregateOutputType | null
    _min: ListLikeMinAggregateOutputType | null
    _max: ListLikeMaxAggregateOutputType | null
  }

  export type ListLikeMinAggregateOutputType = {
    userId: string | null
    listId: string | null
    createdAt: Date | null
  }

  export type ListLikeMaxAggregateOutputType = {
    userId: string | null
    listId: string | null
    createdAt: Date | null
  }

  export type ListLikeCountAggregateOutputType = {
    userId: number
    listId: number
    createdAt: number
    _all: number
  }


  export type ListLikeMinAggregateInputType = {
    userId?: true
    listId?: true
    createdAt?: true
  }

  export type ListLikeMaxAggregateInputType = {
    userId?: true
    listId?: true
    createdAt?: true
  }

  export type ListLikeCountAggregateInputType = {
    userId?: true
    listId?: true
    createdAt?: true
    _all?: true
  }

  export type ListLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListLike to aggregate.
     */
    where?: ListLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListLikes to fetch.
     */
    orderBy?: ListLikeOrderByWithRelationInput | ListLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListLikes
    **/
    _count?: true | ListLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListLikeMaxAggregateInputType
  }

  export type GetListLikeAggregateType<T extends ListLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateListLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListLike[P]>
      : GetScalarType<T[P], AggregateListLike[P]>
  }




  export type ListLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListLikeWhereInput
    orderBy?: ListLikeOrderByWithAggregationInput | ListLikeOrderByWithAggregationInput[]
    by: ListLikeScalarFieldEnum[] | ListLikeScalarFieldEnum
    having?: ListLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListLikeCountAggregateInputType | true
    _min?: ListLikeMinAggregateInputType
    _max?: ListLikeMaxAggregateInputType
  }

  export type ListLikeGroupByOutputType = {
    userId: string
    listId: string
    createdAt: Date
    _count: ListLikeCountAggregateOutputType | null
    _min: ListLikeMinAggregateOutputType | null
    _max: ListLikeMaxAggregateOutputType | null
  }

  type GetListLikeGroupByPayload<T extends ListLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListLikeGroupByOutputType[P]>
            : GetScalarType<T[P], ListLikeGroupByOutputType[P]>
        }
      >
    >


  export type ListLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    listId?: boolean
    createdAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listLike"]>

  export type ListLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    listId?: boolean
    createdAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listLike"]>

  export type ListLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    listId?: boolean
    createdAt?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listLike"]>

  export type ListLikeSelectScalar = {
    userId?: boolean
    listId?: boolean
    createdAt?: boolean
  }

  export type ListLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "listId" | "createdAt", ExtArgs["result"]["listLike"]>
  export type ListLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ListLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ListLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListLike"
    objects: {
      list: Prisma.$ListPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      listId: string
      createdAt: Date
    }, ExtArgs["result"]["listLike"]>
    composites: {}
  }

  type ListLikeGetPayload<S extends boolean | null | undefined | ListLikeDefaultArgs> = $Result.GetResult<Prisma.$ListLikePayload, S>

  type ListLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListLikeCountAggregateInputType | true
    }

  export interface ListLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListLike'], meta: { name: 'ListLike' } }
    /**
     * Find zero or one ListLike that matches the filter.
     * @param {ListLikeFindUniqueArgs} args - Arguments to find a ListLike
     * @example
     * // Get one ListLike
     * const listLike = await prisma.listLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListLikeFindUniqueArgs>(args: SelectSubset<T, ListLikeFindUniqueArgs<ExtArgs>>): Prisma__ListLikeClient<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListLikeFindUniqueOrThrowArgs} args - Arguments to find a ListLike
     * @example
     * // Get one ListLike
     * const listLike = await prisma.listLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, ListLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListLikeClient<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListLikeFindFirstArgs} args - Arguments to find a ListLike
     * @example
     * // Get one ListLike
     * const listLike = await prisma.listLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListLikeFindFirstArgs>(args?: SelectSubset<T, ListLikeFindFirstArgs<ExtArgs>>): Prisma__ListLikeClient<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListLikeFindFirstOrThrowArgs} args - Arguments to find a ListLike
     * @example
     * // Get one ListLike
     * const listLike = await prisma.listLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, ListLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListLikeClient<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListLikes
     * const listLikes = await prisma.listLike.findMany()
     * 
     * // Get first 10 ListLikes
     * const listLikes = await prisma.listLike.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const listLikeWithUserIdOnly = await prisma.listLike.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ListLikeFindManyArgs>(args?: SelectSubset<T, ListLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListLike.
     * @param {ListLikeCreateArgs} args - Arguments to create a ListLike.
     * @example
     * // Create one ListLike
     * const ListLike = await prisma.listLike.create({
     *   data: {
     *     // ... data to create a ListLike
     *   }
     * })
     * 
     */
    create<T extends ListLikeCreateArgs>(args: SelectSubset<T, ListLikeCreateArgs<ExtArgs>>): Prisma__ListLikeClient<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListLikes.
     * @param {ListLikeCreateManyArgs} args - Arguments to create many ListLikes.
     * @example
     * // Create many ListLikes
     * const listLike = await prisma.listLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListLikeCreateManyArgs>(args?: SelectSubset<T, ListLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListLikes and returns the data saved in the database.
     * @param {ListLikeCreateManyAndReturnArgs} args - Arguments to create many ListLikes.
     * @example
     * // Create many ListLikes
     * const listLike = await prisma.listLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListLikes and only return the `userId`
     * const listLikeWithUserIdOnly = await prisma.listLike.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, ListLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListLike.
     * @param {ListLikeDeleteArgs} args - Arguments to delete one ListLike.
     * @example
     * // Delete one ListLike
     * const ListLike = await prisma.listLike.delete({
     *   where: {
     *     // ... filter to delete one ListLike
     *   }
     * })
     * 
     */
    delete<T extends ListLikeDeleteArgs>(args: SelectSubset<T, ListLikeDeleteArgs<ExtArgs>>): Prisma__ListLikeClient<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListLike.
     * @param {ListLikeUpdateArgs} args - Arguments to update one ListLike.
     * @example
     * // Update one ListLike
     * const listLike = await prisma.listLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListLikeUpdateArgs>(args: SelectSubset<T, ListLikeUpdateArgs<ExtArgs>>): Prisma__ListLikeClient<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListLikes.
     * @param {ListLikeDeleteManyArgs} args - Arguments to filter ListLikes to delete.
     * @example
     * // Delete a few ListLikes
     * const { count } = await prisma.listLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListLikeDeleteManyArgs>(args?: SelectSubset<T, ListLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListLikes
     * const listLike = await prisma.listLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListLikeUpdateManyArgs>(args: SelectSubset<T, ListLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListLikes and returns the data updated in the database.
     * @param {ListLikeUpdateManyAndReturnArgs} args - Arguments to update many ListLikes.
     * @example
     * // Update many ListLikes
     * const listLike = await prisma.listLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListLikes and only return the `userId`
     * const listLikeWithUserIdOnly = await prisma.listLike.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, ListLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListLike.
     * @param {ListLikeUpsertArgs} args - Arguments to update or create a ListLike.
     * @example
     * // Update or create a ListLike
     * const listLike = await prisma.listLike.upsert({
     *   create: {
     *     // ... data to create a ListLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListLike we want to update
     *   }
     * })
     */
    upsert<T extends ListLikeUpsertArgs>(args: SelectSubset<T, ListLikeUpsertArgs<ExtArgs>>): Prisma__ListLikeClient<$Result.GetResult<Prisma.$ListLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListLikeCountArgs} args - Arguments to filter ListLikes to count.
     * @example
     * // Count the number of ListLikes
     * const count = await prisma.listLike.count({
     *   where: {
     *     // ... the filter for the ListLikes we want to count
     *   }
     * })
    **/
    count<T extends ListLikeCountArgs>(
      args?: Subset<T, ListLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListLikeAggregateArgs>(args: Subset<T, ListLikeAggregateArgs>): Prisma.PrismaPromise<GetListLikeAggregateType<T>>

    /**
     * Group by ListLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListLikeGroupByArgs} args - Group by arguments.
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
      T extends ListLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListLikeGroupByArgs['orderBy'] }
        : { orderBy?: ListLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListLike model
   */
  readonly fields: ListLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListDefaultArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ListLike model
   */
  interface ListLikeFieldRefs {
    readonly userId: FieldRef<"ListLike", 'String'>
    readonly listId: FieldRef<"ListLike", 'String'>
    readonly createdAt: FieldRef<"ListLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ListLike findUnique
   */
  export type ListLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeInclude<ExtArgs> | null
    /**
     * Filter, which ListLike to fetch.
     */
    where: ListLikeWhereUniqueInput
  }

  /**
   * ListLike findUniqueOrThrow
   */
  export type ListLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeInclude<ExtArgs> | null
    /**
     * Filter, which ListLike to fetch.
     */
    where: ListLikeWhereUniqueInput
  }

  /**
   * ListLike findFirst
   */
  export type ListLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeInclude<ExtArgs> | null
    /**
     * Filter, which ListLike to fetch.
     */
    where?: ListLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListLikes to fetch.
     */
    orderBy?: ListLikeOrderByWithRelationInput | ListLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListLikes.
     */
    cursor?: ListLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListLikes.
     */
    distinct?: ListLikeScalarFieldEnum | ListLikeScalarFieldEnum[]
  }

  /**
   * ListLike findFirstOrThrow
   */
  export type ListLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeInclude<ExtArgs> | null
    /**
     * Filter, which ListLike to fetch.
     */
    where?: ListLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListLikes to fetch.
     */
    orderBy?: ListLikeOrderByWithRelationInput | ListLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListLikes.
     */
    cursor?: ListLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListLikes.
     */
    distinct?: ListLikeScalarFieldEnum | ListLikeScalarFieldEnum[]
  }

  /**
   * ListLike findMany
   */
  export type ListLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeInclude<ExtArgs> | null
    /**
     * Filter, which ListLikes to fetch.
     */
    where?: ListLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListLikes to fetch.
     */
    orderBy?: ListLikeOrderByWithRelationInput | ListLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListLikes.
     */
    cursor?: ListLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListLikes.
     */
    skip?: number
    distinct?: ListLikeScalarFieldEnum | ListLikeScalarFieldEnum[]
  }

  /**
   * ListLike create
   */
  export type ListLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a ListLike.
     */
    data: XOR<ListLikeCreateInput, ListLikeUncheckedCreateInput>
  }

  /**
   * ListLike createMany
   */
  export type ListLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListLikes.
     */
    data: ListLikeCreateManyInput | ListLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListLike createManyAndReturn
   */
  export type ListLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * The data used to create many ListLikes.
     */
    data: ListLikeCreateManyInput | ListLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListLike update
   */
  export type ListLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a ListLike.
     */
    data: XOR<ListLikeUpdateInput, ListLikeUncheckedUpdateInput>
    /**
     * Choose, which ListLike to update.
     */
    where: ListLikeWhereUniqueInput
  }

  /**
   * ListLike updateMany
   */
  export type ListLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListLikes.
     */
    data: XOR<ListLikeUpdateManyMutationInput, ListLikeUncheckedUpdateManyInput>
    /**
     * Filter which ListLikes to update
     */
    where?: ListLikeWhereInput
    /**
     * Limit how many ListLikes to update.
     */
    limit?: number
  }

  /**
   * ListLike updateManyAndReturn
   */
  export type ListLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * The data used to update ListLikes.
     */
    data: XOR<ListLikeUpdateManyMutationInput, ListLikeUncheckedUpdateManyInput>
    /**
     * Filter which ListLikes to update
     */
    where?: ListLikeWhereInput
    /**
     * Limit how many ListLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListLike upsert
   */
  export type ListLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the ListLike to update in case it exists.
     */
    where: ListLikeWhereUniqueInput
    /**
     * In case the ListLike found by the `where` argument doesn't exist, create a new ListLike with this data.
     */
    create: XOR<ListLikeCreateInput, ListLikeUncheckedCreateInput>
    /**
     * In case the ListLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListLikeUpdateInput, ListLikeUncheckedUpdateInput>
  }

  /**
   * ListLike delete
   */
  export type ListLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeInclude<ExtArgs> | null
    /**
     * Filter which ListLike to delete.
     */
    where: ListLikeWhereUniqueInput
  }

  /**
   * ListLike deleteMany
   */
  export type ListLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListLikes to delete
     */
    where?: ListLikeWhereInput
    /**
     * Limit how many ListLikes to delete.
     */
    limit?: number
  }

  /**
   * ListLike without action
   */
  export type ListLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListLike
     */
    select?: ListLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListLike
     */
    omit?: ListLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListLikeInclude<ExtArgs> | null
  }


  /**
   * Model UserLocation
   */

  export type AggregateUserLocation = {
    _count: UserLocationCountAggregateOutputType | null
    _min: UserLocationMinAggregateOutputType | null
    _max: UserLocationMaxAggregateOutputType | null
  }

  export type UserLocationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    cityId: string | null
    status: $Enums.LocalStatus | null
    createdAt: Date | null
  }

  export type UserLocationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    cityId: string | null
    status: $Enums.LocalStatus | null
    createdAt: Date | null
  }

  export type UserLocationCountAggregateOutputType = {
    id: number
    userId: number
    cityId: number
    status: number
    createdAt: number
    _all: number
  }


  export type UserLocationMinAggregateInputType = {
    id?: true
    userId?: true
    cityId?: true
    status?: true
    createdAt?: true
  }

  export type UserLocationMaxAggregateInputType = {
    id?: true
    userId?: true
    cityId?: true
    status?: true
    createdAt?: true
  }

  export type UserLocationCountAggregateInputType = {
    id?: true
    userId?: true
    cityId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type UserLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocation to aggregate.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLocations
    **/
    _count?: true | UserLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLocationMaxAggregateInputType
  }

  export type GetUserLocationAggregateType<T extends UserLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLocation[P]>
      : GetScalarType<T[P], AggregateUserLocation[P]>
  }




  export type UserLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLocationWhereInput
    orderBy?: UserLocationOrderByWithAggregationInput | UserLocationOrderByWithAggregationInput[]
    by: UserLocationScalarFieldEnum[] | UserLocationScalarFieldEnum
    having?: UserLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLocationCountAggregateInputType | true
    _min?: UserLocationMinAggregateInputType
    _max?: UserLocationMaxAggregateInputType
  }

  export type UserLocationGroupByOutputType = {
    id: string
    userId: string
    cityId: string
    status: $Enums.LocalStatus
    createdAt: Date
    _count: UserLocationCountAggregateOutputType | null
    _min: UserLocationMinAggregateOutputType | null
    _max: UserLocationMaxAggregateOutputType | null
  }

  type GetUserLocationGroupByPayload<T extends UserLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLocationGroupByOutputType[P]>
            : GetScalarType<T[P], UserLocationGroupByOutputType[P]>
        }
      >
    >


  export type UserLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cityId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cityId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cityId?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLocation"]>

  export type UserLocationSelectScalar = {
    id?: boolean
    userId?: boolean
    cityId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type UserLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "cityId" | "status" | "createdAt", ExtArgs["result"]["userLocation"]>
  export type UserLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type UserLocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type UserLocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $UserLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLocation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      city: Prisma.$CityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      cityId: string
      status: $Enums.LocalStatus
      createdAt: Date
    }, ExtArgs["result"]["userLocation"]>
    composites: {}
  }

  type UserLocationGetPayload<S extends boolean | null | undefined | UserLocationDefaultArgs> = $Result.GetResult<Prisma.$UserLocationPayload, S>

  type UserLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserLocationCountAggregateInputType | true
    }

  export interface UserLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLocation'], meta: { name: 'UserLocation' } }
    /**
     * Find zero or one UserLocation that matches the filter.
     * @param {UserLocationFindUniqueArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLocationFindUniqueArgs>(args: SelectSubset<T, UserLocationFindUniqueArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserLocationFindUniqueOrThrowArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindFirstArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLocationFindFirstArgs>(args?: SelectSubset<T, UserLocationFindFirstArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindFirstOrThrowArgs} args - Arguments to find a UserLocation
     * @example
     * // Get one UserLocation
     * const userLocation = await prisma.userLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLocations
     * const userLocations = await prisma.userLocation.findMany()
     * 
     * // Get first 10 UserLocations
     * const userLocations = await prisma.userLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLocationWithIdOnly = await prisma.userLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLocationFindManyArgs>(args?: SelectSubset<T, UserLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserLocation.
     * @param {UserLocationCreateArgs} args - Arguments to create a UserLocation.
     * @example
     * // Create one UserLocation
     * const UserLocation = await prisma.userLocation.create({
     *   data: {
     *     // ... data to create a UserLocation
     *   }
     * })
     * 
     */
    create<T extends UserLocationCreateArgs>(args: SelectSubset<T, UserLocationCreateArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserLocations.
     * @param {UserLocationCreateManyArgs} args - Arguments to create many UserLocations.
     * @example
     * // Create many UserLocations
     * const userLocation = await prisma.userLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLocationCreateManyArgs>(args?: SelectSubset<T, UserLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLocations and returns the data saved in the database.
     * @param {UserLocationCreateManyAndReturnArgs} args - Arguments to create many UserLocations.
     * @example
     * // Create many UserLocations
     * const userLocation = await prisma.userLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLocations and only return the `id`
     * const userLocationWithIdOnly = await prisma.userLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserLocation.
     * @param {UserLocationDeleteArgs} args - Arguments to delete one UserLocation.
     * @example
     * // Delete one UserLocation
     * const UserLocation = await prisma.userLocation.delete({
     *   where: {
     *     // ... filter to delete one UserLocation
     *   }
     * })
     * 
     */
    delete<T extends UserLocationDeleteArgs>(args: SelectSubset<T, UserLocationDeleteArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserLocation.
     * @param {UserLocationUpdateArgs} args - Arguments to update one UserLocation.
     * @example
     * // Update one UserLocation
     * const userLocation = await prisma.userLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLocationUpdateArgs>(args: SelectSubset<T, UserLocationUpdateArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserLocations.
     * @param {UserLocationDeleteManyArgs} args - Arguments to filter UserLocations to delete.
     * @example
     * // Delete a few UserLocations
     * const { count } = await prisma.userLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLocationDeleteManyArgs>(args?: SelectSubset<T, UserLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLocations
     * const userLocation = await prisma.userLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLocationUpdateManyArgs>(args: SelectSubset<T, UserLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLocations and returns the data updated in the database.
     * @param {UserLocationUpdateManyAndReturnArgs} args - Arguments to update many UserLocations.
     * @example
     * // Update many UserLocations
     * const userLocation = await prisma.userLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserLocations and only return the `id`
     * const userLocationWithIdOnly = await prisma.userLocation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, UserLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserLocation.
     * @param {UserLocationUpsertArgs} args - Arguments to update or create a UserLocation.
     * @example
     * // Update or create a UserLocation
     * const userLocation = await prisma.userLocation.upsert({
     *   create: {
     *     // ... data to create a UserLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLocation we want to update
     *   }
     * })
     */
    upsert<T extends UserLocationUpsertArgs>(args: SelectSubset<T, UserLocationUpsertArgs<ExtArgs>>): Prisma__UserLocationClient<$Result.GetResult<Prisma.$UserLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationCountArgs} args - Arguments to filter UserLocations to count.
     * @example
     * // Count the number of UserLocations
     * const count = await prisma.userLocation.count({
     *   where: {
     *     // ... the filter for the UserLocations we want to count
     *   }
     * })
    **/
    count<T extends UserLocationCountArgs>(
      args?: Subset<T, UserLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLocationAggregateArgs>(args: Subset<T, UserLocationAggregateArgs>): Prisma.PrismaPromise<GetUserLocationAggregateType<T>>

    /**
     * Group by UserLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLocationGroupByArgs} args - Group by arguments.
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
      T extends UserLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLocationGroupByArgs['orderBy'] }
        : { orderBy?: UserLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLocation model
   */
  readonly fields: UserLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserLocation model
   */
  interface UserLocationFieldRefs {
    readonly id: FieldRef<"UserLocation", 'String'>
    readonly userId: FieldRef<"UserLocation", 'String'>
    readonly cityId: FieldRef<"UserLocation", 'String'>
    readonly status: FieldRef<"UserLocation", 'LocalStatus'>
    readonly createdAt: FieldRef<"UserLocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLocation findUnique
   */
  export type UserLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation findUniqueOrThrow
   */
  export type UserLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation findFirst
   */
  export type UserLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation findFirstOrThrow
   */
  export type UserLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocation to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLocations.
     */
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation findMany
   */
  export type UserLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter, which UserLocations to fetch.
     */
    where?: UserLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLocations to fetch.
     */
    orderBy?: UserLocationOrderByWithRelationInput | UserLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLocations.
     */
    cursor?: UserLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLocations.
     */
    skip?: number
    distinct?: UserLocationScalarFieldEnum | UserLocationScalarFieldEnum[]
  }

  /**
   * UserLocation create
   */
  export type UserLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLocation.
     */
    data: XOR<UserLocationCreateInput, UserLocationUncheckedCreateInput>
  }

  /**
   * UserLocation createMany
   */
  export type UserLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLocations.
     */
    data: UserLocationCreateManyInput | UserLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLocation createManyAndReturn
   */
  export type UserLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * The data used to create many UserLocations.
     */
    data: UserLocationCreateManyInput | UserLocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLocation update
   */
  export type UserLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLocation.
     */
    data: XOR<UserLocationUpdateInput, UserLocationUncheckedUpdateInput>
    /**
     * Choose, which UserLocation to update.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation updateMany
   */
  export type UserLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLocations.
     */
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyInput>
    /**
     * Filter which UserLocations to update
     */
    where?: UserLocationWhereInput
    /**
     * Limit how many UserLocations to update.
     */
    limit?: number
  }

  /**
   * UserLocation updateManyAndReturn
   */
  export type UserLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * The data used to update UserLocations.
     */
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyInput>
    /**
     * Filter which UserLocations to update
     */
    where?: UserLocationWhereInput
    /**
     * Limit how many UserLocations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLocation upsert
   */
  export type UserLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLocation to update in case it exists.
     */
    where: UserLocationWhereUniqueInput
    /**
     * In case the UserLocation found by the `where` argument doesn't exist, create a new UserLocation with this data.
     */
    create: XOR<UserLocationCreateInput, UserLocationUncheckedCreateInput>
    /**
     * In case the UserLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLocationUpdateInput, UserLocationUncheckedUpdateInput>
  }

  /**
   * UserLocation delete
   */
  export type UserLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
    /**
     * Filter which UserLocation to delete.
     */
    where: UserLocationWhereUniqueInput
  }

  /**
   * UserLocation deleteMany
   */
  export type UserLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLocations to delete
     */
    where?: UserLocationWhereInput
    /**
     * Limit how many UserLocations to delete.
     */
    limit?: number
  }

  /**
   * UserLocation without action
   */
  export type UserLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLocation
     */
    select?: UserLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserLocation
     */
    omit?: UserLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLocationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    avatar: 'avatar',
    address: 'address',
    isLocal: 'isLocal'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    slug: 'slug'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    countryId: 'countryId',
    name: 'name',
    slug: 'slug',
    lat: 'lat',
    lng: 'lng',
    listCount: 'listCount',
    googlePlaceId: 'googlePlaceId'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const PlaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    lat: 'lat',
    lng: 'lng',
    googlePlaceId: 'googlePlaceId',
    description: 'description',
    primaryImageUrl: 'primaryImageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    cityId: 'cityId'
  };

  export type PlaceScalarFieldEnum = (typeof PlaceScalarFieldEnum)[keyof typeof PlaceScalarFieldEnum]


  export const ListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    genre: 'genre',
    subgenre: 'subgenre',
    cityId: 'cityId',
    lat: 'lat',
    lng: 'lng',
    creatorId: 'creatorId',
    averageRating: 'averageRating',
    ratingCount: 'ratingCount',
    likeCount: 'likeCount',
    placeCount: 'placeCount',
    coverImage: 'coverImage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListScalarFieldEnum = (typeof ListScalarFieldEnum)[keyof typeof ListScalarFieldEnum]


  export const ListPlaceScalarFieldEnum: {
    id: 'id',
    listId: 'listId',
    placeId: 'placeId',
    order: 'order',
    note: 'note',
    priceRange: 'priceRange',
    createdAt: 'createdAt'
  };

  export type ListPlaceScalarFieldEnum = (typeof ListPlaceScalarFieldEnum)[keyof typeof ListPlaceScalarFieldEnum]


  export const ListLikeScalarFieldEnum: {
    userId: 'userId',
    listId: 'listId',
    createdAt: 'createdAt'
  };

  export type ListLikeScalarFieldEnum = (typeof ListLikeScalarFieldEnum)[keyof typeof ListLikeScalarFieldEnum]


  export const UserLocationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cityId: 'cityId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type UserLocationScalarFieldEnum = (typeof UserLocationScalarFieldEnum)[keyof typeof UserLocationScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'LocalStatus'
   */
  export type EnumLocalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocalStatus'>
    


  /**
   * Reference to a field of type 'LocalStatus[]'
   */
  export type ListEnumLocalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LocalStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    avatar?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    isLocal?: BoolFilter<"User"> | boolean
    lists?: ListListRelationFilter
    likes?: ListLikeListRelationFilter
    locations?: UserLocationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isLocal?: SortOrder
    lists?: ListOrderByRelationAggregateInput
    likes?: ListLikeOrderByRelationAggregateInput
    locations?: UserLocationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    avatar?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    isLocal?: BoolFilter<"User"> | boolean
    lists?: ListListRelationFilter
    likes?: ListLikeListRelationFilter
    locations?: UserLocationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isLocal?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    isLocal?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    code?: StringNullableFilter<"Country"> | string | null
    slug?: StringNullableFilter<"Country"> | string | null
    cities?: CityListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    cities?: CityOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    code?: string
    slug?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    cities?: CityListRelationFilter
  }, "id" | "name" | "code" | "slug">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
    code?: StringNullableWithAggregatesFilter<"Country"> | string | null
    slug?: StringNullableWithAggregatesFilter<"Country"> | string | null
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: StringFilter<"City"> | string
    countryId?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    slug?: StringNullableFilter<"City"> | string | null
    lat?: FloatNullableFilter<"City"> | number | null
    lng?: FloatNullableFilter<"City"> | number | null
    listCount?: IntFilter<"City"> | number
    googlePlaceId?: StringNullableFilter<"City"> | string | null
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    lists?: ListListRelationFilter
    places?: PlaceListRelationFilter
    userLocations?: UserLocationListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    countryId?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    listCount?: SortOrder
    googlePlaceId?: SortOrderInput | SortOrder
    country?: CountryOrderByWithRelationInput
    lists?: ListOrderByRelationAggregateInput
    places?: PlaceOrderByRelationAggregateInput
    userLocations?: UserLocationOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googlePlaceId?: string
    countryId_name?: CityCountryIdNameCompoundUniqueInput
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    countryId?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    slug?: StringNullableFilter<"City"> | string | null
    lat?: FloatNullableFilter<"City"> | number | null
    lng?: FloatNullableFilter<"City"> | number | null
    listCount?: IntFilter<"City"> | number
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    lists?: ListListRelationFilter
    places?: PlaceListRelationFilter
    userLocations?: UserLocationListRelationFilter
  }, "id" | "googlePlaceId" | "countryId_name">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    countryId?: SortOrder
    name?: SortOrder
    slug?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    listCount?: SortOrder
    googlePlaceId?: SortOrderInput | SortOrder
    _count?: CityCountOrderByAggregateInput
    _avg?: CityAvgOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
    _sum?: CitySumOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"City"> | string
    countryId?: StringWithAggregatesFilter<"City"> | string
    name?: StringWithAggregatesFilter<"City"> | string
    slug?: StringNullableWithAggregatesFilter<"City"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"City"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"City"> | number | null
    listCount?: IntWithAggregatesFilter<"City"> | number
    googlePlaceId?: StringNullableWithAggregatesFilter<"City"> | string | null
  }

  export type PlaceWhereInput = {
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    id?: StringFilter<"Place"> | string
    name?: StringFilter<"Place"> | string
    address?: StringFilter<"Place"> | string
    lat?: FloatFilter<"Place"> | number
    lng?: FloatFilter<"Place"> | number
    googlePlaceId?: StringFilter<"Place"> | string
    description?: StringNullableFilter<"Place"> | string | null
    primaryImageUrl?: StringNullableFilter<"Place"> | string | null
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeFilter<"Place"> | Date | string
    cityId?: StringFilter<"Place"> | string
    listItems?: ListPlaceListRelationFilter
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }

  export type PlaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    googlePlaceId?: SortOrder
    description?: SortOrderInput | SortOrder
    primaryImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cityId?: SortOrder
    listItems?: ListPlaceOrderByRelationAggregateInput
    city?: CityOrderByWithRelationInput
  }

  export type PlaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    googlePlaceId?: string
    AND?: PlaceWhereInput | PlaceWhereInput[]
    OR?: PlaceWhereInput[]
    NOT?: PlaceWhereInput | PlaceWhereInput[]
    name?: StringFilter<"Place"> | string
    address?: StringFilter<"Place"> | string
    lat?: FloatFilter<"Place"> | number
    lng?: FloatFilter<"Place"> | number
    description?: StringNullableFilter<"Place"> | string | null
    primaryImageUrl?: StringNullableFilter<"Place"> | string | null
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeFilter<"Place"> | Date | string
    cityId?: StringFilter<"Place"> | string
    listItems?: ListPlaceListRelationFilter
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }, "id" | "googlePlaceId">

  export type PlaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    googlePlaceId?: SortOrder
    description?: SortOrderInput | SortOrder
    primaryImageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cityId?: SortOrder
    _count?: PlaceCountOrderByAggregateInput
    _avg?: PlaceAvgOrderByAggregateInput
    _max?: PlaceMaxOrderByAggregateInput
    _min?: PlaceMinOrderByAggregateInput
    _sum?: PlaceSumOrderByAggregateInput
  }

  export type PlaceScalarWhereWithAggregatesInput = {
    AND?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    OR?: PlaceScalarWhereWithAggregatesInput[]
    NOT?: PlaceScalarWhereWithAggregatesInput | PlaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Place"> | string
    name?: StringWithAggregatesFilter<"Place"> | string
    address?: StringWithAggregatesFilter<"Place"> | string
    lat?: FloatWithAggregatesFilter<"Place"> | number
    lng?: FloatWithAggregatesFilter<"Place"> | number
    googlePlaceId?: StringWithAggregatesFilter<"Place"> | string
    description?: StringNullableWithAggregatesFilter<"Place"> | string | null
    primaryImageUrl?: StringNullableWithAggregatesFilter<"Place"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Place"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Place"> | Date | string
    cityId?: StringWithAggregatesFilter<"Place"> | string
  }

  export type ListWhereInput = {
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    id?: StringFilter<"List"> | string
    name?: StringFilter<"List"> | string
    description?: StringNullableFilter<"List"> | string | null
    genre?: StringNullableFilter<"List"> | string | null
    subgenre?: StringNullableFilter<"List"> | string | null
    cityId?: StringFilter<"List"> | string
    lat?: FloatNullableFilter<"List"> | number | null
    lng?: FloatNullableFilter<"List"> | number | null
    creatorId?: StringFilter<"List"> | string
    averageRating?: FloatFilter<"List"> | number
    ratingCount?: IntFilter<"List"> | number
    likeCount?: IntFilter<"List"> | number
    placeCount?: IntFilter<"List"> | number
    coverImage?: StringNullableFilter<"List"> | string | null
    createdAt?: DateTimeFilter<"List"> | Date | string
    updatedAt?: DateTimeFilter<"List"> | Date | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    likes?: ListLikeListRelationFilter
    places?: ListPlaceListRelationFilter
  }

  export type ListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    subgenre?: SortOrderInput | SortOrder
    cityId?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
    likeCount?: SortOrder
    placeCount?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    city?: CityOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    likes?: ListLikeOrderByRelationAggregateInput
    places?: ListPlaceOrderByRelationAggregateInput
  }

  export type ListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    name?: StringFilter<"List"> | string
    description?: StringNullableFilter<"List"> | string | null
    genre?: StringNullableFilter<"List"> | string | null
    subgenre?: StringNullableFilter<"List"> | string | null
    cityId?: StringFilter<"List"> | string
    lat?: FloatNullableFilter<"List"> | number | null
    lng?: FloatNullableFilter<"List"> | number | null
    creatorId?: StringFilter<"List"> | string
    averageRating?: FloatFilter<"List"> | number
    ratingCount?: IntFilter<"List"> | number
    likeCount?: IntFilter<"List"> | number
    placeCount?: IntFilter<"List"> | number
    coverImage?: StringNullableFilter<"List"> | string | null
    createdAt?: DateTimeFilter<"List"> | Date | string
    updatedAt?: DateTimeFilter<"List"> | Date | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    likes?: ListLikeListRelationFilter
    places?: ListPlaceListRelationFilter
  }, "id">

  export type ListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    subgenre?: SortOrderInput | SortOrder
    cityId?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
    likeCount?: SortOrder
    placeCount?: SortOrder
    coverImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListCountOrderByAggregateInput
    _avg?: ListAvgOrderByAggregateInput
    _max?: ListMaxOrderByAggregateInput
    _min?: ListMinOrderByAggregateInput
    _sum?: ListSumOrderByAggregateInput
  }

  export type ListScalarWhereWithAggregatesInput = {
    AND?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    OR?: ListScalarWhereWithAggregatesInput[]
    NOT?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"List"> | string
    name?: StringWithAggregatesFilter<"List"> | string
    description?: StringNullableWithAggregatesFilter<"List"> | string | null
    genre?: StringNullableWithAggregatesFilter<"List"> | string | null
    subgenre?: StringNullableWithAggregatesFilter<"List"> | string | null
    cityId?: StringWithAggregatesFilter<"List"> | string
    lat?: FloatNullableWithAggregatesFilter<"List"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"List"> | number | null
    creatorId?: StringWithAggregatesFilter<"List"> | string
    averageRating?: FloatWithAggregatesFilter<"List"> | number
    ratingCount?: IntWithAggregatesFilter<"List"> | number
    likeCount?: IntWithAggregatesFilter<"List"> | number
    placeCount?: IntWithAggregatesFilter<"List"> | number
    coverImage?: StringNullableWithAggregatesFilter<"List"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"List"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"List"> | Date | string
  }

  export type ListPlaceWhereInput = {
    AND?: ListPlaceWhereInput | ListPlaceWhereInput[]
    OR?: ListPlaceWhereInput[]
    NOT?: ListPlaceWhereInput | ListPlaceWhereInput[]
    id?: StringFilter<"ListPlace"> | string
    listId?: StringFilter<"ListPlace"> | string
    placeId?: StringFilter<"ListPlace"> | string
    order?: IntFilter<"ListPlace"> | number
    note?: StringNullableFilter<"ListPlace"> | string | null
    priceRange?: StringNullableFilter<"ListPlace"> | string | null
    createdAt?: DateTimeFilter<"ListPlace"> | Date | string
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
    place?: XOR<PlaceScalarRelationFilter, PlaceWhereInput>
  }

  export type ListPlaceOrderByWithRelationInput = {
    id?: SortOrder
    listId?: SortOrder
    placeId?: SortOrder
    order?: SortOrder
    note?: SortOrderInput | SortOrder
    priceRange?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    list?: ListOrderByWithRelationInput
    place?: PlaceOrderByWithRelationInput
  }

  export type ListPlaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    listId_placeId?: ListPlaceListIdPlaceIdCompoundUniqueInput
    AND?: ListPlaceWhereInput | ListPlaceWhereInput[]
    OR?: ListPlaceWhereInput[]
    NOT?: ListPlaceWhereInput | ListPlaceWhereInput[]
    listId?: StringFilter<"ListPlace"> | string
    placeId?: StringFilter<"ListPlace"> | string
    order?: IntFilter<"ListPlace"> | number
    note?: StringNullableFilter<"ListPlace"> | string | null
    priceRange?: StringNullableFilter<"ListPlace"> | string | null
    createdAt?: DateTimeFilter<"ListPlace"> | Date | string
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
    place?: XOR<PlaceScalarRelationFilter, PlaceWhereInput>
  }, "id" | "listId_placeId">

  export type ListPlaceOrderByWithAggregationInput = {
    id?: SortOrder
    listId?: SortOrder
    placeId?: SortOrder
    order?: SortOrder
    note?: SortOrderInput | SortOrder
    priceRange?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ListPlaceCountOrderByAggregateInput
    _avg?: ListPlaceAvgOrderByAggregateInput
    _max?: ListPlaceMaxOrderByAggregateInput
    _min?: ListPlaceMinOrderByAggregateInput
    _sum?: ListPlaceSumOrderByAggregateInput
  }

  export type ListPlaceScalarWhereWithAggregatesInput = {
    AND?: ListPlaceScalarWhereWithAggregatesInput | ListPlaceScalarWhereWithAggregatesInput[]
    OR?: ListPlaceScalarWhereWithAggregatesInput[]
    NOT?: ListPlaceScalarWhereWithAggregatesInput | ListPlaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ListPlace"> | string
    listId?: StringWithAggregatesFilter<"ListPlace"> | string
    placeId?: StringWithAggregatesFilter<"ListPlace"> | string
    order?: IntWithAggregatesFilter<"ListPlace"> | number
    note?: StringNullableWithAggregatesFilter<"ListPlace"> | string | null
    priceRange?: StringNullableWithAggregatesFilter<"ListPlace"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ListPlace"> | Date | string
  }

  export type ListLikeWhereInput = {
    AND?: ListLikeWhereInput | ListLikeWhereInput[]
    OR?: ListLikeWhereInput[]
    NOT?: ListLikeWhereInput | ListLikeWhereInput[]
    userId?: StringFilter<"ListLike"> | string
    listId?: StringFilter<"ListLike"> | string
    createdAt?: DateTimeFilter<"ListLike"> | Date | string
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ListLikeOrderByWithRelationInput = {
    userId?: SortOrder
    listId?: SortOrder
    createdAt?: SortOrder
    list?: ListOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ListLikeWhereUniqueInput = Prisma.AtLeast<{
    userId_listId?: ListLikeUserIdListIdCompoundUniqueInput
    AND?: ListLikeWhereInput | ListLikeWhereInput[]
    OR?: ListLikeWhereInput[]
    NOT?: ListLikeWhereInput | ListLikeWhereInput[]
    userId?: StringFilter<"ListLike"> | string
    listId?: StringFilter<"ListLike"> | string
    createdAt?: DateTimeFilter<"ListLike"> | Date | string
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId_listId">

  export type ListLikeOrderByWithAggregationInput = {
    userId?: SortOrder
    listId?: SortOrder
    createdAt?: SortOrder
    _count?: ListLikeCountOrderByAggregateInput
    _max?: ListLikeMaxOrderByAggregateInput
    _min?: ListLikeMinOrderByAggregateInput
  }

  export type ListLikeScalarWhereWithAggregatesInput = {
    AND?: ListLikeScalarWhereWithAggregatesInput | ListLikeScalarWhereWithAggregatesInput[]
    OR?: ListLikeScalarWhereWithAggregatesInput[]
    NOT?: ListLikeScalarWhereWithAggregatesInput | ListLikeScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"ListLike"> | string
    listId?: StringWithAggregatesFilter<"ListLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ListLike"> | Date | string
  }

  export type UserLocationWhereInput = {
    AND?: UserLocationWhereInput | UserLocationWhereInput[]
    OR?: UserLocationWhereInput[]
    NOT?: UserLocationWhereInput | UserLocationWhereInput[]
    id?: StringFilter<"UserLocation"> | string
    userId?: StringFilter<"UserLocation"> | string
    cityId?: StringFilter<"UserLocation"> | string
    status?: EnumLocalStatusFilter<"UserLocation"> | $Enums.LocalStatus
    createdAt?: DateTimeFilter<"UserLocation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }

  export type UserLocationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cityId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
  }

  export type UserLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_cityId?: UserLocationUserIdCityIdCompoundUniqueInput
    AND?: UserLocationWhereInput | UserLocationWhereInput[]
    OR?: UserLocationWhereInput[]
    NOT?: UserLocationWhereInput | UserLocationWhereInput[]
    userId?: StringFilter<"UserLocation"> | string
    cityId?: StringFilter<"UserLocation"> | string
    status?: EnumLocalStatusFilter<"UserLocation"> | $Enums.LocalStatus
    createdAt?: DateTimeFilter<"UserLocation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }, "id" | "userId_cityId">

  export type UserLocationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cityId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: UserLocationCountOrderByAggregateInput
    _max?: UserLocationMaxOrderByAggregateInput
    _min?: UserLocationMinOrderByAggregateInput
  }

  export type UserLocationScalarWhereWithAggregatesInput = {
    AND?: UserLocationScalarWhereWithAggregatesInput | UserLocationScalarWhereWithAggregatesInput[]
    OR?: UserLocationScalarWhereWithAggregatesInput[]
    NOT?: UserLocationScalarWhereWithAggregatesInput | UserLocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLocation"> | string
    userId?: StringWithAggregatesFilter<"UserLocation"> | string
    cityId?: StringWithAggregatesFilter<"UserLocation"> | string
    status?: EnumLocalStatusWithAggregatesFilter<"UserLocation"> | $Enums.LocalStatus
    createdAt?: DateTimeWithAggregatesFilter<"UserLocation"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    avatar?: string | null
    address?: string | null
    isLocal?: boolean
    lists?: ListCreateNestedManyWithoutCreatorInput
    likes?: ListLikeCreateNestedManyWithoutUserInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    avatar?: string | null
    address?: string | null
    isLocal?: boolean
    lists?: ListUncheckedCreateNestedManyWithoutCreatorInput
    likes?: ListLikeUncheckedCreateNestedManyWithoutUserInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    lists?: ListUpdateManyWithoutCreatorNestedInput
    likes?: ListLikeUpdateManyWithoutUserNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    lists?: ListUncheckedUpdateManyWithoutCreatorNestedInput
    likes?: ListLikeUncheckedUpdateManyWithoutUserNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    avatar?: string | null
    address?: string | null
    isLocal?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CountryCreateInput = {
    id?: string
    name: string
    code?: string | null
    slug?: string | null
    cities?: CityCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: string
    name: string
    code?: string | null
    slug?: string | null
    cities?: CityUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    cities?: CityUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    cities?: CityUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: string
    name: string
    code?: string | null
    slug?: string | null
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CityCreateInput = {
    id?: string
    name: string
    slug?: string | null
    lat?: number | null
    lng?: number | null
    listCount?: number
    googlePlaceId?: string | null
    country: CountryCreateNestedOneWithoutCitiesInput
    lists?: ListCreateNestedManyWithoutCityInput
    places?: PlaceCreateNestedManyWithoutCityInput
    userLocations?: UserLocationCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: string
    countryId: string
    name: string
    slug?: string | null
    lat?: number | null
    lng?: number | null
    listCount?: number
    googlePlaceId?: string | null
    lists?: ListUncheckedCreateNestedManyWithoutCityInput
    places?: PlaceUncheckedCreateNestedManyWithoutCityInput
    userLocations?: UserLocationUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutCitiesNestedInput
    lists?: ListUpdateManyWithoutCityNestedInput
    places?: PlaceUpdateManyWithoutCityNestedInput
    userLocations?: UserLocationUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
    lists?: ListUncheckedUpdateManyWithoutCityNestedInput
    places?: PlaceUncheckedUpdateManyWithoutCityNestedInput
    userLocations?: UserLocationUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: string
    countryId: string
    name: string
    slug?: string | null
    lat?: number | null
    lng?: number | null
    listCount?: number
    googlePlaceId?: string | null
  }

  export type CityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaceCreateInput = {
    id?: string
    name: string
    address: string
    lat: number
    lng: number
    googlePlaceId: string
    description?: string | null
    primaryImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listItems?: ListPlaceCreateNestedManyWithoutPlaceInput
    city: CityCreateNestedOneWithoutPlacesInput
  }

  export type PlaceUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    lat: number
    lng: number
    googlePlaceId: string
    description?: string | null
    primaryImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cityId: string
    listItems?: ListPlaceUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listItems?: ListPlaceUpdateManyWithoutPlaceNestedInput
    city?: CityUpdateOneRequiredWithoutPlacesNestedInput
  }

  export type PlaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cityId?: StringFieldUpdateOperationsInput | string
    listItems?: ListPlaceUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceCreateManyInput = {
    id?: string
    name: string
    address: string
    lat: number
    lng: number
    googlePlaceId: string
    description?: string | null
    primaryImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cityId: string
  }

  export type PlaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type ListCreateInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    lat?: number | null
    lng?: number | null
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutListsInput
    creator: UserCreateNestedOneWithoutListsInput
    likes?: ListLikeCreateNestedManyWithoutListInput
    places?: ListPlaceCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    cityId: string
    lat?: number | null
    lng?: number | null
    creatorId: string
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ListLikeUncheckedCreateNestedManyWithoutListInput
    places?: ListPlaceUncheckedCreateNestedManyWithoutListInput
  }

  export type ListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutListsNestedInput
    creator?: UserUpdateOneRequiredWithoutListsNestedInput
    likes?: ListLikeUpdateManyWithoutListNestedInput
    places?: ListPlaceUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ListLikeUncheckedUpdateManyWithoutListNestedInput
    places?: ListPlaceUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    cityId: string
    lat?: number | null
    lng?: number | null
    creatorId: string
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListPlaceCreateInput = {
    id?: string
    order: number
    note?: string | null
    priceRange?: string | null
    createdAt?: Date | string
    list: ListCreateNestedOneWithoutPlacesInput
    place: PlaceCreateNestedOneWithoutListItemsInput
  }

  export type ListPlaceUncheckedCreateInput = {
    id?: string
    listId: string
    placeId: string
    order: number
    note?: string | null
    priceRange?: string | null
    createdAt?: Date | string
  }

  export type ListPlaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListUpdateOneRequiredWithoutPlacesNestedInput
    place?: PlaceUpdateOneRequiredWithoutListItemsNestedInput
  }

  export type ListPlaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListPlaceCreateManyInput = {
    id?: string
    listId: string
    placeId: string
    order: number
    note?: string | null
    priceRange?: string | null
    createdAt?: Date | string
  }

  export type ListPlaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListPlaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListLikeCreateInput = {
    createdAt?: Date | string
    list: ListCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type ListLikeUncheckedCreateInput = {
    userId: string
    listId: string
    createdAt?: Date | string
  }

  export type ListLikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type ListLikeUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListLikeCreateManyInput = {
    userId: string
    listId: string
    createdAt?: Date | string
  }

  export type ListLikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListLikeUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationCreateInput = {
    id?: string
    status: $Enums.LocalStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLocationsInput
    city: CityCreateNestedOneWithoutUserLocationsInput
  }

  export type UserLocationUncheckedCreateInput = {
    id?: string
    userId: string
    cityId: string
    status: $Enums.LocalStatus
    createdAt?: Date | string
  }

  export type UserLocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumLocalStatusFieldUpdateOperationsInput | $Enums.LocalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLocationsNestedInput
    city?: CityUpdateOneRequiredWithoutUserLocationsNestedInput
  }

  export type UserLocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    status?: EnumLocalStatusFieldUpdateOperationsInput | $Enums.LocalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationCreateManyInput = {
    id?: string
    userId: string
    cityId: string
    status: $Enums.LocalStatus
    createdAt?: Date | string
  }

  export type UserLocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumLocalStatusFieldUpdateOperationsInput | $Enums.LocalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    status?: EnumLocalStatusFieldUpdateOperationsInput | $Enums.LocalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ListListRelationFilter = {
    every?: ListWhereInput
    some?: ListWhereInput
    none?: ListWhereInput
  }

  export type ListLikeListRelationFilter = {
    every?: ListLikeWhereInput
    some?: ListLikeWhereInput
    none?: ListLikeWhereInput
  }

  export type UserLocationListRelationFilter = {
    every?: UserLocationWhereInput
    some?: UserLocationWhereInput
    none?: UserLocationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrder
    address?: SortOrder
    isLocal?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrder
    address?: SortOrder
    isLocal?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    avatar?: SortOrder
    address?: SortOrder
    isLocal?: SortOrder
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
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CityListRelationFilter = {
    every?: CityWhereInput
    some?: CityWhereInput
    none?: CityWhereInput
  }

  export type CityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    slug?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    slug?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    slug?: SortOrder
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

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type PlaceListRelationFilter = {
    every?: PlaceWhereInput
    some?: PlaceWhereInput
    none?: PlaceWhereInput
  }

  export type PlaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityCountryIdNameCompoundUniqueInput = {
    countryId: string
    name: string
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    listCount?: SortOrder
    googlePlaceId?: SortOrder
  }

  export type CityAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    listCount?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    listCount?: SortOrder
    googlePlaceId?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    listCount?: SortOrder
    googlePlaceId?: SortOrder
  }

  export type CitySumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    listCount?: SortOrder
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

  export type ListPlaceListRelationFilter = {
    every?: ListPlaceWhereInput
    some?: ListPlaceWhereInput
    none?: ListPlaceWhereInput
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type ListPlaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    googlePlaceId?: SortOrder
    description?: SortOrder
    primaryImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cityId?: SortOrder
  }

  export type PlaceAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type PlaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    googlePlaceId?: SortOrder
    description?: SortOrder
    primaryImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cityId?: SortOrder
  }

  export type PlaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    googlePlaceId?: SortOrder
    description?: SortOrder
    primaryImageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cityId?: SortOrder
  }

  export type PlaceSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    genre?: SortOrder
    subgenre?: SortOrder
    cityId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    creatorId?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
    likeCount?: SortOrder
    placeCount?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
    likeCount?: SortOrder
    placeCount?: SortOrder
  }

  export type ListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    genre?: SortOrder
    subgenre?: SortOrder
    cityId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    creatorId?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
    likeCount?: SortOrder
    placeCount?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    genre?: SortOrder
    subgenre?: SortOrder
    cityId?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    creatorId?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
    likeCount?: SortOrder
    placeCount?: SortOrder
    coverImage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
    averageRating?: SortOrder
    ratingCount?: SortOrder
    likeCount?: SortOrder
    placeCount?: SortOrder
  }

  export type ListScalarRelationFilter = {
    is?: ListWhereInput
    isNot?: ListWhereInput
  }

  export type PlaceScalarRelationFilter = {
    is?: PlaceWhereInput
    isNot?: PlaceWhereInput
  }

  export type ListPlaceListIdPlaceIdCompoundUniqueInput = {
    listId: string
    placeId: string
  }

  export type ListPlaceCountOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    placeId?: SortOrder
    order?: SortOrder
    note?: SortOrder
    priceRange?: SortOrder
    createdAt?: SortOrder
  }

  export type ListPlaceAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ListPlaceMaxOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    placeId?: SortOrder
    order?: SortOrder
    note?: SortOrder
    priceRange?: SortOrder
    createdAt?: SortOrder
  }

  export type ListPlaceMinOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    placeId?: SortOrder
    order?: SortOrder
    note?: SortOrder
    priceRange?: SortOrder
    createdAt?: SortOrder
  }

  export type ListPlaceSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ListLikeUserIdListIdCompoundUniqueInput = {
    userId: string
    listId: string
  }

  export type ListLikeCountOrderByAggregateInput = {
    userId?: SortOrder
    listId?: SortOrder
    createdAt?: SortOrder
  }

  export type ListLikeMaxOrderByAggregateInput = {
    userId?: SortOrder
    listId?: SortOrder
    createdAt?: SortOrder
  }

  export type ListLikeMinOrderByAggregateInput = {
    userId?: SortOrder
    listId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLocalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LocalStatus | EnumLocalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LocalStatus[] | ListEnumLocalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocalStatus[] | ListEnumLocalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLocalStatusFilter<$PrismaModel> | $Enums.LocalStatus
  }

  export type UserLocationUserIdCityIdCompoundUniqueInput = {
    userId: string
    cityId: string
  }

  export type UserLocationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cityId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cityId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLocationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cityId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLocalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocalStatus | EnumLocalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LocalStatus[] | ListEnumLocalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocalStatus[] | ListEnumLocalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLocalStatusWithAggregatesFilter<$PrismaModel> | $Enums.LocalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocalStatusFilter<$PrismaModel>
    _max?: NestedEnumLocalStatusFilter<$PrismaModel>
  }

  export type ListCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ListCreateWithoutCreatorInput, ListUncheckedCreateWithoutCreatorInput> | ListCreateWithoutCreatorInput[] | ListUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ListCreateOrConnectWithoutCreatorInput | ListCreateOrConnectWithoutCreatorInput[]
    createMany?: ListCreateManyCreatorInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type ListLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<ListLikeCreateWithoutUserInput, ListLikeUncheckedCreateWithoutUserInput> | ListLikeCreateWithoutUserInput[] | ListLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListLikeCreateOrConnectWithoutUserInput | ListLikeCreateOrConnectWithoutUserInput[]
    createMany?: ListLikeCreateManyUserInputEnvelope
    connect?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
  }

  export type UserLocationCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput> | UserLocationCreateWithoutUserInput[] | UserLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput | UserLocationCreateOrConnectWithoutUserInput[]
    createMany?: UserLocationCreateManyUserInputEnvelope
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
  }

  export type ListUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ListCreateWithoutCreatorInput, ListUncheckedCreateWithoutCreatorInput> | ListCreateWithoutCreatorInput[] | ListUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ListCreateOrConnectWithoutCreatorInput | ListCreateOrConnectWithoutCreatorInput[]
    createMany?: ListCreateManyCreatorInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type ListLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListLikeCreateWithoutUserInput, ListLikeUncheckedCreateWithoutUserInput> | ListLikeCreateWithoutUserInput[] | ListLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListLikeCreateOrConnectWithoutUserInput | ListLikeCreateOrConnectWithoutUserInput[]
    createMany?: ListLikeCreateManyUserInputEnvelope
    connect?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
  }

  export type UserLocationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput> | UserLocationCreateWithoutUserInput[] | UserLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput | UserLocationCreateOrConnectWithoutUserInput[]
    createMany?: UserLocationCreateManyUserInputEnvelope
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ListUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ListCreateWithoutCreatorInput, ListUncheckedCreateWithoutCreatorInput> | ListCreateWithoutCreatorInput[] | ListUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ListCreateOrConnectWithoutCreatorInput | ListCreateOrConnectWithoutCreatorInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutCreatorInput | ListUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ListCreateManyCreatorInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutCreatorInput | ListUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ListUpdateManyWithWhereWithoutCreatorInput | ListUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type ListLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListLikeCreateWithoutUserInput, ListLikeUncheckedCreateWithoutUserInput> | ListLikeCreateWithoutUserInput[] | ListLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListLikeCreateOrConnectWithoutUserInput | ListLikeCreateOrConnectWithoutUserInput[]
    upsert?: ListLikeUpsertWithWhereUniqueWithoutUserInput | ListLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListLikeCreateManyUserInputEnvelope
    set?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    disconnect?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    delete?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    connect?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    update?: ListLikeUpdateWithWhereUniqueWithoutUserInput | ListLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListLikeUpdateManyWithWhereWithoutUserInput | ListLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListLikeScalarWhereInput | ListLikeScalarWhereInput[]
  }

  export type UserLocationUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput> | UserLocationCreateWithoutUserInput[] | UserLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput | UserLocationCreateOrConnectWithoutUserInput[]
    upsert?: UserLocationUpsertWithWhereUniqueWithoutUserInput | UserLocationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLocationCreateManyUserInputEnvelope
    set?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    disconnect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    delete?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    update?: UserLocationUpdateWithWhereUniqueWithoutUserInput | UserLocationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLocationUpdateManyWithWhereWithoutUserInput | UserLocationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
  }

  export type ListUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ListCreateWithoutCreatorInput, ListUncheckedCreateWithoutCreatorInput> | ListCreateWithoutCreatorInput[] | ListUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ListCreateOrConnectWithoutCreatorInput | ListCreateOrConnectWithoutCreatorInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutCreatorInput | ListUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ListCreateManyCreatorInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutCreatorInput | ListUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ListUpdateManyWithWhereWithoutCreatorInput | ListUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type ListLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListLikeCreateWithoutUserInput, ListLikeUncheckedCreateWithoutUserInput> | ListLikeCreateWithoutUserInput[] | ListLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListLikeCreateOrConnectWithoutUserInput | ListLikeCreateOrConnectWithoutUserInput[]
    upsert?: ListLikeUpsertWithWhereUniqueWithoutUserInput | ListLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListLikeCreateManyUserInputEnvelope
    set?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    disconnect?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    delete?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    connect?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    update?: ListLikeUpdateWithWhereUniqueWithoutUserInput | ListLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListLikeUpdateManyWithWhereWithoutUserInput | ListLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListLikeScalarWhereInput | ListLikeScalarWhereInput[]
  }

  export type UserLocationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput> | UserLocationCreateWithoutUserInput[] | UserLocationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutUserInput | UserLocationCreateOrConnectWithoutUserInput[]
    upsert?: UserLocationUpsertWithWhereUniqueWithoutUserInput | UserLocationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLocationCreateManyUserInputEnvelope
    set?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    disconnect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    delete?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    update?: UserLocationUpdateWithWhereUniqueWithoutUserInput | UserLocationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLocationUpdateManyWithWhereWithoutUserInput | UserLocationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
  }

  export type CityCreateNestedManyWithoutCountryInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type CityUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type CityUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutCountryInput | CityUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutCountryInput | CityUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CityUpdateManyWithWhereWithoutCountryInput | CityUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type CityUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutCountryInput | CityUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutCountryInput | CityUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CityUpdateManyWithWhereWithoutCountryInput | CityUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutCitiesInput = {
    create?: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCitiesInput
    connect?: CountryWhereUniqueInput
  }

  export type ListCreateNestedManyWithoutCityInput = {
    create?: XOR<ListCreateWithoutCityInput, ListUncheckedCreateWithoutCityInput> | ListCreateWithoutCityInput[] | ListUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ListCreateOrConnectWithoutCityInput | ListCreateOrConnectWithoutCityInput[]
    createMany?: ListCreateManyCityInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type PlaceCreateNestedManyWithoutCityInput = {
    create?: XOR<PlaceCreateWithoutCityInput, PlaceUncheckedCreateWithoutCityInput> | PlaceCreateWithoutCityInput[] | PlaceUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutCityInput | PlaceCreateOrConnectWithoutCityInput[]
    createMany?: PlaceCreateManyCityInputEnvelope
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
  }

  export type UserLocationCreateNestedManyWithoutCityInput = {
    create?: XOR<UserLocationCreateWithoutCityInput, UserLocationUncheckedCreateWithoutCityInput> | UserLocationCreateWithoutCityInput[] | UserLocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutCityInput | UserLocationCreateOrConnectWithoutCityInput[]
    createMany?: UserLocationCreateManyCityInputEnvelope
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
  }

  export type ListUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<ListCreateWithoutCityInput, ListUncheckedCreateWithoutCityInput> | ListCreateWithoutCityInput[] | ListUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ListCreateOrConnectWithoutCityInput | ListCreateOrConnectWithoutCityInput[]
    createMany?: ListCreateManyCityInputEnvelope
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
  }

  export type PlaceUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<PlaceCreateWithoutCityInput, PlaceUncheckedCreateWithoutCityInput> | PlaceCreateWithoutCityInput[] | PlaceUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutCityInput | PlaceCreateOrConnectWithoutCityInput[]
    createMany?: PlaceCreateManyCityInputEnvelope
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
  }

  export type UserLocationUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<UserLocationCreateWithoutCityInput, UserLocationUncheckedCreateWithoutCityInput> | UserLocationCreateWithoutCityInput[] | UserLocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutCityInput | UserLocationCreateOrConnectWithoutCityInput[]
    createMany?: UserLocationCreateManyCityInputEnvelope
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CountryUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCitiesInput
    upsert?: CountryUpsertWithoutCitiesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutCitiesInput, CountryUpdateWithoutCitiesInput>, CountryUncheckedUpdateWithoutCitiesInput>
  }

  export type ListUpdateManyWithoutCityNestedInput = {
    create?: XOR<ListCreateWithoutCityInput, ListUncheckedCreateWithoutCityInput> | ListCreateWithoutCityInput[] | ListUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ListCreateOrConnectWithoutCityInput | ListCreateOrConnectWithoutCityInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutCityInput | ListUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: ListCreateManyCityInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutCityInput | ListUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: ListUpdateManyWithWhereWithoutCityInput | ListUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type PlaceUpdateManyWithoutCityNestedInput = {
    create?: XOR<PlaceCreateWithoutCityInput, PlaceUncheckedCreateWithoutCityInput> | PlaceCreateWithoutCityInput[] | PlaceUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutCityInput | PlaceCreateOrConnectWithoutCityInput[]
    upsert?: PlaceUpsertWithWhereUniqueWithoutCityInput | PlaceUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PlaceCreateManyCityInputEnvelope
    set?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    disconnect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    delete?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    update?: PlaceUpdateWithWhereUniqueWithoutCityInput | PlaceUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PlaceUpdateManyWithWhereWithoutCityInput | PlaceUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
  }

  export type UserLocationUpdateManyWithoutCityNestedInput = {
    create?: XOR<UserLocationCreateWithoutCityInput, UserLocationUncheckedCreateWithoutCityInput> | UserLocationCreateWithoutCityInput[] | UserLocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutCityInput | UserLocationCreateOrConnectWithoutCityInput[]
    upsert?: UserLocationUpsertWithWhereUniqueWithoutCityInput | UserLocationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: UserLocationCreateManyCityInputEnvelope
    set?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    disconnect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    delete?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    update?: UserLocationUpdateWithWhereUniqueWithoutCityInput | UserLocationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: UserLocationUpdateManyWithWhereWithoutCityInput | UserLocationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
  }

  export type ListUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<ListCreateWithoutCityInput, ListUncheckedCreateWithoutCityInput> | ListCreateWithoutCityInput[] | ListUncheckedCreateWithoutCityInput[]
    connectOrCreate?: ListCreateOrConnectWithoutCityInput | ListCreateOrConnectWithoutCityInput[]
    upsert?: ListUpsertWithWhereUniqueWithoutCityInput | ListUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: ListCreateManyCityInputEnvelope
    set?: ListWhereUniqueInput | ListWhereUniqueInput[]
    disconnect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    delete?: ListWhereUniqueInput | ListWhereUniqueInput[]
    connect?: ListWhereUniqueInput | ListWhereUniqueInput[]
    update?: ListUpdateWithWhereUniqueWithoutCityInput | ListUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: ListUpdateManyWithWhereWithoutCityInput | ListUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: ListScalarWhereInput | ListScalarWhereInput[]
  }

  export type PlaceUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<PlaceCreateWithoutCityInput, PlaceUncheckedCreateWithoutCityInput> | PlaceCreateWithoutCityInput[] | PlaceUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PlaceCreateOrConnectWithoutCityInput | PlaceCreateOrConnectWithoutCityInput[]
    upsert?: PlaceUpsertWithWhereUniqueWithoutCityInput | PlaceUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PlaceCreateManyCityInputEnvelope
    set?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    disconnect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    delete?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    connect?: PlaceWhereUniqueInput | PlaceWhereUniqueInput[]
    update?: PlaceUpdateWithWhereUniqueWithoutCityInput | PlaceUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PlaceUpdateManyWithWhereWithoutCityInput | PlaceUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
  }

  export type UserLocationUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<UserLocationCreateWithoutCityInput, UserLocationUncheckedCreateWithoutCityInput> | UserLocationCreateWithoutCityInput[] | UserLocationUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserLocationCreateOrConnectWithoutCityInput | UserLocationCreateOrConnectWithoutCityInput[]
    upsert?: UserLocationUpsertWithWhereUniqueWithoutCityInput | UserLocationUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: UserLocationCreateManyCityInputEnvelope
    set?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    disconnect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    delete?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    connect?: UserLocationWhereUniqueInput | UserLocationWhereUniqueInput[]
    update?: UserLocationUpdateWithWhereUniqueWithoutCityInput | UserLocationUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: UserLocationUpdateManyWithWhereWithoutCityInput | UserLocationUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
  }

  export type ListPlaceCreateNestedManyWithoutPlaceInput = {
    create?: XOR<ListPlaceCreateWithoutPlaceInput, ListPlaceUncheckedCreateWithoutPlaceInput> | ListPlaceCreateWithoutPlaceInput[] | ListPlaceUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: ListPlaceCreateOrConnectWithoutPlaceInput | ListPlaceCreateOrConnectWithoutPlaceInput[]
    createMany?: ListPlaceCreateManyPlaceInputEnvelope
    connect?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
  }

  export type CityCreateNestedOneWithoutPlacesInput = {
    create?: XOR<CityCreateWithoutPlacesInput, CityUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: CityCreateOrConnectWithoutPlacesInput
    connect?: CityWhereUniqueInput
  }

  export type ListPlaceUncheckedCreateNestedManyWithoutPlaceInput = {
    create?: XOR<ListPlaceCreateWithoutPlaceInput, ListPlaceUncheckedCreateWithoutPlaceInput> | ListPlaceCreateWithoutPlaceInput[] | ListPlaceUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: ListPlaceCreateOrConnectWithoutPlaceInput | ListPlaceCreateOrConnectWithoutPlaceInput[]
    createMany?: ListPlaceCreateManyPlaceInputEnvelope
    connect?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ListPlaceUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<ListPlaceCreateWithoutPlaceInput, ListPlaceUncheckedCreateWithoutPlaceInput> | ListPlaceCreateWithoutPlaceInput[] | ListPlaceUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: ListPlaceCreateOrConnectWithoutPlaceInput | ListPlaceCreateOrConnectWithoutPlaceInput[]
    upsert?: ListPlaceUpsertWithWhereUniqueWithoutPlaceInput | ListPlaceUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: ListPlaceCreateManyPlaceInputEnvelope
    set?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    disconnect?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    delete?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    connect?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    update?: ListPlaceUpdateWithWhereUniqueWithoutPlaceInput | ListPlaceUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: ListPlaceUpdateManyWithWhereWithoutPlaceInput | ListPlaceUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: ListPlaceScalarWhereInput | ListPlaceScalarWhereInput[]
  }

  export type CityUpdateOneRequiredWithoutPlacesNestedInput = {
    create?: XOR<CityCreateWithoutPlacesInput, CityUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: CityCreateOrConnectWithoutPlacesInput
    upsert?: CityUpsertWithoutPlacesInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutPlacesInput, CityUpdateWithoutPlacesInput>, CityUncheckedUpdateWithoutPlacesInput>
  }

  export type ListPlaceUncheckedUpdateManyWithoutPlaceNestedInput = {
    create?: XOR<ListPlaceCreateWithoutPlaceInput, ListPlaceUncheckedCreateWithoutPlaceInput> | ListPlaceCreateWithoutPlaceInput[] | ListPlaceUncheckedCreateWithoutPlaceInput[]
    connectOrCreate?: ListPlaceCreateOrConnectWithoutPlaceInput | ListPlaceCreateOrConnectWithoutPlaceInput[]
    upsert?: ListPlaceUpsertWithWhereUniqueWithoutPlaceInput | ListPlaceUpsertWithWhereUniqueWithoutPlaceInput[]
    createMany?: ListPlaceCreateManyPlaceInputEnvelope
    set?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    disconnect?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    delete?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    connect?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    update?: ListPlaceUpdateWithWhereUniqueWithoutPlaceInput | ListPlaceUpdateWithWhereUniqueWithoutPlaceInput[]
    updateMany?: ListPlaceUpdateManyWithWhereWithoutPlaceInput | ListPlaceUpdateManyWithWhereWithoutPlaceInput[]
    deleteMany?: ListPlaceScalarWhereInput | ListPlaceScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutListsInput = {
    create?: XOR<CityCreateWithoutListsInput, CityUncheckedCreateWithoutListsInput>
    connectOrCreate?: CityCreateOrConnectWithoutListsInput
    connect?: CityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutListsInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListsInput
    connect?: UserWhereUniqueInput
  }

  export type ListLikeCreateNestedManyWithoutListInput = {
    create?: XOR<ListLikeCreateWithoutListInput, ListLikeUncheckedCreateWithoutListInput> | ListLikeCreateWithoutListInput[] | ListLikeUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListLikeCreateOrConnectWithoutListInput | ListLikeCreateOrConnectWithoutListInput[]
    createMany?: ListLikeCreateManyListInputEnvelope
    connect?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
  }

  export type ListPlaceCreateNestedManyWithoutListInput = {
    create?: XOR<ListPlaceCreateWithoutListInput, ListPlaceUncheckedCreateWithoutListInput> | ListPlaceCreateWithoutListInput[] | ListPlaceUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListPlaceCreateOrConnectWithoutListInput | ListPlaceCreateOrConnectWithoutListInput[]
    createMany?: ListPlaceCreateManyListInputEnvelope
    connect?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
  }

  export type ListLikeUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ListLikeCreateWithoutListInput, ListLikeUncheckedCreateWithoutListInput> | ListLikeCreateWithoutListInput[] | ListLikeUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListLikeCreateOrConnectWithoutListInput | ListLikeCreateOrConnectWithoutListInput[]
    createMany?: ListLikeCreateManyListInputEnvelope
    connect?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
  }

  export type ListPlaceUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ListPlaceCreateWithoutListInput, ListPlaceUncheckedCreateWithoutListInput> | ListPlaceCreateWithoutListInput[] | ListPlaceUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListPlaceCreateOrConnectWithoutListInput | ListPlaceCreateOrConnectWithoutListInput[]
    createMany?: ListPlaceCreateManyListInputEnvelope
    connect?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
  }

  export type CityUpdateOneRequiredWithoutListsNestedInput = {
    create?: XOR<CityCreateWithoutListsInput, CityUncheckedCreateWithoutListsInput>
    connectOrCreate?: CityCreateOrConnectWithoutListsInput
    upsert?: CityUpsertWithoutListsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutListsInput, CityUpdateWithoutListsInput>, CityUncheckedUpdateWithoutListsInput>
  }

  export type UserUpdateOneRequiredWithoutListsNestedInput = {
    create?: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutListsInput
    upsert?: UserUpsertWithoutListsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutListsInput, UserUpdateWithoutListsInput>, UserUncheckedUpdateWithoutListsInput>
  }

  export type ListLikeUpdateManyWithoutListNestedInput = {
    create?: XOR<ListLikeCreateWithoutListInput, ListLikeUncheckedCreateWithoutListInput> | ListLikeCreateWithoutListInput[] | ListLikeUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListLikeCreateOrConnectWithoutListInput | ListLikeCreateOrConnectWithoutListInput[]
    upsert?: ListLikeUpsertWithWhereUniqueWithoutListInput | ListLikeUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListLikeCreateManyListInputEnvelope
    set?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    disconnect?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    delete?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    connect?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    update?: ListLikeUpdateWithWhereUniqueWithoutListInput | ListLikeUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListLikeUpdateManyWithWhereWithoutListInput | ListLikeUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListLikeScalarWhereInput | ListLikeScalarWhereInput[]
  }

  export type ListPlaceUpdateManyWithoutListNestedInput = {
    create?: XOR<ListPlaceCreateWithoutListInput, ListPlaceUncheckedCreateWithoutListInput> | ListPlaceCreateWithoutListInput[] | ListPlaceUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListPlaceCreateOrConnectWithoutListInput | ListPlaceCreateOrConnectWithoutListInput[]
    upsert?: ListPlaceUpsertWithWhereUniqueWithoutListInput | ListPlaceUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListPlaceCreateManyListInputEnvelope
    set?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    disconnect?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    delete?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    connect?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    update?: ListPlaceUpdateWithWhereUniqueWithoutListInput | ListPlaceUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListPlaceUpdateManyWithWhereWithoutListInput | ListPlaceUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListPlaceScalarWhereInput | ListPlaceScalarWhereInput[]
  }

  export type ListLikeUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ListLikeCreateWithoutListInput, ListLikeUncheckedCreateWithoutListInput> | ListLikeCreateWithoutListInput[] | ListLikeUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListLikeCreateOrConnectWithoutListInput | ListLikeCreateOrConnectWithoutListInput[]
    upsert?: ListLikeUpsertWithWhereUniqueWithoutListInput | ListLikeUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListLikeCreateManyListInputEnvelope
    set?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    disconnect?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    delete?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    connect?: ListLikeWhereUniqueInput | ListLikeWhereUniqueInput[]
    update?: ListLikeUpdateWithWhereUniqueWithoutListInput | ListLikeUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListLikeUpdateManyWithWhereWithoutListInput | ListLikeUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListLikeScalarWhereInput | ListLikeScalarWhereInput[]
  }

  export type ListPlaceUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ListPlaceCreateWithoutListInput, ListPlaceUncheckedCreateWithoutListInput> | ListPlaceCreateWithoutListInput[] | ListPlaceUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListPlaceCreateOrConnectWithoutListInput | ListPlaceCreateOrConnectWithoutListInput[]
    upsert?: ListPlaceUpsertWithWhereUniqueWithoutListInput | ListPlaceUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListPlaceCreateManyListInputEnvelope
    set?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    disconnect?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    delete?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    connect?: ListPlaceWhereUniqueInput | ListPlaceWhereUniqueInput[]
    update?: ListPlaceUpdateWithWhereUniqueWithoutListInput | ListPlaceUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListPlaceUpdateManyWithWhereWithoutListInput | ListPlaceUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListPlaceScalarWhereInput | ListPlaceScalarWhereInput[]
  }

  export type ListCreateNestedOneWithoutPlacesInput = {
    create?: XOR<ListCreateWithoutPlacesInput, ListUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: ListCreateOrConnectWithoutPlacesInput
    connect?: ListWhereUniqueInput
  }

  export type PlaceCreateNestedOneWithoutListItemsInput = {
    create?: XOR<PlaceCreateWithoutListItemsInput, PlaceUncheckedCreateWithoutListItemsInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutListItemsInput
    connect?: PlaceWhereUniqueInput
  }

  export type ListUpdateOneRequiredWithoutPlacesNestedInput = {
    create?: XOR<ListCreateWithoutPlacesInput, ListUncheckedCreateWithoutPlacesInput>
    connectOrCreate?: ListCreateOrConnectWithoutPlacesInput
    upsert?: ListUpsertWithoutPlacesInput
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutPlacesInput, ListUpdateWithoutPlacesInput>, ListUncheckedUpdateWithoutPlacesInput>
  }

  export type PlaceUpdateOneRequiredWithoutListItemsNestedInput = {
    create?: XOR<PlaceCreateWithoutListItemsInput, PlaceUncheckedCreateWithoutListItemsInput>
    connectOrCreate?: PlaceCreateOrConnectWithoutListItemsInput
    upsert?: PlaceUpsertWithoutListItemsInput
    connect?: PlaceWhereUniqueInput
    update?: XOR<XOR<PlaceUpdateToOneWithWhereWithoutListItemsInput, PlaceUpdateWithoutListItemsInput>, PlaceUncheckedUpdateWithoutListItemsInput>
  }

  export type ListCreateNestedOneWithoutLikesInput = {
    create?: XOR<ListCreateWithoutLikesInput, ListUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ListCreateOrConnectWithoutLikesInput
    connect?: ListWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type ListUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<ListCreateWithoutLikesInput, ListUncheckedCreateWithoutLikesInput>
    connectOrCreate?: ListCreateOrConnectWithoutLikesInput
    upsert?: ListUpsertWithoutLikesInput
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutLikesInput, ListUpdateWithoutLikesInput>, ListUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserCreateNestedOneWithoutLocationsInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    connect?: UserWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutUserLocationsInput = {
    create?: XOR<CityCreateWithoutUserLocationsInput, CityUncheckedCreateWithoutUserLocationsInput>
    connectOrCreate?: CityCreateOrConnectWithoutUserLocationsInput
    connect?: CityWhereUniqueInput
  }

  export type EnumLocalStatusFieldUpdateOperationsInput = {
    set?: $Enums.LocalStatus
  }

  export type UserUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLocationsInput
    upsert?: UserUpsertWithoutLocationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLocationsInput, UserUpdateWithoutLocationsInput>, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type CityUpdateOneRequiredWithoutUserLocationsNestedInput = {
    create?: XOR<CityCreateWithoutUserLocationsInput, CityUncheckedCreateWithoutUserLocationsInput>
    connectOrCreate?: CityCreateOrConnectWithoutUserLocationsInput
    upsert?: CityUpsertWithoutUserLocationsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutUserLocationsInput, CityUpdateWithoutUserLocationsInput>, CityUncheckedUpdateWithoutUserLocationsInput>
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

  export type NestedEnumLocalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LocalStatus | EnumLocalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LocalStatus[] | ListEnumLocalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocalStatus[] | ListEnumLocalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLocalStatusFilter<$PrismaModel> | $Enums.LocalStatus
  }

  export type NestedEnumLocalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LocalStatus | EnumLocalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LocalStatus[] | ListEnumLocalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LocalStatus[] | ListEnumLocalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLocalStatusWithAggregatesFilter<$PrismaModel> | $Enums.LocalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLocalStatusFilter<$PrismaModel>
    _max?: NestedEnumLocalStatusFilter<$PrismaModel>
  }

  export type ListCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    lat?: number | null
    lng?: number | null
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutListsInput
    likes?: ListLikeCreateNestedManyWithoutListInput
    places?: ListPlaceCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    cityId: string
    lat?: number | null
    lng?: number | null
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ListLikeUncheckedCreateNestedManyWithoutListInput
    places?: ListPlaceUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutCreatorInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutCreatorInput, ListUncheckedCreateWithoutCreatorInput>
  }

  export type ListCreateManyCreatorInputEnvelope = {
    data: ListCreateManyCreatorInput | ListCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ListLikeCreateWithoutUserInput = {
    createdAt?: Date | string
    list: ListCreateNestedOneWithoutLikesInput
  }

  export type ListLikeUncheckedCreateWithoutUserInput = {
    listId: string
    createdAt?: Date | string
  }

  export type ListLikeCreateOrConnectWithoutUserInput = {
    where: ListLikeWhereUniqueInput
    create: XOR<ListLikeCreateWithoutUserInput, ListLikeUncheckedCreateWithoutUserInput>
  }

  export type ListLikeCreateManyUserInputEnvelope = {
    data: ListLikeCreateManyUserInput | ListLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserLocationCreateWithoutUserInput = {
    id?: string
    status: $Enums.LocalStatus
    createdAt?: Date | string
    city: CityCreateNestedOneWithoutUserLocationsInput
  }

  export type UserLocationUncheckedCreateWithoutUserInput = {
    id?: string
    cityId: string
    status: $Enums.LocalStatus
    createdAt?: Date | string
  }

  export type UserLocationCreateOrConnectWithoutUserInput = {
    where: UserLocationWhereUniqueInput
    create: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput>
  }

  export type UserLocationCreateManyUserInputEnvelope = {
    data: UserLocationCreateManyUserInput | UserLocationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ListWhereUniqueInput
    update: XOR<ListUpdateWithoutCreatorInput, ListUncheckedUpdateWithoutCreatorInput>
    create: XOR<ListCreateWithoutCreatorInput, ListUncheckedCreateWithoutCreatorInput>
  }

  export type ListUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ListWhereUniqueInput
    data: XOR<ListUpdateWithoutCreatorInput, ListUncheckedUpdateWithoutCreatorInput>
  }

  export type ListUpdateManyWithWhereWithoutCreatorInput = {
    where: ListScalarWhereInput
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ListScalarWhereInput = {
    AND?: ListScalarWhereInput | ListScalarWhereInput[]
    OR?: ListScalarWhereInput[]
    NOT?: ListScalarWhereInput | ListScalarWhereInput[]
    id?: StringFilter<"List"> | string
    name?: StringFilter<"List"> | string
    description?: StringNullableFilter<"List"> | string | null
    genre?: StringNullableFilter<"List"> | string | null
    subgenre?: StringNullableFilter<"List"> | string | null
    cityId?: StringFilter<"List"> | string
    lat?: FloatNullableFilter<"List"> | number | null
    lng?: FloatNullableFilter<"List"> | number | null
    creatorId?: StringFilter<"List"> | string
    averageRating?: FloatFilter<"List"> | number
    ratingCount?: IntFilter<"List"> | number
    likeCount?: IntFilter<"List"> | number
    placeCount?: IntFilter<"List"> | number
    coverImage?: StringNullableFilter<"List"> | string | null
    createdAt?: DateTimeFilter<"List"> | Date | string
    updatedAt?: DateTimeFilter<"List"> | Date | string
  }

  export type ListLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: ListLikeWhereUniqueInput
    update: XOR<ListLikeUpdateWithoutUserInput, ListLikeUncheckedUpdateWithoutUserInput>
    create: XOR<ListLikeCreateWithoutUserInput, ListLikeUncheckedCreateWithoutUserInput>
  }

  export type ListLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: ListLikeWhereUniqueInput
    data: XOR<ListLikeUpdateWithoutUserInput, ListLikeUncheckedUpdateWithoutUserInput>
  }

  export type ListLikeUpdateManyWithWhereWithoutUserInput = {
    where: ListLikeScalarWhereInput
    data: XOR<ListLikeUpdateManyMutationInput, ListLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type ListLikeScalarWhereInput = {
    AND?: ListLikeScalarWhereInput | ListLikeScalarWhereInput[]
    OR?: ListLikeScalarWhereInput[]
    NOT?: ListLikeScalarWhereInput | ListLikeScalarWhereInput[]
    userId?: StringFilter<"ListLike"> | string
    listId?: StringFilter<"ListLike"> | string
    createdAt?: DateTimeFilter<"ListLike"> | Date | string
  }

  export type UserLocationUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLocationWhereUniqueInput
    update: XOR<UserLocationUpdateWithoutUserInput, UserLocationUncheckedUpdateWithoutUserInput>
    create: XOR<UserLocationCreateWithoutUserInput, UserLocationUncheckedCreateWithoutUserInput>
  }

  export type UserLocationUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLocationWhereUniqueInput
    data: XOR<UserLocationUpdateWithoutUserInput, UserLocationUncheckedUpdateWithoutUserInput>
  }

  export type UserLocationUpdateManyWithWhereWithoutUserInput = {
    where: UserLocationScalarWhereInput
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLocationScalarWhereInput = {
    AND?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
    OR?: UserLocationScalarWhereInput[]
    NOT?: UserLocationScalarWhereInput | UserLocationScalarWhereInput[]
    id?: StringFilter<"UserLocation"> | string
    userId?: StringFilter<"UserLocation"> | string
    cityId?: StringFilter<"UserLocation"> | string
    status?: EnumLocalStatusFilter<"UserLocation"> | $Enums.LocalStatus
    createdAt?: DateTimeFilter<"UserLocation"> | Date | string
  }

  export type CityCreateWithoutCountryInput = {
    id?: string
    name: string
    slug?: string | null
    lat?: number | null
    lng?: number | null
    listCount?: number
    googlePlaceId?: string | null
    lists?: ListCreateNestedManyWithoutCityInput
    places?: PlaceCreateNestedManyWithoutCityInput
    userLocations?: UserLocationCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutCountryInput = {
    id?: string
    name: string
    slug?: string | null
    lat?: number | null
    lng?: number | null
    listCount?: number
    googlePlaceId?: string | null
    lists?: ListUncheckedCreateNestedManyWithoutCityInput
    places?: PlaceUncheckedCreateNestedManyWithoutCityInput
    userLocations?: UserLocationUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutCountryInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput>
  }

  export type CityCreateManyCountryInputEnvelope = {
    data: CityCreateManyCountryInput | CityCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithWhereUniqueWithoutCountryInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutCountryInput, CityUncheckedUpdateWithoutCountryInput>
    create: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput>
  }

  export type CityUpdateWithWhereUniqueWithoutCountryInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutCountryInput, CityUncheckedUpdateWithoutCountryInput>
  }

  export type CityUpdateManyWithWhereWithoutCountryInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutCountryInput>
  }

  export type CityScalarWhereInput = {
    AND?: CityScalarWhereInput | CityScalarWhereInput[]
    OR?: CityScalarWhereInput[]
    NOT?: CityScalarWhereInput | CityScalarWhereInput[]
    id?: StringFilter<"City"> | string
    countryId?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    slug?: StringNullableFilter<"City"> | string | null
    lat?: FloatNullableFilter<"City"> | number | null
    lng?: FloatNullableFilter<"City"> | number | null
    listCount?: IntFilter<"City"> | number
    googlePlaceId?: StringNullableFilter<"City"> | string | null
  }

  export type CountryCreateWithoutCitiesInput = {
    id?: string
    name: string
    code?: string | null
    slug?: string | null
  }

  export type CountryUncheckedCreateWithoutCitiesInput = {
    id?: string
    name: string
    code?: string | null
    slug?: string | null
  }

  export type CountryCreateOrConnectWithoutCitiesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
  }

  export type ListCreateWithoutCityInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    lat?: number | null
    lng?: number | null
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutListsInput
    likes?: ListLikeCreateNestedManyWithoutListInput
    places?: ListPlaceCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    lat?: number | null
    lng?: number | null
    creatorId: string
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ListLikeUncheckedCreateNestedManyWithoutListInput
    places?: ListPlaceUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutCityInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutCityInput, ListUncheckedCreateWithoutCityInput>
  }

  export type ListCreateManyCityInputEnvelope = {
    data: ListCreateManyCityInput | ListCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type PlaceCreateWithoutCityInput = {
    id?: string
    name: string
    address: string
    lat: number
    lng: number
    googlePlaceId: string
    description?: string | null
    primaryImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listItems?: ListPlaceCreateNestedManyWithoutPlaceInput
  }

  export type PlaceUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    address: string
    lat: number
    lng: number
    googlePlaceId: string
    description?: string | null
    primaryImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    listItems?: ListPlaceUncheckedCreateNestedManyWithoutPlaceInput
  }

  export type PlaceCreateOrConnectWithoutCityInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutCityInput, PlaceUncheckedCreateWithoutCityInput>
  }

  export type PlaceCreateManyCityInputEnvelope = {
    data: PlaceCreateManyCityInput | PlaceCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type UserLocationCreateWithoutCityInput = {
    id?: string
    status: $Enums.LocalStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLocationsInput
  }

  export type UserLocationUncheckedCreateWithoutCityInput = {
    id?: string
    userId: string
    status: $Enums.LocalStatus
    createdAt?: Date | string
  }

  export type UserLocationCreateOrConnectWithoutCityInput = {
    where: UserLocationWhereUniqueInput
    create: XOR<UserLocationCreateWithoutCityInput, UserLocationUncheckedCreateWithoutCityInput>
  }

  export type UserLocationCreateManyCityInputEnvelope = {
    data: UserLocationCreateManyCityInput | UserLocationCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutCitiesInput = {
    update: XOR<CountryUpdateWithoutCitiesInput, CountryUncheckedUpdateWithoutCitiesInput>
    create: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutCitiesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutCitiesInput, CountryUncheckedUpdateWithoutCitiesInput>
  }

  export type CountryUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListUpsertWithWhereUniqueWithoutCityInput = {
    where: ListWhereUniqueInput
    update: XOR<ListUpdateWithoutCityInput, ListUncheckedUpdateWithoutCityInput>
    create: XOR<ListCreateWithoutCityInput, ListUncheckedCreateWithoutCityInput>
  }

  export type ListUpdateWithWhereUniqueWithoutCityInput = {
    where: ListWhereUniqueInput
    data: XOR<ListUpdateWithoutCityInput, ListUncheckedUpdateWithoutCityInput>
  }

  export type ListUpdateManyWithWhereWithoutCityInput = {
    where: ListScalarWhereInput
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyWithoutCityInput>
  }

  export type PlaceUpsertWithWhereUniqueWithoutCityInput = {
    where: PlaceWhereUniqueInput
    update: XOR<PlaceUpdateWithoutCityInput, PlaceUncheckedUpdateWithoutCityInput>
    create: XOR<PlaceCreateWithoutCityInput, PlaceUncheckedCreateWithoutCityInput>
  }

  export type PlaceUpdateWithWhereUniqueWithoutCityInput = {
    where: PlaceWhereUniqueInput
    data: XOR<PlaceUpdateWithoutCityInput, PlaceUncheckedUpdateWithoutCityInput>
  }

  export type PlaceUpdateManyWithWhereWithoutCityInput = {
    where: PlaceScalarWhereInput
    data: XOR<PlaceUpdateManyMutationInput, PlaceUncheckedUpdateManyWithoutCityInput>
  }

  export type PlaceScalarWhereInput = {
    AND?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
    OR?: PlaceScalarWhereInput[]
    NOT?: PlaceScalarWhereInput | PlaceScalarWhereInput[]
    id?: StringFilter<"Place"> | string
    name?: StringFilter<"Place"> | string
    address?: StringFilter<"Place"> | string
    lat?: FloatFilter<"Place"> | number
    lng?: FloatFilter<"Place"> | number
    googlePlaceId?: StringFilter<"Place"> | string
    description?: StringNullableFilter<"Place"> | string | null
    primaryImageUrl?: StringNullableFilter<"Place"> | string | null
    createdAt?: DateTimeFilter<"Place"> | Date | string
    updatedAt?: DateTimeFilter<"Place"> | Date | string
    cityId?: StringFilter<"Place"> | string
  }

  export type UserLocationUpsertWithWhereUniqueWithoutCityInput = {
    where: UserLocationWhereUniqueInput
    update: XOR<UserLocationUpdateWithoutCityInput, UserLocationUncheckedUpdateWithoutCityInput>
    create: XOR<UserLocationCreateWithoutCityInput, UserLocationUncheckedCreateWithoutCityInput>
  }

  export type UserLocationUpdateWithWhereUniqueWithoutCityInput = {
    where: UserLocationWhereUniqueInput
    data: XOR<UserLocationUpdateWithoutCityInput, UserLocationUncheckedUpdateWithoutCityInput>
  }

  export type UserLocationUpdateManyWithWhereWithoutCityInput = {
    where: UserLocationScalarWhereInput
    data: XOR<UserLocationUpdateManyMutationInput, UserLocationUncheckedUpdateManyWithoutCityInput>
  }

  export type ListPlaceCreateWithoutPlaceInput = {
    id?: string
    order: number
    note?: string | null
    priceRange?: string | null
    createdAt?: Date | string
    list: ListCreateNestedOneWithoutPlacesInput
  }

  export type ListPlaceUncheckedCreateWithoutPlaceInput = {
    id?: string
    listId: string
    order: number
    note?: string | null
    priceRange?: string | null
    createdAt?: Date | string
  }

  export type ListPlaceCreateOrConnectWithoutPlaceInput = {
    where: ListPlaceWhereUniqueInput
    create: XOR<ListPlaceCreateWithoutPlaceInput, ListPlaceUncheckedCreateWithoutPlaceInput>
  }

  export type ListPlaceCreateManyPlaceInputEnvelope = {
    data: ListPlaceCreateManyPlaceInput | ListPlaceCreateManyPlaceInput[]
    skipDuplicates?: boolean
  }

  export type CityCreateWithoutPlacesInput = {
    id?: string
    name: string
    slug?: string | null
    lat?: number | null
    lng?: number | null
    listCount?: number
    googlePlaceId?: string | null
    country: CountryCreateNestedOneWithoutCitiesInput
    lists?: ListCreateNestedManyWithoutCityInput
    userLocations?: UserLocationCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutPlacesInput = {
    id?: string
    countryId: string
    name: string
    slug?: string | null
    lat?: number | null
    lng?: number | null
    listCount?: number
    googlePlaceId?: string | null
    lists?: ListUncheckedCreateNestedManyWithoutCityInput
    userLocations?: UserLocationUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutPlacesInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutPlacesInput, CityUncheckedCreateWithoutPlacesInput>
  }

  export type ListPlaceUpsertWithWhereUniqueWithoutPlaceInput = {
    where: ListPlaceWhereUniqueInput
    update: XOR<ListPlaceUpdateWithoutPlaceInput, ListPlaceUncheckedUpdateWithoutPlaceInput>
    create: XOR<ListPlaceCreateWithoutPlaceInput, ListPlaceUncheckedCreateWithoutPlaceInput>
  }

  export type ListPlaceUpdateWithWhereUniqueWithoutPlaceInput = {
    where: ListPlaceWhereUniqueInput
    data: XOR<ListPlaceUpdateWithoutPlaceInput, ListPlaceUncheckedUpdateWithoutPlaceInput>
  }

  export type ListPlaceUpdateManyWithWhereWithoutPlaceInput = {
    where: ListPlaceScalarWhereInput
    data: XOR<ListPlaceUpdateManyMutationInput, ListPlaceUncheckedUpdateManyWithoutPlaceInput>
  }

  export type ListPlaceScalarWhereInput = {
    AND?: ListPlaceScalarWhereInput | ListPlaceScalarWhereInput[]
    OR?: ListPlaceScalarWhereInput[]
    NOT?: ListPlaceScalarWhereInput | ListPlaceScalarWhereInput[]
    id?: StringFilter<"ListPlace"> | string
    listId?: StringFilter<"ListPlace"> | string
    placeId?: StringFilter<"ListPlace"> | string
    order?: IntFilter<"ListPlace"> | number
    note?: StringNullableFilter<"ListPlace"> | string | null
    priceRange?: StringNullableFilter<"ListPlace"> | string | null
    createdAt?: DateTimeFilter<"ListPlace"> | Date | string
  }

  export type CityUpsertWithoutPlacesInput = {
    update: XOR<CityUpdateWithoutPlacesInput, CityUncheckedUpdateWithoutPlacesInput>
    create: XOR<CityCreateWithoutPlacesInput, CityUncheckedCreateWithoutPlacesInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutPlacesInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutPlacesInput, CityUncheckedUpdateWithoutPlacesInput>
  }

  export type CityUpdateWithoutPlacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutCitiesNestedInput
    lists?: ListUpdateManyWithoutCityNestedInput
    userLocations?: UserLocationUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutPlacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
    lists?: ListUncheckedUpdateManyWithoutCityNestedInput
    userLocations?: UserLocationUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateWithoutListsInput = {
    id?: string
    name: string
    slug?: string | null
    lat?: number | null
    lng?: number | null
    listCount?: number
    googlePlaceId?: string | null
    country: CountryCreateNestedOneWithoutCitiesInput
    places?: PlaceCreateNestedManyWithoutCityInput
    userLocations?: UserLocationCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutListsInput = {
    id?: string
    countryId: string
    name: string
    slug?: string | null
    lat?: number | null
    lng?: number | null
    listCount?: number
    googlePlaceId?: string | null
    places?: PlaceUncheckedCreateNestedManyWithoutCityInput
    userLocations?: UserLocationUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutListsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutListsInput, CityUncheckedCreateWithoutListsInput>
  }

  export type UserCreateWithoutListsInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    avatar?: string | null
    address?: string | null
    isLocal?: boolean
    likes?: ListLikeCreateNestedManyWithoutUserInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutListsInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    avatar?: string | null
    address?: string | null
    isLocal?: boolean
    likes?: ListLikeUncheckedCreateNestedManyWithoutUserInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
  }

  export type ListLikeCreateWithoutListInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type ListLikeUncheckedCreateWithoutListInput = {
    userId: string
    createdAt?: Date | string
  }

  export type ListLikeCreateOrConnectWithoutListInput = {
    where: ListLikeWhereUniqueInput
    create: XOR<ListLikeCreateWithoutListInput, ListLikeUncheckedCreateWithoutListInput>
  }

  export type ListLikeCreateManyListInputEnvelope = {
    data: ListLikeCreateManyListInput | ListLikeCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type ListPlaceCreateWithoutListInput = {
    id?: string
    order: number
    note?: string | null
    priceRange?: string | null
    createdAt?: Date | string
    place: PlaceCreateNestedOneWithoutListItemsInput
  }

  export type ListPlaceUncheckedCreateWithoutListInput = {
    id?: string
    placeId: string
    order: number
    note?: string | null
    priceRange?: string | null
    createdAt?: Date | string
  }

  export type ListPlaceCreateOrConnectWithoutListInput = {
    where: ListPlaceWhereUniqueInput
    create: XOR<ListPlaceCreateWithoutListInput, ListPlaceUncheckedCreateWithoutListInput>
  }

  export type ListPlaceCreateManyListInputEnvelope = {
    data: ListPlaceCreateManyListInput | ListPlaceCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutListsInput = {
    update: XOR<CityUpdateWithoutListsInput, CityUncheckedUpdateWithoutListsInput>
    create: XOR<CityCreateWithoutListsInput, CityUncheckedCreateWithoutListsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutListsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutListsInput, CityUncheckedUpdateWithoutListsInput>
  }

  export type CityUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutCitiesNestedInput
    places?: PlaceUpdateManyWithoutCityNestedInput
    userLocations?: UserLocationUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
    places?: PlaceUncheckedUpdateManyWithoutCityNestedInput
    userLocations?: UserLocationUncheckedUpdateManyWithoutCityNestedInput
  }

  export type UserUpsertWithoutListsInput = {
    update: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
    create: XOR<UserCreateWithoutListsInput, UserUncheckedCreateWithoutListsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutListsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutListsInput, UserUncheckedUpdateWithoutListsInput>
  }

  export type UserUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    likes?: ListLikeUpdateManyWithoutUserNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    likes?: ListLikeUncheckedUpdateManyWithoutUserNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ListLikeUpsertWithWhereUniqueWithoutListInput = {
    where: ListLikeWhereUniqueInput
    update: XOR<ListLikeUpdateWithoutListInput, ListLikeUncheckedUpdateWithoutListInput>
    create: XOR<ListLikeCreateWithoutListInput, ListLikeUncheckedCreateWithoutListInput>
  }

  export type ListLikeUpdateWithWhereUniqueWithoutListInput = {
    where: ListLikeWhereUniqueInput
    data: XOR<ListLikeUpdateWithoutListInput, ListLikeUncheckedUpdateWithoutListInput>
  }

  export type ListLikeUpdateManyWithWhereWithoutListInput = {
    where: ListLikeScalarWhereInput
    data: XOR<ListLikeUpdateManyMutationInput, ListLikeUncheckedUpdateManyWithoutListInput>
  }

  export type ListPlaceUpsertWithWhereUniqueWithoutListInput = {
    where: ListPlaceWhereUniqueInput
    update: XOR<ListPlaceUpdateWithoutListInput, ListPlaceUncheckedUpdateWithoutListInput>
    create: XOR<ListPlaceCreateWithoutListInput, ListPlaceUncheckedCreateWithoutListInput>
  }

  export type ListPlaceUpdateWithWhereUniqueWithoutListInput = {
    where: ListPlaceWhereUniqueInput
    data: XOR<ListPlaceUpdateWithoutListInput, ListPlaceUncheckedUpdateWithoutListInput>
  }

  export type ListPlaceUpdateManyWithWhereWithoutListInput = {
    where: ListPlaceScalarWhereInput
    data: XOR<ListPlaceUpdateManyMutationInput, ListPlaceUncheckedUpdateManyWithoutListInput>
  }

  export type ListCreateWithoutPlacesInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    lat?: number | null
    lng?: number | null
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutListsInput
    creator: UserCreateNestedOneWithoutListsInput
    likes?: ListLikeCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutPlacesInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    cityId: string
    lat?: number | null
    lng?: number | null
    creatorId: string
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: ListLikeUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutPlacesInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutPlacesInput, ListUncheckedCreateWithoutPlacesInput>
  }

  export type PlaceCreateWithoutListItemsInput = {
    id?: string
    name: string
    address: string
    lat: number
    lng: number
    googlePlaceId: string
    description?: string | null
    primaryImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutPlacesInput
  }

  export type PlaceUncheckedCreateWithoutListItemsInput = {
    id?: string
    name: string
    address: string
    lat: number
    lng: number
    googlePlaceId: string
    description?: string | null
    primaryImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cityId: string
  }

  export type PlaceCreateOrConnectWithoutListItemsInput = {
    where: PlaceWhereUniqueInput
    create: XOR<PlaceCreateWithoutListItemsInput, PlaceUncheckedCreateWithoutListItemsInput>
  }

  export type ListUpsertWithoutPlacesInput = {
    update: XOR<ListUpdateWithoutPlacesInput, ListUncheckedUpdateWithoutPlacesInput>
    create: XOR<ListCreateWithoutPlacesInput, ListUncheckedCreateWithoutPlacesInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutPlacesInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutPlacesInput, ListUncheckedUpdateWithoutPlacesInput>
  }

  export type ListUpdateWithoutPlacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutListsNestedInput
    creator?: UserUpdateOneRequiredWithoutListsNestedInput
    likes?: ListLikeUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutPlacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ListLikeUncheckedUpdateManyWithoutListNestedInput
  }

  export type PlaceUpsertWithoutListItemsInput = {
    update: XOR<PlaceUpdateWithoutListItemsInput, PlaceUncheckedUpdateWithoutListItemsInput>
    create: XOR<PlaceCreateWithoutListItemsInput, PlaceUncheckedCreateWithoutListItemsInput>
    where?: PlaceWhereInput
  }

  export type PlaceUpdateToOneWithWhereWithoutListItemsInput = {
    where?: PlaceWhereInput
    data: XOR<PlaceUpdateWithoutListItemsInput, PlaceUncheckedUpdateWithoutListItemsInput>
  }

  export type PlaceUpdateWithoutListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutPlacesNestedInput
  }

  export type PlaceUncheckedUpdateWithoutListItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type ListCreateWithoutLikesInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    lat?: number | null
    lng?: number | null
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutListsInput
    creator: UserCreateNestedOneWithoutListsInput
    places?: ListPlaceCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateWithoutLikesInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    cityId: string
    lat?: number | null
    lng?: number | null
    creatorId: string
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    places?: ListPlaceUncheckedCreateNestedManyWithoutListInput
  }

  export type ListCreateOrConnectWithoutLikesInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutLikesInput, ListUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikesInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    avatar?: string | null
    address?: string | null
    isLocal?: boolean
    lists?: ListCreateNestedManyWithoutCreatorInput
    locations?: UserLocationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    avatar?: string | null
    address?: string | null
    isLocal?: boolean
    lists?: ListUncheckedCreateNestedManyWithoutCreatorInput
    locations?: UserLocationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type ListUpsertWithoutLikesInput = {
    update: XOR<ListUpdateWithoutLikesInput, ListUncheckedUpdateWithoutLikesInput>
    create: XOR<ListCreateWithoutLikesInput, ListUncheckedCreateWithoutLikesInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutLikesInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutLikesInput, ListUncheckedUpdateWithoutLikesInput>
  }

  export type ListUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutListsNestedInput
    creator?: UserUpdateOneRequiredWithoutListsNestedInput
    places?: ListPlaceUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    places?: ListPlaceUncheckedUpdateManyWithoutListNestedInput
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    lists?: ListUpdateManyWithoutCreatorNestedInput
    locations?: UserLocationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    lists?: ListUncheckedUpdateManyWithoutCreatorNestedInput
    locations?: UserLocationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLocationsInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    avatar?: string | null
    address?: string | null
    isLocal?: boolean
    lists?: ListCreateNestedManyWithoutCreatorInput
    likes?: ListLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLocationsInput = {
    id?: string
    email: string
    password: string
    name: string
    createdAt?: Date | string
    avatar?: string | null
    address?: string | null
    isLocal?: boolean
    lists?: ListUncheckedCreateNestedManyWithoutCreatorInput
    likes?: ListLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLocationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
  }

  export type CityCreateWithoutUserLocationsInput = {
    id?: string
    name: string
    slug?: string | null
    lat?: number | null
    lng?: number | null
    listCount?: number
    googlePlaceId?: string | null
    country: CountryCreateNestedOneWithoutCitiesInput
    lists?: ListCreateNestedManyWithoutCityInput
    places?: PlaceCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutUserLocationsInput = {
    id?: string
    countryId: string
    name: string
    slug?: string | null
    lat?: number | null
    lng?: number | null
    listCount?: number
    googlePlaceId?: string | null
    lists?: ListUncheckedCreateNestedManyWithoutCityInput
    places?: PlaceUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutUserLocationsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutUserLocationsInput, CityUncheckedCreateWithoutUserLocationsInput>
  }

  export type UserUpsertWithoutLocationsInput = {
    update: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
    create: XOR<UserCreateWithoutLocationsInput, UserUncheckedCreateWithoutLocationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLocationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLocationsInput, UserUncheckedUpdateWithoutLocationsInput>
  }

  export type UserUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    lists?: ListUpdateManyWithoutCreatorNestedInput
    likes?: ListLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    lists?: ListUncheckedUpdateManyWithoutCreatorNestedInput
    likes?: ListLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CityUpsertWithoutUserLocationsInput = {
    update: XOR<CityUpdateWithoutUserLocationsInput, CityUncheckedUpdateWithoutUserLocationsInput>
    create: XOR<CityCreateWithoutUserLocationsInput, CityUncheckedCreateWithoutUserLocationsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutUserLocationsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutUserLocationsInput, CityUncheckedUpdateWithoutUserLocationsInput>
  }

  export type CityUpdateWithoutUserLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutCitiesNestedInput
    lists?: ListUpdateManyWithoutCityNestedInput
    places?: PlaceUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutUserLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
    lists?: ListUncheckedUpdateManyWithoutCityNestedInput
    places?: PlaceUncheckedUpdateManyWithoutCityNestedInput
  }

  export type ListCreateManyCreatorInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    cityId: string
    lat?: number | null
    lng?: number | null
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListLikeCreateManyUserInput = {
    listId: string
    createdAt?: Date | string
  }

  export type UserLocationCreateManyUserInput = {
    id?: string
    cityId: string
    status: $Enums.LocalStatus
    createdAt?: Date | string
  }

  export type ListUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutListsNestedInput
    likes?: ListLikeUpdateManyWithoutListNestedInput
    places?: ListPlaceUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ListLikeUncheckedUpdateManyWithoutListNestedInput
    places?: ListPlaceUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListLikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListUpdateOneRequiredWithoutLikesNestedInput
  }

  export type ListLikeUncheckedUpdateWithoutUserInput = {
    listId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListLikeUncheckedUpdateManyWithoutUserInput = {
    listId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumLocalStatusFieldUpdateOperationsInput | $Enums.LocalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutUserLocationsNestedInput
  }

  export type UserLocationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    status?: EnumLocalStatusFieldUpdateOperationsInput | $Enums.LocalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    status?: EnumLocalStatusFieldUpdateOperationsInput | $Enums.LocalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityCreateManyCountryInput = {
    id?: string
    name: string
    slug?: string | null
    lat?: number | null
    lng?: number | null
    listCount?: number
    googlePlaceId?: string | null
  }

  export type CityUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
    lists?: ListUpdateManyWithoutCityNestedInput
    places?: PlaceUpdateManyWithoutCityNestedInput
    userLocations?: UserLocationUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
    lists?: ListUncheckedUpdateManyWithoutCityNestedInput
    places?: PlaceUncheckedUpdateManyWithoutCityNestedInput
    userLocations?: UserLocationUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    listCount?: IntFieldUpdateOperationsInput | number
    googlePlaceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListCreateManyCityInput = {
    id?: string
    name: string
    description?: string | null
    genre?: string | null
    subgenre?: string | null
    lat?: number | null
    lng?: number | null
    creatorId: string
    averageRating?: number
    ratingCount?: number
    likeCount?: number
    placeCount?: number
    coverImage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaceCreateManyCityInput = {
    id?: string
    name: string
    address: string
    lat: number
    lng: number
    googlePlaceId: string
    description?: string | null
    primaryImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserLocationCreateManyCityInput = {
    id?: string
    userId: string
    status: $Enums.LocalStatus
    createdAt?: Date | string
  }

  export type ListUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutListsNestedInput
    likes?: ListLikeUpdateManyWithoutListNestedInput
    places?: ListPlaceUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: ListLikeUncheckedUpdateManyWithoutListNestedInput
    places?: ListPlaceUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    subgenre?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    creatorId?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    ratingCount?: IntFieldUpdateOperationsInput | number
    likeCount?: IntFieldUpdateOperationsInput | number
    placeCount?: IntFieldUpdateOperationsInput | number
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaceUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listItems?: ListPlaceUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    listItems?: ListPlaceUncheckedUpdateManyWithoutPlaceNestedInput
  }

  export type PlaceUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    googlePlaceId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    primaryImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumLocalStatusFieldUpdateOperationsInput | $Enums.LocalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type UserLocationUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumLocalStatusFieldUpdateOperationsInput | $Enums.LocalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLocationUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumLocalStatusFieldUpdateOperationsInput | $Enums.LocalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListPlaceCreateManyPlaceInput = {
    id?: string
    listId: string
    order: number
    note?: string | null
    priceRange?: string | null
    createdAt?: Date | string
  }

  export type ListPlaceUpdateWithoutPlaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListUpdateOneRequiredWithoutPlacesNestedInput
  }

  export type ListPlaceUncheckedUpdateWithoutPlaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListPlaceUncheckedUpdateManyWithoutPlaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListLikeCreateManyListInput = {
    userId: string
    createdAt?: Date | string
  }

  export type ListPlaceCreateManyListInput = {
    id?: string
    placeId: string
    order: number
    note?: string | null
    priceRange?: string | null
    createdAt?: Date | string
  }

  export type ListLikeUpdateWithoutListInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type ListLikeUncheckedUpdateWithoutListInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListLikeUncheckedUpdateManyWithoutListInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListPlaceUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    place?: PlaceUpdateOneRequiredWithoutListItemsNestedInput
  }

  export type ListPlaceUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListPlaceUncheckedUpdateManyWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    placeId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    priceRange?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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