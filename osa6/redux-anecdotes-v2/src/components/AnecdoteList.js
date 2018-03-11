import React from 'react'
import Filter from './Filter'
import { anecdoteVote } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'

class AnecdoteList extends React.Component {

  anecdotesToShow = () => {
    const state = this.props.store.getState()
    return (
      state.anecdotes.filter((anecdote) => anecdote.content.indexOf(state.filter) !== -1)
    )
  }

  render() {
    const anecdotes = this.anecdotesToShow()

    return (
      <div>
        <h2>Anecdotes</h2>
        <Filter store={this.props.store} />
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => {
                this.props.store.dispatch(
                  anecdoteVote(anecdote.id)
                )
                this.props.store.dispatch(
                  setNotification(`you voted on "${anecdote.content}"`)
                )
                setTimeout(() => {
                  this.props.store.dispatch(
                    setNotification('')
                  )
                }, 5000)}
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

export default AnecdoteList
