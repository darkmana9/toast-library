import styled from "styled-components"

export const ListWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: ${props => props.position.bottom};
  right: ${props => props.position.right};
  left: ${props => props.position.left};
  top: ${props => props.position.top};
`

export const Wrapper = styled.div.attrs(props => ({
    style: {
        left: `${props.left}px`
    }
}))`
  width: 250px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  border-radius: 15px;
  align-items: center;
  position: relative;
  z-index: 9999;
  margin: ${props => props.gap}px;
  background-color: ${props => props.backgroundColor};
  bottom: 0;
  
  &.fade-enter {
    opacity: 0;  
  }
  &.fade-enter-active {
    opacity: 1;
    transition: all 500ms;
  }
   &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: all 500ms;
  }
  
  &.translate-enter {
    transform: translate(${(props => props.position.name.match(/L/) ? '-100%' : '100%')});
  }
  &.translate-enter-active {
    transform: translate(0%);
    transition: all 500ms;
  }
   &.translate-exit {
    transform: translate(0%);
  }
  &.translate-exit-active {
    transform: translate(${(props => props.position.name.match(/L/) ? '-100%' : '100%')});
    transition: all 500ms;
  }
`

