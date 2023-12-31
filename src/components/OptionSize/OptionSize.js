import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = (props) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>{props.currentSize.name}</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size) => (
          <li key={size.name}>
            <button
              type='button'
              className={clsx({
                [styles.active]: size.name === props.currentSize.name,
              })}
              onClick={(e) => props.setCurrentSize(size)}
            >
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default OptionSize;
