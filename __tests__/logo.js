import React from 'react'
import { render } from '@testing-library/react'
import Logo from '../src/components/Navbar/Logo'

test('matches snapshot with desktop logo', () => {
  const { asFragment } = render(<Logo />)

  expect(asFragment(<Logo />)).toMatchSnapshot()
})

test('matches snapshot with mobile logo', () => {
  const { asFragment } = render(<Logo mobile />)

  expect(asFragment(<Logo mobile />)).toMatchSnapshot()
})
