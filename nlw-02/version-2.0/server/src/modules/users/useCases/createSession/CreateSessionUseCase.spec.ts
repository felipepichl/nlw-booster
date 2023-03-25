import { User } from "@modules/users/domain/User";

import { AppError } from "@shared/errors/AppError";

import { HashProviderInMemory } from "../../provider/HashProvider/in-memory/HashProviderInMemory";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateSessionUseCase } from "./CreateSessionUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let hashProviderInMemory: HashProviderInMemory;
let createSessionUseCase: CreateSessionUseCase;
let user: User;

describe("Create Session", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProviderInMemory = new HashProviderInMemory();

    createSessionUseCase = new CreateSessionUseCase(
      usersRepositoryInMemory,
      hashProviderInMemory
    );

    user = User.create({
      props: {
        name: "User Test",
        username: "user_test",
        email: "test@test.com",
        password: "hash123",
        avatar: "https://example.com/user_test.png",
        bio: "A great bio",
        whatsapp: "55999998888",
      },
    });
  });

  it("should be able to create a new session", async () => {
    await usersRepositoryInMemory.create(user);

    const response = await createSessionUseCase.execute({
      email: "test@test.com",
      password: "hash123",
    });

    expect(response).toHaveProperty("token");
    expect(response.user).toEqual(user);
  });

  it("should not be able to create a new session with wrong email", async () => {
    await expect(
      createSessionUseCase.execute({
        email: "worn_email@wrong.com",
        password: "hash123",
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new session with wrong password", async () => {
    await expect(
      createSessionUseCase.execute({
        email: "test@test.com",
        password: "wrong_password",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
