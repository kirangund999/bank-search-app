import React from 'react';
import {Link} from "react-router-dom";
import './SideBar.css';
import {Glyphicon} from 'react-bootstrap';


class SideBar extends React.Component {

    constructor(){
        super();
        this.state = {
            homeActive : true,
            historyActive : false
        }
    }

    toggleMenu = (event) => {
        let className = event.target.className;
        if(className.indexOf("home") != -1){
            this.setState({ homeActive: true });
            this.setState({ historyActive: false });
        }else{
            this.setState({ homeActive: false });
            this.setState({ historyActive: true });
        }
        
    }

    render(){
        return (

            <div className="col-sm-3 sidenav">
                <ul className="nav nav-pills nav-stacked">
                    <li className={this.state.homeActive? "active" : ''}>
                        <Link to="/banks" className="home" onClick={this.toggleMenu}>Home</Link>
                    </li>
                    <li className={this.state.historyActive? "active" : ''}>
                    <Link to="/history" className="history" onClick={this.toggleMenu}>History</Link>
                    </li>
                </ul>
                    
                
            </div>

        );
    }

}

export default SideBar;