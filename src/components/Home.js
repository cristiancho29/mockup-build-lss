//Librerias
import React from 'react';

//Referencias
import './styles/Home.css';
import SectionLeft from './SectionLeft'
import SectionRight from './SectionRight';


class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <SectionLeft />
                <SectionRight />
            </div>
        );
    }
}

export default Home;