import React from 'react'

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            txt: 'this is the state text',
            dog: 0
        }
    }
}

App.prototype.update = updateApp
App.prototype.render = renderApp

App.propTypes = getPropTypes()
App.defaultProps = getDefaultProps()


export default App



function getDefaultProps(){
    return {
        txt: "Random text here"
    }
}
function getPropTypes(){
    return {
            txt: React.PropTypes.string,
            cat: React.PropTypes.number.isRequired
        }
}
function updateApp (e){
    this.setState({ txt: e.target.value })
}
function renderApp() {
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