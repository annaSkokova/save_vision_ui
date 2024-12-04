import styles from './H1.module.scss';

const H1 = ({ children }) => (
  <p className={styles.h1}>{children}</p>
)

export default H1;