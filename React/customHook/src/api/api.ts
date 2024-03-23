const fetchPosts = async() => {
    const response = await fetch("http://localhost:3000/posts?_sort=-id")
    const postData = response.json();
    return postData;
}
export { fetchPosts };
