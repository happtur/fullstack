import React from 'react'
import { connect } from 'react-redux'
import Filter from './Filter'
import { anecdoteVote } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'

class AnecdoteList extends React.Component {
  render() {

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter />
        {this.props.anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.anecdoteVote(anecdote.id)
                this.props.setNotification(`you voted on "${anecdote.content}"`)

                setTimeout(() => {
                  this.props.setNotification('')
                }, 5000)
              }
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const anecdotesToShow = (anecdotes, filter) => {
  return anecdotes.filter((anecdote) => anecdote.content.indexOf(filter) !== -1)
}

const mapStateToProps = (state) => {
  return {
    anecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

export default connect(mapStateToProps, { anecdoteVote, setNotification })(AnecdoteList)
