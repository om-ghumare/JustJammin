import "../assets/stylesheets/Guitar.css";

const Guitar = () => {
  return (
    <div className=" main_wrapper">
        <p className="guitar_head">Guitar</p>

  <div className="notes">
    <ul>
      <li className="note">D=E low=&gt;</li>
      <li className="note">G=B=&gt;</li>
      <li className="note">F=G=&gt;</li>
      <li className="note">H=D=&gt;</li>
      <li className="note">J=A=&gt;</li>
      <li className="note">K=E high=&gt;</li>
    </ul>
  </div>
  <div className="guitar">
    <div data-note="El" className="key string" />
    <div data-note="B" className="key string" />
    <div data-note="G" className="key string" />
    <div data-note="D" className="key string" />
    <div data-note="A" className="key string" />
    <div data-note="Eh" className="key string" />
  </div>
  <audio id="El" src="Elow.mp3" />
  <audio id="B" src="B.mp3" />
  <audio id="G" src="G.mp3" />
  <audio id="D" src="D.mp3" />
  <audio id="A" src="A.mp3" />
  <audio id="Eh" src="Ehigh.mp3" />
    </div>
  )
}

export default Guitar