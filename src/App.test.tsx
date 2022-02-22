import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Bem vindo a Telzir/i);
  expect(linkElement).toBeInTheDocument();
});
