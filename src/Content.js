import { useEffect, useState } from "react"



// 1. useEffect(callback)
// - goi callback moi khi component re-render
// - goi callback sau khi component them element vao DOM
// 2. useEffect(callback, [])
// - chi goi callback sau khi component mounted
// 3. useEffect(callback, [deps])
// - callback se duoc goi lai moi khi deps thay doi

// ------------
// 1. callback luon duoc goi sau khi component mounted

const tabs = ['posts', 'comments', 'albums']

function Content() {

    // 1. useEffect(callback)

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])



    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color:'#fff',
                        backgroundColor:'#333',
                    } : {}}
                    onClick={() => {
                        setType(tab)
                    }}
                >
                    {tab}
                </button>
            ))}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post =>
                    <li key={post.id}>
                        {post.title || post.name}
                    </li>)}
            </ul>
        </div>
    )
}

export default Content