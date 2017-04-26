import React from 'react';

// State capable component
class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state text',
            dog: 0
        }
    }

    update(e){
        this.setState({ txt: e.target.value })
    }

    render() {
        const headerValue = this.state.txt

        return (
            <section>
                <h1>{headerValue} - {this.state.dog}</h1>  
                <p>
                    <input type="text" onChange={this.update.bind(this)} />
                </p>
            </section>
        )        
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
    txt: "Random text here"
}

// Stateless function version
// const App = () => <h1>Hello stateless</h1>

export default App