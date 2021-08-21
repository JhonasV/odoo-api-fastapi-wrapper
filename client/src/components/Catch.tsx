import React, { ReactChild } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export interface ErrorHandlePops {
  title?: string
  children: ReactChild
}

const Catch = ({ children, title }: ErrorHandlePops) => {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => <h1>{title ?? 'Ha ocurrido un error'}</h1>}
    >
      {children}
    </ErrorBoundary>
  )
}

export default Catch
