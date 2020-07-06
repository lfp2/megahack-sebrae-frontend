import React, { useState } from 'react';
import TabMenu from '../../components/TabMenu';
import ProductCard from '../../components/ProductCard';
import Grid from '@material-ui/core/Grid';

export default function Drinks({ setShowNavBar }) {
  const [value, setValue] = useState(0);

  setShowNavBar(true);

  return (
    <>
      <TabMenu type="Bebidas" value={value} setValue={setValue} />
      <Grid container spacing={2}>
        <Grid item xs>
          <ProductCard
            title="Coca-cola"
            imageUrl="https://drogariasp.vteximg.com.br/arquivos/ids/283705-1000-1000/coca-cola-220ml-spal-Drogaria-SP-641707.jpg?v=636519743001570000"
            id="1"
          />
        </Grid>
        <Grid item xs>
          <ProductCard
            title="Coca-cola"
            imageUrl="https://drogariasp.vteximg.com.br/arquivos/ids/283705-1000-1000/coca-cola-220ml-spal-Drogaria-SP-641707.jpg?v=636519743001570000"
            id="1"
          />
        </Grid>
        <Grid item xs>
          <ProductCard
            title="Coca-cola"
            imageUrl="https://drogariasp.vteximg.com.br/arquivos/ids/283705-1000-1000/coca-cola-220ml-spal-Drogaria-SP-641707.jpg?v=636519743001570000"
            id="1"
          />
        </Grid>
        <Grid item xs>
          <ProductCard
            title="Coca-cola"
            imageUrl="https://drogariasp.vteximg.com.br/arquivos/ids/283705-1000-1000/coca-cola-220ml-spal-Drogaria-SP-641707.jpg?v=636519743001570000"
            id="1"
          />
        </Grid>
        <Grid item xs>
          <ProductCard
            title="Coca-cola"
            imageUrl="https://drogariasp.vteximg.com.br/arquivos/ids/283705-1000-1000/coca-cola-220ml-spal-Drogaria-SP-641707.jpg?v=636519743001570000"
            id="1"
          />
        </Grid>
      </Grid>
    </>
  );
}
