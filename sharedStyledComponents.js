import styled from "styled-components";

//Buttons
const ButtonContainer = styled.div`
  display: flex;
  gap: .4rem;
  flex-direction: row;
  min-height: fit-content;
  width: 100%;
  align-content: center;
  align-items: flex-start;
  border-radius: 4px;
`;

const StandardButton = styled.button`
text-align: center;
font-size: .95rem;
font-weight: 400; 
flex-grow: 1;
margin: .1rem 0 .1rem 0;
padding: 0.3rem;
width: ${({ $width }) => $width? `${$width}px` : "2.5rem"};
min-width: fit-content;
height: 1.8rem;
border-radius: 4px;
border: 1px solid darkorange;
background-color: #fffffc;
`;


//Basic
const StandardParagraph = styled.p`
color: #fffffc;
font-size: 1rem;
width: 80%;
margin: .4rem;
padding: .4rem;

`;

const Headline1 = styled.h1` 
color: #fffffc;
font-size: 1.3rem;
font-weight: 600; 
margin: 1.2rem .4rem .4rem;
padding: .4rem;
`;


const Headline2 = styled.h2`
color: #fffffc;
font-size: 1.05rem;
font-weight: 600; 
margin: .4rem;
padding: .4rem;
`;


//Basic-wrapper
const FlexRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const FlexColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;


//Form
const StandardLabel = styled.label`
 text-align: left;   
 font-size: 0.95rem;
  width: 100%;
  margin: 0;
  padding: .3rem .3rem .3rem 0;
`;

const StyledNrInput = styled.input`
  font-size: 0.8rem;
  width: 4rem;
  margin: 0.2rem;
  padding: .2rem;
  border-radius: 4px;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  min-width: 3rem;
  width: ${({ $width }) => $width? `${$width}px` : "6rem"};
  height: 1.8rem;
  margin: .2rem 0 .2rem .2rem;
  padding: 0
  border: 1px solid darkorange;

`;

export {
    ButtonContainer,
    FlexRowWrapper,
    FlexColumnWrapper,
    Headline1,
    Headline2,
    StyledInput,
    StyledNrInput,
    StandardLabel,
    StandardButton,
    StandardParagraph
  }