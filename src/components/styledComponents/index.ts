import { styled } from "styled-components";

export const HeaderDiv = styled.div`
    // background : transparent;
    background-color:  rgb(140 140 140 / 10%);
    background-color: rgba(0, 0, 0, 0.8);
    position : relative;
    top : 0;
    z-index : 10;
    width : 100%;
    height : 60px;
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 0 10%;

    a {
        color : white;
        margin : 0 10px;
    }
`

export const HeaderSubDiv = styled.div`
    display: flex;
    justify-content : space-between;
    align-items : center;
    cursor : pointer;
    p {
        margin : 0 20px;
    };
    div {
        margin : 0 20px;
    }

    @media screen and (max-width : 680px){
        p {
            display : none;
        }
    }

    
`

export const ProfileIcon = styled.img`
    width : 35px;
    height : 35px;
    border-radius : 50%;
    background-color : white;
`

export const InputDiv = styled.div`
    display : flex;
    justify-content : space-even;
    align-items : center;
    border : 1px solid grey;
    border-radius : 5px;
    width : 200px;
    height : 30px;
    padding : 5px;
    input {
        border : none;
        background : transparent;
        width : 100%;
        color : white;
        &:focus{
            outline : none;
        }
    }

    @media screen and (max-width : 450px){
        display : none;
    }
`

export const HamburgerDiv = styled.div`
    display : none;
    @media screen and (max-width : 680px){
        display : block;
    }
`

export const LoaderDiv = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    height : 100vh;
    width : 100vw;
    background-color : black;
`

export const LoaderSubDiv = styled.div`
    border: 2px solid white;
    border-top: 2px solid #007bff; 
    border-radius: 50%;
    width: 15px;
    height: 15px;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
` 

export const MovieCardImg = styled.img`
    width : 250px;
    height : 140px;
    margin : 10px;
    cursor : pointer;
    border-radius : 8px;

    @media screen and (max-width : 650px){
        width : 150px;
        height : 100px;
    }

    @media screen and (max-width : 450px){
        width : 100px;
        height : 80px;
    }
`