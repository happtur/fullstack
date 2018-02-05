import React from 'react';
//import AddPersonForm from './components/AddPersonForm'
import Person from './components/Person'
import AddPersonForm from './components/AddPersonForm';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  handleFilterChange = (event) => {
    this.setState({filter: event.target.value})
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
    const chosenPersons= this.state.filter === '' ? 
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
          onChange={this.handleFilterChange}/>
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
