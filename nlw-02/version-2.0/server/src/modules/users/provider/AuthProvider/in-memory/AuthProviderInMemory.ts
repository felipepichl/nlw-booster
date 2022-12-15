import { IAuthDTO } from "../dtos/IAuthDTO";
import { IAuthProvider } from "../models/IAuthProvider";

class AuthProviderInMemory implements IAuthProvider {
  users: IAuthDTO[] = [];

  async auth(login: string): Promise<IAuthDTO> {
    const userInMemory = {
      name: "User Test",
      login: "login_test",
      bio: "A great user test",
      avatar_url: "https://example.com/user_test.png",
    };

    this.users.push(userInMemory);

    return this.users.find((user) => user.login === login);
  }
}

export { AuthProviderInMemory };
