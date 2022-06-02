import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import { mobile } from "../../responsive";
import styles from './product.module.css';

// const Wrapper = styled.div`
//   padding: 50px;
//   display: flex;
//   ${mobile({ padding: "10px", flexDirection:"column" })}
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 90vh;
//   object-fit: cover;
//   ${mobile({ height: "40vh" })}
// `;

// const InfoContainer = styled.div`
//   flex: 1;
//   padding: 0px 50px;
//   ${mobile({ padding: "10px" })}
// `;

// const FilterContainer = styled.div`
//   width: 50%;
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

// const AddContainer = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ width: "100%" })}
// `;

const Product = () => {
  return (
    <div className="container">
      <Navbar />
      <Announcement />
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}> Denim Jumpsuit </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className={styles.price}> $ 20 </span>
          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <span className={styles.filterTitle}> Color </span>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </div>
            <div className={styles.filter}>
              <span className={styles.filterTitle}> Size </span>
              <select className={styles.filterSize}>
                <option className="filterSizeOption"> XS </option>
                <option className="filterSizeOption"> S </option>
                <option className="filterSizeOption"> M </option>
                <option className="filterSizeOption"> L </option>
                <option className="filterSizeOption"> XL </option>
              </select>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              {/* <Remove /> */}
              <i class="fa-solid fa-minus"></i>
              <span className={styles.amount}> 1 </span>
              {/* <Add /> */}
              <i class="fa-solid fa-plus"></i>
            </div>
            <button className={styles.button}> ADD TO CART </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;