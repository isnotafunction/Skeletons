import React from 'react'
import {shallow, mount, render} from 'enzyme'

import App from './../App'

let wrapped;
beforeEach(()=>{
  wrapped = shallow(<App />)
})

it("should render without throwing an error", ()=>{
  expect(wrapped.contains(<h1>Hello React!</h1>)).toBe(true)
})