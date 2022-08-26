import './styles.scss'

import { ChangeEvent, InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  onChange?: (event: ChangeEvent) => void
}

export const Input = ({ label, name, onChange, value, ...rest }:InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      {!!value && `- ${value}`}
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