import { Provider } from "urql";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { never } from "wonka";
import { SearchBar } from "../src/components/SearchBar";

const mockClient = {
  executeQuery: jest.fn(() => never),
  executeMutation: jest.fn(() => never),
  executeSubscription: jest.fn(() => never),
};

describe("search bar", () => {
  it("should select an option", () => {
    const { getByText, getByTestId } = render(
      <Provider value={mockClient}>
        <SearchBar />
      </Provider>
    );
  });
});

/* const server = setupServer(
  rest.get("/greeting", (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays greeting", async () => {
  render(<Fetch url="/greeting" />);

  fireEvent.click(screen.getByText("Load Greeting"));

  await waitFor(() => screen.getByRole("heading"));

  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toHaveAttribute("disabled");
});

test("handles server error", async () => {
  server.use(
    rest.get("/greeting", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Fetch url="/greeting" />);

  fireEvent.click(screen.getByText("Load Greeting"));

  await waitFor(() => screen.getByRole("alert"));

  expect(screen.getByRole("alert")).toHaveTextContent("Oops, failed to fetch!");
  expect(screen.getByRole("button")).not.toHaveAttribute("disabled");
}); */
