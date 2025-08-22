import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ContentBlock } from '@/components/ContentBlock'
import { Footer } from '@/components/Footer'
import data from '@/content/site.json'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {data.contentBlocks.map(block => (
          <ContentBlock key={block.id} blockData={block} />
        ))}
      </main>
      <Footer />
    </>
  )
}
