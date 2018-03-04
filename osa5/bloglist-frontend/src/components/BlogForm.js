import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({
  handleSubmit, handleFieldChange, newTitle, newAuthor, newUrl
}) => {
  return (
  <div>
          <h3>create new</h3>
          <form onSubmit={handleSubmit}>
            <div>title
              <input
                type="text"
                name="title"
                value={newTitle}
                onChange={handleFieldChange}
              />
            </div>
            <div>author
            <input
                type="text"
                name="author"
                value={newAuthor}
                onChange={handleFieldChange}
              />
            </div>
            <div>url
              <input
                type="text"
                name="url"
                value={newUrl}
                onChange={handleFieldChange}
              />
            </div>
            <button type="submit">create</button>
          </form>
        </div>
)}

BlogForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  newTitle: PropTypes.string.isRequired,
  newAuthor: PropTypes.string.isRequired,
  newUrl: PropTypes.string.isRequired
}

export default BlogForm