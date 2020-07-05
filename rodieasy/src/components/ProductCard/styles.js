import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export const StyledCard = styled(Card)`
  border-radius: 20px;
  margin: 10px;
`;

export const StyledCardContent = styled(CardContent)`
  max-width: 150px;
  height: 50px;
`;

export const TextCard = styled.text`
  font-size: 14px;
  font-family: Montserrat, sans-serif;
  color: #585858;
  font-weight: 600;
`;
