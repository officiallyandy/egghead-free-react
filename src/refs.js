import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            a: '',
            b: ''
        };
    }

    update() {
        this.setState({
            a: this.a.refs.input.value,
            b: this.refs.b.value
        });
    }
    render() {
        return (
            <div>
                <Input
                    ref={ component => this.a = component}
                    type="text"
                    update={this.update.bind(this)}/>
                        {this.state.a}
                <hr/>
                <Input
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}/>
                        {this.state.b}
            </div>
        )
    }
}

class Input extends React.Component {
    render() {
        return <div> <input type="text" ref="input" onChange={this.props.update}/> </div>;
    }
}

export default App;