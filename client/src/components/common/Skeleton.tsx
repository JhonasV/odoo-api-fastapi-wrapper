import { Col, Row, Skeleton as SkeletonAntd } from 'antd'
import React from 'react'

const Skeleton = () => {
  return (
    <>
      <Row>
        <Col sm={24} md={12} lg={8} xl={6}>
          <SkeletonAntd avatar paragraph={{ rows: 4 }} />
        </Col>
        <Col sm={24} md={12} lg={8} xl={6}>
          <SkeletonAntd avatar paragraph={{ rows: 4 }} />
        </Col>
        <Col sm={24} md={12} lg={8} xl={6}>
          <SkeletonAntd avatar paragraph={{ rows: 4 }} />
        </Col>
        <Col sm={24} md={12} lg={8} xl={6}>
          <SkeletonAntd avatar paragraph={{ rows: 4 }} />
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={12} lg={8} xl={6}>
          <SkeletonAntd avatar paragraph={{ rows: 4 }} />
        </Col>
        <Col sm={24} md={12} lg={8} xl={6}>
          <SkeletonAntd avatar paragraph={{ rows: 4 }} />
        </Col>
        <Col sm={24} md={12} lg={8} xl={6}>
          <SkeletonAntd avatar paragraph={{ rows: 4 }} />
        </Col>
        <Col sm={24} md={12} lg={8} xl={6}>
          <SkeletonAntd avatar paragraph={{ rows: 4 }} />
        </Col>
      </Row>
    </>
  )
}

export default Skeleton
