import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistics = ({hyva, neutraali, huono}) => {
    const sum = hyva - huono
    let total = hyva + neutraali + huono
    if (total == 0) { total = 1 }

    return (
    <div>
        <Statistic name='hyvä' value={hyva} />
        <Statistic name='neutraali' value={neutraali} />
        <Statistic name='huono' value={huono} />
        <Statistic name='keskiarvo' value={(sum / total).toFixed(1)} />
        <Statistic name='positiivisia' value={((hyva / total) * 100).toFixed(1)} unit=' %' />
    </div>
    )
}

const Statistic = ({name, value, unit}) => (
    <div>
        {name} {value} {unit}
    </div>
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

        return (
            <div>
                <h3>anna palautetta</h3>
                <Button handleClick={() => (this.setState({ hyva: hyva + 1 }))} text='hyvä' />
                <Button handleClick={() => (this.setState({ neutraali: neutraali + 1 }))} text='neutraali' />
                <Button handleClick={() => (this.setState({ huono: huono + 1 }))} text='huono' />

                <h3>statistiikka</h3>
                <Statistics hyva={hyva} neutraali={neutraali} huono={huono} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))