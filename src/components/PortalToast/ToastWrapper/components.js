import styled from "styled-components"

export const Wrapper = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  border-radius: 15px;
  align-items: center;
  position: absolute;
  z-index: 9999;
  background-color: ${props => props.backgroundColor};
  right: 0;
  bottom: ${props => props.relativePosition}px;
 `