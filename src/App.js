import React from 'react';

// State capable component
class App extends React.Component {
    render() {
        return (
            <section>
                <h1>Wanna hear a joke?</h1>  
                <p>A cat, a dog, and a fish walk into a bar ... </p>
            </section>
        )        
    }
}

// Stateless function version
// const App = () => <h1>Hello stateless</h1>

export default App