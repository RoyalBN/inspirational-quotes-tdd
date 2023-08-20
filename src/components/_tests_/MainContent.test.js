import { render, screen } from "@testing-library/react";
import "../layout/MainContent";
import { MainContent } from "../layout/MainContent";

describe("MainContent", () => {
  it("should renders correctly", () => {
    render(<MainContent />);
    const sidebarElement = screen.getByRole("heading", {
      name: "Home",
    });
    const searchInput = screen.getByPlaceholderText("Find your inspiration");
    expect(sidebarElement).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });
});
