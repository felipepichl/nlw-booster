import { hash, compare } from "bcryptjs";

import { IHashProvider } from "../models/IHashProvider";

class BCryptHashProvider implements IHashProvider {
  async geneteHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export { BCryptHashProvider };
