import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const DetailsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 65px 65px 0px 0px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  margin: 10px;
  margin-bottom: 40px;
  font-family: Montserrat;
  font-size: 12px;
  color: #4d4d4d;
`;

export const Title = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  color: #ff825a;
  text-align: center;
`;

export const Divisor = styled.div`
  background-color: #ff825a;
  width: 50px;
  height: 4px;
  margin-top: -10px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledButton = styled(Button)`
  width: 120px;
  height: 36px;
  left: 50%;
  transform: translate(-50%, -50%);
  && {
    .MuiButtonBase-root {
      margin: 20px;
    }
  }
`;
