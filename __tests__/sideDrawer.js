import React from 'react'
import { render } from '@testing-library/react'
import SideDrawer from '../src/components/Navbar/SideDrawer'

test('matches snapshot with opened sideDrawer', () => {
  const closed = jest.fn()
  const { asFragment } = render(<SideDrawer open closed={closed} email='' />)

  expect(asFragment(<SideDrawer open closed={closed} email='' />)).toMatchSnapshot()
})

test('matches snapshot with closed sideDrawer', () => {
  const closed = jest.fn()
  const { asFragment } = render(<SideDrawer closed={closed} email='' />)

  expect(asFragment(<SideDrawer closed={closed} email='' />)).toMatchSnapshot()
})
