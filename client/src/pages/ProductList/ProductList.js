import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer"
import styles from './productlist.module.css';
import { mobile } from "../../responsive";

// const Filter = styled.div`
//   margin: 20px;
//   ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
// `;

// const FilterText = styled.span`
//   font-size: 20px;
//   font-weight: 600;
//   margin-right: 20px;
//   ${mobile({ marginRight: "0px" })}
// `;

// const Select = styled.select`
//   padding: 10px;
//   margin-right: 20px;
//   ${mobile({ margin: "10px 0px" })}
// `;

const ProductList = () => {
  return (
    <div className="container">
      <Navbar />
      <Announcement />
      <h1 className={styles.title}> Dresses </h1>
      <div className={styles.filterContainer}>
        <div className={styles.filter}>
          <span className={styles.filterText}> Filter Products: </span>
          <select className={styles.select}>
            <option disabled selected> Color </option>
            <option> White </option>
            <option> Black </option>
            <option> Red </option>
            <option> Blue </option>
            <option> Yellow </option>
            <option> Green </option>
          </select>
          &nbsp;
          <select className={styles.select}>
            <option disabled selected> Size </option>
            <option> XS </option>
            <option> S </option>
            <option> M </option>
            <option> L </option>
            <option> XL </option>
          </select>
        </div>
        <div className={styles.filter}>
          <span className={styles.filterText}> Sort Products: </span>
          <select className={styles.select}>
            <option selected> Newest </option>
            <option> Low to High </option>
            <option> High to Low </option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;