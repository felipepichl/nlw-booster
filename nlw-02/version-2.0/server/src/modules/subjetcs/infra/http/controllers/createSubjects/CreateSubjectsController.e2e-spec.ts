import request from "supertest";

import { app } from "@shared/infra/http/start/app";

describe("[E2E] - Create Subjects", () => {
  it("should be able to create a new subject", async () => {
    const response = await request(app).post("/subjects").send({
      title: "title_test",
    });

    expect(response.body).toBe(201);
  });
});
