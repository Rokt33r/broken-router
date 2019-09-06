import React from 'react'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  return (
    <pre>
      <code>
        {JSON.stringify(
          {
            pathname: router.pathname,
            asPath: router.asPath
          },
          null,
          2
        )}
      </code>
    </pre>
  )
}
