import { hash } from "bcryptjs";
import request from "supertest";

import { app } from "@shared/infra/http/start/app";
import { prisma } from "@shared/infra/prisma";

describe("[E2E] - List all Classes", () => {
  beforeEach(async () => {
    const passwordHash = await hash("hash123", 8);

    const user = await prisma.user.create({
      data: {
        name: "Teste",
        username: "felipepichl",
        email: "test@test.com",
        password: passwordHash,
        avatar: "https://example.com/user_test.png",
        bio: "A great user test",
        whatsapp: "55999998888",
      },
    });

    const subject = await prisma.subject.create({
      data: {
        title: "subject_test",
      },
    });

    await prisma.class.create({
      data: {
        cost: 100,
        fk_user_id: user.id,
        fk_subject_id: subject.id,
      },
    });
  });

  it("should be able to list all classes", async () => {
    const responseToken = await request(app).post("/sessions").send({
      email: "test@test.com",
      password: "hash123",
    });

    const { token } = responseToken.body;

    const response = await request(app)
      .get("/classes")
      .set({
        Authorization: `Bearer ${token}`,
      });

    console.log(response.body);

    expect(response.body.error).toBeFalsy();
    expect(response.status).toBe(200);
  });
});
