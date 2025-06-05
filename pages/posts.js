import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import nvim from '../public/images/posts/nvim.png'
import tmux from '../public/images/posts/tmux.png'
import leetcode from '../public/images/posts/leetcode.png'
import Docker from '../public/images/posts/docker.jpeg'
import docker_compose from '../public/images/posts/docker-compose.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular posts
      </Heading>
      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Vim/Neovim Introduction"
            thumbnail={nvim}
            href="https://www.tiktok.com/@thelazycode_r/video/7480185148848278802"
          ></GridItem>
          <GridItem
            title="Tmux Introduction"
            thumbnail={tmux}
            href="https://www.tiktok.com/@thelazycode_r/video/7480965886996663559"
          ></GridItem>
          <GridItem
            title="LeetCode problem rotate-image"
            thumbnail={leetcode}
            href="https://www.tiktok.com/@thelazycode_r/video/7456841446667095314"
          ></GridItem>
          <GridItem
            title="LeetCode problem longest-palindromic-substring"
            thumbnail={leetcode}
            href="https://www.tiktok.com/@thelazycode_r/video/7483403447375564039"
          ></GridItem>
          <GridItem
            title="Docker Introduction"
            thumbnail={Docker}
            href="https://www.tiktok.com/@thelazycode_r/video/7504866717999336712"
          ></GridItem>
          <GridItem
            title="Docker compose Introduction"
            thumbnail={docker_compose}
            href="https://www.tiktok.com/@thelazycode_r/video/7511614640191851784"
          ></GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
