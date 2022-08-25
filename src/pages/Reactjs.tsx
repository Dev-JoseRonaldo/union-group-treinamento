import { BaseSyntheticEvent} from "react"
import { Link } from "react-router-dom"

import { ButtonReact } from "../components/ButtonReact"
import { Input } from "../components/Input"

import styles from '../styles/reactjs.module.scss'


export const Reactjs = () => {
  function handleSubmit(event: BaseSyntheticEvent) {
		/* 
			desabilita o comportamento padrão do form que é recarregar a página 
			ao fazer submit
		*/
    event.preventDefault()

		// pega os valores dos inputs
    console.log( event.target[0].value )
    console.log( event.target[1].value )
    console.log( event.target[2].value )


  }
  return (
    <>
      <h1>Página do React.js</h1>
      <Link to="/">Voltar</Link>

      <section className={styles.homeContainer}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <Input label="Nome" name="name" placeholder="Nome" />

          <Input
            type="date"
            label="Data de nascimento"
            name="birthDate"
            placeholder="Data de nascimento"
          />

          <Input label="Profissão" name="work" placeholder="Profissão" />

          <ButtonReact type="submit">Cadastrar</ButtonReact>
        </form>
      </section>
    </>
  )
}
