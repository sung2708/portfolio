import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm">
            &copy; {new Date().getFullYear()} Phan Duc Sung. All Rights Reserved.{' '}
            <Link
                as={NextLink}
                href="https://www.craftz.dog/"
                isExternal
            >
                Author: Takuya Matsuyama
            </Link>
        </Box>
    )
}

export default Footer
