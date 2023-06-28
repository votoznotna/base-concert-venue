import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index";

test("page has correct heading and image", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", {
    name: "Welcome to Popular Concert Venue",
  });
  expect(heading).toBeInTheDocument();

  // The recent versions of @testing-library/jest-dom (e.g. 5.11.2) work out of the box, the issue for me was caused by cypress types conflicting with @types/chai used by @testing-library:

  const image = screen.getByRole("img", {
    name: "Concert goer with hands in the shape of a heart",
  });

  expect(image).toBeInTheDocument();
});
