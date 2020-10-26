import React from 'react'
import { render } from '@testing-library/react'
import Toolbar from '../src/components/Navbar/Toolbar'

test('matches snapshot', () => {
  const clicked = jest.fn()
  const { asFragment } = render(<Toolbar drawerToggleClicked={clicked} email='' />)

  expect(asFragment(<Toolbar drawerToggleClicked={clicked} email='' />)).toMatchSnapshot()
})
