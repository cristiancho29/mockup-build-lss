//Librerias
import React from 'react';

//Referencias
import {FaPlus} from 'react-icons/fa';
import './styles/AddButton.css';
//Clase
class AddButton extends React.Component {
    render(){
        return(
            <div className="Add_button" onClick={this.props.addItem}>
                <FaPlus
                style={{
                    color:"white",
                    width:"40px",
                    height:"40px",
                }}/>
            </div>
        );
    }
}

export default AddButton;