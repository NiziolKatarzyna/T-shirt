import styles from './OptionColor.module.scss';
import clsx from 'clsx';

const OptionColor = (props) => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>{props.currentColor}</h3>
      <ul className={styles.choices}>
        {props.colors.map((color) => (
          <li key={color}>
            <button
              type='button'
              className={clsx(
                props.prepareColorClassName(color),
                color === props.currentColor && styles.active
              )}
              onClick={(e) => props.setCurrentColor(color)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionColor;
