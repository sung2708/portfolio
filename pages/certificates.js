import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import problemSkillBasic from '../public/images/certificates/Problem_Solving_(Basic)_Certificate.png'
import problemSkillIntermediate from '../public/images/certificates/Problem_Solving_(Intermediate)_Certificate.png'
import softwareIntern from '../public/images/certificates/Software_Engineer_Intern_Certificate.png'
import software from '../public/images/certificates/Software_Engineer_Certificate.png'

const Certificates = () => (
    <Layout title="Certificates">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Certificates achieve
            </Heading>
            <Section delay={0.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="Problem Solving (Basic) Certificate"
                        thumbnail={problemSkillBasic}
                        href="https://www.hackerrank.com/certificates/iframe/f4a253524da0"
                    ></GridItem>
                    <GridItem
                        title="Problem Solving (Intermediate) Certificate"
                        thumbnail={problemSkillIntermediate}
                        href="https://www.hackerrank.com/certificates/iframe/1d6184258210"
                    ></GridItem>
                    <GridItem
                        title="Software Engineer Intern Certificate"
                        thumbnail={softwareIntern}
                        href="https://www.hackerrank.com/certificates/iframe/8c663d092e4b"
                    ></GridItem>
                    <GridItem
                        title="Software Engineer Intern Certificate"
                        thumbnail={software}
                        href="https://www.hackerrank.com/certificates/iframe/879b74da6c80"
                    ></GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Certificates
export { getServerSideProps } from '../components/chakra'
