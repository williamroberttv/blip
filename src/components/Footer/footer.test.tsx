import { render, screen } from "@testing-library/react";
import Footer from ".";

test("should render blip logo", () => {
  render(<Footer />);
  const footerText = screen.getByText(/BLiP Todos os direitos reservados/);
  expect(footerText).toBeInTheDocument();
});
