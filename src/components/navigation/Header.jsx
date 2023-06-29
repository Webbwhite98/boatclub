import React, {useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import logo from '../../img/logo.jpg'
import {CloseOutlined, MenuOutlined} from "@ant-design/icons";
const Header=()=>{

    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const navigate= useNavigate();


    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };


    return(
        <>
            <header className={"navbar navbar-expand-sm flex-md-row bd-navbar"}>



                    <img onClick={()=>navigate(`/`)} className={"navbar-brand"} src={logo} alt={'logo'}/>

                <div className={'navbar-nav-scroll'}>
                    <ul className={'nav justify-content-end'}>
                        <li className={'nav-item'}>
                            <NavLink to={"/"} className={'menu__link'} exact={true}>Home</NavLink>
                        </li>
                    </ul>
                </div>

                <div className={'navbar-nav-scroll'}>
                    <ul className={'nav justify-content-end'}>
                        <li className={'nav-item'}>
                            <NavLink to={"/about-us"} className={'menu__link'} exact={true}>Our Fleet</NavLink>
                        </li>
                    </ul>
                </div>

                <div className={'navbar-nav-scroll'}>
                    <ul className={'nav justify-content-end'}>
                        <li className={'nav-item'}>
                            <NavLink to={"/company"} className={'menu__link'} exact={true}>Services</NavLink>
                        </li>
                    </ul>
                </div>

                <div className={'navbar-nav-scroll'}>
                    <ul className={'nav justify-content-end'}>
                        <li className={'nav-item'}>
                            <NavLink to={"/blog"} className={'menu__link'} exact={true}>FAQs</NavLink>
                        </li>
                    </ul>
                </div>
                <div className={'navbar-nav-scroll'}>
                    <ul className={'nav justify-content-end'}>
                        <li className={'nav-item'}>
                            <NavLink to={"/contact-us"} className={'menu__link'} exact={true}>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>

                <div className={'navbar-nav-scroll'}>
                    <ul className={'nav justify-content-end'}>
                        <li className={'nav-item'}>
                            <NavLink to={"/contact-us"} className={'menu__link'} exact={true}>Referrals</NavLink>
                        </li>
                    </ul>
                </div>

                <div className={'navbar-nav-scroll'}>
                    <ul className={'nav justify-content-end'}>
                        <li className={'nav-item'}>
                            <NavLink to={"/contact-us"} className={'menu__link'} exact={true}>Pricing</NavLink>
                        </li>
                    </ul>
                </div>



                <div className={'header-mobile'}>

                    <div style={{paddingRight:'2vw'}} onClick={()=> toggleMobileNav()}>
                        {mobileNavOpen ? <CloseOutlined style={{ fontSize: '30px', color: 'black' }} /> : <MenuOutlined style={{ fontSize: '30px', color: 'black' }} />}
                    </div>

                    {mobileNavOpen ?
                        <nav className="mobile-nav">
                            <img  className={"mobile-nav-img"} src={logo} alt={'logo'}/>
                            <ul>
                                <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/"} className={'menu__link'} exact={true}>Home</NavLink></li>
                                <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/about-us"} className={'menu__link'} exact={true}>Our Fleet</NavLink></li>
                                <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/company"} className={'menu__link'} exact={true}>Services</NavLink></li>
                                <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/blog"} className={'menu__link'} exact={true}>FAQs</NavLink></li>
                                <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/contact-us"} className={'menu__link'} exact={true}>Contact Us</NavLink></li>
                                <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/blog"} className={'menu__link'} exact={true}>Referrals</NavLink></li>
                                <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/blog"} className={'menu__link'} exact={true}>Pricing</NavLink></li>

                            </ul>
                        </nav>:''
                    }
                </div>




            </header>
        </>
    );

}
export default Header;