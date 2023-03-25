interface IMapper<T, L> {
  toPersistence(object: T): T;
  toDomain(raw: L): T;
}

export { IMapper };
