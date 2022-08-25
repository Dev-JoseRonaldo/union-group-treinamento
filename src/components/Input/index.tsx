import './styles.scss'

import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  onChange?: () => void
}

export const Input = ({ label, name, onChange, value, ...rest }:InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        onChange={onChange}
        value={value}
        {...rest}
      />
    </div>
  )
}