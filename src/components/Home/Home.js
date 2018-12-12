import React from 'react';
import './Home.css';
import AutoComplete from '../AutoComplete/AutoComplete';
import {getAllBanks, getAllBranches, getBankByIFSC, getBankByBankNameAndBranchName} from '../../actions/BankActions';

class Home extends React.Component{

    constructor(){
        super();
        this.state = {
            "seachBy" : "bank"
        };
        
    }

    componentWillMount = () => {
        let inst = this;
        getAllBanks().then((res, err)=>{
            if(res){
                inst.setState({"bankList": res.data});
            }
        });
    }

    onBankNameChange = (autocompleteState) => {
        let bankName = autocompleteState.inputValue;
        this.setState({"selectedBank" : bankName});
        let inst = this
        getAllBranches(bankName).then((res, err)=>{
            if(res){
                inst.setState({"branchList": res.data});
            }
        });

    }

    onBranchNameChange = (autocompleteState) => {
        let branchName = autocompleteState.inputValue;
        this.setState({"selectedBranch" : branchName});
    }

    openBankSearch = () => {
        this.setState({"seachBy" : "bank"});
    }

    openIFSCSearch = () => {
        this.setState({"seachBy" : "IFSC"});
    }

    onIFSCChange = (e) => {
        this.setState({"ifscCode" : e.target.value});
    }

    onSearchClick = () => {
        let inst = this;
        if(this.state.seachBy === "bank"){
            getBankByBankNameAndBranchName(this.state.selectedBank, this.state.selectedBranch).then((res, err)=>{
                if(res && res.status == "success"){
                    inst.setState({"bankDetails": res.data});
                }else{
                    inst.setState({"bankDetails": null});
                }
            });
        }else{
            getBankByIFSC(this.state.ifscCode).then((res, err)=>{
                if(res && res.status == "success"){
                    inst.setState({"bankDetails": res.data});
                }else{
                    inst.setState({"bankDetails": res.data});
                }
            });
        }
    }

    render(){
        return(
            <div className="col-sm-9">
                <div className="container">

                
                    <h2>Bank Details</h2>
                    <div className="row">
                        <div className=" input-group" role="menu">
                            <input type="radio" name="bank-search" defaultChecked  id="bank-search" onClick={this.openBankSearch} className=""/><label htmlFor="bank-search"> Bank Name and Branch Name</label>
                            &nbsp;&nbsp;&nbsp;
                            <input type="radio" name="bank-search" id="branch-search" onClick={this.openIFSCSearch} className=""/><label htmlFor="branch-search"> IFSC Code</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-10">
                        {(this.state.seachBy == "bank") ? <BankSearchField bankList={this.state.bankList} branchList={this.state.branchList} onBankNameChange={this.onBankNameChange} onBranchNameChange={this.onBranchNameChange} /> :  <IFSCSearchField onIFSCChange = {this.onIFSCChange}/>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="search-cont">
                            <button type="button" className="btn btn-default" onClick={this.onSearchClick}>
                                <span className="glyphicon glyphicon-search"></span> Search
                            </button>
                        </div>
                            
                    </div>
                    <div className="row">
                        <BankDetails bankDetails={this.state.bankDetails}/>
                    </div>
                    
                </div>
            </div>
        );
    }

}

const BankSearchField =  (props) => {

    return (
        <div className="input-group" style={{display: "flex"}}>
            <AutoComplete suggestedList={props.bankList} placeholder={"Bank Name"} onValueChange={props.onBankNameChange}/> 
            <AutoComplete suggestedList={props.branchList} placeholder={"Branch Name"} onValueChange={props.onBranchNameChange}/>  
        </div>
    );
};

const IFSCSearchField  = (props) => {

    return (
        <div className="input-group">
            <input type="text" className="form-control" placeholder="IFSC Code" onChange={props.onIFSCChange}/>
        </div>
    );
};

const BankDetails = (props) => {
    if(!props.bankDetails){
        return (<div>Nothing Found</div>);
    }
    return(
        <div className="panel">
            <h1>{props.bankDetails.BANK}</h1>
            <div className="section" style={{paddingBottom:"5px"}}>
                <h6 className="title-attr"><small>IFSC</small></h6>                    
                <div>
                    <div className="attr2">{props.bankDetails.IFSC}</div>
                </div>
            </div>
            <div className="section" style={{paddingBottom:"5px"}}>
                <h6 className="title-attr"><small>Branch</small></h6>                    
                <div>
                    <div className="attr2">{props.bankDetails.BRANCH}</div>
                </div>
            </div>
            <div className="section" style={{paddingBottom:"5px"}}>
                <h6 className="title-attr"><small>Adress</small></h6>                    
                <div>
                    <div className="attr2">{props.bankDetails.ADDRESS}</div>
                </div>
            </div>
        </div>
    );

}



export default Home;