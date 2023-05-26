import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import FilmHeader from "./FilmHeader";
import FilmDescription from "./FilmDescription";
import FilmLink from "./FilmLink";

import { FilmDataType } from "src/shared/helpers/api";

import { Col } from "src/shared/styles/base/grid";

import { COLOR_GREEN, COLOR_WHITE } from "src/shared/styles/themes/colors";
import {
  BOX_SHADOW_PRIMARY,
  BOX_SHADOW_PRIMARY_HOVER,
} from "src/shared/styles/themes/box-shadow";

const FilmContent = styled.div`
  display: block;
  background-color: ${COLOR_GREEN};
  padding: 2rem;
  color: ${COLOR_WHITE};
  transform: perspective(1px) translateZ(0);
  box-shadow: ${BOX_SHADOW_PRIMARY};
  transition: all 0.3s;
  overflow: hidden;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: ${BOX_SHADOW_PRIMARY_HOVER};
  }
`;

interface FilmItemType {
  id: number;
  title: string;
  description: string;
  releaseDate: string;
  price: number;
}

export default function FilmItem({
  id,
  title,
  description,
  releaseDate,
  price,
}: FilmItemType) {
  return (
    <Col>
      <FilmContent>
        <FilmHeader id={id} title={title} releaseDate={releaseDate} />
        <FilmDescription description={description} />
        <FilmLink id={id} price={price} />
      </FilmContent>
    </Col>
  );
}

FilmItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
