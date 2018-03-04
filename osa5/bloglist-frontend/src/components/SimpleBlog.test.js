import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe('<SimpleBlog />', () => {
    it('renders title, author and likes', () => {
        const blog = {
            title: 'titletetli',
            author: 'authorrohtua',
            likes: '12'
        }

    const blogComponent = shallow(<SimpleBlog blog={blog} />)
    const descriptiveDiv = blogComponent.find('.descriptiveclassname')
    const likesDiv = blogComponent.find('.likes')

    expect(descriptiveDiv.text()).toContain(blog.title)
    expect(descriptiveDiv.text()).toContain(blog.author)
    expect(likesDiv.text()).toContain(blog.likes)

    })
})