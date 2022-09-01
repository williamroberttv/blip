import { render, screen } from "@testing-library/react";
import Footer from ".";

test("should render blip logo", () => {
  render(<Footer />);
  const footerText = screen.getByText(/BLiP Todos os direitos reservados/);
  expect(footerText).toBeInTheDocument();
});

test("should render correct year", () => {
  render(<Footer />);
  const footerText = screen.getByText(/BLiP Todos os direitos reservados/);
  const date = new Date();
  const year = date.getFullYear();
  expect(footerText).toHaveTextContent(year.toString());
});
