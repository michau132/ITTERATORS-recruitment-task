import React from 'react';
const style = {
    width: '300px'
};
class Form extends React.Component {
    constructor(props){
        super(props);
        this.sendingForm = this.sendingForm.bind(this)
    }
    sendingForm(event) {
        event.preventDefault();
        if (this.input.value !== '') {
            this.props.handler(this.input.value)
        }
        this.input.value = ''
    }
    render() {
        return (
            <form action="" onSubmit={event => this.sendingForm(event)}>
                <input ref={inputRef => this.input = inputRef} type="text" style={style} />
                <button>Submit</button>
            </form>
        )
    }
}

export default Form