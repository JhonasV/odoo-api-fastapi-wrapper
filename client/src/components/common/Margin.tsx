import React from 'react'

interface IProps {
  top?: string
  left?: string
  right?: string
  bottom?: string
  children: React.ReactChild
}
const Margin = ({ children, top, left, right, bottom }: IProps) => {
  return (
    <div
      style={{
        marginTop: top,
        marginLeft: left,
        marginRight: right,
        marginBottom: bottom,
      }}
    >
      {children}
    </div>
  )
}

export default Margin
