const supertest = require('supertest')
const { app, server } = require('../index')
const api = supertest(app)

const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12
    },
    {
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7
    },
    {
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5
    },
    {
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10
    },
    {
        title: "TDD harms architecture",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
        likes: 0
    }
]

blogNotInInitialBlogs = {
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2
}

blogWithoutAUrl = {
    title: "Type wars",
    author: "Robert C. Martin",
    likes: 2
}

beforeAll(async () => {
    await Blog.remove({})

    const blogObjects = initialBlogs.map(blog => new Blog(blog))
    const promiseArray = blogObjects.map(blog => blog.save())
    await Promise.all(promiseArray)
})

describe('get all blogs', () => {

    test('are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('returns all blogs', async () => {
        const response = await api
            .get('/api/blogs')
        expect(response.body.length).toBe(initialBlogs.length)
    })

    test('response contains a specific blog', async () => {
        const response = await api
            .get('/api/blogs')

        const urls = response.body.map(blog => blog.url)

        expect(urls).toContain(initialBlogs[0].url)
    })
})

describe('adding', () => {

    test('a valid blog is succesful', async () => {
        const newBlog = new Blog(blogNotInInitialBlogs)
        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const response = await api
            .get('/api/blogs')

        const urls = response.body.map(blog => blog.url)
        expect(urls).toContain(blogNotInInitialBlogs.url)
        expect(urls.length).toBe(initialBlogs.length + 1)
    })

    test('a blog without a url fails', async () => {
        const responseBefore = await api
            .get('/api/blogs')

        const newBlog = new Blog(blogWithoutAUrl)

        await api
            .post('/api/blogs')
            .send(newBlog)
            .expect(400)

        const responseAfter = await api
            .get('/api/blogs')
        
        expect(responseAfter.body.length).toBe(responseBefore.body.length)
    })
})

afterAll(() => {
    server.close()
})