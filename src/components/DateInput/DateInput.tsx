import React from 'react'

interface DateInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const DateInput: React.FC<DateInputProps> = ({ label, ...props }) => (
  <div>
    <input type="date" {...props} />
    {label && <label>{label}</label>}
  </div>
)

export default DateInput
