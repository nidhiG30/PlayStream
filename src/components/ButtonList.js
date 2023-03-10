import React from 'react'
import Button from './Button'


const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Soccer"/>
      <Button name="Badminton"/>
      <Button name="Cooking"/>
      <Button name="Live"/>
      <Button name="Mantras"/>
      <Button name="News"/>
    </div>
  )
}

export default ButtonList