import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      By <span className={styles.brand}>PediloYa</span> &copy;{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
