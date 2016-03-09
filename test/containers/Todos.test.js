import { Todos } from "containers/Todos";

describe("containers/Todos", () => {
  it("renders without an issue", () => {
    const subject = <Todos />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
