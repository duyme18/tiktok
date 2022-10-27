import { useEffect, useImperativeHandle } from 'react'
import Video from './Video'
import { useRef } from 'react'

function App() {

  const videoRef = useRef()

  useEffect(()=>{
    console.log(videoRef)
  })
  const handlePlay = () => {
    videoRef.current.play()
  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  return (
    <>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button  onClick={handlePause}>Pause</button>
    </>
  )
}

export default App 