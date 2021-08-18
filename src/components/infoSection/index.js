import React from 'react';
import {Button} from 'react-scroll';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column12, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './infoElements';
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>{topLine}</TextWrapper>
                            <Heading LightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to="home">{buttonLabel}</Button>
                            </BtnWrap>
                        </Column1>
                        <Column12>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column12>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection;
