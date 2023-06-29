import React from 'react';
import {useNavigate} from "react-router-dom";




const PromotionCard =(props)=>{
    const navigate= useNavigate()




    return(
        <>
        <div  className="popup ">
            <div  className="popup-inner">
                {/*<div style={{backgroundImage: 'url()'}} className="popup-inner">*/}

                <div className={'row'}>
                    <div className={'col'}>
                        <div className={'row'}>
                            <div className={'col'}>
                                <div style={{textAlign:'center'}} className={'row'}>

                                    <h2>{props.promo.header}</h2>

                                </div>

                                <div style={{textAlign:'center'}} className={'row'}>
                                    <div style={{wordWrap: "break-word"}} className={'col'}>

                                        {props.promo.content}


                                    </div>
                                </div>

                                <div  style={{textAlign:'center', paddingTop:'2vh'}} className={'row'}>
                                    <div className={'col'}>
                                        <button onClick={()=>navigate(props.promo.buttonNav)} style={{backgroundColor:props.promo.buttonColor}} className={"btn btn-primary"}>
                                            {props.promo.buttonContent}
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    {props.promo.image?
                        <div className={'col'}>
                            <img src={props.promo.image}/>
                        </div>:''
                    }


                </div>
            </div>
        </div>


        </>


    )

}
export default PromotionCard