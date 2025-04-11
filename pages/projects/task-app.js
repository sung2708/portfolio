import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/projects'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
    return (
        <Layout title="task-app">
            <Container>
                <Title>
                    Task App
                    <Badge>2025</Badge>
                </Title>
                <Paragraph>
                    <span> Personal project to practice and apply technologies to prepare for job
                        interviews</span>
                </Paragraph>
                <List>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/sung2708/task_app">
                            https://github.com/sung2708/task_app <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Using NodeJs, ExpressJs, Mongo in Backend server and ejs view
                            engine in Font end client
                        </span>
                    </ListItem>
                </List>
                <ProjectImage src="/images/projects/task-app_01.png" alt="task-app" />
            </Container>
        </Layout>
    )
}

export default Project
