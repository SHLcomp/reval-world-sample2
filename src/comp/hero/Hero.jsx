import './Hero.scss';
import logo from '../../assets/bg3.png'
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="top">
            <h1>Collaborate Now with <span>Reval</span> World</h1>
            <div className="sub-text">
                <p>Ready to bring your dreams to life?</p>
                <p>Contact us now</p>
                <Link className='a' to='/contact'><h5 className="ctaH5"><i className="fa-brands fa-whatsapp"></i>contact</h5></Link>
            </div>
        </div>
        <div className="hero-img">
            <img src={logo} alt="" loading='lazy' />
            {/* either this or just import the img dircetly not via Js */}
        </div>
    </div>
  )
}
