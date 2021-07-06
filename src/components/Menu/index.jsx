import React from 'react'
import { Menu } from './styles'
import { Li } from './styles'
import { Ul } from './styles'
import { Link } from 'gatsby'

export default function header({children}){
    return (
        <Menu>
            <Ul>
                <Link to='/teste'><Li>Home</Li></Link>
                <Link to='/teste'><Li>Blog</Li></Link>
                <Link to='/teste'><Li>Sobre</Li></Link>
                <Link to='/teste'><Li>Contato</Li></Link>
            </Ul>
        </Menu>
    )
}