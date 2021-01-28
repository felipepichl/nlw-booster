import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

import Item from '@models/Item';

import itemView from '../views/ItemsView';

export default class ItemsControllers {
  async index(request: Request, response: Response): Promise<Response> {
    const itemRepository = getRepository(Item);

    const items = await itemRepository.find();

    return response.json(itemView.renderMay(items));
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const itemRepository = getRepository(Item);

    const requestImage = request.file as Express.Multer.File;

    const data = {
      title,
      path: requestImage.filename,
    };

    const oldPath = `${requestImage.destination}/${data.path}`;
    const newPath = `${path.resolve(requestImage.destination, 'items')}/${
      data.path
    }`;

    fs.rename(oldPath, newPath, err => {
      if (err) throw err;
    });

    const item = itemRepository.create(data);

    await itemRepository.save(item);

    return response.status(201).json(data);
  }
}
