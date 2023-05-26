import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import FilmList from "./FilmList";

import useFilmList from "src/shared/hooks/useFilmList";
import { emptyFunction } from "src/shared/constants/constant";

jest.mock("src/shared/hooks/useFilmList");

const mockedUseFilmList = useFilmList as jest.Mock;

describe("<FilmList />", () => {
  afterEach(() => {
    mockedUseFilmList.mockReset();
  });

  test("Should render Loader Component on loading", () => {
    mockedUseFilmList.mockImplementation(() => {
      return {
        loading: true,
      };
    });

    render(
      <Router>
        <FilmList />
      </Router>
    );

    const loader = screen.getByTestId(/loader/i);
    expect(loader).toBeInTheDocument();
  });

  test("Should render Film List properly", () => {
    mockedUseFilmList.mockImplementation(() => {
      return {
        loading: false,
        filmList: [
          {
            id: 1,
            description: "Film Description One",
            releaseDate: "2010-05-20",
            title: "Film Title One",
            price: 10000,
          },
          {
            id: 2,
            description: "Film Description Two",
            releaseDate: "1996-03-09",
            title: "Film Title Two",
            price: 10000,
          },
          {
            id: 3,
            description: "Film Description Three",
            releaseDate: "2015-12-20",
            title: "Film Title Three",
            price: 10000,
          },
        ],
      };
    });

    render(
      <Router>
        <FilmList />
      </Router>
    );

    const titleElement = screen.getAllByText(/film title/i);
    const descriptionElement = screen.getAllByText(/film description/i);
    const linkElement = screen.getAllByText(/more info/i);
    const yearFilmOneElement = screen.getByText(/2010/i);
    const yearFilmTwoElement = screen.getByText(/1996/i);
    const yearFilmThreeElement = screen.getByText(/2015/i);

    expect(titleElement).toHaveLength(3);
    expect(descriptionElement).toHaveLength(3);
    expect(linkElement).toHaveLength(3);
    expect(yearFilmOneElement).toBeInTheDocument();
    expect(yearFilmTwoElement).toBeInTheDocument();
    expect(yearFilmThreeElement).toBeInTheDocument();
  });
});
