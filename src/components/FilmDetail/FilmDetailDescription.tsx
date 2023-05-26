import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Text } from './FilmDetail.style';

export default function FilmDetailDescription({
  description,
}: FilmDetailDescriptionProps) {
  return (
    <Wrapper>
      <Label>Description</Label>
      <Text>{description}</Text>
    </Wrapper>
  );
}

export type FilmDetailDescriptionProps = {
  description: string;
};

FilmDetailDescription.propTypes = {
  description: PropTypes.string,
};
