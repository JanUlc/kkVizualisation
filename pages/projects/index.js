import {  Wrapper, ColWrapper, TextOnImage } from "../../styles/Projects.styles";
import Image from "next/image";
import { useState } from "react";


export default function Projects() {

const shouldBlur = (id) => {
  console.log(id, 'Statement false');
    if(activeColumn === 0) {
      return false;
  
    };
  return id !== activeColumn ? true : false;
}

const [activeColumn, setActiveColumn] = useState(0);

  return (
    <Wrapper>
       <ColWrapper onMouseEnter={() => setActiveColumn(1)} blured={shouldBlur(1)} onMouseLeave={() => setActiveColumn(0)}>
        <Image src={'/Vizualisation/kuchnia1pP.jpg'} height={'1200px'} width={'600px'} objectFit="cover"/>
        <TextOnImage>Dzidzia</TextOnImage>
       </ ColWrapper>
       <ColWrapper onMouseEnter={() => setActiveColumn(2)} blured={shouldBlur(2)} onMouseLeave={() => setActiveColumn(0)}>
        <Image src={'/Vizualisation/lazienka1.png'} height={'1200px'} width={'600px'} objectFit="cover" />
        <TextOnImage>Dzidzia</TextOnImage>
       </ ColWrapper>
       <ColWrapper onMouseEnter={() => setActiveColumn(3)} blured={shouldBlur(3)} onMouseLeave={() => setActiveColumn(0)}>
        <Image src={'/Vizualisation/dzidzia1p.jpg'} height={'1200px'} width={'600px'} objectFit="cover" />
        <TextOnImage>Dzidzia</TextOnImage>
       </ ColWrapper>
       <ColWrapper onMouseEnter={() => setActiveColumn(4)} blured={shouldBlur(4)} onMouseLeave={() => setActiveColumn(0)}> 
        <Image src={'/Vizualisation/lazienkaParter1.jpg'} height={'1200px'} width={'600px'} objectFit="cover" />
        <TextOnImage>Dzidzia</TextOnImage>
       </ ColWrapper>
       <ColWrapper onMouseEnter={() => setActiveColumn(5)} blured={shouldBlur(5)} onMouseLeave={() => setActiveColumn(0)}>
        <Image src={'/Vizualisation/lazienkaPietro1.jpg'} height={'1200px'} width={'600px'} objectFit="cover" />
        <TextOnImage>Dzidzia</TextOnImage>
       </ ColWrapper>
    </Wrapper>
  );
}
