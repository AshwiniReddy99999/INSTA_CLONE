import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import styled from 'styled-components';
import Nav from '../components/nav'
import Posts from '../components/Posts';


export default function PostView() {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
      fetch('https://insta-api-60gi.onrender.com/getPosts')
          .then(response => response.json())
          .then(function (myJson) {
             
              setPosts(myJson)
          });
         

  }, [])
  console.log(posts)
  return (
      <Container>
      <Nav/>
      {posts.slice(0).reverse().map((element,index) => {
          return <Posts key={index} usersData={element}/>
       })}
      </Container>
  );
}
const Container = styled.div``

