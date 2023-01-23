import * as express from "express";

abstract class BaseController {
  protected request: express.Request;

  protected response: express.Response;

  protected abstract handle(): Promise<void | any>;
}

export { BaseController };
