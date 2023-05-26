import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { COLOR_YELLOW, COLOR_RED } from "src/shared/styles/themes/colors";
import { rupiah } from "src/shared/constants/constant";

const FilmLinkStyle = styled.p`
  padding-top: 1.2rem;
  font-size: 1.4rem;
  text-transform: capitalize;
  border-top: 2px solid ${COLOR_RED};
  color: ${COLOR_YELLOW};
`;

const LabelPrice = styled.span`
  margin-left: 18rem;
`;

interface FilmLinkProps {
  id: number;
  price: number;
}
export default function FilmLink({ id, price }: FilmLinkProps) {
  return (
    <FilmLinkStyle>
      <Link to={`/film/${id}`}>More info</Link>
      <LabelPrice>{rupiah(price)}</LabelPrice>
    </FilmLinkStyle>
  );
}

FilmLink.propTypes = {
  id: PropTypes.number.isRequired,
};
