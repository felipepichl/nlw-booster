import * as express from "express";

abstract class BaseController {
  protected request: express.Request;

  protected response: express.Response;

  protected abstract handleImp(): Promise<void | any>;

  public handle(request: express.Request, response: express.Response): void {
    this.request = request;
    this.response = response;

    this.handleImp();
  }

  public static jsonResponse(
    response: express.Response,
    code: number,
    message: string
  ): express.Response {
    return response.status(code).json({ message });
  }

  public ok<T>(dto?: T): express.Response {
    if (dto) {
      return this.response.status(200).json({ dto });
    }

    return this.response.sendStatus(200);
  }

  public created(): express.Response {
    return this.response.sendStatus(201);
  }
}

export { BaseController };
