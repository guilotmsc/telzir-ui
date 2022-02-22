import React from "react";
import { render, screen } from "@testing-library/react";
import PlanCard from "./index";
import { data } from "./mock";

describe("Component: PlanCard", () => {
  it("should render correctly", () => {
    render(<PlanCard data={data} />);

    const text = screen.getByText(data[0].name);

    expect(text).toBeInTheDocument();
  });
});
