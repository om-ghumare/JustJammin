import "../index.css";
import "../assets/stylesheets/Navbar.css";
import { useReactMediaRecorder } from "react-media-recorder";
import { BsFillRecordCircleFill, BsFillStopCircleFill } from "react-icons/bs";

import { Link } from "react-router-dom";
const Navbar = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ screen: true });
  return (
    <div className="navbar_main">
      <div className="nav_head">
        <Link className="nav_logo" to="home">
          <img src={require("../assets/images/logo.png")} alt="logo" />
          <div className="nav_title" href="">
            {" "}
            Just Jammin'
          </div>
        </Link>
      </div>
      <div className="navi" >
        {mediaBlobUrl && status === "stopped" && (
          <a href={mediaBlobUrl} download={"video.mp4"} className="button downloadButton">
            Download Video
          </a>
        )}

        {(status === "idle" || status === "stopped") && (
          <button onClick={startRecording} className="button">
            <BsFillRecordCircleFill fill="#2dfb2d" size={23} />
          </button>
        )}
        {status === "recording" && (
          <button onClick={stopRecording} className="button">
            <BsFillStopCircleFill fill="#f34040" size={23} />
          </button>
        )}
        <ul class="nav">
          <li className="item">
            <Link to="home">Home</Link>
          </li>
          <li className="item">
            <Link to="drums">Drums</Link>
          </li>
          <li className="item">
            <Link to="piano">Piano</Link>
          </li>
          <li className="item">
            <Link to="guitar">Guitar</Link>
          </li>
          <li className="item">
            <Link to="musicbox">Musicbox</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
