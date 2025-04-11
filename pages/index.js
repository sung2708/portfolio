import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoFacebook, IoLogoGithub, IoMail, IoCallSharp } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/tiktok.png'
import Image from 'next/image'

const Home = () => (
    <Layout>
        <Container>
            <Box
                borderRadius="lg"
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                Hi, I'm Sung, a backend developer in Ho Chi Minh City currently seeking
                a fresher opportunity!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Phan Duc Sung
                    </Heading>
                    <p>Back end developer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <Image
                            src="/images/sungp.jpg"
                            alt="Profile image"
                            width="100"
                            height="100"
                        />
                    </Box>
                </Box>
            </Box>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I am a final-year student at VNU-HCM University of Science with a
                    strong focus on backend web development. I work primarily with Node.js
                    and Python, using frameworks like Express.js and Django, and have a
                    basic understanding of HTML, CSS, and JavaScript. I’m passionate about
                    building reliable web solutions and continuously expanding my skills
                    through exploring cloud computing, DevOps, and artificial
                    intelligence. I also run a TikTok channel called{' '}
                    <Link
                        as={NextLink}
                        href="https://www.tiktok.com/@dev_ui"
                        passHref
                        scroll={false}
                    >
                        dev_ui
                    </Link>{' '}
                    where I create content about programming and tech to help others on
                    their learning journey.
                </Paragraph>
                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/projects"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        My Projects
                    </Button>
                </Box>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2002</BioYear>
                    Born in Binh Duong, Vietnam
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Passed the high quality program of information technology at
                    VNUHCM-University of Science
                </BioSection>
                <BioSection>
                    <BioYear>2025</BioYear>
                    Completed Bachelor of Information Technology program at
                    VNUHCM-University of Science
                </BioSection>
            </Section>

            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    In my free time, I enjoy listening to music, capturing moments through
                    photography, and simply unwinding. On weekends, I occasionally head
                    out to a cozy café or explore a new place to relax.
                </Paragraph>
            </Section>

            <Section delay={0.5}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/sung2708" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                                @sung2708
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.facebook.com/sung.phan.2708" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoFacebook />}
                            >
                                sung.phan.2708
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>

                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoMail />}
                        >
                            sungphan27082002@gmail.com
                        </Button>

                    </ListItem>
                    <ListItem>

                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={< IoCallSharp />}
                        >
                            0965875824
                        </Button>

                    </ListItem>
                </List>

                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href="https://www.tiktok.com/@dev_ui"
                        title="dev_ui"
                        thumbnail={thumbYouTube}
                    >
                        My TikTok channel (&gt;341 followers) where I share
                    </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
