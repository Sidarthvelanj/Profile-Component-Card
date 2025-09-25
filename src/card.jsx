import Profilepic from './assets/profile.jpg';

function Card() {
  return (
    <div className="page">
      <div className="card">
        <div className="card-header">
          <div className="top-gradient">
            <img src={Profilepic} alt="Profile" className="avatar" />
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Sidarth Velan</h2>
          <p className="card-text">
            Project Engineer Intern , Elfonze Technologies
            <br />
            Btech Computer Science and Engineering ,<br /> 
             SRM Institute of Science and Technology
            <br />
            Js | React | Python | C++ | HTML | CSS 
        
          </p>
          <a
             href="https://www.linkedin.com/in/sidarth-velan-70724bbb"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
            > Contact Me
            </a>
        </div>
      </div>
    </div>
  );
}

export default Card;