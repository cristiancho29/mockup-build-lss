//Librerias
import React from 'react';

//Referencias
import './styles/ContentItem.css';
import {FaTruck} from 'react-icons/fa';
import {FaEllipsisV} from 'react-icons/fa';
import {FaLocationArrow} from 'react-icons/fa';
import {FaChevronDown} from 'react-icons/fa';
import {FaCheckCircle} from 'react-icons/fa';

class ContentItem extends React.Component {
    render(){
        return(
            <div className="Content_item">
                <FaCheckCircle 
                className="check_circle_icon"/>
                <div className="Delivery_block">
                    <div className="Date_block">
                        <p>{this.props.Date}</p>
                    </div>
                    <div className="Path_block">
                        <FaLocationArrow 
                        className="location_icon"
                        />
                        <div className="Path_info">
                            <p>{this.props.PointA}</p>
                            <FaChevronDown 
                            className="down_icon"/>
                            <p>{this.props.PointB}</p>
                        </div>
                    </div>
                    <div className="Info_block">
                        <FaTruck 
                        className="truck_icon"
                        />
                        <h1>{this.props.Price}</h1>
                        <button>1</button>
                        <FaEllipsisV 
                        className="option_icon"
                        />
                    </div>
                </div>
            </div>);
    }
}
export default ContentItem;