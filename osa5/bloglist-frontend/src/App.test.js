import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
import blogService from './services/blogs'
import LoginForm from './components/LoginForm';

describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount(<App />)
  })

  it('renders login form and no blogs when user not logged in', () => {
    app.update()
    window.localStorage.clear

    const loginDiv = app.find(LoginForm)
    const blogsDiv = app.find(Blog)

    expect(loginDiv.length).toEqual(1)
    expect(blogsDiv.length).toEqual(0)
  })
})