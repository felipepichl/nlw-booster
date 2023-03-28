// interface IMapper<T, L> {
//   toPersistence(object: T): T;
//   toDomain(raw: L): T;
// }

// export { IMapper };

abstract class IMapper {
  abstract toPersistence<T>(object: T): T;
  abstract toDomain<L, T>(raw: L): T;
}

export { IMapper };
