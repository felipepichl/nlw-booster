interface IRequest {
  code: string;
}

class AuthenticateUserServices {
  public async execute({ code }: IRequest): Promise<void> {}
}

export { AuthenticateUserServices };
