import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import ProfileComponent from '../profile-component/index'
import { baseApiUrl} from '../../utils/consts'

const UserProfile = () => {
    const content = () => {
        fetch(baseApiUrl + "user.json", {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then((data) => {setUser(data); console.log(Object.entries(data))})
    }

    const [user, setUser] = useState({})

    useEffect( () => {content()}, [])

    return (
        <div className={styles[`user-profile`]}>
            {
                Object.entries(user).map(
                    ([id, {firstname, lastname, select, imageURL}]) => {
                        return (
                            <ProfileComponent firstname={firstname} lastname={lastname} select={select} imageURL={imageURL} />
                        )
                    }
                )
            }
        </div>
    )
}

export default UserProfile