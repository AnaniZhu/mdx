/* eslint-env browser */

import React, {Suspense} from 'react'

export const Root = (props) => {
  const {response} = props

  return (
    <Suspense fallback={null}>
      <Content />
    </Suspense>
  )

  function Content() {
    return response.readRoot()
  }
}

if (typeof document !== 'undefined') {
  const current = document.querySelectorAll('[aria-current]')
  let index = -1
  while (++index < current.length) {
    current[index].scrollIntoViewIfNeeded()
  }
}
