import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center" mb={6}>
    <LinkBox cursor="pointer">
      <Box position="relative" width="230px" height="230px" mx="auto" mb={3}>
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
      </Box>
      <LinkOverlay href={href} target="_blank">
        <Text mt={2} fontWeight="bold">
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjectGridItem = ({
  children,
  category = 'projects',
  id,
  title,
  thumbnail
}) => (
  <Box w="100%" textAlign="center" mb={6}>
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false}
      cursor="pointer"
    >
      <Box position="relative" width="230px" height="230px" mx="auto" mb={3}>
        <Image
          src={thumbnail}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
      </Box>
      <LinkOverlay as="div" href={`/${category}/${id}`}>
        <Text mt={2} fontSize={20} fontWeight="bold">
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
