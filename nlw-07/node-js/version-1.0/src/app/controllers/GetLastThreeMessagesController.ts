import { Request, Response } from 'express';
import { GetLastThreeMessagesServices } from '../services/GetLastThreeMessagesServices';

class GetLastThreeMessagesController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const getLastThreeMessagesController = new GetLastThreeMessagesServices();

    const messages = await getLastThreeMessagesController.execute();

    return response.json(messages);
  }
}

export { GetLastThreeMessagesController };
