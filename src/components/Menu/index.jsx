import React from 'react'
import { Menu } from './styles'
import { Li } from './styles'
import { Ul } from './styles'
import { Link } from 'gatsby'

export default function header({children}){
    return (
        <Menu>
            <Ul>
                <Link to='/'><Li>Home</Li></Link>
                <Link to='#'><Li>Blog</Li></Link>
                <Link to='#'><Li>Sobre</Li></Link>
                <Link to='#'><Li>Contato</Li></Link>
            </Ul>
        </Menu>
    )
}