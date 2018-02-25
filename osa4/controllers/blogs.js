const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
    try {
        const body = request.body

        if (body.url === undefined || body.title === undefined) {
            return response.status(400).json({ error: 'url or title missing' })
        }

        const blog = new Blog({
            ...body,
            likes: body.likes === undefined ? 0 : body.likes
        })
        const result = await blog.save()
        response.status(201).json(result)
    } catch (exception) {
        console.log(exception)
        response.status(500).json({ error: 'something went wrong...' })
    }
})

module.exports = blogsRouter