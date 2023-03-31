import { Class } from "./Class";

describe("Create Class", () => {
  it("should be able to create a new class", () => {
    const classes = Class.create({
      props: {
        coast: 100,
        user_id: "user_id",
        subject_id: "subject_id",
      },
    });

    expect(classes).toBeTruthy();
  });
});
