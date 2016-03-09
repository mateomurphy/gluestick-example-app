import TodoList from "components/TodoList";

describe("components/TodoList", () => {
  it("renders without an issue", () => {
    const subject = <TodoList />;
    const renderedSubject = TestUtils.renderIntoDocument(subject);
    expect(renderedSubject).to.not.equal(undefined);
  });
});
