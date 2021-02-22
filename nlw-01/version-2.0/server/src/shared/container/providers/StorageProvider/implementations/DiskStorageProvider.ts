import uploadConfig from '@config/upload';

import fs from 'fs';
import path from 'path';

import IStorageProvider from '../models/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.directories.tempFolder, file),
      path.resolve(uploadConfig.directories.uploadsFolder, file),
    );

    return file;
  }

  public async saveFileItem(file: string): Promise<string> {
    await fs.promises.rename(
      path.resolve(uploadConfig.directories.tempFolder, file),
      path.resolve(uploadConfig.directories.itemsFolder, file),
    );

    return file;
  }
}

export default DiskStorageProvider;
