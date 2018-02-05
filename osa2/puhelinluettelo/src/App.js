import React from 'react';
//import AddPersonForm from './components/AddPersonForm'
import Person from './components/Person'
import AddPersonForm from './components/AddPersonForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        {
          name: 'Arto Hellas',
          number: '123456'
        }
      ],
      newName: '',
      newNumber: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  addPerson = (event) => {
    event.preventDefault()
    if (this.state.persons.find((person) => (person.name === this.state.newName)) !== undefined) {
      return
    }

    const persons = this.state.persons.concat({ name: this.state.newName, number: this.state.newNumber })
    this.setState({ persons, newName: '', newNumber: '' })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <AddPersonForm
          submit={this.addPerson}
          nameValue={this.state.newName}
          nameHandler={this.handleNameChange}
          numberValue={this.state.newNumber}
          numberHandler={this.handleNumberChange}
        />
        <h2>Numerot</h2>
        <table>
          <tbody>
            {this.state.persons.map(person => <Person key={person.name} person={person} />)}
          </tbody>
        </table>
      </div >
    )
  }
}

export default App
