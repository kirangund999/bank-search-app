import React from 'react';
import {Link} from "react-router-dom";
import './SideBar.css';
import {Glyphicon} from 'react-bootstrap';


class SideBar extends React.Component {

    constructor(){
        super();
        this.state = {
            openHomeMenu : false
        }
    }

    toggleMenu = () => {
        this.setState({ openHomeMenu: !this.state.openHomeMenu });
    }

    render(){
        return (

            <div className="sidenav">
                <button className={this.state.openHomeMenu? "dropdown-btn active" : "dropdown-btn"} onClick={this.toggleMenu} >Home 
                        <Glyphicon bsSize="small" glyph={this.state.openHomeMenu? "menu-up"  : "menu-right" }/>
                </button>
                <div className="dropdown-container" style={this.state.openHomeMenu? {height:"110px"} : {height:0}}>
                    <Link to="/banks">Search By Bank Name</Link>
                    <Link to="/ifsc">Search By IFSC Code</Link>
                </div>
                <Link to="/history">History</Link>
            </div>

        );
    }

}

export default SideBar;