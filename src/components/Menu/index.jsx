import React from 'react'
import { Menu } from './styles'
import { Li } from './styles'
import { Ul } from './styles'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa';
import { useState } from 'react'

export default function Header({children}){

    const [data, setData] = useState(false) 

    const click = () => setData(!data);

    console.log(data);

    return (
        <Menu>
            <FaBars onClick={click} teste={data ? `block` : `none`}/>
            <Ul display={data ? `block` : `none`}>
                <span onClick={click}>X</span>
                <Link to='/'><Li>Home</Li></Link>
                <Link to='#'><Li>Blog</Li></Link>
                <Link to='#'><Li>Sobre</Li></Link>
                <Link to='#'><Li>Contato</Li></Link>
            </Ul>
        </Menu>
        
    )
}