import { Request, Response } from 'express';

import { classToClass } from 'class-transformer';

import { ListTagsService } from '../services/ListTagsService';

class ListTagsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listTagsService = new ListTagsService();

    const tags = await listTagsService.execute();

    return response.json(classToClass(tags));
  }
}

export { ListTagsController };
