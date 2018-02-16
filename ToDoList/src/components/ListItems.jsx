import React from 'react';

class ListItems extends React.Component {
    constructor(props){
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem() {
        this.props.handler(this)
    }

    render() {
        return (
            <div>
                <li>{this.props.listItem}</li>
                <button onClick={this.deleteItem}>{this.props.asd}</button>
            </div>
        )
    }
}

export default ListItems