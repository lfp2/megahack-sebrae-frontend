import React from 'react';
import { BackgroundContainer, StyledButton, LogoImage } from './styles';
import { Link } from 'react-router-dom';

export default function InitialScreen() {
  return (
    <>
      <BackgroundContainer>
        <LogoImage src={require('../../res/Logo-Branca.png')} />
        <StyledButton
          variant="contained"
          color="secondary"
          component={Link}
          to={'/sabores'}
        >
          Inserir código da mesa
        </StyledButton>
      </BackgroundContainer>
    </>
  );
}
