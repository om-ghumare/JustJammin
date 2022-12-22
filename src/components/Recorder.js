import React from 'react'
// import { ReactMediaRecorder } from "react-media-recorder";

import { useReactMediaRecorder } from "react-media-recorder";
import {BsFillRecordCircleFill, BsFillStopCircleFill} from "react-icons/bs"


const Recorder = () => {
    const {
		status,
		startRecording,
		stopRecording,
		mediaBlobUrl
	} = useReactMediaRecorder({  screen: true });
  return (
    <header className=''>

    {mediaBlobUrl && status === 'stopped' && (
        <a href={mediaBlobUrl} download={"video.mp4"} className="">
            Download Video
        </a>
    )}

    {(status === 'idle' || status === 'stopped') && (
        <button onClick={startRecording} className="">
            <BsFillRecordCircleFill fill="#2dfb2d" size={23} />
        </button>
    )}
    {status === 'recording' && (
        <button onClick={stopRecording} className="">
            <BsFillStopCircleFill fill="#f34040" size={23} />
        </button>
    )}
    </header>

  )
}

export default Recorder
