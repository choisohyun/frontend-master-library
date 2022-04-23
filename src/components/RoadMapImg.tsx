import React from "react";
import styled from "styled-components";
import typescript from "../assets/typescript.svg";

const ImgWrapper = styled.span<RoadMapImgTypes>`

left: 100px;
    top: 200px;
  width: 150px;
  height: 100px;
  display: block;

  background: url(${(props) => props.names}) no-repeat center center / 100% 100%;
`;

interface RoadMapImgTypes {
  names: any;
}

const RoadMapImg = ({names}: RoadMapImgTypes) => {
  return (
    <>
      <ImgWrapper names={names} />
    </>
  );
};

export default RoadMapImg;
