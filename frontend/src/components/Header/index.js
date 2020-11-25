import React from 'react';
import {Logo, HeaderContainer, logo} from './styles'
import Icone from '../../assets/iconTemplate@2x.png'

function Header(props) {
    return (
    <>
      <HeaderContainer>
        <Logo src={Icone} alt='Pitu - Encurtador de URL' />
        <h1>Pitu</h1>
        <p>{props.children}</p>
      </HeaderContainer>
    </>
    )
}

export default Header;