import styled from "styled-components"

export const Wrapper = styled.div`
  width: 250px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: ${props => props.backgroundColor};
  border-radius: 15px;
  align-items: center;
 `