import styles from './Profile.module.css'
import Avatar from './../../assets/Avatar.png'

const Profile = () => {

  return (

    <div className={styles.Main}>

        <img className={styles.Photo} src={Avatar} alt="Avatar profile image"/>

        <span className={styles.Info}>
            <span className={styles.Name}> Edgar J </span>
            <span className={styles.Nick}> @Katharina_Bernier </span>
        </span>
        

    </div>
  )
}

export default Profile