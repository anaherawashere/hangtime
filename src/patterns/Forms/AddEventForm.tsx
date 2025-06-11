import React from 'react'
import Button, { ButtonVariants } from '../../components/Button/Button'
import DateInput from '../../components/DateInput/DateInput'
import TextInput from '../../components/TextInput/TextInput'
import { useState } from 'react'
import { DateInputs, DateSection, StyledForm } from './AddEventForm.styled'

interface AddEventFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  buttonTitle: string
  buttonVariant?: ButtonVariants
}

const AddEventForm: React.FC<AddEventFormProps> = ({
  buttonTitle,
  buttonVariant = 'tertiary',
}) => {
  const [dates, setDates] = useState<string[]>([''])

  const handleDateChange = (i: number, value: string) => {
    const newDates = [...dates]
    newDates[i] = value
    setDates(newDates)
  }

  const handleAddDate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setDates([...dates, ''])
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setDates([''])
    console.log('submit', dates)
  }

  return (
    <StyledForm>
      <TextInput label="Event name: " />
      <DateSection>
        <DateInputs>
          {dates.map((date, index) => (
            <DateInput
              key={index}
              value={date}
              onChange={(e) => handleDateChange(index, e.target.value)}
            />
          ))}
        </DateInputs>
        <Button
          title={buttonTitle}
          onClick={handleAddDate}
          variant={buttonVariant}
        />
      </DateSection>
      <Button title="Submit" onClick={handleSubmit} variant="primary" />
    </StyledForm>
  )
}

export { AddEventForm }
