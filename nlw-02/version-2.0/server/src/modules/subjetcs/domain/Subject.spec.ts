import { Subject } from "./Subject";

describe("Create Subject", () => {
  it("should be able to create a new subject", () => {
    const subject = Subject.create({
      props: {
        title: "User Test",
      },
    });

    expect(subject).toBeTruthy();
  });
});
