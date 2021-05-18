import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    background-color : Red;
    color:black;
    padding:16px;
    position:absolute;
    top:50px;
    left:500px;
    z-index:999;
    transition : top 0.5s ease;
    border-radius: 5px;

`;
export default class Alert   extends Component {

    render(){
        return(
            <Container><b>Error</b>: Invalid Authentication </Container>
        );
    }
}