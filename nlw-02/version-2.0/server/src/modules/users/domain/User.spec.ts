import { User } from "./User";

describe("Users", () => {
  it("should be able to create a new user", () => {
    // const user = new User({});

    const user = User.create({
      name: "User Test",
      username: "user.test",
      email: "user@test.com",
      password: "hash123",
      avatar: "http://avatar.com",
      bio: "A great bio",
      whatsapp: "555-666-77",
      // createdAt: new Date(),
      // updatedAt: new Date(),
    });

    console.log(user);

    expect(user).toBeTruthy();
  });
});
