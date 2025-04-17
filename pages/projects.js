import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import thumbTaskApp from '../public/images/projects/task-app.png'
import thumbVqa from '../public/images/projects/bone-vqa.jpg'
import Layout from '../components/layouts/article'

const Projects = () => {
    return (
        <Layout title={Projects}>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <ProjectGridItem
                            id="task-app"
                            title={'Task App'}
                            thumbnail={thumbTaskApp}
                        >
                            Personal Projects
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem
                            id="bone-vqa"
                            title={'Bone VQA'}
                            thumbnail={thumbVqa}
                        >
                            Graduation thesis
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects
export { getServerSideProps } from '../components/chakra'
