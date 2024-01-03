import {styled} from 'styled-components';

export const MainDiv = styled.div<{imgSrc? : string, mobileBgUrl? : string}>`
    height : 70vh;
    width : 100%;
    background-image : url(${(props : any) => props.imgSrc});
    background-repeat : no-repeat;
    background-size : cover;
    background-position : center;
    background-attachment: fixed;
    display : flex;
    flex-direction : column;
    justify-content : space-between;

    @media screen and (max-width : 576px){
        background-image : url(${(props : any) => props.mobileBgUrl});
        height : 60vh;
    }
`

export const SubDiv = styled.div`
    background-image : linear-gradient(180deg, transparent, rgba(24,24,24,.546875) 38.26%,#000000 92.82%,#000000 98.68%,#000000 108.61%);
    padding : 50px 100px;
    width: 100%;
    color : white;

    h1 {
        font-size : 40px;
        opacity : 0.7;
    }

    p{
        margin : 20px 0;
        font-style : italic;
    }
    button {
        background-color : red;
        color : white;
        border : none;
        border-radius : 5px;
        padding : 10px 20px;
        cursor : pointer;
        a {
            color : white;
            text-decoration : none;
        }
    }
    @media screen and (max-width : 576px){
        padding : 30px;
    }
`