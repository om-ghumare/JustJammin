import "../assets/stylesheets/Guitar.css";
import { useEffect } from "react";

const Guitar = () => {


    useEffect(() => {
        document.addEventListener('keydown',play_sound,true);
      
      }, [])
      const play_sound = (e) => {
   
        let keyCode=e.keyCode;
        let keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
      
		if(!keyElement) return;

		const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
        
      
		audioElement.currentTime = 0;
		audioElement.play();
      }
  return (
    <div className=" guitar_main_wrapper">
        <p className="guitar_head">Guitar</p>

<div className="guitar_wrap">
  <div className="guitar_notes">
    <ul>
      <li className="guitar_note">D &rarr; E low</li>
      <li className="guitar_note">F &rarr; B</li>
      <li className="guitar_note">G &rarr; G</li>
      <li className="guitar_note">H &rarr; D </li>
      <li className="guitar_note">J &rarr; A </li>
      <li className="guitar_note">K &rarr; E high </li>
    </ul>
  </div>

  <div className="guitar_main"></div>
    </div>

  <audio data-key={68} src={`${process.env.PUBLIC_URL}/guitar/Elow.mp3`} />
  <audio data-key={70} src={`${process.env.PUBLIC_URL}/guitar/B.mp3`} />
  <audio data-key={71} src={`${process.env.PUBLIC_URL}/guitar/G.mp3`} />
  <audio data-key={72} src={`${process.env.PUBLIC_URL}/guitar/D.mp3`} />
  <audio data-key={74} src={`${process.env.PUBLIC_URL}/guitar/A.mp3`} />
  <audio data-key={75} src={`${process.env.PUBLIC_URL}/guitar/Ehigh.mp3`} />




  <div data-key={68}  />
  <div data-key={71}  />
  <div data-key={70} />
  <div data-key={72} />
  <div data-key={74}  />
  <div data-key={75}  />
    </div>
    



  )
}

export default Guitar