import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../../img/logo.jpg";
import {
    CompassOutlined,
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    PhoneOutlined,
    YoutubeOutlined
} from "@ant-design/icons";

const Footer=()=>{
    const navigate = useNavigate()


    return(
        <>

            <footer className="footer-distributed">

                <div className="footer-left">


                        <img  className={"footer-img"} src={logo} alt={'logo'}/>


                    <p className="footer-links">
                        <NavLink to={"/"} className={'menu__link'} exact={true}>Home</NavLink>

                        <NavLink to={"/about-us"} className={'menu__link'} exact={true}>Our Fleet</NavLink>

                        <NavLink to={"/company"} className={'menu__link'} exact={true}>Services</NavLink>

                        <NavLink to={"/blog"} className={'menu__link'} exact={true}>FAQs</NavLink>

                        <NavLink to={"/contact-us"} className={'menu__link'} exact={true}>Contact Us</NavLink>

                        <NavLink to={"/contact-us"} className={'menu__link'} exact={true}>Referrals</NavLink>

                        <NavLink to={"/contact-us"} className={'menu__link'} exact={true}>Pricing</NavLink>
                    </p>

                    <p className="footer-company-name">Cherokee Boat Club © 2023</p>
                </div>

                <div className="footer-center">
                    <span >Location</span>

                    <div>

                        <i className="fa fa-map-marker"><CompassOutlined /></i>
                        <p><span>450 Cherokee Dock Rd. #500</span> Lebanon, TN 37087</p>
                    </div>

                    <div>
                        <i className="fa fa-map-marker"> <PhoneOutlined  /></i>

                        <p>615-285-8423</p>
                    </div>



                </div>

                <div className="footer-right">

             <p className="footer-company-about">
                        <span>About the company</span>
                        We are a Small Business that Provides a wide variety Boat Club Services to our Customers. Join today!
                    </p>

                    <div className="footer-icons">

                        <a href="#"><i className="fa fa-facebook">
                            <FacebookOutlined />
                        </i></a>
                        <a href="#"><i className="fa fa-twitter">
                            <LinkedinOutlined />
                        </i></a>
                        <a href="#"><i className="fa fa-linkedin">
                            <YoutubeOutlined />
                        </i></a>
                        <a href="#"><i className="fa fa-github">
                            <InstagramOutlined />
                        </i></a>

                    </div>

                </div>

            </footer>

        </>

    )
}
export default Footer