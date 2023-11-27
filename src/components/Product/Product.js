import styles from './Product.module.scss';
import clsx from 'clsx';

import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Podsumowanie produktu:');
    console.log('Nazwa produktu:', props.title);
    console.log('Cena końcowa:', getPrice());
    console.log('sizes:', currentSize);
    console.log('colors:', currentColor);
  };

  const getPrice = () => {
    const additionalPrice = props.sizes.find(
      (size) => size.name === currentSize
    ).additionalPrice;

    const finalPrice = props.basePrice + additionalPrice;
    return finalPrice;
  };

  return (
    <article className={styles.product}>
      <ProductImage
        title={props.title}
        name={props.name}
        currentColor={currentColor}
      />

      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price:{getPrice()}</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          colors={props.colors}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          handleSubmit={handleSubmit}
        />
      </div>
    </article>
  );
};
Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;
