import { render, screen } from "@testing-library/react";
import Card from ".";
import { IBot } from "../../utils/interfaces/bots.interfaces";

const mockedBot: IBot = {
  name: "Mocked Bot",
  type: "super",
  created: "24/05/2012",
};

jest.mock("react-router-dom");

test("should render data from bot", () => {
  render(<Card data={mockedBot} favorite={false} />);
  const nameText = screen.getByText(/Mocked Bot/);
  const typeText = screen.getByText(/super/);
  expect(nameText).toBeInTheDocument();
  expect(typeText).toBeInTheDocument();
});
