import { Request, Response } from 'express';

import path from 'path';
import fs from 'fs';

import CreateItemService from '../services/CreateItemService';
import ListItemService from '../services/ListItemsService';

import itemView from '../views/ItemsView';

export default class ItemsControllers {
  async index(request: Request, response: Response): Promise<Response> {
    const listItem = new ListItemService();

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

    const createItem = new CreateItemService();

    const item = await createItem.execute({
      title,
      path: filename,
    });

    return response.status(201).json(item);
  }
}
