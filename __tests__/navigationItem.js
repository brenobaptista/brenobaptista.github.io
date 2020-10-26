import React from 'react'
import { render } from '@testing-library/react'
import NavigationItem from '../src/components/Navbar/NavigationItem'

test('matches snapshot', () => {
  const clicked = jest.fn()
  const { asFragment } = render(<NavigationItem link='' clicked={clicked} />)

  expect(asFragment(<NavigationItem link='' clicked={clicked} />)).toMatchSnapshot()
})
