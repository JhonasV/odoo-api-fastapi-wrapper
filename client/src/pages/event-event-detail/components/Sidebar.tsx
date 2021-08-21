import { Button, Col, Row, Typography } from 'antd'
import React from 'react'
import { IEventsOut } from '../../../app/models'
import Margin from '../../../components/common/Margin'
import { dateFormat, timeFormat } from '../../../helpers'

interface IProps {
  event: IEventsOut | null
}
const Sidebar = ({ event }: IProps) => {
  const { Title, Paragraph } = Typography
  return (
    <>
      {event?.menu_register_cta && (
        <Row>
          <Col span={24}>
            <Button type="primary" size={'large'} block>
              Registrarse
            </Button>
          </Col>
        </Row>
      )}

      <Row>
        <Col>
          <Margin left={'2rem'} top={'2rem'}>
            <>
              <Typography>
                <Title style={{ color: '#8C8E90' }}>FECHA & HORA</Title>
                <Paragraph>
                  <h3>{dateFormat(event ? event.date_begin : new Date())}</h3>
                  <h5 style={{ color: '#8C8E90' }}>
                    Inicia - {timeFormat(event ? event.date_begin : new Date())}
                  </h5>
                </Paragraph>
              </Typography>

              <Typography>
                <Paragraph>
                  <h3>{dateFormat(event ? event.date_end : new Date())}</h3>
                  <h5 style={{ color: '#8C8E90' }}>
                    Termina - {timeFormat(event ? event.date_end : new Date())}
                  </h5>
                </Paragraph>
              </Typography>
            </>
          </Margin>
        </Col>
      </Row>
    </>
  )
}

export default Sidebar
