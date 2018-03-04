let token = null

const blogs = [{
    "title": "finally dasdasdone",
    "author": "Martin Fowler",
    "url": "https://martinfowler.com/bliki/ContinuousIntegrationCertification.html",
    "likes": 0
}, {
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
}, {
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2
}]

const getAll = () => {
    return Promise.resolve(blogs)
}

export default { getAll, blogs }