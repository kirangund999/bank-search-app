import React from 'react';
import SideBar from "./SideBar/SideBar";
import './MainView.css';
import Home from './Home/Home';

class MainView extends React.Component{

    constructor(){
        super();
    }

    render(){

        return (

            <div className="row content">
                <SideBar  />
                <Home />

            </div>
        );

    }

}

export default MainView;