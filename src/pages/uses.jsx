import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Kamil Balda</title>
        <meta
          name="description"
          content="Software & hardware I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13.3” MacBook Pro i5 2,3GHz 16GB RAM, 256GB (2018)">
              This laptop has everything that I want. Long battery life, high
              performance. It is incredibly slim and light as a feather. Always ready to work.
            </Tool>
            <Tool title="LG 34UM88C-P">
              Ultra-wide 34' LG monitor, 3440 x 1440 (UWQHD), LED/IPS. For me, one big monitor is better than two smaller ones.
            </Tool>
            <Tool title="Logitech MX Mechanical Mini">
Logitech making the best keyboards on the market. This mechanical keyboard is very comfortable and compact. 
              It allows you to connect up to 3 devices, in my job it is very important because currently I have 3 machines, all with different OS (Mac, Linux and Windows).
            </Tool>
            <Tool title="Logitech MX Master 2S">
              Very good and comfortable mouse, also it allows to connect up to 3 devices. 
            </Tool>
            <Tool title="Ikea Marcus Chair">
              I'm going to change it in some time.. :) 
            </Tool>
            <Tool title="Desk with height regulation">
It is very important to stand up while coding. Now I can't imagine working for 12 hours and just sitting as I did before. In the past my legs were alwayes tired and sore.            </Tool>
            <Tool title="Edifier R1855DB 2.0 speakers">
              Good quality versus price.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              I don’t care if it’s missing all of the fancy IDE features
              everyone else relies on, VSC is still the best text
              editor ever made. I have a lot of extensions and I found my best theme ever, now my eyes are less tired. 
            </Tool>
            <Tool title="iTerm2">
I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal :), but they have lovely skins.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma, Adobe XD">
                            Figma and Adobe XD are the two most common design tools that I use. 
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
