import styled from "styled-components";

export const Dictionary =styled.div`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`;
export const Nav =styled.div`
  height: 150px;
  width: 100%;
  background-color:red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 49px;

  span{
    height: 100px;
    width: 300px;
    color: #000;
    font-size: 60px;
    font-weight: bold;
    background-color: #fff;
    text-align: center;
    margin-right: 10px;
  }


`;
export const Container = styled.div`
width: 1100px;
margin: auto;
display: flex;
justify-content: space-between;
`;
export const Content =styled.div`
  height: 140px;
  width: 500px;
  margin-top: 40px;
  border: 2px solid lightgrey;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: 3px;
  select{
    font-size: 14px;
    font-family: sans-serif;
    margin: 20px 0;
    width: fit-content;
    
  }
input{
  height: 30px;
  border: none;
  font-size: 18px;
  outline: none;
  width: 80%;
}
`;
export const ContentText = styled.p`
font-size: 20px;
font-family: sans-serif;
`;

export const Translation =styled.div`
  margin: auto;
  margin-top: 20px;
`;

export const ResponseWrapper =styled.div`
  margin: auto;
  margin-top: 20px;
  div{
   margin: 1px;
  }
`;
export const Text= styled.div`
font-size: 18px;
font-weight: 600;
`;
export const TranslatedText= styled.div`
color: #565692;
font-size: 16px;
font-weight: 500;
padding-left: 21px;

`;
export const Pronounciation = styled.div`
color: lightgrey;
font-size: 15px;
`;

export const Pos = styled.div`
color: gray;
font-size: 15px;

`;

export const FirstRow =styled.div`
display: flex;
`;

export const Tr= styled.div`
`;
export const Syn = styled.div`

`;
export const Gen = styled.div`

`;

