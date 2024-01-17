import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Logo } from "./Logo";

import "@testing-library/jest-dom";

describe("<Logo/> component", () => {
  describe("Logo component as a whole ", () => {
    it("renders without crashing", () => {
      const { getByRole } = render(<Logo />);
      expect(getByRole("logo")).toBeInTheDocument();
    });
  });

  describe("<Logo/> component props", () => {
    it("accepts a prop size that can change", () => {
      const { getByRole, rerender } = render(<Logo size={40} />);

      expect(getByRole("logo")).toHaveAttribute("width", "40");

      rerender(<Logo size={80} />);

      expect(getByRole("logo")).toHaveAttribute("width", "80");
    });

    it("accepts a prop className that can change", () => {
      const { getByRole, rerender } = render(<Logo className="my-class" />);

      expect(getByRole("logo")).toHaveClass("my-class");

      rerender(<Logo className="my-other-class" />);

      expect(getByRole("logo")).toHaveClass("my-other-class");
    });

    it("accepts a prop onClick that can be clicked", async () => {
      const user = userEvent.setup();
      const mockOnClick = jest.fn();
      const { getByRole } = render(<Logo onClick={mockOnClick} />);

      await user.click(getByRole("logo"));
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
  });
});
