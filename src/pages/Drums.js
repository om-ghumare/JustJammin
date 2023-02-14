import '../assets/stylesheets/Drums.css'
import {  useEffect } from "react";

const Drums = () => {

    const playingClass = 'playing'


    const animateCrashOrRide = () => {
        const crashRide = document.getElementById('crash-ride')
        
        crashRide.style.transform = 'rotate(0deg) scale(1.5)';
        crashRide.addEventListener('transitionend', removeCrashRideTransition);
	
    }
    const animateHiHatClosed = () => {
        const hiHatTop = document.getElementById('hihat-top');
        hiHatTop.style.top = '171px';
        hiHatTop.addEventListener('transitionend', removeHiHatTopTransition);
        
    }

    const removeCrashRideTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.style.transform = 'rotate(-7.2deg) scale(1.5)';
	};

	const removeHiHatTopTransition = e => {
		if(e.propertyName !== 'top') return;

		e.target.style.top = '166px';
	};	

	const removeKeyTransition = e => {
		if(e.propertyName !== 'transform') return;

		e.target.classList.remove(playingClass)
	};

    
    
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

		switch(keyCode) {
			case 82:
				animateCrashOrRide();
				break;
			case 75:
				animateHiHatClosed();
				break;
            default:
                break;
		}

		keyElement.classList.add(playingClass);


        const drumKeys = Array.from(document.querySelectorAll('.drum_key'));

	drumKeys.forEach(key => {
		key.addEventListener('transitionend', removeKeyTransition);
	});
    

       
    }

    
  return (
    <div className="Drums">
        
  <main>
    <h1 className="drums_main-title"> Drum Kit</h1>
    <section className="drums_main-wrapper">
      <div className="key-map-wrapper">
        <h2>Key Mapping</h2>
        <ul className="key-map-list">
          <li>
            <kbd className="key-code">E</kbd>
            <span className="key-sound">Crash</span>
          </li>
          <li>
            <kbd className="key-code">R</kbd>
            <span className="key-sound">Ride</span>
          </li>
          <li>
            <kbd className="key-code">F</kbd>
            <span className="key-sound">Floor tom</span>
          </li>
          <li>
            <kbd className="key-code">G</kbd>
            <span className="key-sound">Mid tom</span>
          </li>
          <li>
            <kbd className="key-code">H</kbd>
            <span className="key-sound">High tom</span>
          </li>
          <li>
            <kbd className="key-code">V</kbd>
            <kbd className="key-code">B</kbd>
            <span className="key-sound">Kick</span>
          </li>
          <li>
            <kbd className="key-code">J</kbd>
            <span className="key-sound">Snare</span>
          </li>
          <li>
            <kbd className="key-code">I</kbd>
            <span className="key-sound">Hi-Hat Open</span>
          </li>
          <li>
            <kbd className="key-code">K</kbd>
            <span className="key-sound">Hi-Hat Closed</span>
          </li>
          <li>
            <kbd className="key-code">M</kbd>
            <span className="key-sound">Cowbell</span>
          </li>
        </ul>
      </div>
      
      <div className="drum-kit-wrapper">
        <img
          id="crash-ride"
          className="crash-cymbal"
          src={`${process.env.PUBLIC_URL}/drums/crash.png`}
          alt="Crash cymbal"
        />
        <img
          id="hihat-top"
          className="hihat-top-cymbal"
          src={`${process.env.PUBLIC_URL}/drums/hihat-top.png`}
          alt="Hi Hat cymbal"
        />
        <img className="drum-kit" src={`${process.env.PUBLIC_URL}/drums/drum-kit.png`} alt="Drum Kit" />
        <div data-key={74} className="drum_key snare">
          <kbd>J</kbd>
        </div>
        <div data-key={66} className="drum_key kick">
          <kbd>B</kbd>
        </div>
        <div data-key={86} className="drum_key kick2">
          <kbd>V</kbd>
        </div>
        <div data-key={72} className="drum_key tom-high">
          <kbd>H</kbd>
        </div>
        <div data-key={71} className="drum_key tom-mid">
          <kbd>G</kbd>
        </div>
        <div data-key={70} className="drum_key tom-low">
          <kbd>F</kbd>
        </div>
        <div data-key={69} className="drum_key crash">
          <kbd>E</kbd>
        </div>
        <div data-key={82} className="drum_key ride">
          <kbd>R</kbd>
        </div>
        <div data-key={73} className="drum_key hihat-open">
          <kbd>I</kbd>
        </div>
        <div data-key={75} className="drum_key hihat-close">
          <kbd>K</kbd>
        </div>
        <div data-key={77} className="drum_key cowbell">
          <kbd>M</kbd>
        </div>
      </div>
      <div className="cowbell"></div>
    </section>
  </main>
  <audio data-key={74} src={`${process.env.PUBLIC_URL}/drums/snare.wav`} />
  <audio data-key={66} src={`${process.env.PUBLIC_URL}/drums/kick.wav`} />
  <audio data-key={86} src={`${process.env.PUBLIC_URL}/drums/kick.wav`} />
  <audio data-key={72} src={`${process.env.PUBLIC_URL}/drums/tom-high.wav`} />
  <audio data-key={71} src={`${process.env.PUBLIC_URL}/drums/tom-mid.wav`} />
  <audio data-key={70} src={`${process.env.PUBLIC_URL}/drums/tom-low.wav`} />
  <audio data-key={69} src={`${process.env.PUBLIC_URL}/drums/crash.wav`} />
  <audio data-key={82} src={`${process.env.PUBLIC_URL}/drums/ride.wav`} />
  <audio data-key={73} src={`${process.env.PUBLIC_URL}/drums/hihat-open.wav`} />
  <audio data-key={75} src={`${process.env.PUBLIC_URL}/drums/hihat-close.wav`} />
  <audio data-key={77} src={`${process.env.PUBLIC_URL}/drums/cowbell.mp3`} />


    </div>
  )
}




export default Drums