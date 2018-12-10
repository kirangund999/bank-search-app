import React from 'react';
import './Home.css';
import AutoComplete from '../AutoComplete/AutoComplete';

class Home extends React.Component{

    constructor(){
        super();
        this.state = {"seachBy" : "bank"};
    }

    openBankSearch = () => {
        this.setState({"seachBy" : "bank"});
    }

    openIFSCSearch = () => {
        this.setState({"seachBy" : "IFSC"});
    }

    render(){
        return(
            <div className="col-sm-9">
                <h2>Bank Details</h2>
                <div className="panel">
                    <div className=" input-group panel" role="menu">
                        <input type="radio" name="bank-search" defaultChecked  id="bank-search" onClick={this.openBankSearch} className=""/><label for="bank-search"> Bank Name and Branch Name</label>
                        &nbsp;&nbsp;&nbsp;
                        <input type="radio" name="bank-search" id="branch-search" onClick={this.openIFSCSearch} className=""/><label for="branch-search"> IFSC Code</label>
                    </div>
                </div>
                <div className="panel">
                    {(this.state.seachBy == "bank") ? <BankSearchFields handlebankKeyUp = {this.handlebankKeyUp} handlebranchKeyUp={this.handlebranchKeyUp} /> :  <IFSCSearchFields />}

                </div>
            </div>
        );
    }

}

export const BankSearchFields =  (props) => {

    return (
        <div className="input-group">
            <AutoComplete suggestedList={["AAA", "AAb", "ACC","ACE"]} placeholder={"Bank Name"}/> 
            <AutoComplete suggestedList={[]} placeholder={"Branch Name"}/>  
        </div>
    );
};

export const IFSCSearchFields  = (props) =>{

    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="IFSC Code"/>
        </div>
    );
};


export const AutoSuggestion = (props) => {

    return [


    ];
}


export default Home;