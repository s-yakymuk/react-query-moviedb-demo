import { render, screen } from "@/tests/utils";
import { debug } from "vitest-preview";

import MoviesList from "./MoviesList";

describe("MoviesList", () => {
  it("renders list of movies", async () => {
    render(<MoviesList />);

    const element = await screen.findByText(
      /despicable/i,
      {},
      { timeout: 4000 }
    );

    expect(element).toBeTruthy();
    debug();
  });
});
