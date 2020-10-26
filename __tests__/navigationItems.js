import React from 'react'
import { render } from '@testing-library/react'
import NavigationItems from '../src/components/Navbar/NavigationItems'

test('matches snapshot', () => {
  const clicked = jest.fn()
  const { asFragment } = render(<NavigationItems clicked={clicked} email='' />)

  expect(asFragment(<NavigationItems clicked={clicked} email='' />)).toMatchSnapshot()
})
