import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { formatDate } from "src/shared/helpers/format-date";

import FilmItem from "./FilmItem";
import { emptyFunction } from "src/shared/constants/constant";

const mockedFormatDate = formatDate as jest.Mock<string>;

jest.mock("src/shared/helpers/format-date");

describe("<FilmItem />", () => {
  afterEach(() => {
    mockedFormatDate.mockReset();
  });

  test("Should render properly", () => {
    mockedFormatDate.mockImplementation(() => "October 09, 2010");
    render(
      <Router>
        <FilmItem
          id={1}
          title="Film title"
          description="Film description"
          releaseDate="2010-10-09"
          price={10000}
        />
      </Router>
    );

    const titleElement = screen.getByText(/film title/i);
    const dateElement = screen.getByText(/october/i);
    const descriptionElement = screen.getByText(/film description.../i);
    const linkElement = screen.getByText(/more info/i);

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveAttribute("href", "/film/1");
    expect(dateElement).toBeInTheDocument();
    expect(mockedFormatDate).toHaveBeenCalledTimes(1);
    expect(mockedFormatDate).toHaveBeenCalledWith("2010-10-09");
    expect(descriptionElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/film/1");
  });
});
