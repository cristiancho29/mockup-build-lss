//Librerias
import React from 'react';
import {FaHome,
    FaEnvelope,
    FaStar,
    FaCog,
    FaUser} from 'react-icons/fa';
import {MdMenu} from 'react-icons/md'

//Referencias
import './styles/Navbar.css'
import LogoPrinc from './../images/StarkcoreLogo.png';

//Clase
class Navbar extends React.Component{
    constructor(props){
        super(props);

        this.openMenu = this.openMenu.bind(this);
    }
    openMenu(){
        let menuOptions = document.getElementsByClassName("Menu_options")[0];
        if(menuOptions.style.display==='none'){
            menuOptions.style.display='flex';
        }
        else{
            menuOptions.style.display='none';
        }
    }

    render(){
        return(
            <div className="Navbar">
                <div className="Logo">
                    <img src={LogoPrinc} alt="Logo"/>
                </div>
                <div className="Navbar_options_responsive">
                    <div className="Menu_square" onClick={this.openMenu}>
                        <MdMenu 
                        className="Menu_icon"/>
                    </div>
                    <div 
                    className="Menu_options" style={{display:'none'}}>
                        <div className="Menu_item">
                            <FaHome className="option_icon"/>
                            <p>Home</p>
                        </div>
                        <div className="Menu_item">
                            <FaEnvelope className="option_icon"/>
                            <p>Messages</p>
                        </div>
                        <div className="Menu_item">
                            <FaStar className="option_icon"/>
                            <p>Whislist</p>
                        </div>
                        <div className="Menu_item">
                            <FaCog className="option_icon"/>
                            <p>Settings</p>
                        </div>
                        <div className="Menu_item">
                            <FaUser className="option_icon"/>
                            <p>My account</p>
                        </div>
                    </div>
                </div>
                <div className="Navbar_options">
                    <div className="Navbar_item">
                        <FaHome className="option_icon"/>
                        <p>Home</p>
                    </div>
                    <div className="Navbar_item">
                        <FaEnvelope className="option_icon"/>
                        <p>Messages</p>
                    </div>
                    <div className="Navbar_item">
                        <FaStar className="option_icon"/>
                        <p>Whislist</p>
                    </div>
                    <div className="Navbar_item">
                        <FaCog className="option_icon"/>
                        <p>Settings</p>
                    </div>
                    <div className="Navbar_item">
                        <FaUser className="option_icon"/>
                        <p>My account</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;