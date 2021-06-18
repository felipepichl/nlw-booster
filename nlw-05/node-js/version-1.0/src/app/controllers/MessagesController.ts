import { Request, Response } from 'express';
import * as Yup from 'yup';

import { AppError } from 'app/errors/AppError';

import { MessagesServices } from '../services/MessagesService';

class MessagesController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { admin_id, user_id, text } = request.body;

    const schema = Yup.object().shape({
      admin_id: Yup.string(),
      user_id: Yup.boolean().required(),
      text: Yup.boolean().required(),
    });

    if (!(await schema.isValid(request.body))) {
      throw new AppError('Validations Failed!');
    }

    const messagesService = new MessagesServices();

    const message = await messagesService.create({ admin_id, user_id, text });

    return response.json(message);
  }

  public async showByUser(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { user_id } = request.params;

    const messagesService = new MessagesServices();

    const messages = await messagesService.listByUser(user_id);

    return response.json(messages);
  }
}

export { MessagesController };
