import styled from 'styled-components'

//Header
export const HeaderArea = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background-color: crimson;
padding: 20px 60px;
margin-bottom: 70px;


a{
    text-decoration: none;
    color: white;

    &:hover{
        cursor: pointer;
        text-decoration: underline;

    }
}
`

//cart
export const ProductArea = styled.div`
display: flex;
gap: 50px;
flex-wrap: wrap;
justify-content: center;
align-items: center;
margin-bottom: 70px;
margin-top:20px ;
div{
height: 320px;
width: 230px;
border: 1px solid rgb(194,193,193);
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 20px;

button{
    font-size: 25px;
    background: transparent;
    border: none;
    color: crimson;
}
 }
`
