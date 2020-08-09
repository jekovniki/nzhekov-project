import React from 'react'
import Link from '../link'

const MenuLinks = ({links}) => {
    return (
    <nav>
        {
        links.map(({title,link},index) => <Link key={index} href={link} name={title} />)
        }
        </nav>
    )
}

    
export default MenuLinks