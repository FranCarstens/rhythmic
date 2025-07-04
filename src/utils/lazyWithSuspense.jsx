import { lazy, Suspense } from 'react'

const lazyWithSuspense = (importFn, options) => {
  const Component = lazy(importFn)

  const LazyComponent = (props) => (
    <Suspense fallback={options?.fallback || null}>
      <Component {...props} />
    </Suspense>
  )

  return LazyComponent
}

export default lazyWithSuspense
