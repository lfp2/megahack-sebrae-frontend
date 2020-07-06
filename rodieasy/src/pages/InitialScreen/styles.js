import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const StyledButton = styled(Button)`
  width: 300px;
  height: 36px;
  left: 50%;
  transform: translate(-50%, +50%);
  font-family: Montserrat;
  font-weight: bold;
  z-index: 101;
  && {
    .MuiButton-root {
      margin: 20px;
    }
  }
`;

export const LogoImage = styled.img`
  height: 135px;
  width: 100%;
  object-fit: contain;
  margin-top: 150px;
  margin-bottom: 40px;
`;

export const BackgroundContainer = styled.div`
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ff825a;
`;
