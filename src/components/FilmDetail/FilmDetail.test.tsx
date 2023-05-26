import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import FilmDetail from "./FilmDetail";
import useFilmDetail from "src/shared/hooks/useFilmDetail";

import { MOVIE_DETAIL_MOCK_DATA } from "src/shared/constants/mock-data.constant";
import { emptyFunction } from "src/shared/constants/constant";

jest.mock("src/shared/hooks/useFilmDetail");

const mockedUseFilmDetail = useFilmDetail as jest.Mock<any>;

describe("<FilmDetail />", () => {
  afterEach(() => {
    mockedUseFilmDetail.mockReset();
  });

  test("Should render Loader component", () => {
    mockedUseFilmDetail.mockImplementation(() => {
      return {
        loading: true,
      };
    });
    const { getByTestId } = render(
      <Router>
        <FilmDetail AddCart={emptyFunction} />
      </Router>
    );

    expect(getByTestId(/loader/i)).toBeInTheDocument();
  });

  test("Should render Film Detail properly", () => {
    mockedUseFilmDetail.mockImplementation(() => {
      return {
        loading: false,
        filmDetail: {
          ...MOVIE_DETAIL_MOCK_DATA,
        },
      };
    });
    const { getByText } = render(
      <Router>
        <FilmDetail AddCart={emptyFunction} />
      </Router>
    );

    expect(getByText(/something title/i)).toBeInTheDocument();
    expect(getByText(/Jonny Sins/i)).toBeInTheDocument();
    expect(getByText(/Jonny Stark/i)).toBeInTheDocument();
    expect(getByText(/lorem/i)).toBeInTheDocument();
    expect(getByText(/yoda/i)).toBeInTheDocument();
    expect(getByText(/ea-45/i)).toBeInTheDocument();
    expect(getByText(/cat/i)).toBeInTheDocument();
    expect(
      getByText(/we don't have any starships data yet!/i)
    ).toBeInTheDocument();
    expect(getByText(/fly/i)).toBeInTheDocument();
  });
});
