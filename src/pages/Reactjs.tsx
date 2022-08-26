import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState} from "react"

import { ButtonReact } from "../components/ButtonReact"
import { Input } from "../components/Input"
import { Header } from "../components/Header"

import styles from '../styles/reactjs.module.scss'


export const Reactjs = () => {
  	// criamos nossos states
    const [name, setName] = useState<string>('')
    const [birthDate, setBirthDate] = useState<string>('')
    const [work, setWork] = useState<string>('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  // função que irá atualizar nossos states quando o valor do input for alterado
  function handleOnChange(event: ChangeEvent, setValue: Dispatch<SetStateAction<string>>) {
    const target = event.target as HTMLInputElement;
    setValue(target.value)
  }
  return (
    <>
      <Header />
      <h1>Página do React.js</h1>
      <section className={styles.homeContainer}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <Input 
            label="Nome" 
            name="name" 
            placeholder="Nome"
            value={name}
            onChange={(event) => handleOnChange(event,setName)}
          />

          <Input
            type="date"
            label="Data de nascimento"
            name="birthDate"
            placeholder="Data de nascimento"
            value={birthDate}
            onChange={(event) => handleOnChange(event,setBirthDate)}
          />

          <Input 
            label="Profissão" 
            name="work" 
            placeholder="Profissão" 
            value={work}
            onChange={(event) => handleOnChange(event,setWork)}
          />

          <ButtonReact type="submit">Cadastrar</ButtonReact>
        </form>
      </section>
    </>
  )
}
