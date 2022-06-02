import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import styles from './navbar.module.css';

const Navbar = () => {
  return (

    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.left}>
          <div className={styles.language}> EN </div>
          <div className={styles.searchContainer}>
            <input className={styles.input} placeholder='Search...'/>
            <button className={styles.button}>
              <Search style={{color: "gray" , fontSize:"20"}}/>
            </button>
          </div>
        </div>

        <div className={styles.center}> <h1> Order-Order </h1> </div>

        <div className={styles.right}>
          <div className={styles.menuItem}> REGISTER </div>
          <div className={styles.menuItem}> SIGN IN </div>
          <div className={styles.menuItem}>
            <Badge badgeContent={4} color="primary">
               <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar