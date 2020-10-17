import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

const DarkSwitch = () => {
  // init dark state
  const [dark, setDark] = useState(true)

  // toggle dark and save preference
  const handleChange = (event) => {
    event.target.checked ? setDark(true) : setDark(false)
  }

  // on dark change, set document data-theme
  useEffect(() => {
    dark === true
      ? document.documentElement.setAttribute('data-theme', 'dark')
      : document.documentElement.setAttribute('data-theme', 'light')
  }, [dark])

  return (
    <div className='theme-switch-wrapper'>
      {dark ? <BsSun size='24px' /> : <BsMoon size='24px' />}
      <label className='theme-switch' htmlFor='checkbox'>
        <input
          type='checkbox'
          id='checkbox'
          onChange={(event) => handleChange(event)}
          defaultChecked
        />
        <div className='slider round'></div>
      </label>
    </div>
  )
}

export default DarkSwitch
