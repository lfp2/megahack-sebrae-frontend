import React, { useState } from 'react';
import Carrousel from '../../components/Carrousel';
import TabMenu from '../../components/TabMenu';
import { useQuery } from '@apollo/react-hooks';
import { BoxLoading } from 'react-loadingg';
import gql from 'graphql-tag';
import { Proximas, Prontas, Forno } from './styles';

export default function PizzaToppings({ setShowNavBar }) {
  const [value, setValue] = useState(0);

  const { loading, error, data } = useQuery(gql`
    {
      pizzas {
        name
        urlImage
        id
        status
      }
    }
  `);

  if (loading) return <BoxLoading color="#ff7d64" />;
  if (error) return <p>Error :(</p>;

  setShowNavBar(true);

  return (
    <div className="PizzaToppings">
      <TabMenu type="Pizza" value={value} setValue={setValue} />
      <Prontas />
      <Carrousel data={data.pizzas.filter((item) => item.status === 'READY')} />
      <Forno />
      <Carrousel
        data={data.pizzas.filter((item) => item.status === 'COOKING')}
      />
      <Proximas />
      <Carrousel data={data.pizzas.filter((item) => item.status === 'NEXT')} />
    </div>
  );
}
