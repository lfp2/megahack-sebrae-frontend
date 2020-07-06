import React from 'react';
import { useParams } from 'react-router-dom';
import TabMenu from '../../components/TabMenu';
import {
  DetailsImage,
  Description,
  Divisor,
  Title,
  StyledButton,
} from './styles';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { BoxLoading } from 'react-loadingg';

export default function PizzaDetails({ setShowNavBar }) {
  const { pizzaId } = useParams();

  const { loading, error, data } = useQuery(gql`
    {
        pizza(id: ${pizzaId}) {
          name
          description
          urlImage
        }
    }
  `);

  if (loading) {
    setShowNavBar(false);
    return <BoxLoading color="#ff7d64" />;
  }
  if (error) return <p>Error :(</p>;

  setShowNavBar(true);

  return (
    <>
      <TabMenu type="Pizza" />
      <DetailsImage src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-1.jpg" />
      <Title>{data.pizza.name}</Title>
      <Divisor />
      <Description variant="body1">{data.pizza.description}</Description>
      <StyledButton variant="contained" color="primary">
        Pedir
      </StyledButton>
    </>
  );
}
