import { render, screen } from "@/tests/utils";
import { debug } from "vitest-preview";
import userEvent from "@testing-library/user-event";

import MoviesList from "./MoviesList";

describe("MoviesList", () => {
  it("renders favorite movies correctly", async () => {
    const user = userEvent.setup();

    render(<MoviesList />);

    const unfavoriteButton = await screen.findByRole(
      "button",
      { name: /unmark inside out 2 as favorite/i },
      { timeout: 4000 }
    );

    expect(unfavoriteButton).toBeTruthy();

    await user.click(unfavoriteButton);

    const favoriteButton = await screen.findByRole(
      "button",
      { name: /mark inside out 2 as favorite/i },
      { timeout: 4000 }
    );

    expect(favoriteButton).toBeTruthy();

    debug();
  });
});
