import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { COLOR_WHITE } from 'src/shared/styles/themes/colors';

const FilmDescriptionStyle = styled.p`
  font-family: inherit;
  color: ${COLOR_WHITE};
  overflow-wrap: break-word;
  white-space: normal;
  margin-bottom: 2.5rem;
`;

export default function FilmDescription({
  description,
}: FilmDescriptionProps) {
  return (
    <FilmDescriptionStyle>
      {description.substring(0, 260)}...
    </FilmDescriptionStyle>
  );
}

export type FilmDescriptionProps = {
  description: string;
};

FilmDescription.propTypes = {
  description: PropTypes.string.isRequired,
};
