import { Request, Response } from 'express';

class UserController {
  public async store(request: Request, response: Response): Promise<Response> {
    const { name, email } = request.body;

    return response.json({ name, email });
  }
}

export default UserController;
