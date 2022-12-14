import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Nav from '../components/nav'
import { useNavigate } from 'react-router-dom';


export default function Form() {
    const [userData, setuserData] = useState({ image: "", author: "", location: "", description: "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData)
        await fetch('https://insta-api-60gi.onrender.com/posts', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name: userData.author,
                location: userData.location,
                description: userData.description,
                image: userData.image,
            })

        }
        ).then((res) => {
            res.json()
        }).then((data) => {
            console.log("userRegistered")
        }).catch((err) => {
            console.log(err)
        })
        navigateToPost()
    }

    const navigateToPost = () => {
        navigate('/PostView')
    }
    const handleChange = (e) => {

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setuserData({ ...userData, image: reader.result })
        }


    }
    return (
        <>
            <Nav />
            <Container>

                <form className='flex a-center j-center main' >
                    <div>
                        <div className='flex block1'>

                            <div><input type="file" onChange={e => handleChange(e)}></input></div>

                        </div>
                        <div className='flex j-between'>
                            <div className='text'><input type="text" placeholder="Author" name='author' value={userData.author} onChange={(e) => setuserData({ ...userData, [e.target.name]: e.target.value })} ></input></div>
                            <div><input className='text' type="text" placeholder="location" name="location" value={userData.location} onChange={(e) => setuserData({ ...userData, [e.target.name]: e.target.value })}></input></div>
                        </div>
                        <div className='des'><input id="des" type="text" placeholder="description" name='description' value={userData.description} onChange={(e) => setuserData({ ...userData, [e.target.name]: e.target.value })}></input></div>
                        <div className='flex a-center j-center'><button className='btnpost' onClick={(e) => handleSubmit(e)}>Post</button></div>
                    </div>
                </form>
            </Container>
        </>
    );
}
const Container = styled.div`

margin-top: 100px;
margin-left:400px;
width: 600px;
height: 250px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
opacity: 1;
.main{
    margin-top:30px
}
.block1{
    margin-top: 15px;
    
    width: 400px;
    height: 32px;
/* UI Properties */
    background: #FFFFFF 0% 0% no-repeat padding-box;
    
    border-radius: 5px;
   opacity: 1;

}
 input{
    height:21px
 }
.des{
    margin-top:20px;
    width: 400px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
  
    border-radius: 5px;
    opacity: 1
}
#des{
    width:400px;
}
.text{
    margin-top:15px;
}
.btnpost{
    text-align: left;
    font: normal normal normal 18px/22px Verdana;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
    margin-top:15px
}
`