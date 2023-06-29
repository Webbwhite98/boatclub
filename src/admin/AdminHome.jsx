import React, {useEffect, useState} from 'react';
import {Divider} from "antd/lib";
import {useNavigate} from "react-router-dom";
import AdminNav from "./AdminNav";

const AdminHome =()=>{
    const navigate = useNavigate()
    const [content, setContent] = useState(null)
    const [headerHomeContent, setHeaderHomeContent] = useState(null)
    const [aboutHomeContent, setAboutHomeContent]= useState(null)
    const [fleetHomeContent, setFleetHomeContent] = useState(null)
    const [boatClubHomeContent, setBoatClubHomeContent] = useState(null)

    const [headerHomeOBJ, setHeaderHomeOBJ] = useState(null)
    const [aboutHomeOBJ, setAboutHomeOBJ]= useState(null)
    const [fleetHomeOBJ, setFleetHomeOBJ] = useState(null)
    const [boatClubHomeOBJ, setBoatClubHomeOBJ] = useState(null)




    // const handleContent =async () => {
    //     await getPageContent('Home').then(r => setContent(r))
    //
    // }

    // useEffect(()=>{
    //     handleContent()
    // },[])
    useEffect(()=>{
        if(content){
            content.map(item=>{
                if(item.title==='header-home'){
                    setHeaderHomeContent(item.content)
                    setHeaderHomeOBJ(item)
                }
                if(item.title==='about-home'){
                    setAboutHomeContent(item.content)
                    setAboutHomeOBJ(item)
                }
                if(item.title==='fleet-home'){
                    setFleetHomeContent(item.content)
                    setFleetHomeOBJ(item)
                }
                if(item.title==='boat-club-home'){
                    setBoatClubHomeContent(item.content)
                    setBoatClubHomeOBJ(item)
                }
            })
        }
    },[content])



    const handleTextUpdate  = async(obj, update)=>{

        let itemObj = obj;
        itemObj.content = update;



        // try{
        //     let tmp =  await API.graphql({
        //         query: updateContent,
        //         variables: {
        //             input: itemObj
        //         },
        //     })
        //         .then(res=>{
        //             console.log(res)
        //             localStorage.removeItem('Home')
        //             window.location.reload();
        //         })
        //
        //
        //
        //
        // }
        // catch (e) {
        //     console.error(e)
        // }



    }


    return(

        <>
            <AdminNav/>
            <div className={'container'}>
                <div style={{marginTop:'2vh', marginBottom:'2vh'}} className={'row'}>
                    <div className={'col'}>
                        Welcome Admin user
                    </div>
                </div>


                            <div style={{marginTop:'2vh', marginBottom:'2vh'}} className={'row'}>

                                    <span>Home Header Text</span> <br/>
                                    <textarea onChange={(e)=>setHeaderHomeContent(e.target.value)} value={headerHomeContent} />
                                    <br/>
                                    <div style={{paddingTop:'2vh'}} className={'col'}>
                                        <button onClick={()=>handleTextUpdate(headerHomeOBJ, headerHomeContent)} className={'btn btn-danger'}>Submit</button>
                                    </div>

                            </div>
                            <Divider/>

                <div style={{marginTop:'2vh', marginBottom:'2vh'}} className={'row'}>

                    <span>About Home Text</span> <br/>
                    <textarea onChange={(e)=>setAboutHomeContent(e.target.value)} value={aboutHomeContent} />
                    <br/>
                    <div style={{paddingTop:'2vh'}} className={'col'}>
                        <button onClick={()=>handleTextUpdate(aboutHomeOBJ, aboutHomeContent)} className={'btn btn-danger'}>Submit</button>
                    </div>

                </div>
                <Divider/>

                <div style={{marginTop:'2vh', marginBottom:'2vh'}} className={'row'}>

                    <span>Fleet Home Text</span> <br/>
                    <textarea onChange={(e)=>setFleetHomeContent(e.target.value)} value={fleetHomeContent} />
                    <br/>
                    <div style={{paddingTop:'2vh'}} className={'col'}>
                        <button onClick={()=>handleTextUpdate(fleetHomeOBJ, fleetHomeContent)} className={'btn btn-danger'}>Submit</button>
                    </div>

                </div>
                <Divider/>

                <div style={{marginTop:'2vh', marginBottom:'2vh'}} className={'row'}>

                    <span>CBC list Home Text <small>Need to figure this one out</small></span> <br/>
                    <textarea onChange={(e)=>setBoatClubHomeContent(e.target.value)} value={boatClubHomeContent} />
                    <br/>
                    <div style={{paddingTop:'2vh'}} className={'col'}>
                        <button onClick={()=>handleTextUpdate(boatClubHomeOBJ, boatClubHomeContent)} className={'btn btn-danger'}>Submit</button>
                    </div>

                </div>
                <Divider/>








            </div>

        </>

    )
}
export default AdminHome