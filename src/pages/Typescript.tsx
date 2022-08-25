import { Link } from "react-router-dom"
import { Button } from "../components/Button"

import styles from '../styles/typescript.module.scss'

export const Typescript = () => {
  function handleClick(name: string, age: number) {
    console.log(`Me chama ${name} e tenho ${age} anos`)
  }

  return (
    <>
      <main>
        <Link to="/">Voltar</Link>
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
      </main>
    </>
  )
}
