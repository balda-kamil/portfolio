import Head from 'next/head'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { TwitterIcon, GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

// function Photos() {
//   let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

//   return (
//     <div className="mt-16 sm:mt-20">
//       <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
//         {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
//           <div
//             key={image.src}
//             className={clsx(
//               'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
//               rotations[imageIndex % rotations.length]
//             )}
//           >
//             <Image
//               src={image}
//               alt=""
//               sizes="(min-width: 640px) 18rem, 11rem"
//               className="absolute inset-0 h-full w-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Kamil Balda - Front-end Developer, nature lover and Apple enthusiast
        </title>
        <meta
          name="description"
          content="I’m Kamil, a Front-end Developer based in Gdańsk, Poland. I’m focused on modern JavaScript projects."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Front-end Developer, nature lover and Apple enthusiast
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Kamil Balda, I live near Gdańsk 🌍 in small village, where I can coding without noises of the city under beautyful natural circumstances. 🌳🌳🌳
            I’m focused on JAM Stack, JavaScript technologies. Big fan of Apple 🍎 products. 💻 📱
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">You can contact me writing here: 
          <a href="mailto:baldakamil@gmail.com?subject=Hey Kamil!"> baldakamil@gmail.com ✉️</a>
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/BaldaKamil"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/balda-kamil"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/kamilbalda/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
    </>
  )
}
