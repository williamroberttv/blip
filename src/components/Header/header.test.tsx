import { render, screen } from "@testing-library/react";
import Header from ".";

test("should render blip logo", () => {
  render(<Header />);
  const logoElement = screen.getByRole("img");
  expect(logoElement).toBeInTheDocument();
});
