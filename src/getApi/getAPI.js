export let postsData = async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await res.json()
    return data
}