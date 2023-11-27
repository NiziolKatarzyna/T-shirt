import styles from './Product.module.scss';
import clsx from 'clsx';

import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Podsumowanie produktu:');
    console.log('Nazwa produktu:', props.title);
    console.log('Cena końcowa:', Price);
    console.log('sizes:', currentSize);
    console.log('colors:', currentColor);
  };

  const Price = useMemo(() => {
    const additionalPrice = props.sizes.find(
      (size) => size.name === currentSize
    ).additionalPrice;
    return props.basePrice + additionalPrice;
  }, [props.basePrice, props.sizes, currentSize]);

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
          <span className={styles.price}>Price:{Price}</span>
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
