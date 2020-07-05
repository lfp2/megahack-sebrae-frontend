import React from 'react';
import Carrousel from '../../components/Carrousel';
import TabMenu from '../../components/TabMenu';

export default function PizzaToppings() {
  return (
    <div className="PizzaToppings">
      <TabMenu type="Pizza" />
      <Carrousel />
      <Carrousel />
      <Carrousel />
    </div>
  );
}
