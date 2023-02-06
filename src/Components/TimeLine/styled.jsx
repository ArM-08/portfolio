import styled from "styled-components"



export const ContainerTimeLine = styled.div`
width: 100%;
justify-content: center;
  display: flex;
`

export const Rb = styled.ul`
margin: 2.5em 0;
  padding: 0;
  display: inline-block;
`

export const RbItem = styled.li`
font-family: 'DM Sans', sans-serif;
list-style: none;
  margin: 10px;
  min-height: 50px;
  border-left: 1px dashed #fff;
  padding: 0 0 50px 30px;
  position: relative;
  :last-child {
    border-left: 0;
  }
  :before {
    position: absolute;
    left: -18px;
    top: -5px;
    content: " ";
    border: 8px solid rgba(255, 255, 255, 1);
    border-radius: 500%;
    background: #F4C430;
    height: 20px;
    width: 20px;
    transition: all 500ms ease-in-out;
  }
  :hover::before {
    border-color: #232931;
    transition: all 1000ms ease-in-out;
  }
  
`
export const TimeStamp = styled.h3`
color: #F4C430;
  position: relative;
  width: 100px;
  font-size: 14px;
`
export const TitleItem = styled.p`
color: #FFF;`