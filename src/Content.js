import { useEffect, useState } from "react"



// 1. useEffect(callback)
// - goi callback moi khi component re-render
// - goi callback sau khi component them element vao DOM
// 2. useEffect(callback, [])
// - chi goi callback sau khi component mounted
// 3. useEffect(callback, [deps])

// ------------
// 1. callback luon duoc goi sau khi component mounted

function Content() {

    // 1. useEffect(callback)

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])



    return (
        <div>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post =>
                    <li key={post.id}>
                        {post.title}
                    </li>)}
            </ul>
        </div>
    )
}

export default Content