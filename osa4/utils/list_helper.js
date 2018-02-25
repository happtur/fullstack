const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((sum, current) => sum + current.likes, 0)
}

/* const favoriteBlog = (blogs) => {
    let blogWithMostLikes = 0
    let mostLikes = 0

    blogs.forEach((blog) => {
        if(blog.likes > mostLikes) {
            blogWithMostLikes = blog
            mostLikes = blog.likes
        }
    })

    return blogWithMostLikes
} */

const favoriteBlog = (blogs) => {
    let blogWithMostLikes = 0

    const reducer = (mostLikes, current) => {
        if(current.likes > mostLikes) {
            blogWithMostLikes = current
            return current.likes
        }
        return mostLikes
    }

    blogs.reduce(reducer, 0)
    return blogWithMostLikes
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}