import IStorageProvider from '../models/IStorageProvider';

class FakeStorageProvider implements IStorageProvider {
  private files: string[] = [];

  public async saveFile(file: string): Promise<string> {
    this.files.push(file);
    return file;
  }

  public async saveFileItem(file: string): Promise<string> {
    this.files.push(file);
    return file;
  }
}

export default FakeStorageProvider;
