import React from 'react';
import ListItems from './ListItems.jsx';
import Form from './Form.jsx';


class App extends React.Component {
    constructor(props){
        super(props);
        this.sendForm = this.sendForm.bind(this);
        this.deletes = this.deletes.bind(this);
        this.state = {
            items: []
        }
    }
    sendForm(event) {
        const itemValue = this.state.items;
        itemValue.push(event)
        this.setState({items: itemValue})
    }
    deletes(event){
        const newState = this.state.items;
        if (newState.indexOf(event.props.listItem) > -1) {
            newState.splice(newState.indexOf(event.props.listItem), 1);
            this.setState({items: newState})
        }
    }
    render() {
        return (
            <div>
                <h1>React To Do List</h1>
                <Form  handler={this.sendForm} />
                <ul>
                    {this.state.items.map( (item, index) =>
                        <ListItems
                            key={index}
                            listItem={item}
                            asd='Done'
                            handler={this.deletes}
                        />
                    )}
                </ul>
            </div>
        )
    }
}

export default App