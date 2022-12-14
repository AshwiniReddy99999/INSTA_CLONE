import React from 'react';
import styled from 'styled-components';
import icon from '../assests/icon.png';
import camera from '../assests/camera.png';
import { useNavigate } from 'react-router-dom';
 
export default function Nav() {
    const navigate = useNavigate();
    const navigateToForm=()=>{
        navigate('/form')
    }
  return (
    <Container>
        <div className='flex j-between j-center a-center'>
            <div className='flex icon j-center a-center'>
                <div className='iconImage'><img src={icon} alt="icon"></img></div>
                <div className='heading'><h1>InstaClone</h1></div>
            </div>
            <div className='camera'><img src={camera} alt="camera" onClick={navigateToForm}></img></div>
        </div>
    </Container>
  );
}
const Container=styled.div`
margin-top: 0px;
left: 0px;
height: 104px;
border: 1px solid #707070;

opacity: 1;
.icon{
    margin-top: 5px;
    margin-left: 200px;
    width: 287px;
    height: 85px;
    gap:10px;
    
}
.iconImage{
    margin-top: 21px;
    
    width: 64px;
    height: 64px;
}
.heading{
    margin-top: 9px;
    
    width: 287px;
    height: 85px;
}
.camera{
    margin-top: 36px;
    margin-right:200px;
    width: 48px;
    height: 48px;
}
`