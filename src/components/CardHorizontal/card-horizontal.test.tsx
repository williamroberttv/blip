import { render, screen } from "@testing-library/react";
import CardHorizontal from ".";
import { IBot } from "../../utils/interfaces/bots.interfaces";

const mockedBot: IBot = {
  name: "Mocked Bot",
  type: "super",
  created: "24/05/2012",
};

jest.mock("react-router-dom");

test("should render data from bot on Card Horizontal", () => {
  render(<CardHorizontal data={mockedBot} favorite={false} />);
  const nameText = screen.getByText(/Mocked Bot/);
  expect(nameText).toBeInTheDocument();
});
