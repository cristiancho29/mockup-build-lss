//Librerias
import React from 'react';

//Referencias
import './styles/Toggle.css';

// Clase
class Toggle extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isToggle:true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        var sw = document.getElementById("round_"+this.props.Id);
        var sw_div = document.getElementById("round_div_"+this.props.Id);
        this.setState(state => ({
            isToggle : !state.isToggle
        }));
        if(sw.style.alignSelf==="flex-start"){
            sw.style.alignSelf="flex-end";
            sw_div.style.background="#193948";
        }
        else{
            sw.style.alignSelf="flex-start"
            sw_div.style.background="gray";
        }
    }

    render(){
        return (
            <div className="Toggle">
                {this.props.Icon}
                <div id={"round_div_"+this.props.Id}
                className="round_div" 
                style={{
                    background:"#193948"
                    ,transition:"0.3s"}}
                onClick={this.handleClick}>
                    <button id={"round_"+this.props.Id}
                    style={{transition:"1s"
                    ,outline:"none"}}
                    className="round"></button>
                </div>
            </div>
        );
    }
}

export default Toggle;