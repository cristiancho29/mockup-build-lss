//Librerias
import React from 'react';

//Referencias
import './styles/SectionLeft.css'
import Toggle from './Toggle';
import {FaRegHeart,
    FaRegCalendarAlt,
    FaCertificate,
    FaRegLightbulb} from 'react-icons/fa';

//Clase
class SectionLeft extends React.Component {
    render(){
        return(
            <div className="Section_left">
                <div className="First_title"> 
                    <FaRegLightbulb 
                    className="reg_lightbulb"/>
                    <p>Smart Filters</p>
                </div>
                <div className="Section_left_items">
                    <div className="Toggle_options">
                        <Toggle 
                        Id={"1"}
                        Icon={<FaCertificate 
                            className="toggle_icons"
                            />}/>
                        <Toggle 
                        Id={"2"}
                        Icon={<FaRegCalendarAlt 
                            className="toggle_icons"
                            />}/>
                        <Toggle 
                        Id={"3"}
                        Icon={<FaRegHeart 
                            className="toggle_icons"
                            />}/>
                    </div>
                    <p className="Second_title">Status</p>
                    <div className="Search_bar_filter">
                        <input type="text" 
                        placeholder="&#xF002; Search"/>
                    </div>
                    <button className="Delivered_button">DELIVERED</button>
                </div>
            </div>
        );
    }
}

export default SectionLeft;