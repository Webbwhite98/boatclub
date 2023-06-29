import React, {useEffect, useState} from 'react';

import homeboat from '../../img/homeboat.jpg';
import waterbackground from '../../img/backgroundwater.gif'
import caro1 from '../../img/caro1.jpg'
import caro2 from '../../img/caro2.jpg'
import caro3 from '../../img/caro3.jpg'
import caro4 from '../../img/caro4.jpg'
import wakesurf from '../../img/wakesurf.jpg'
import {Carousel, Divider} from 'antd';
import logo from "../../img/logo.jpg";

import PromotionCard from "../models/PromotionCard";
const Home =()=>{
    const [content, setContent] = useState(null)
    const [promotions, setPromotions] = useState([])

    const handleContent =async () => {
        // await getPageContent('Home').then(r => setContent(r))
        // await getPromotions().then(r => setPromotions(r))
    }

    useEffect(()=>{
            // handleContent()
    },[])

useEffect(()=>{
    console.log(content)
}, [content])









    return(
        <>

                <div style={{backgroundColor:'#dadada'}}>
                    <div className={'parallax'} style={{backgroundImage:`url(${homeboat}`}}>
                        <div className={'container'}>

                            <div style={{paddingTop:"10%", paddingLeft:'15%', paddingRight:'10%'}} >
                                <span className={'home-h'}>
                                    Boating Without Owning.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div style={{marginRight:'5%', marginLeft:'5%', marginTop:'4vh', marginBottom:'4vh', backgroundColor: 'rgba(48,48,48)'}} className={'row'}>

                        <div  className={'row'}>
                            <div>
                                <div className={'container'}>



                                                <h1 className={'home-h1'}>A Boating Experience Like No Other</h1>

                                                <div style={{color:'white', paddingBottom:'4vh'}}>

                                                    At Cherokee Boat Club, we provide the Gallatin, Lebanon, and Nashville, TN areas with a luxury, unique, and care-free boating experience tailored to your needs.
                                                    We have upfront pricing with no hidden fees. We are also the only locally owned boat club in the Nashville area

                                                </div>



                                </div>




                            </div>

                        </div>
                    </div>







                    <div style={{marginTop:'4vh', marginBottom:'4vh'}} className={'row'}>
                        <div className={'col'}>

                            <Carousel autoplay>
                                {/*{promotions.length>0 ? promotions.map(item=>(*/}
                                {/*    <div>*/}
                                {/*        <div style={{textAlign:'center'}} className={'container'}>*/}
                                {/*            <PromotionCard promo={item}/>*/}
                                {/*        </div>*/}

                                {/*    </div>*/}

                                {/*)):''}*/}


                            </Carousel>

                        </div>
                    </div>




                    <div style={{marginRight:'10%', marginLeft:'10%', marginTop:'8vh', marginBottom:'8vh', backgroundColor: 'rgba(48,48,48)'}} className={'row'}>

                        <div className={' img-fluid col'}>
                            <img  className={' img-fluid'}  src={wakesurf}/>
                        </div>
                        <div className={'col'} style={{textAlign:'center'}}>




                                        <h1 style={{color:'white', fontSize:'54px', lineHeight:'1.35em', textAlign:'center'}}>Cherokee Boat Club</h1>


                                        <div style={{color:'white', paddingBottom:'4vh'}}>

                                            <div style={{color:'white', paddingBottom:'4vh', textAlign:'center'}}>
                                               Welcome to luxury
                                                <div className={'row'}>
                                                    <div style={{paddingTop:'5%'}} className={'col'}>
                                                        <button className={'btn btn-success'}> Learn More</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>






                    </div>



                    </div>


                    <div style={{marginRight:'5%', marginLeft:'5%', marginTop:'4vh', marginBottom:'4vh', backgroundColor: 'rgba(48,48,48)'}} className={'row'}>

                        <div  className={'row'}>
                            <div>
                                <div className={'container'}>

                                    <h1 className={'home-h1'}>We Make Boating Easy and Hassle-Free

                                    </h1>

                                    <div style={{color:'white', paddingBottom:'4vh', textAlign:'center'}}>
                                        {/* {((item.list).split('@')).map(item1=>(
                                                    {item1}
                                                        ))}*/}
                                        <li>Unlimited Access to the Fleet</li>
                                        <li>Reserve a boat with a click or call</li>
                                        <li>Boats in the water ready for use</li>
                                        <li>No cleaning, storage, or maintenance</li>
                                        <li>No prior boating experience required</li>
                                        <li>Open Year-Round!</li>
                                    </div>


                                </div>




                            </div>

                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col'}>
                            <div style={{textAlign:'center'}} className={'container'}>
                                <iframe src="https://player.vimeo.com/video/745573344?h=2abd42957b" width="640" height="360"
                                        frameBorder="0" allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen></iframe>

                            </div>
                        </div>
                    </div>





                </div>
        </>
    )
}
export default  Home