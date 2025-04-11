import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.svg`

    if (!hasMounted) return null

    return (
        <Link href="/" passHref legacyBehavior>
            <a style={{ textDecoration: 'none' }}>
                <LogoBox>
                    <Image
                        src={footPrintImg}
                        width={20}
                        height={20}
                        alt="logo"
                        loading="lazy"
                    />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily="M PLUS Rounded 1c"
                        fontWeight="bold"
                        ml={3}
                    >
                        Phan Duc Sung
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo
