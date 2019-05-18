//Librerias
import React from 'react';

//Referencias
import './styles/SectionRight.css';
import ContentItem from './ContentItem';
import AddButton from './AddButton.js';

//Clase
class SectionRight extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            array:[
                {id:"1",
                date:"Monday 10th 2:28 PM",
                pointA:"Houston, TX, 33619",
                pointB:"Atlanta, GA, 30123",
                price:"$250.00"}
                ,{id:"2",
                date:"Monday 10th 2:28 PM",
                pointA:"Houston, TX, 33619",
                pointB:"Atlanta, GA, 30123",
                price:"$250.00"}
                ,{id:"3",
                date:"Monday 10th 2:28 PM",
                pointA:"Houston, TX, 33619",
                pointB:"Atlanta, GA, 30123",
                price:"$250.00"}
            ]
        };
        this.addItem = this.addItem.bind(this);
        this.closeModal = this.closeModal.bind(this)
;    }
    addItem(){
        let n = String((this.state.array.length)+1)
        let list = this.state.array.slice();
        list.push({
            id:n,
            date:"Monday 10th 2:28 PM",
            pointA:"Houston, TX, 33619",
            pointB:"Atlanta, GA, 30123",
            price:"$250.00"});
        this.setState(state =>({
            array: list
        }));
        document.getElementsByClassName("modal")[0].style.display="flex";
    }

    closeModal() {
        var modal = document.getElementsByClassName("modal")[0];
        modal.style.display = "none";
    }
    render(){
        return(
            <div className="Section_right">
                <div className="Search_bar">
                    <input type="text" 
                    placeholder="&#xF002; Search"/>
                </div>
                <div className="Content">
                    {this.state.array.map(item=>(
                        <ContentItem key={item.id}
                        Date={item.date} 
                        PointA={item.pointA} 
                        PointB={item.pointB} 
                        Price={item.price}/>
                    ))}
                </div>
                <AddButton addItem={this.addItem} />
                <div className="modal" 
                style={{display:"none"}}>
                    <div className="modal_container">
                        <p>Element added</p>
                        <button onClick={this.closeModal}>Ok</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SectionRight;