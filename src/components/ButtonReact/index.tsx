import { ButtonHTMLAttributes, ReactNode } from 'react'
import './styles.scss'

interface ButtonReactProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void,
  size?: 'small' | 'medium' | 'fullWidth', 
  children?: ReactNode
}

export const ButtonReact = ({onClick, size = "fullWidth", children}: ButtonReactProps) => {
  return (
    <button onClick={onClick} className={`buttonReact buttonReact-${size}`}>
      {children}
    </button>
  )
}