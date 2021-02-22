import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const tempFolder = path.resolve(__dirname, '..', '..', 'temp');

export default {
  directories: {
    tempFolder,
    uploadsFolder: path.resolve(tempFolder, 'uploads'),
    itemsFolder: path.resolve(tempFolder, 'uploads', 'items'),
  },

  storage: multer.diskStorage({
    destination: tempFolder,
    filename(request, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    },
  }),
};
