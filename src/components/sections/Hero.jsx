import ContactBtn from '../ContactBtn';
import profileS from '../../assets/images/image-profile-mobile.webp';
import profileM from '../../assets/images/image-profile-tablet.webp';
import profileL from '../../assets/images/image-profile-desktop.webp';
import circle from '../../assets/images/pattern-circle.svg';
import rings from '../../assets/images/pattern-rings.svg';
import { useContext } from 'react';
import GlobalContext from '../../context/context';

const Hero = () => {
  const { windowSize } = useContext(GlobalContext);
  const setProfilePhoto = (windowSize) => {
    if (windowSize.desktop) {
      return profileL;
    } else if (windowSize.tablet) {
      return profileM;
    } else if (windowSize.mobile) {
      return profileS;
    }
  };
  return (
    <div
      className="container"
      id="hero"
    >
      <div className="box photo">
        <img
          src={setProfilePhoto(windowSize)}
          alt=""
        />
      </div>
      <div className="box hero-text">
        <h1>
          Nice to meet you! I’m <span>Adam Keyes</span>.
        </h1>
        <p>
          Based in the UK, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <ContactBtn />
      </div>
      <div className="circle">
        <img
          src={circle}
          alt="circle"
        />
      </div>
      <div className="rings">
        <img
          src={rings}
          alt="rings"
        />
      </div>
    </div>
  );
};

export default Hero;
