import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { mobile } from "../../responsive";
import styles from './cart.module.css';

// const Wrapper = styled.div`
//   padding: 20px;
//   ${mobile({ padding: "10px" })}
// `;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

// const TopTexts = styled.div`
//   ${mobile({ display: "none" })}
// `;

// const Bottom = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;

// const Product = styled.div`
//   display: flex;
//   justify-content: space-between;
//   ${mobile({ flexDirection: "column" })}
// `;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
//   ${mobile({ margin: "5px 15px" })}
// `;

// const ProductPrice = styled.div`
//   font-size: 30px;
//   font-weight: 200;
//   ${mobile({ marginBottom: "20px" })}
// `;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const Cart = () => {
  return (
    <div className="container">

      <Navbar />
      <Announcement />
      <div className={styles.wrapper}>

        <h1 className={styles.title}>YOUR BAG</h1>

        <div className={styles.top}>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <div className={styles.topTexts}>
            <span className={styles.topText}>Shopping Bag(2)</span>
            <span className={styles.topText}>Your Wishlist (0)</span>
          </div>
          <TopButton type="filled"> CHECKOUT NOW </TopButton>
        </div>

        <div className={styles.bottom}>
          <div className={styles.info}>

            <div className={styles.product}>
              <div className={styles.productDetail}>
                <img className={styles.img} src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <div className={styles.details}>
                  <span className="productName">
                    <strong> Product: </strong> JESSIE THUNDER SHOES
                  </span>
                  <span className="productId">
                    <strong> ID: </strong> 93813718293
                  </span>
                  <ProductColor color="black" />
                  <span className="productSize">
                    <strong> Size: </strong> 37.5
                  </span>
                </div>
              </div>

              <div className={styles.priceDetail}>
                <div className={styles.productAmountContainer}>
                  <Add />
                  <div className={styles.productAmount}> 2 </div>
                  <Remove />
                </div>
                <div className={styles.productPrice}> $ 30 </div>
              </div>
            </div>

            <hr className={styles.hr} />

            <div className={styles.product}>
              <div className={styles.productDetail}>
                <img className={styles.img} src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                <div className={styles.details}>
                  <span className="productName">
                    <strong> Product: </strong> HAKURA T-SHIRT
                  </span>
                  <span className="productId">
                    <strong> ID: </strong> 93813718293
                  </span>
                  <ProductColor color="gray" />
                  <span className="productSize">
                    <strong> Size: </strong> M
                  </span>
                </div>
              </div>

              <div className={styles.priceDetail}>
                <div className={styles.productAmountContainer}>
                  <Add />
                  <div className={styles.productAmount}> 1 </div>
                  <Remove />
                </div>
                <div className={styles.productPrice}> $ 20 </div>
              </div>
            </div>

          </div>

          <div className={styles.summary}>
            <h1 className={styles.summaryTitle}> ORDER SUMMARY </h1>

            <SummaryItem>
              <span className="summaryItemText"> Subtotal </span>
              <span className="summaryItemPrice"> $ 80 </span>
            </SummaryItem>

            <SummaryItem>
              <span className="summaryItemText"> Estimated Shipping </span>
              <span className="summaryItemPrice"> $ 5.90 </span>
            </SummaryItem>

            <SummaryItem>
              <span className="summaryItemText"> Shipping Discount </span>
              <span className="summaryItemPrice"> $ -5.90 </span>
            </SummaryItem>

            <SummaryItem type="total">
              <span className="summaryItemText"> Total </span>
              <span className="summaryItemPrice"> $ 80 </span>
            </SummaryItem>

            <button className={styles.button}> CHECKOUT NOW </button>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Cart;