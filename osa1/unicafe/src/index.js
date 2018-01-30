import React from 'react';
import ReactDOM from 'react-dom';

const Feedbackbutton = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0
        }
    }

    render() {
        const hyva = this.state.hyva
        const neutraali = this.state.neutraali
        const huono = this.state.huono
    
        const sum = hyva - huono
        let total = hyva + neutraali + huono
        if(total == 0) {total =1}

        return (
            <div>
                <h3>anna palautetta</h3>
                <Feedbackbutton handleClick={() => (this.setState({ hyva:this.state.hyva + 1 }))} text='hyvä' />
                <Feedbackbutton handleClick={() => (this.setState({ neutraali:this.state.neutraali + 1 }))} text='neutraali' />
                <Feedbackbutton handleClick={() => (this.setState({ huono:this.state.huono + 1 }))} text='huono' />

                <h3>statistiikka</h3>
                <p>hyvä {this.state.hyva}</p>
                <p>neutraali {this.state.neutraali}</p>
                <p>huono {this.state.huono}</p>
                <p>keskiarvo {(sum/total).toFixed(1)}</p>
                <p>positiivisia {((hyva/total)*100).toFixed(1)} %</p>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))