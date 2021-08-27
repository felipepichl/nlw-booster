import { Request, Response } from 'express';
import { container } from 'tsyringe';

import itemView from '@modules/Items/views/ItemsView';

import { CreateItemService } from '@modules/Items/services/CreateItemService';
import { ListItemsService } from '@modules/Items/services/ListItemsService';

class ItemsControllers {
  async index(request: Request, response: Response): Promise<Response> {
    const listItem = container.resolve(ListItemsService);

    const items = await listItem.execute();

    return response.json(itemView.renderMay(items));
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { title } = request.body;

    const { filename: path } = request.file as Express.Multer.File;

    const createItem = container.resolve(CreateItemService);

    const item = await createItem.execute({
      title,
      path,
    });

    return response.status(201).json(item);
  }
}

export { ItemsControllers };
