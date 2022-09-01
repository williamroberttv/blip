import { render, screen } from "@testing-library/react";
import AddButton from ".";

test("should load the add button", () => {
  render(<AddButton />);
  const nameText = screen.getByText("+");
  expect(nameText).toBeInTheDocument();
});
