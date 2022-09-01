import { render, screen } from "@testing-library/react";
import CardDetails from ".";
import { ICardDetailsChildren } from "../../utils/interfaces/card-details.interface";

const mockData: ICardDetailsChildren = {
  description: "Usuários",
  value: 200,
  width: "30%",
  margin: true,
  icon: ".img",
};

test("should render data details", () => {
  render(<CardDetails {...mockData} />);
  const descriptionText = screen.getByText(/Usuários/);
  const value = screen.getByText(/200/);
  expect(descriptionText).toBeInTheDocument();
  expect(value).toBeInTheDocument();
});
