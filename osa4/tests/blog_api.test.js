const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)
const { initialBlogs, blogNotInInitialBlogs, blogWithoutALikesValue, blogWithoutAUrl, blogWithoutATitle, blogForDeletion,
    nonExistingId, blogsInDb } = require('./test_helper')
const Blog = require('../models/blog')

describe.skip('when there are some blogs saved', () => {
    beforeAll(async () => {
        await Blog.remove({})

        const blogObjects = initialBlogs.map(blog => new Blog(blog))
        const promiseArray = blogObjects.map(blog => blog.save())
        await Promise.all(promiseArray)
    })

    test('all blogs are returned as json by GET /api/blogs', async () => {
        const blogsBefore = await blogsInDb()

        const response = await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)

        expect(response.body.length).toBe(blogsBefore.length)

        const urls = response.body.map(blog => blog.url)
        blogsBefore.forEach((blog) => {
            expect(urls).toContain(blog.url)
        })
    })
})

describe.skip('addition of a new blog', () => {

    test('POST /api/blogs succeeds with valid data', async () => {
        const blogsBefore = await blogsInDb()

        const newBlog = new Blog(blogNotInInitialBlogs)
        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const notesAfter = await blogsInDb()

        const urls = notesAfter.map(blog => blog.url)
        expect(urls).toContain(blogNotInInitialBlogs.url)
        expect(urls.length).toBe(blogsBefore.length + 1)
    })

    test('POST /api/blogs fails with proper statuscode if url is missing', async () => {
        const blogsBefore = await blogsInDb()

        const newBlog = new Blog(blogWithoutAUrl)

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(400)

        const blogsAfter = await blogsInDb()

        expect(blogsAfter.length).toBe(blogsBefore.length)
    })

    test('POST /api/blogs fails with proper statuscode if url is missing', async () => {
        const blogsBefore = await blogsInDb()

        const newBlog = new Blog(blogWithoutATitle)

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(400)

        const blogsAfter = await blogsInDb()

        expect(blogsAfter.length).toBe(blogsBefore.length)
    })

    test('the value of likes is set to 0 if not specified', async () => {
        const newBlog = new Blog(blogWithoutALikesValue)
        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(201)

        const blogsAfter = await blogsInDb()

        const addedBlog = blogsAfter.find(blog => blog.url === blogWithoutALikesValue.url)
        expect(addedBlog.likes).toBe(0)
    })
})

describe.skip('deletion of a blog', () => {
    let addedBlog

    beforeAll(async () => {
        addedBlog = new Blog(blogForDeletion)
        await addedBlog.save()
    })

    test('DELETE /api/blogs/:id succeeds with proper status code', async () => {
        const blogsBefore = await blogsInDb()

        await api
            .delete(`/api/blogs/${addedBlog._id}`)
            .expect(204)
        
        const blogsAfter = await blogsInDb()

        const urls = blogsAfter.map(blog => blog.url)
        expect(urls).not.toContain(addedBlog.url)
        expect(blogsAfter.length).toBe(blogsBefore.length - 1)
    })
})

afterAll(() => {
    server.close()
})