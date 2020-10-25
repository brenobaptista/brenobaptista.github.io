import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import DrawerToggle from '../src/components/Navbar/DrawerToggle'

test('calls "clicked" prop on click', () => {
  const clicked = jest.fn()
  const { getByLabelText } = render(<DrawerToggle clicked={clicked} />)

  fireEvent.click(getByLabelText('toggle sidedrawer'))
  expect(clicked).toHaveBeenCalled()
})
