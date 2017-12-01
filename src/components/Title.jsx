import React from 'react';
import { createComponent } from 'react-fela'

const Title = () => {
  return (
    <TitleContainer>
      <text>Football Videos</text>
    </TitleContainer>
  );
};

const TitleContainer = createComponent(() => ({
  textAlign: 'center',
  background: '#018E0E',
  color: 'white',
  padding: '20px',
  fontFamily: 'Fira Sans, sans-serif',
  fontSize: '40px',
}));

export default Title;
