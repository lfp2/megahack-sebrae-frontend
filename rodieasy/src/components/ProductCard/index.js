import React from 'react';
import { StyledCard, StyledCardContent, TextCard } from './styles';
import CardMedia from '@material-ui/core/CardMedia';
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
            style={{ objectFit: 'cover', width: '100%', height: '100px' }}
          />
        </CardMedia>
        <StyledCardContent>
          <TextCard>{title}</TextCard>
        </StyledCardContent>
      </CardActionArea>
    </StyledCard>
  );
}
