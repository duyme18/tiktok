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
// 2. cleanup function luôn được gọi trước khi component unmounted

/**
 * 1. Update DOM
 * 2. Call api
 * 3. listen DOM events
 * - scroll
 * - resize
 * 4. clean up
 * - remove listener/ unsubscribe
 * - clea timers
 * 
 */

const tabs = ['posts', 'comments', 'albums']

function Content() {

    // 1. useEffect(callback)

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
            // setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            {tabs.map(tab => (
                <button
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333',
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
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go to Top
                </button>
            )
            }
        </div >
    )
}

export default Content