import { Col, PageHeader, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Events } from '../../../app/api/agent'
import { IEventsOut } from '../../../app/models'
import Margin from '../../../components/common/Margin'
import Skeleton from '../../../components/common/Skeleton'
import Sidebar from './Sidebar'

type TParams = { event_id: string }
const Page = () => {
  const params = useParams<TParams>()
  const [event, setEvent] = useState<IEventsOut>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEventById = () => {
      setLoading(true)
      Events.details(Number(params.event_id))
        .then((response) => setEvent(response))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }

    fetchEventById()
  }, [])

  function createMarkup() {
    return { __html: event?.description ?? '' }
  }

  const content = () => {
    return (
      <Row>
        <Col sm={24} md={15} lg={15} xl={15}>
          <div
            style={{ fontSize: '23px' }}
            dangerouslySetInnerHTML={createMarkup()}
          ></div>
        </Col>
        <Col style={{ backgroundColor: '#F7F7F7' }} md={9} lg={9} xl={9}>
          <Margin top="1rem" left=".5rem" right=".5rem">
            <Sidebar event={event || null} />
          </Margin>
        </Col>
      </Row>
    )
  }

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title={loading ? 'Cargando Evento...' : `Evento: ${event?.name}`}
        subTitle={loading ? 'Cargando Evento...' : `${event?.company_id[1]}`}
      />
      {loading ? <Skeleton /> : content()}
    </div>
  )
}

export default Page
