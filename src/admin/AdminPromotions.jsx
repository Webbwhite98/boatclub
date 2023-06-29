import React , {useEffect, useState} from 'react';
// import {getPageContent, getPromotions} from "../functions/reusable";
import {useNavigate} from "react-router-dom";
// import {API} from "aws-amplify";
// import {createPromotion, deletePromotion, updateContent, updatePromotion} from "../graphql/mutations";
import {Divider} from "antd";
import PromotionCard from "../components/models/PromotionCard";
// import {withAuthenticator} from "@aws-amplify/ui-react";
import AdminNav from "./AdminNav";


const AdminPromotions =()=>{
    const [promotions, setPromotions] = useState([])
    const [promoID, setPromoID] = useState(null)
    const [promoHeader, setPromoHeader] = useState(null)
    const [promoContent, setPromoContent] = useState(null)
    const [promoButton, setPromoButton] = useState(false)
    const [promoButtonNav, setPromoButtonNav] = useState(null)
    const [promoImage, setPromoImage] = useState(null)
    const [promoButtonContent, setPromoButtonContent] = useState(null)
    const [promoButtonColor, setPromoButtonColor] = useState(null)

    const [showForm, setShowForm] = useState(false)

    // const handleContent =async () => {
    //     await getPromotions().then(r => setPromotions(r))
    //
    // }
    //
    // useEffect(()=>{
    //     handleContent()
    // },[])

    console.log(promotions)


    const navigate= useNavigate()

    const addPromotion= async ()=>{

        let promoOBJ={
            // id: promoID,
            header:promoHeader,
            content: promoContent,
            button: promoButton,
            buttonColor: promoButtonColor,
            buttonNav: promoButtonNav,
            buttonContent: promoButtonContent,
            image:promoImage

        }


        try{
            // let tmp =  await API.graphql({
            //     query: createPromotion,
            //     variables: {
            //         input: promoOBJ
            //     },
            // })
            //     .then(res=>{
            //         console.log(res)
            //
            //         window.location.reload();
            //     })
            //



        }
        catch (e) {
            console.error(e)
        }
    }


    const removePromotion= async (promoOBJ)=>{

    let idOBJ={
        id:promoOBJ.id
    }


        try{
            // let tmp =  await API.graphql({
            //     query: deletePromotion,
            //     variables: {
            //         input: idOBJ
            //     },
            // })
            //     .then(res=>{
            //         console.log(res)
            //
            //         window.location.reload();
            //     })




        }
        catch (e) {
            console.error(e)
        }
    }


    return(

        <>
            <AdminNav/>

            <div style={{marginTop:'10vh'}} className={'container'}>
                <div className={'row'}>
                    <button onClick={()=>setShowForm(!showForm)} className={"btn btn-primary"}>{showForm ? 'Cancel':'Add Promotion'}</button>
                </div>

                {showForm?

                    <div className={'container-lg'}>
                        <div className={'row'}>
                            <div className={'col'}>
                                <label>Header</label>
                                <input className={'form-control'} onChange={(e)=>setPromoHeader(e.target.value)} value={promoHeader ? promoHeader:''}/>
                            </div>
                        </div>
                        <Divider/>
                        <div className={'row'}>
                            <div className={'col'}>
                                <label>Content</label>
                                <textarea className={'form-control'} onChange={(e)=>setPromoContent(e.target.value)} value={promoContent ? promoContent:''}/>
                            </div>
                        </div>
                        <Divider/>
                        <div className={'row'}>
                            <div className={'col'}>

                                <input onChange={(e)=>setPromoButton(!promoButton)} className="form-check-input" type="checkbox" value={!!promoButton} id="flexCheckDefault"/>
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Add Button?
                                </label>
                            </div>
                        </div>
                        {promoButton?
                            <>
                                <div className={'row'}>
                                    <div className={'col'}>

                                        <label>Button Content</label>
                                        <input className={'form-control'} onChange={(e)=>setPromoButtonContent(e.target.value)} value={promoButtonContent ? promoButtonContent:''}/>
                                    </div>
                                    <div className={'col'}>
                                        <label>Button Color</label>
                                        <input className={'form-control'} onChange={(e)=>setPromoButtonColor(e.target.value)} value={promoButtonColor ? promoButtonColor:''}/>
                                    </div>
                                    <div className={'col'}>
                                        <label>Go to Page </label>
                                        <input className={'form-control'} onChange={(e)=>setPromoButtonNav(e.target.value)} value={promoButtonNav ? promoButtonNav:''}/>
                                    </div>
                                </div>
                            </>:''
                        }
                        <Divider/>
                        <div className={'row'}>
                            <div className={'col'}>
                                <label>image url</label>
                                <input className={'form-control'} onChange={(e)=>setPromoImage(e.target.value)} value={promoImage ? promoImage:''}/>
                            </div>
                        </div>
                        <Divider/>
                        <div className={'row'}>
                            <button onClick={()=>addPromotion()} className={'btn btn-success'}>Create Promotion</button>
                        </div>
                    </div>:''
                }
                <div style={{paddingTop:'2vh',paddingBottom:'2vh' }} className={'row'}>
                    <Divider/>
                    <h2>Current Promotions - {promotions.length}</h2>
                    {promotions.length>0 ? promotions.map(item=>(
                        <>
                            <div style={{textAlign:'center'}} className={'container'}>
                                <div className={'row'}>
                                    <button onClick={()=>removePromotion(item)} className={'btn btn-success'}>Delete Promotion</button>

                                </div>
                                <PromotionCard promo={item}/>

                            </div>
                            <Divider/>


                        </>

                    )):''}
                </div>



            </div>
        </>
    )


}
export default AdminPromotions