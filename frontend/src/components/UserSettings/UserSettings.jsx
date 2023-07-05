import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './UserSettings.module.css'
import { Link, useNavigate } from "react-router-dom";

const UserSettings = () => {

    const navigate = useNavigate();

  return (
    
    <div className={styles.Main}>

        <span className={styles.Title}> User Settings </span>   

        <div className={styles.Form}>
            
                <Input
                  type="text"
                  value={"Name"}
                />
                <Input
                  type="text"
                  value={"Last Name"}
                />
                <Input
                  type="mail"
                  value={"Email"}
                />
                <Input
                  type="tel"
                  value={"Phone"}
                /> 
                <Button 
                    type="button" 
                    className={styles.Button} 
                    onClick={() => navigate("/bankaccounts")}
                > Save
                </Button>        
        </div> 

    </div>
  )
}

export default UserSettings