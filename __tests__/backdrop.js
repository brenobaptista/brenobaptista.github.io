import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Backdrop from '../src/components/Navbar/Backdrop'

test('calls "clicked" prop on click', () => {
  const clicked = jest.fn()
  const { getByLabelText } = render(<Backdrop show clicked={clicked} />)

  fireEvent.click(getByLabelText('backdrop'))
  expect(clicked).toHaveBeenCalled()
})

test('displays nothing if "show" prop is false', () => {
  const { asFragment } = render(<Backdrop />)

  expect(asFragment(<Backdrop />)).toMatchSnapshot()
})
