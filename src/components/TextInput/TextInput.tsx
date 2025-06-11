import React from 'react'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => (
  <div>
    {label && <label>{label}</label>}
    <input type="text" {...props} />
  </div>
)

export default TextInput
