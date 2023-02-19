import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the app landing", () => {
  render(<App />);
  const headerElement = screen.getByTestId("app-heading");
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent("Album layout");
});
