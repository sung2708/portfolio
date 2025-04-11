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
                    Bone VQA
                    <Badge>2025</Badge>
                </Title>
                <Paragraph>
                    <span>Graduation thesis on building a bone disease diagnosis system based on bone medical images</span>
                </Paragraph>
                <List>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/sung2708/BoneDiagnosisAI">
                           https://github.com/sung2708/BoneDiagnosisAI <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>
                            Python, PyTorch
                        </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Description</Meta>
                        <span>
                            BoneDiagnosisAI is an artificial intelligence bone disease diagnosis system that combines image processing and natural language processing. The system uses ResNet to extract features from X-ray images and PhoBERT to represent information from questions asked by doctors/medical staff.
                        </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Project
