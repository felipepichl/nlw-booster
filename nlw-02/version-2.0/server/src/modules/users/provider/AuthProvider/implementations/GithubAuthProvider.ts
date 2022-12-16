import { IAuthDTO } from "../dtos/IAuthDTO";
import { IAuthProvider } from "../models/IAuthProvider";
import { api } from "../services/api";

class GithubAuthProvider implements IAuthProvider {
  async auth(login: string): Promise<IAuthDTO | undefined> {
    const response = await api.get(`/${login}`);

    return response.data;
  }
}

export { GithubAuthProvider };
