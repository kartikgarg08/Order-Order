import styles from './categoryItem.module.css';

const CategoryItem = ({item}) => {
  return (
    <div className={styles.container}>
        <img src={item.img} className={styles.img}/>
        <div className={styles.info}>
            <div className={styles.title}> {item.title} </div>
            <button className={styles.button}> SHOP NOW </button>
        </div>
    </div>
  )
}

export default CategoryItem