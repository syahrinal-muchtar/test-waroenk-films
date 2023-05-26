import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { COLOR_YELLOW, COLOR_RED } from "src/shared/styles/themes/colors";

const FilmLinkStyle = styled.p`
  padding-top: 1.2rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  border-top: 2px solid ${COLOR_RED};
  color: ${COLOR_YELLOW};
`;

const BtnAddCart = styled.span`
  font-size: 1.4rem;
  text-transform: capitalize;
  margin-left: 18rem;
  padding: 0;
  box-sizing: inherit;
  color: currentColor;
  text-decoration: none;
  cursor: pointer;
`;

interface FilmLinkProps {
  id: number;
  title: string;
  price: number;
  AddCart: (id: number, title: string, price: number) => void;
}
export default function FilmLink({ id, title, price, AddCart }: FilmLinkProps) {
  return (
    <FilmLinkStyle>
      <Link to={`/film/${id}`}>More info</Link>
      <BtnAddCart onClick={() => AddCart(id, title, price)}>
        + Add Cart
      </BtnAddCart>
    </FilmLinkStyle>
  );
}

FilmLink.propTypes = {
  id: PropTypes.number.isRequired,
};
