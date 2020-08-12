import React from 'react'
import Link from '../link'
import app from '../../base'

const MenuLinks = ({links}) => {
    return (
    <nav>
        {
        links.map(({title,link},index) => <Link key={index} href={link} name={title} />)
        }
        <li>
            <a onClick={() => app.auth().signOut()}>Sign out</a>
        </li>
        </nav>
    )
}

    
export default MenuLinks