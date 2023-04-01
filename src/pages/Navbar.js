import React, { useState } from 'react'
import { BsFacebook,BsYoutube } from 'react-icons/bs';
import { GiHamburgerMenu} from 'react-icons/gi';
import { Link } from 'react-router-dom';
const NavStlye = ()=>{
    return (
        <style>
            {`
            .main-div{
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 10px 5%;
            }
            .logo{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .menu-link{
                display: flex;
                justify-content: center;
                align-items: center;
                padding-top:10px;
                z-index:2000;
            }
            .menu-link ul{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            ul li{
                list-style: none;
                margin:0px 15px;
            }
            ul li a{
                display:inline-block;
                text-decoration: none;
                color: #333333;
                text-transform: capitalize;
            }
            .social-media {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .social-media .social-media-desktop{
                padding-top:10px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .social-media-desktop li{
                margin:0px 5px;
            }
            .social-media .hamburger-menu{
                display: none;
            }
            @media only screen and (max-width:998px){
                .social-media .social-media-desktop{
                    display: none;
                }
                .menu-link {
                    transition: all 0.5s linear;
                    display:none;
                }
                .social-media .hamburger-menu{
                    display: block;
                }
                .mobile-menu-link{
                    background-color: #ffffff;
                    top: 60px;
                    left: 0px;
                    width: 100%;
                    position: absolute;
                    display: flex;
                    align-items: start;
                    justify-content: start;
                }
                
                .menu-link ul li{
                    margin: 15px;
                }
                .mobile-menu-link ul{
                    display:flex;
                    flex-direction:column;
                    align-items: start;
                    justify-content: start;
                }
            }
            `}
        </style>
    )
}
const Navbar = () => {
    const [showMediaIcon,setShowMediaIcon] = useState(false);
  return (
    <>
      <div className="main-div">
        <div className="logo">
            <h2>
                myTour
            </h2>
        </div>
        <div className={showMediaIcon ? "menu-link mobile-menu-link":"menu-link"}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/corporate">corporate</Link></li>
                <li><Link to="/conditions">terms & conditions</Link></li>
            </ul>
        </div>
        <div className="social-media">
            <ul className='social-media-desktop'>
                <li><Link to="https://www.youtube.com/watch?v=LHPZUO7rn_o" target="_blank"><BsFacebook/></Link></li>
                <li><Link to="https://www.youtube.com/watch?v=LHPZUO7rn_o" target="_blank"><BsYoutube/></Link></li>
            </ul>
            <div className="hamburger-menu">
            <Link to="#" onClick={()=>setShowMediaIcon(!showMediaIcon)} className='text-decoration-none text-dark'><GiHamburgerMenu/></Link>
            </div>
        </div>
      </div>
      <NavStlye/>
    </>
  )
}

export default Navbar
