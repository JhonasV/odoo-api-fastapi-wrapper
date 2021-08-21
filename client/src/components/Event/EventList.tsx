import { Col, Row } from 'antd'
import { IEventsOut } from '../../app/models'
import Margin from '../common/Margin'
import EventCard from './EventCard'

interface IProps {
  events: IEventsOut[]
}
const EventList = ({ events }: IProps) => {
  const renderCards = () => {
    const cards = events.map((event, i) => (
      <Col key={event.id} sm={24} md={12} lg={8} xl={6}>
        <Margin bottom={'1rem'}>
          <EventCard event={event} />
        </Margin>
      </Col>
    ))

    return cards
  }

  return <Row>{renderCards()}</Row>
}

export default EventList
