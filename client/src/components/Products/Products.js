import { popularProducts } from "../../data";
import Product from "../Product/Product";
import styles from './products.module.css';

const Products = () => {
  return (
    <div className={styles.container}>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;