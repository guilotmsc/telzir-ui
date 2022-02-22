import React from "react";
import { render, screen } from "@testing-library/react";
import ActionBar from "./index";

describe("Component: ActionBar", () => {
  it("should render button correctly", () => {
    render(<ActionBar />);

    const button = screen.getByTestId("confirm-button");

    expect(button.textContent).toBe("Consultar");
  });

  it("should render textfield correctly", () => {
    render(<ActionBar />);

    const textfield = screen.getByPlaceholderText("Minutos");

    expect(textfield).toBeDefined();
  });
});
