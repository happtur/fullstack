const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
    try {
        if (request.body.url === undefined) {
            return response.status(400).json({ error: 'url missing' })
        }

        const blog = new Blog(request.body)
        const result = await blog.save()
        response.status(201).json(result)
    } catch (exception) {
        console.log(exception)
        response.status(500).json({ error: 'something went wrong...' })
    }
})

module.exports = blogsRouter