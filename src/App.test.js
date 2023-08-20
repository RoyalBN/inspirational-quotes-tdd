import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should renders correctly", () => {
    render(<App />);
    const homeTitle = screen.getByText("Inspirational Quotes");
    expect(homeTitle).toBeInTheDocument();
  });

  it("should renders sidebar", () => {
    render(<App />);
    const sidebar = screen.queryByRole("aside");
    expect(sidebar).toBeInTheDocument();
  });

  it("should display quotes blocs", () => {
    render(<App />);
    const quotesBlock = screen.getByPlaceholderText("Find your inspiration");
    expect(quotesBlock).toBeInTheDocument();
  });
});
