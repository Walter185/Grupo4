import ProductCard from '../components/Card/ProductCard';
import styles from './../pages/ShopPage.module.css';
import { getProducts } from './api/products/index';

const ShopPage = ({ products }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todos los resultados</h1>
      <div className={styles.cards}>
        {products.map((comida) => (
          <ProductCard key={comida.id} comida={comida} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}
