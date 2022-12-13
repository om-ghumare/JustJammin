import "../assets/stylesheets/Piano.css";
import { useEffect } from "react";

const Piano = () => {
  const removeKeyTransition = (e) => {
    if (e.propertyName !== "transform") return;

    e.target.classList.remove("active");
  };

  const handleClick = (event) => {
    let keyElement = event.currentTarget.id;
    playNote(keyElement);
  };
  useEffect(() => {
    document.addEventListener("keydown", play_sound, true);
  }, []);

  const playNote = (key) => {
    let keyElement = document.querySelector(`div[data-key="${key}"]`);

    if (!keyElement) return;

    const audioElement = document.querySelector(`audio[data-key="${key}"]`);

    audioElement.currentTime = 0;
    audioElement.play();

    keyElement.classList.add("active");
    keyElement.addEventListener("animationend", removeKeyTransition);
    setTimeout(() => {
      keyElement.classList.remove("active");
      keyElement.removeEventListener("animationend", removeKeyTransition);
    }, 100);
  };
  const play_sound = (e) => {
    let keyCode = e.keyCode;

    playNote(keyCode);
  };

  return (
    <div className="main_wrapper">
      <p className="head_piano">PIANO</p>
      <div className="piano">
        <div data-key={83} id="83" className="key white" onClick={handleClick}>
          S
        </div>
        <div data-key={69} id="69" className="key black" onClick={handleClick}>
          E
        </div>
        <div data-key={68} id="68" className="key white" onClick={handleClick}>
          D
        </div>
        <div data-key={82} id="82" className="key black" onClick={handleClick}>
          R
        </div>
        <div data-key={70} id="70" className="key white" onClick={handleClick}>
          F
        </div>
        <div data-key={71} id="71" className="key white" onClick={handleClick}>
          G
        </div>
        <div data-key={89} id="89" className="key black" onClick={handleClick}>
          Y
        </div>
        <div data-key={72} id="72" className="key white" onClick={handleClick}>
          H
        </div>
        <div data-key={85} id="85" className="key black" onClick={handleClick}>
          U
        </div>
        <div data-key={74} id="74" className="key white" onClick={handleClick}>
          J
        </div>
        <div data-key={73} id="73" className="key black" onClick={handleClick}>
          I
        </div>
        <div data-key={75} id="75" className="key white" onClick={handleClick}>
          K
        </div>
      </div>
      <audio data-key={83} src="/piano/C.mp3" />
      <audio data-key={69} src="/piano/Db.mp3" />
      <audio data-key={68} src="/piano/D.mp3" />
      <audio data-key={82} src="/piano/Eb.mp3" />
      <audio data-key={70} src="/piano/E.mp3" />
      <audio data-key={71} src="/piano/F.mp3" />
      <audio data-key={89} src="/piano/Gb.mp3" />
      <audio data-key={72} src="/piano/G.mp3" />
      <audio data-key={85} src="/piano/Ab.mp3" />
      <audio data-key={74} src="/piano/A.mp3" />
      <audio data-key={73} src="/piano/Bb.mp3" />
      <audio data-key={75} src="/piano/B.mp3" />
    </div>
  );
};

export default Piano;
