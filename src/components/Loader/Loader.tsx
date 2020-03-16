import React from 'react';
import styled, {keyframes} from 'styled-components'

const Loader = () => {
  return (
    <Wrap>Loading...</Wrap>
  );
};

const animation = (color: string) => keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0 ${color};
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em ${color};
    height: 5em;
  }
`;

const Wrap = styled.div`
  &,
  &:before,
  &:after {
    background: ${({theme}) => theme.primary};
    animation: ${({theme}) => animation(theme.primary)} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  & {
    color: #ffffff;
    text-indent: -9999em;
    margin: 5em auto;
    position: relative;
    font-size: 11px;
    transform: translateZ(0);
    animation-delay: -0.16s;
  }
  &:before,
  &:after {
    position: absolute;
    top: 0;
    content: '';
  }
  &:before {
    left: -1.5em;
    animation-delay: -0.32s;
  }
  &:after {
    left: 1.5em;
  }

`;

export default Loader;
