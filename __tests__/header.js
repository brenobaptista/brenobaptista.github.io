import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Header from '../src/components/Navbar/Header'

test('matches snapshot', () => {
  const { asFragment } = render(<Header email='' />)

  expect(asFragment(<Header email='' />)).toMatchSnapshot()
})

test('toggle SideDrawer', () => {
  const { getByLabelText } = render(<Header email='' />)

  fireEvent.click(getByLabelText('toggle sidedrawer'))
  expect(getByLabelText('backdrop')).toBeTruthy()
})

test('close Backdrop', () => {
  const { getByLabelText, queryByLabelText } = render(<Header email='' />)

  fireEvent.click(getByLabelText('toggle sidedrawer'))
  fireEvent.click(getByLabelText('backdrop'))
  expect(queryByLabelText('backdrop')).toBeFalsy()
})
