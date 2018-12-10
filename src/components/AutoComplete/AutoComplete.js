import React, { Fragment } from 'react';

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
            inputValue: e.target.key,
            filteredList: []
        });

    }

    onTextChange = (e) => {
        const inputValue = e.target.value;
        let filteredList = this.state.suggestedList.filter((item, idx) => {

            return item.toLowerCase().indexOf(inputValue.toLocaleLowerCase()) != -1;
        });

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
                <ul className="suggestion-list">
                    {filteredList.map((item, idx) => {

                        return (
                            <li onClick={onSuggestionSelect} key={item} value={inputValue}>{item}</li>
                        );

                    })}
                </ul>
            );
        }

        return (
            <Fragment>
                <input type="text"  onKeyDown={onKeyDown} onChange={onChange} value={inputValue} placeholder={this.props.placeholder} />
                { suggestionList}
            </Fragment>

        )

    }

}

export default AutoComplete;