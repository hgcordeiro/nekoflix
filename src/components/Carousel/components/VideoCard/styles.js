import styled from 'styled-components';

export const VideoTitle = styled.h1`
  position: relative;
  z-index: 5;
  opacity: 0;
  transition: opacity 0.3s ease 0s;
`

export const VideoCardContainer = styled.a`
  z-index: 0;
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity .3s ease 0s;

  &:hover ${VideoTitle}, 
  &:focus ${VideoTitle} {
    opacity: 1;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
  }

  &::after {
    content: "";
    display: block;
    background: rgba(0, 0, 0, 0.5) none repeat scroll 0% 0%;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0px;
    margin: auto;
    opacity: 0;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

