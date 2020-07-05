import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const ArrowBack = styled(ArrowBackIosIcon)`
  z-index: 101;
  color: #ff7d64;
`;

export const ArrowForward = styled(ArrowForwardIosIcon)`
  z-index: 101;
  color: #ff7d64;
`;

export const SlickWrapper = styled.div`
  max-width: 80%;
  padding: 30px;
  && {
    .MuiSvgIcon-root {
      fill: #ff7d64;
    }
    .slick-prev:hover {
      color: #ff7d64;
    }
  }
`;
