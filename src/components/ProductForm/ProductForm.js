import styles from './ProductForm.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
const ProductForm = (props) => {
  return (
    <form>
      <OptionSize
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
      />
      <OptionColor
        colors={props.colors}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
        prepareColorClassName={props.prepareColorClassName}
      />

      <Button className={styles.button} type='button'>
        <span className='fa fa-shopping-cart' onClick={props.handleSubmit} />
      </Button>
    </form>
  );
};

export default ProductForm;
