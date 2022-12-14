import React from "react";
import styled from 'styled-components';
import heart from '../assests/heart.png';
import more_icon from '../assests/more_icon.png';
import share from '../assests/share.png'



const Posts = (props) => {
    console.log(props)
    const { name, location, likes, description, postImage, date } = props.usersData;
    return (
        <Container>
            <div className="main1">
                <div className="block1">
                    <div className="innerblock1 flex j-between">
                        <div>{name}</div>
                        <div><img src={more_icon} alt="img"></img></div>
                    </div>

                    <div className="innblock1">{location}</div>
                </div>
                <div className="imgblock flex a-center j-center" ><img src={postImage} alt="img"></img></div>
                <div className="block3 flex j-between">
                    <div className="flex innerblock3 ">
                        <div><img src={heart} alt="img"></img></div>
                        <div><img src={share} alt="img"></img></div>
                    </div>
                    <div className="date">{date}</div>
                </div>
                <div className="block4">{`${likes} likes`}</div>
                <div className="block5">{description}</div>
            </div>
        </Container>

    )
}

export default Posts;

const Container = styled.div`
margin-top: 50px;
margin-left: 400px;
width: 600px;
height: 500px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #707070;
border-radius: 10px;
opacity: 1;
.main1{
    margin-bottom:20px;
}
.block1{
    margin-top:10px;
    margin-left:20px;
    margin-right:20px
    height: 60px;
    opacity: 1;
}
.innerblock1{
    text-align: left;
    font: normal normal bold 20px/24px Helvetica;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
.innblock1{
    text-align: left;
    font: normal normal normal 24px/29px Verdana;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1;
}
.imgblock{
    margin-top:20px
  
    width:598.9px;
    height:275px;
    
    border: 1px solid #707070;
    opacity: 1;
}
.imgblock img{
   
    height:275px
}

.block3{
    margin-top:10px;
    margin-left:20px;
    margin-right:20px
}
.innerblock3{
    gap:20px;
}
.block4{
    margin-top:10px;
    margin-left:20px;
    margin-right:20px
    text-align: left;
    font: normal normal normal 16px/20px Verdana;
    letter-spacing: 0px;
    color: #707070;
    opacity: 1
}
.date{
    text-align: left;
    font: normal normal normal 20px/24px Verdana;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1;
}
.block5{
    margin-top:10px;
    margin-left:20px;
    margin-right:20px;
    margin-bottom:10px;
    text-align: left;
    font: normal normal bold 16px/20px Helvetica;
    letter-spacing: 0px;
    color: #000000;
    opacity: 1
}
`