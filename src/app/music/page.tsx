'use client'
import { useRef, useState } from "react"
import Image from "next/image"
import Header from '../components/Header'

export default function Home() {

  const [isPlaying, setIsPlaying] = useState(false)
  const audioref = useRef<HTMLAudioElement | null>(null);
  const audioref1 = useRef<HTMLAudioElement | null>(null);
  
  const handlePlayOrPause = () => {
    if(isPlaying) {
      audioref.current?.pause() // Use optional chaining here
      setIsPlaying(!isPlaying) // false
    }
    else {
      audioref.current?.play() // Use optional chaining here
      setIsPlaying(!isPlaying) // true
    }
  }

  return (
   <>
      <Header />
      <audio 
        ref = {audioref}
        src="UnFichierMp3.mp3"
        className="nativeAudioPlayer"
        controls
      ></audio>
      {isPlaying ? (
        <p onClick={() => handlePlayOrPause()}><button>Pause</button></p>
      ) : (
        <p onClick={() => handlePlayOrPause()}><button>Play</button></p>
      )}

      <div><h3>Player Audio</h3></div>
      
      <audio
        ref = {audioref1}
        src="UnFichierMp3.mp3"
        className="nativeAudioPlayer-1"
        controls
      ></audio>
      <br/>
      <Image
        src="https://images.dog.ceo/breeds/labradoodle/Cali.jpg"
        width={900}
        height={675}
        alt="Dog"
      />
   </>
  )
}
