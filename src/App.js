import React from 'react';

// State capable component
class App extends React.Component {
    render() {
        const headerValue = this.props.txt;

        return (
            <section>
                <h1>{headerValue}</h1>  
                <p>A cat, a dog, and a fish walk into a bar ... </p>
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