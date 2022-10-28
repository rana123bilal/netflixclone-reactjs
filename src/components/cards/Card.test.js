import { render, screen, cleanup } from "@testing-library/react";
import Card from "./Card";

test("should render card", () => {
    render(<Card />);
    const cardElement = screen.getByTestId("card-1");
    expect(cardElement).toBeInTheDocument();
  });
