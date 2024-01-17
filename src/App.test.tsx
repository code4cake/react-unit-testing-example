import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

describe("<App/> component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<App />);
    expect(getByText("Vite + React")).toBeInTheDocument();
  });
});
