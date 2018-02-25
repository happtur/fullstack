const mongoose = require('mongoose')

const url = 'mongodb://@ds247078.mlab.com:47078/blogilista'

mongoose.connect(url)

const Blog = mongoose.model('Blog', {
    title: String,
    author: String,
    url: String,
    likes: Number
  })

module.exports = Blog