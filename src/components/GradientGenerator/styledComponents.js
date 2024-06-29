import styled from 'styled-components'

export const GradientContainer = styled.div`
    background-image:linear-gradient(${props => props.gradientValue});
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    
`
export const GradientHeading = styled.h1`
   color:#ffffff;
   font-size:38px;
   font-weight:500;
   font-family:"Roboto";
   margin-bottom:20px;
   @media screen and (max-width:767px) {
      font-size:30px;
      text-align:center;
      margin-bottom:15px;
    }
`
export const GradientParagraph = styled(GradientHeading)`
   color:#ededed;
   font-size:26px;
   font-weight:400;
   @media screen and (max-width:767px) {
      font-size:22px;
    }
`
export const CustomUnorderdList = styled.ul`
   list-style-type:none;
   display: flex;
   margin-bottom:20px;
   @media screen and (max-width:767px) {
      flex-wrap:wrap;
      margin-bottom:15px;
    }
`
export const ColorMainContainer = styled.div`
   display: flex;
`
export const ColorContainer = styled.div`
   display: flex;
   flex-direction:column;
   margin:25px
`

export const ColorLabel = styled.p`
  color:#ffffff;
   font-size:18px;
   font-weight:500;
  font-family:"Roboto";
  margin-bottom:10px;
  text-align:center;
`

export const ColorInput = styled.input`
   height:50px;
   width:100px;
   border:none;
   cursor:pointer;
   background-color:transparent;
   border-radius:5px;
`
export const GradientButton = styled.button`
   background-color:#00c9b7;
   color:#1e293b;
   font-family:"Roboto";
   font-weight:bold;
   font-size:15px;
   height:40px;
   width:120px;
   border:none;
   ouline:none;
   cursor:pointer;
   border-radius:5px;
`
