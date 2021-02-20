export default interface IStorageProvider {
  saveFile(file: string): Promise<string>;
  saveFileItem(file: string): Promise<string>;
}
