import { useEffect, useState } from "react"

function Content() {
    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown(prevState => prevState - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content