import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' },
        {name: 'testi'}
      ],
      newName: ''
    }
  }

  handleChange = (event) => {
    this.setState({newName: event.target.value})
  }

  addPerson = (event) => {
    event.preventDefault()
    const persons = this.state.persons.concat({name: this.state.newName})
    this.setState({persons, newName: ''})
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi: <input
            value={this.state.newName}
            onChange={this.handleChange}
             />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(person => <p key={person.name}>{person.name}</p>)}
      </div>
    )
  }
}

export default App
