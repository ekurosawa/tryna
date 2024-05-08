import React from "react"
import { Icon } from "@chakra-ui/react"
import {
  FacebookShareButton,
  HatenaShareButton,
  LineShareButton,
  PocketShareButton,
  TwitterShareButton
} from "react-share"
import { FaFacebook, FaGetPocket, FaLine, FaTwitter } from "react-icons/fa"
import { SiHatenabookmark } from "react-icons/si"

// import { SITE_URL, TWITTER_ID } from "../../../utils/env"

export const ShareButtons = ({ urlBlog, title, tooltipPlacement }) => {
  const url = new URL(urlBlog, SITE_URL).toString()
  return (
    <>
      <TwitterShareButton url={url} title={title} via={TWITTER_ID}>
        <Icon
          as={FaTwitter}
          boxSize={6}
          fill="gray.400"
          _hover={{ fill: "teal.500" }}
        />
      </TwitterShareButton>
      <FacebookShareButton url={url} title={title} via={FACEBOOK_ID}>
        <Icon
          as={FaFacebook}
          boxSize={6}
          fill="gray.400"
          _hover={{ fill: "teal.500" }}
        />
      </FacebookShareButton>
      <LineShareButton url={url} title={title} via={LINESHARE_ID}>
        <Icon
          as={FaLine}
          boxSize={6}
          fill="gray.400"
          _hover={{ fill: "teal.500" }}
        />
      </LineShareButton>
      <PocketShareButton title={title} url={url}>
        <Icon
          as={FaGetPocket}
          boxSize={6}
          fill="gray.400"
          _hover={{ fill: "teal.500" }}
        />
      </PocketShareButton>
      <HatenaShareButton title={title} url={url}>
        <Icon
          as={SiHatenabookmark}
          boxSize={6}
          fill="gray.400"
          _hover={{ fill: "teal.500" }}
        />
      </HatenaShareButton>
    </>
  )
}
