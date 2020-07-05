import React from 'react';
import Slider from 'react-slick';
import { ArrowBack, ArrowForward, SlickWrapper } from './styles';
import ProductCard from '../ProductCard';

function SamplePrevArrow(props) {
  const { onClick, className } = props;
  return <ArrowBack onClick={onClick} className={className} />;
}

function SampleFowardArrow(props) {
  const { onClick, className } = props;
  return <ArrowForward onClick={onClick} className={className} />;
}

export default function Carrousel({ data }) {
  const carrouselSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleFowardArrow />,
  };
  return (
    <>
      <SlickWrapper>
        <Slider {...carrouselSettings}>
          {data &&
            data.map(({ name, urlImage, id }) => (
              <ProductCard title={name} imageUrl={urlImage} id={id} key={id} />
            ))}
          <ProductCard
            title="4 queijos"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-1.jpg"
            id="4queijos"
          />
          <ProductCard
            title="Frango com catupiry"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-1.jpg"
            id="frangoComCatupiry"
          />
          <ProductCard
            title="4 queijos"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-1.jpg"
          />
          <ProductCard
            title="4 queijos"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-1.jpg"
          />
          <ProductCard
            title="4 queijos"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-1.jpg"
          />
          <ProductCard
            title="4 queijos"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-1.jpg"
          />
          <ProductCard
            title="4 queijos"
            imageUrl="https://www.receiteria.com.br/wp-content/uploads/receitas-de-pizza-quatro-queijos-1.jpg"
          />
        </Slider>
      </SlickWrapper>
    </>
  );
}
