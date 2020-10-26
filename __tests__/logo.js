import React from 'react'
import { render } from '@testing-library/react'
import Logo from '../src/components/Navbar/Logo'

test('matches snapshot', () => {
  const { asFragment } = render(<Logo />)

  expect(asFragment(<Logo />)).toMatchSnapshot()
})
