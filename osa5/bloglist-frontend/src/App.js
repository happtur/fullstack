import React from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable';
import blogService from './services/blogs'
import loginService from './services/login'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      username: '',
      password: '',
      user: null,
      error: null,
      title: '',
      author: '',
      url: ''
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      blogService.setToken(user.token)
      this.setState({ user })
    }
  }

  handleFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({ username: '', password: '', user })
    } catch (exception) {
      this.setState({
        error: 'wrong username or password',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  logout = () => {
    window.localStorage.removeItem('loggedBlogAppUser')
    blogService.setToken(null)
    this.setState({ user: null })
  }

  addBlog = async (event) => {
    event.preventDefault()
    const blog = await blogService.create({
      title: this.state.title,
      author: this.state.author,
      url: this.state.url
    })
    this.setState({
      blogs: this.state.blogs.concat(blog),
      title: '',
      author: '',
      url: ''
    })
  }

  render() {
    if (this.state.user === null) {
      return (
        <LoginForm login={this.login} handleFieldChange={this.handleFieldChange} username={this.state.username} password={this.state.password} />
      )
    }

    return (
      <div>
        <h2>blogs</h2>
        <div>
          {this.state.user.name} logged in
      <button type="button" onClick={this.logout}>log out</button>
        </div>
        <Togglable buttonLabel="add blog">
          <BlogForm addBlog={this.addBlog} handleFieldChange={this.handleFieldChange} newTitle={this.state.title} newAuthor={this.state.author} newUrl={this.state.url} />
        </Togglable>
        <div>
          {this.state.blogs.map(blog =>
            <Blog key={blog._id} blog={blog} />
          )}
        </div>
      </div>
    )
  }
}

export default App;