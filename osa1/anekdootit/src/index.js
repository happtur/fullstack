import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: Math.floor(Math.random() * 6),
      votes: [0, 0, 0, 0, 0, 0]
    }
  }

  randomSelected = () => {this.setState({selected: Math.floor(Math.random() * 6)})}

  vote = () => {
      const copy = [...this.state.votes]
      copy[this.state.selected] += 1
      this.setState({votes: copy})
  }

  render() {
    
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <div>
        <Button handleClick={() => this.randomSelected()} text='nextanecdote' />
        <Button handleClick={() => this.vote()} text='vote' />
        </div>
      </div>
    )
  }
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick} >{text}</button>
)

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)