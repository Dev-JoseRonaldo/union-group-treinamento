import React, { createContext } from 'react'

// aqui passamos os valores padrão
export const MyContext = createContext({})

interface MyContextProviderProps{
  children: React.ReactNode,
}

interface dataProps {
  name: string,
  age: number,
  work: string,
}

export function MyContextProvider({ children }: MyContextProviderProps) {
	// dados que ficarão acessíveis para outras páginas
  const data : dataProps = {
    name: 'Leandro Lopes',
    age: 27,
    work: 'Developer'
  }

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>
}