import { Request, Response } from 'express';

class SessionCallbackController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { code } = request.query;

    return response.json({ messege: code });
  }
}

export { SessionCallbackController };
