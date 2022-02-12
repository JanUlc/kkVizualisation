import Image from "next/image";
import React, { useState } from "react";
import { StyledImage } from "./ButtonHover.styles";

 const ButtonHover = ({url, hoverUrl, href}) => {
     const [hovered, setHovered] = useState(false);
     return(
         <a href={href}>
        <StyledImage src={hovered ? hoverUrl : url} width="35px" height="35px" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}  />
        </a>
     )
 }

 export default ButtonHover;