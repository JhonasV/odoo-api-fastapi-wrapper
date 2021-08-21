import Header from './Header'
import { ReactChild } from 'react'
import { Col, Row } from 'antd'

interface IProps {
  children: ReactChild
}

const Layout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <main>
        <Row justify="center">
          <Col span={22}>{children} </Col>
        </Row>
      </main>
    </>
  )
}

export default Layout
