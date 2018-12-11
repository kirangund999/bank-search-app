import React, { Fragment } from 'react';
import './AutoComplete.css';

class AutoComplete extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            suggestedList: props.suggestedList || [],
            filteredList : [],
            inputValue : ""
        }

    }

    onSuggestionSelect = (e) => {

        this.setState({
            inputValue: e.currentTarget.textContent,
            filteredList: []
        }, 
        
        () => {
            if(this.props.onValueChange){
                this.props.onValueChange({...this.state});
            }
            
        });

       

    }

    onTextChange = (e) => {

        const inputValue = e.target.value;
        let suggestedList = this.props.suggestedList || [];
        let filteredList = [];
        if(inputValue){
            filteredList = suggestedList.filter((item, idx) => {
                return item.toLowerCase().indexOf(inputValue.toLocaleLowerCase()) === 0;
            });
        }
        
        this.setState({filteredList: filteredList,  inputValue : inputValue});

    }

    onKeyDown = (e) => {
        //this.setState({inputValue : e.target.value});
    }

    render(){

        let suggestionList;
        const filteredList = this.state.filteredList,
            onSuggestionSelect = this.onSuggestionSelect.bind(this),
            onChange = this.onTextChange.bind(this),
            onKeyDown = this.onKeyDown.bind(this),
            inputValue = this.state.inputValue;

        if(filteredList.length){
            suggestionList = (
                <ul className="suggestion-list dropdown-menu">
                    {filteredList.map((item, idx) => {

                        return (
                            <li onClick={onSuggestionSelect} key={item} value={inputValue}><a href="#">{item}</a></li>
                        );

                    })}
                </ul>
            );
        }

        return (
            <div className="col-sm-10">
                <input type="text" className="form-control" onKeyDown={onKeyDown} onChange={onChange} value={inputValue} placeholder={this.props.placeholder} />
                { suggestionList}
            </div>
        );

    }

}

export default AutoComplete;