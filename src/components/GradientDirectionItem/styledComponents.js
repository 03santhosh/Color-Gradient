import styled from 'styled-components'

export const GradientDirectionList = styled.li`
   margin-right:10px;
   @media screen and (max-width:767px) {
      margin-right:8px;
      margin-bottom:8px;
    }
`
export const GradientDirectionButton = styled.button`
   background-color: #ffffff;
   opacity:${props => (props.isActive ? 1 : 0.5)};
   color:${props => (props.isActive ? '#334155' : '#1e293b')};
   font-family:"Roboto";
   font-weight:900;
   font-size:15px;
   height:40px;
   width:120px;
   border:none;
   ouline:none;
   cursor:pointer;
   border-radius:5px;
   @media screen and (max-width:767px) {
      width:135px;
   }
`
