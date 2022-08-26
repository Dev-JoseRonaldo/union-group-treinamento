import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { ToolsBox, ToolsBoxProps  } from "../components/ToolsBox"

import styles from '../styles/typescript.module.scss'

const tools = {
  tools: [
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2F6ECm7pvnSIe3hGdVUy2f&w=48&q=75',
      name: 'React',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2Fmsa7RKJyTKaJYtFy5EbE&w=48&q=75',
      name: 'NextJS',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2Fw1laiqUSzqcQbUwUikcA&w=48&q=75',
      name: 'TypeScript',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FCLrqVkjLQEK2ZtAO81Ny&w=48&q=75',
      name: 'Storybook',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2Fsm2hQvPQgugVjL8FHcPl&w=48&q=75',
      name: 'Jest',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FQFiOgFCjQra5586AV85q&w=48&q=75',
      name: 'Testing Library',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FFDjurBksSpeB31bCFZER&w=48&q=75',
      name: 'Node',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2F7k4CzuPSSNiFNuyHXidd&w=48&q=75',
      name: 'GraphQL',
    },
    {
      src: 'https://icon-library.com/icon/html5-icon-13.html.html',
      name: 'HTML 5',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FC3L61gOcTJeR9fOoOPRx&w=48&q=75',
      name: 'CSS 3',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FKIGeEYfETXKfvl4QsEIV&w=48&q=75',
      name: 'JavaScript',
    },
    {
      src: 'https://my-portfolio-d3vlopes.vercel.app/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FmoZhqEbpQRWkY4VE0x2z&w=48&q=75',
      name: 'Git',
    },
  ],
} as ToolsBoxProps

export const Typescript = () => {
  function handleClick(name: string, age: number) {
    console.log(`Me chama ${name} e tenho ${age} anos`)
  }
  return (
    <>
      <Header />
  
      <main>
        <h1>React com Typescript</h1>
        <section className={styles.buttons}>
          <h2>Uso do Component Button</h2>
          {/* Utiliza o valor padrão das props */}
          <Button onClick={() => handleClick('Leandro Lopes', 27)}>Button</Button>

          {/* variant secondary */}
          <Button
            variant="secondary"
            onClick={() => handleClick('Leandro Lopes', 27)}
          >
            Button
          </Button>

          {/* variant outline */}
          <Button
            variant="outline"
            onClick={() => handleClick('Leandro Lopes', 27)}
          >
            Button
          </Button>

          {/* size small */}
          <Button size="small" onClick={() => handleClick('Leandro Lopes', 27)}>
            Button
          </Button>

          {/* size medium */}
          <Button
            variant="secondary"
            size="small"
            onClick={() => handleClick('Leandro Lopes', 27)}
          >
            Button
          </Button>

          {/* full width */}
          <Button fullWidth onClick={() => handleClick('Leandro Lopes', 27)}>
            Button
          </Button>
        </section>

        <section className={styles.toolsBox}>      
          <h2>Minha caixa de ferramentas</h2>
          <ToolsBox {...tools} />
        </section>
      </main>
    </>
  )
}
