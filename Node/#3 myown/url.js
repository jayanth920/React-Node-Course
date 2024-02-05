// const url = require('url')

const myUrl = new URL("https://www.google.com/hello.html?id=100&status=active")

myUrl.searchParams.append('abc', '123')
console.log((myUrl.searchParams))