import React from 'react';
import { useParams } from 'react-router-dom';
import TabMenu from '../../components/TabMenu';
import { DetailsImage, Description } from './styles';

export default function PizzaDetails() {
  const { pizzaId } = useParams();
  return (
    <>
      <TabMenu type="Pizza" />
      <DetailsImage src="https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-1.jpg" />
      <Description variant="body1">
        Pizza com borda. Molho queijo catupiry, queijo chedar, queijo parmesão,
        queijo mussarela.
      </Description>
      <h3>Requested topic ID: {pizzaId} </h3>
    </>
  );
}
