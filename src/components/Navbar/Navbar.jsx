// import logo from '../../assets/logo1.svg';
import './Navbar.css';
import Logo from '../logo/Logo';
import { useEffect, useState } from 'react';


export default function Navbar(){

    const [isBlackBackground,setBackground] = useState(false);


    useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 0) {

              setBackground(true);
          } else {
              setBackground(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };

  }, []);


  return (
    <div className={`navbar ${isBlackBackground ? 'black-bg' : 'white-bg'}`}>
      <div className="nav-left">
        <Logo />
      </div>
      <div className="nav-right">
        <ul>
          <li>Serivices</li>
          <li>Solutions</li>
          <li>Industries</li>
          <li>Works</li>
          <li>About</li>
          <li>Careers</li>
          <li className='contact'>Contact</li>
        </ul>
        </div>
        <div className="nav-icons">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-bookmark"></i>
          <i className="fa-solid fa-bars"></i>
        </div>
    </div>
  );
}