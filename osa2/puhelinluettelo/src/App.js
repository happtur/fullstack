import React from 'react';
import Person from './components/Person'
import AddPersonForm from './components/AddPersonForm';
import personService from './services/persons'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  componentDidMount() {
    personService.getAll().then(response => this.setState({ persons: response }))
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value })
  }

  addPerson = (event) => {
    event.preventDefault()
    if (this.state.persons.find((person) => (person.name === this.state.newName)) !== undefined) {
      return
    }

    const newPerson = { name: this.state.newName, number: this.state.newNumber }

    personService
      .create(newPerson)
      .then(person => {
        this.setState({
          persons: this.state.persons.concat(person),
          newName: '',
          newNumber: ''
        })
      })
  }

  render() {
    const chosenPersons = this.state.filter === '' ?
      this.state.persons :
      this.state.persons.filter(
        (person) =>
          person.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase())
      )

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <div>
          rajaa näytettäviä <input
            value={this.state.filter}
            onChange={this.handleFilterChange} />
        </div>
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
            {chosenPersons.map(person => <Person key={person.name} person={person} />)}
          </tbody>
        </table>
      </div >
    )
  }
}

export default App
