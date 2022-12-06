import { AppError } from "@shared/errors/AppError";

import { HashProviderInMemory } from "../../provider/HashProvider/in-memory/HashProviderInMemory";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateSessionUseCase } from "./CreateSessionUseCase";

let usersRepositoryInMemory: UsersRepositoryInMemory;
let hashProviderInMemory: HashProviderInMemory;
let createSessionUseCase: CreateSessionUseCase;

describe("Create Session", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    hashProviderInMemory = new HashProviderInMemory();

    createSessionUseCase = new CreateSessionUseCase(
      usersRepositoryInMemory,
      hashProviderInMemory
    );
  });

  it("should be able to create a new session", async () => {
    const user = await usersRepositoryInMemory.create({
      name: "User Test",
      username: "user_test",
      email: "test@test.com",
      password: "hash123",
      avatar: "https://example.com/user_test.png",
      bio: "A great bio",
      whatsapp: "55999998888",
    });

    const response = await createSessionUseCase.execute({
      email: "test@test.com",
      password: "hash123",
    });

    expect(response).toHaveProperty("token");
    expect(response.user).toEqual(user);
  });

  it("should not be able to create a new session with wrong email", async () => {
    expect(async () => {
      await usersRepositoryInMemory.create({
        name: "User Test",
        username: "user_test",
        email: "test@test.com",
        password: "hash123",
        avatar: "https://example.com/user_test.png",
        bio: "A great bio",
        whatsapp: "55999998888",
      });

      await createSessionUseCase.execute({
        email: "worn_email@wrong.com",
        password: "hash123",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new session with wrong password", async () => {
    expect(async () => {
      await usersRepositoryInMemory.create({
        name: "User Test",
        username: "user_test",
        email: "test@test.com",
        password: "hash123",
        avatar: "https://example.com/user_test.png",
        bio: "A great bio",
        whatsapp: "55999998888",
      });

      await createSessionUseCase.execute({
        email: "test@test.com",
        password: "wrong_password",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
