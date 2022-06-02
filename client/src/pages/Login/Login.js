import styled from "styled-components";
import {mobile} from "../../responsive";
import styles from './login.module.css';

// const Wrapper = styled.div`
//   width: 25%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>SIGN IN</h1>
        <form className={styles.form}>
          <input className={styles.input} placeholder="Username..." />
          <input className={styles.input} placeholder="Password..." />
          <button className={styles.button}>LOGIN</button>
          <a href={styles.link}> DON'T REMEMBER THE PASSWORD? </a>
          <a href={styles.link}> CREATE A NEW ACCOUNT </a>
        </form>
      </div>
    </div>
  );
};

export default Login;