import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom'

test("renders NETFLIX CLONE APP link", () => {
  render(<App />);
  const linkElement = screen.getByText(/FIND YOUR MOVIE/i);
  expect(linkElement).toBeInTheDocument();
});
