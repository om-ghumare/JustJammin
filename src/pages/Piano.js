import "../assets/stylesheets/Piano.css";
import { useEffect } from "react";

const Piano = () => {
  const removeKeyTransition = (e) => {
    if (e.propertyName !== "transform") return;

    e.target.classList.remove("piano_active");
  };

  const handleClick = (event) => {
    let keyElement = event.currentTarget.id;
    playNote(keyElement);
  };
  useEffect(() => {
    document.addEventListener("keydown", play_sound, true);
  }, []);

  const playNote = (key) => {
    let keyElement = document.querySelector(`div[piano-data-key="${key}"]`);

    if (!keyElement) return;

    const audioElement = document.querySelector(`audio[piano-data-key="${key}"]`);

    audioElement.currentTime = 0;
    audioElement.play();

    keyElement.classList.add("piano_active");
    keyElement.addEventListener("animationing", removeKeyTransition);
    setTimeout(() => {
      keyElement.classList.remove("piano_active");
      keyElement.removeEventListener("animationing", removeKeyTransition);
    }, 100);
  };
  const play_sound = (e) => {
    let keyCode = e.keyCode;

    playNote(keyCode);
  };

  return (
    <div className="piano_main_wrapper">
      <p className="head_piano">PIANO</p>
      <div className="piano">
        <div piano-data-key={83} id="83" className="piano_key white" onClick={handleClick}>
          S
        </div>
        <div piano-data-key={69} id="69" className="piano_key black" onClick={handleClick}>
          E
        </div>
        <div piano-data-key={68} id="68" className="piano_key white" onClick={handleClick}>
          D
        </div>
        <div piano-data-key={82} id="82" className="piano_key black" onClick={handleClick}>
          R
        </div>
        <div piano-data-key={70} id="70" className="piano_key white" onClick={handleClick}>
          F
        </div>
        <div piano-data-key={71} id="71" className="piano_key white" onClick={handleClick}>
          G
        </div>
        <div piano-data-key={89} id="89" className="piano_key black" onClick={handleClick}>
          Y
        </div>
        <div piano-data-key={72} id="72" className="piano_key white" onClick={handleClick}>
          H
        </div>
        <div piano-data-key={85} id="85" className="piano_key black" onClick={handleClick}>
          U
        </div>
        <div piano-data-key={74} id="74" className="piano_key white" onClick={handleClick}>
          J
        </div>
        <div piano-data-key={73} id="73" className="piano_key black" onClick={handleClick}>
          I
        </div>
        <div piano-data-key={75} id="75" className="piano_key white" onClick={handleClick}>
          K
        </div>
      </div>
      <audio piano-data-key={83} src="/piano/C.mp3" />
      <audio piano-data-key={69} src="/piano/Db.mp3" />
      <audio piano-data-key={68} src="/piano/D.mp3" />
      <audio piano-data-key={82} src="/piano/Eb.mp3" />
      <audio piano-data-key={70} src="/piano/E.mp3" />
      <audio piano-data-key={71} src="/piano/F.mp3" />
      <audio piano-data-key={89} src="/piano/Gb.mp3" />
      <audio piano-data-key={72} src="/piano/G.mp3" />
      <audio piano-data-key={85} src="/piano/Ab.mp3" />
      <audio piano-data-key={74} src="/piano/A.mp3" />
      <audio piano-data-key={73} src="/piano/Bb.mp3" />
      <audio piano-data-key={75} src="/piano/B.mp3" />
    </div>
  );
};

export default Piano;
