import reducer from "reducers/todos";

describe("reducers/todos", () => {
  it("returns the initial state", () => {
    expect(
      reducer(undefined, {})
    ).to.deep.equal(["First Item", "Second Item"]);
  });
});
