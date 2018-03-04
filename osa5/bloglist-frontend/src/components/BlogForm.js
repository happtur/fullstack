import React from 'react'

const BlogForm = ({
  addBlog, handleFieldChange, newTitle, newAuthor, newUrl
}) => {
  return (
  <div>
          <h3>create new</h3>
          <form onSubmit={addBlog}>
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

export default BlogForm