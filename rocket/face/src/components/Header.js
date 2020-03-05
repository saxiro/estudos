import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    state = {
        
    };
    render(){
        return(
            <div id='caixa'>
                
                    <div id='logo'>Facebook</div>
                    <div id='meu-perfil'>Meu perfil</div>
                
            </div>
        );
    }
}

export default Header;