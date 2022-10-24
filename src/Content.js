import { useCallback, useEffect, useLayoutEffect, useState } from "react"

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DUM (muutated)
// 3. Render lại UI 
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect useCallback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DUM (muutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect useCallback (sync)
// 5. Render lại UI

function Content() {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    })
    const handleRun = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}

export default Content