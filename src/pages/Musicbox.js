import '../assets/stylesheets/Musicbox.css'


const Musicbox = () => {
    
    
    const createanimation = index => {
        let object = document.querySelector(`img[id="${index+1}"]`)
      console.log(object)
        object.style.animation = 'appear 1s ease-out'
        setTimeout(() => {
            
            object.style.animation = 'dissappear 0.2s ease-in'
       
          }, 1500);
      
 
      }
    
     

    const handleClick = (event) => {    
        
        let keyElement = event.currentTarget.className;
        const sounds = document.querySelectorAll(".sound");
        playsound(keyElement,sounds);
      };
    
    const playsound = (key,sounds) => {
        
        let index=key[3]-1
        if (index<0) return ;
        sounds[index].currentTime = 0;
          sounds[index].play();
          createanimation(index);
    }
    

  return (
    <div className='musicbox_main_wrapper'>
        <header>
      <h1 className='musicbox_h1'>Tap Music</h1>
      <p className='musicbox_p'>Create sounds with just one tap</p>
    </header>
     
    <div className="pads">
      <div className="pad1" onClick={handleClick}>
        <div className="img">
            <img id="1" src="/musicbox/pad1.png" alt=''></img>
        </div>
        <audio src="/musicbox/bubbles.mp3" className="sound" />
      </div>
      <div className="pad2" onClick={handleClick}>
        <div className="img">
            <img id="2" src="/musicbox/pad2.png" alt=''></img>
        </div>
        <audio className="sound">
          <source src="/musicbox/clay.mp3" />
        </audio>
      </div>
      <div className="pad3" onClick={handleClick}>
        <div className="img">
            <img id="3" src="/musicbox/pad3.png" alt=''></img>
        </div>
        <audio className="sound">
          <source src="/musicbox/confetti.mp3" />
        </audio>
      </div>
      <div className="pad4" onClick={handleClick}>
        <div className="img">
            <img id="4" src="/musicbox/pad4.png" alt=''></img>
        </div>
        <audio className="sound">
          <source src="/musicbox/glimmer.mp3" />
        </audio> 
      </div>
      <div className="pad5" onClick={handleClick}>
        <div className="img">
            <img id="5" src="/musicbox/pad5.png" alt=''></img>
        </div>
        <audio className="sound">
          <source src="/musicbox/moon.mp3" />
        </audio>
      </div>
      <div className="pad6" onClick={handleClick}>
        <div className="img">
            <img id="6" src="/musicbox/pad6.png" alt=''></img>
        </div>
        <audio className="sound">
          <source src="/musicbox/ufo.mp3" />
        </audio>
      </div>
    </div>
    </div>
  )
}

export default Musicbox