import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import ComputerLoader from '../computer-loader'

const LazyComputer = dynamic(() => import('../computer'), {
    ssr: false,
    loading: () => <ComputerLoader />
})

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <title>Phan Duc Sung</title>
            </Head>
            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyComputer />

                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Main
