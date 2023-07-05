import styles from './Balance.module.css'

const Balance = () => {

  return (

    <div className={styles.Main}>

        <span className={styles.Balance}> $1.681.37 </span>
        <span className={styles.Text}> Account Balance </span>

    </div>
  )

}

export default Balance