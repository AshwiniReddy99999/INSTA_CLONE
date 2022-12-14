import React from 'react';
import styled from 'styled-components';
import lens from '../assests/lens-1418954.png'
import { useNavigate } from 'react-router-dom';

export default function Landing_page() {
  const navigate = useNavigate();
  const handleEnter=()=>{
      navigate('/PostView')
  }
  return (
    <Container className='flex '>
      <div className='team1'><img src={lens} alt='img'></img></div>
      <div className='flex column a-center j-center team innertext'>
        <div ><h1>10x Team 04</h1></div>
        <div><button className='enterbtn' onClick={handleEnter}>Enter</button></div>
      </div>
    </Container>
  )
}


const Container = styled.div`

.team1{

margin-top:40px;
margin-left:360px;
width: 400px;
height:600px;

background: transparent url('lens-1418954.png') 0% 0% no-repeat padding-box;
border: 1px solid #707070;
opacity: 1;
}
.team1 img{
  width: 400px;
  height: 600px;
}

.team{

  margin-top:40px;
  left: 200px;
  width: 400px;
  height: 600px;
  
  

  opacity: 1;
  }
  .innertext{
    text-align: left;
    font-palatino;
    letter-spacing: 0px;
    color: #006238;
    opacity: 1
  }
  .enterbtn{
    text-align: left;
    font: normal normal normal 32px/39px Verdana;
    letter-spacing: 0px;
    color: #006238;
    opacity: 1;
    border-radius:0.5rem;
    border: 1px solid #006238;
  }




`;
