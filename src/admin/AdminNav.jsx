import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../img/logo.jpg";
import {CloseOutlined, MenuOutlined} from "@ant-design/icons";

const AdminNav =()=>{


    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const navigate= useNavigate();


    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };




    return(

    <>
        <header style={{backgroundColor:'lightblue'}} className={"navbar navbar-expand-sm flex-md-row bd-navbar"}>




           <div style={{marginLeft:'2vw'}}>
               <span><strong>ADMIN</strong></span>
           </div>

            <div className={'navbar-nav-scroll'}>
                <ul className={'nav justify-content-end'}>
                    <li className={'nav-item'}>
                        <NavLink to={"/admin"} className={'menu__link'} exact={true}>Admin Home</NavLink>
                    </li>
                </ul>
            </div>

            <div className={'navbar-nav-scroll'}>
                <ul className={'nav justify-content-end'}>
                    <li className={'nav-item'}>
                        <NavLink to={"/promotions"} className={'menu__link'} exact={true}>Promotions</NavLink>
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
                            <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/admin"} className={'menu__link'} exact={true}>Admin Home</NavLink></li>
                            <li><NavLink onClick={()=>setMobileNavOpen(!mobileNavOpen)} to={"/promotions"} className={'menu__link'} exact={true}>Promotions</NavLink></li>


                        </ul>
                    </nav>:''
                }
            </div>




        </header>
    </>
)


}
export default AdminNav;