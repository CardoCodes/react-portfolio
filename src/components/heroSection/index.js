import React, {useState} from 'react'
import Video from '../../videos/Video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './heroElements'
import {Button} from '../ButtonElement'
const HeroSection = () =>{
const [hover, setHover] = useState(false)

const onHover = () =>{
    setHover(!hover)
}

    return(
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video}/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Hello, Im Cardo.</HeroH1>
                <HeroP>A web developer and computer programmer from Texas.</HeroP>
                <HeroBtnWrapper>
                    <Button to="contactme" onMouseEnter={onHover} onMouseLeave={onHover}>
                        About Me {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;