import { Request, Response } from 'express';
import { container } from 'tsyringe';

import path from 'path';
import fs from 'fs';

import itemView from '@modules/Items/views/ItemsView';

import CreateItemService from '@modules/Items/services/CreateItemService';
import ListItemsService from '@modules/Items/services/ListItemsService';

export default class ItemsControllers {
  async index(request: Request, response: Response): Promise<Response> {
    const listItem = container.resolve(ListItemsService);

    const items = await listItem.execute();

    return response.json(itemView.renderMay(items));
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const { filename, destination } = request.file as Express.Multer.File;

    const oldPath = `${destination}/${filename}`;
    const newPath = `${path.resolve(destination, 'items')}/${filename}`;

    fs.rename(oldPath, newPath, err => {
      if (err) throw err;
    });

    const createItem = container.resolve(CreateItemService);

    const item = await createItem.execute({
      title,
      path: filename,
    });

    return response.status(201).json(item);
  }
}
