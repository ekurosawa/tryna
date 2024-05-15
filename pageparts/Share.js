import {
    FacebookIcon,
    FacebookShareButton,
    HatenaIcon,
    HatenaShareButton,
    LineIcon,
    LineShareButton,
    XIcon,
    TwitterButton,
    TwitterShareButton
} from 'react-share'

import React from 'react'
import styled from '@emotion/styled'



const Wrapper = styled.div`
    display: flex;
    padding-bottom: 24px;
  `

const ButtonWrapper = styled.div`
    padding-right: 12px;
  `


const Share = ({ title, url }) => {
    return (
        <Wrapper>
            <ButtonWrapper>
                <TwitterShareButton url={url} title={title} via="Nakazuba" >
                    <XIcon size={40} round />
                </TwitterShareButton>
            </ButtonWrapper>

            <ButtonWrapper>
                <FacebookShareButton url={url} quote={title}>
                    <FacebookIcon size={40} round />
                </FacebookShareButton>
            </ButtonWrapper>

            <ButtonWrapper>
                <HatenaShareButton url={url} title={title}>
                    <HatenaIcon size={40} round />
                </HatenaShareButton>
            </ButtonWrapper>

            <ButtonWrapper>
                <LineShareButton url={url} title={title}>
                    <LineIcon size={40} round />
                </LineShareButton>
            </ButtonWrapper>
        </Wrapper>
    )
}

export default Share