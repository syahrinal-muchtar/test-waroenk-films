import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import CoverFilm from "src/shared/assets/images/fastX.png";
import { COLOR_WHITE, COLOR_GRAY } from "src/shared/styles/themes/colors";
import Button from "react-bootstrap/Button";
import { rupiah } from "src/shared/constants/constant";

const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  color: ${COLOR_WHITE};
  margin-bottom: 3rem;
  text-align: center;

  & > span {
    margin-bottom: 1rem;
  }
`;

const Back = styled.div`
  align-self: flex-start;
  margin-bottom: 1.5rem;

  a {
    font-family: inherit;
    font-size: 1.6rem;
    color: ${COLOR_GRAY};
    display: flex;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-family: "Star Jedi", "Open Sans", sans-serif;
  font-size: 4rem;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
`;

const Team = styled.p`
  font-family: inherit;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

interface FilmDetailHeaderType {
  id: number;
  title: string;
  director: string;
  producer: string;
  price: number;
  AddCart: (id: number, title: string, price: number) => void;
}

export default function FilmDetailHeader({
  id,
  title,
  director,
  producer,
  price,
  AddCart,
}: FilmDetailHeaderType) {
  return (
    <Header>
      <Back>
        <Link to="/">&larr; Back to list</Link>
      </Back>
      <Title>{title}</Title>
      {/* Data image not provided from SWAPI */}
      <img src={CoverFilm} alt="Cover" width={250} />
      <Team>Director : {director}</Team>
      <Team>Producer : {producer}</Team>
      <span>{rupiah(price)}</span>
      <Button
        variant="warning"
        size="lg"
        onClick={() => AddCart(id, title, price)}

      >
        Add To Cart
      </Button>
    </Header>
  );
}

FilmDetailHeader.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  producer: PropTypes.string,
};
