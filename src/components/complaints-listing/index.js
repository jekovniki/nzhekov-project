import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import SectionTitle from '../section-title/index'
import ComplaintsComponent from '../complaints-component/index'
import { baseApiUrl} from '../../utils/consts'

const ComplaintsListing = () => {
    const content = () => {
        fetch(baseApiUrl + "complaints.json", {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then((data) => {setAllComplaints(data)})
    }

    const [allComplaints, setAllComplaints] = useState({})

    useEffect( () => {content()})

    return (
        <div className={styles[`complaints-listing`]}>
            <SectionTitle section="Latest Complaints" />
            {
                Object.entries(allComplaints).map(
                    ([id, { body, phone, firstName, lastName, email}]) => {
                        return (
                            <ComplaintsComponent firstname={firstName} lastname={lastName} body={body} phone={phone} email={email}/>
                        )
                    }
                ).reverse()
            }
        </div>
    )
}

export default ComplaintsListing