import React from 'react';
import { StyledCard, StyledCardContent } from './styles';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Link, useRouteMatch } from 'react-router-dom';

export default function ProductCard({ title, imageUrl, id }) {
  const { url } = useRouteMatch();
  return (
    <StyledCard>
      <CardActionArea component={Link} to={`${url}/${id}`}>
        <CardMedia>
          <img
            src={imageUrl}
            alt={title}
            style={{ objectFit: 'cover', width: '100%' }}
          />
        </CardMedia>
        <StyledCardContent>
          <Typography variant="button" display="block">
            {title}
          </Typography>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
}
