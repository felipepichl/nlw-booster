interface IStorageProvider {
  saveFile(file: string): Promise<string>;
  saveFileItem(file: string): Promise<string>;
}

export { IStorageProvider };
