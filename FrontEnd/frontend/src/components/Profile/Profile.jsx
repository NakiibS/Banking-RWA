import styles from './Profile.module.css'
import Avatar from './../../assets/Avatar.png'

const Profile = ({name, nick}) => {

  return (

    <div className={styles.Main}>

        <img className={styles.Photo} src={Avatar} alt="Avatar profile image"/>

        <span className={styles.Info}>
            <span className={styles.Name}> {name} </span>
            <span className={styles.Nick}> {nick} </span>
        </span>
        

    </div>
  )
}

export default Profile