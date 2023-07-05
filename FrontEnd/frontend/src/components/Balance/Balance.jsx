import styles from './Balance.module.css'

const Balance = ({balance}) => {

  return (

    <div className={styles.Main}>

        <span className={styles.Balance}> {balance} </span>
        <span className={styles.Text}> Account Balance </span>

    </div>
  )

}

export default Balance