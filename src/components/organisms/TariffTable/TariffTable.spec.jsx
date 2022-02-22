import React from "react";
import { render, screen } from "@testing-library/react";
import TariffTable from "./index";
import { data } from "./mock";

describe("Component: TariffTable", () => {
  it("should render correctly", () => {
    render(<TariffTable data={data} />);

    expect(screen.queryAllByRole("row")).toHaveLength(3);
  });
});
