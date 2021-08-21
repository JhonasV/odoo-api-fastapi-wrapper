import { Avatar, Card, Tag } from 'antd'
import { EditOutlined, EllipsisOutlined, EyeOutlined } from '@ant-design/icons'
import Meta from 'antd/lib/card/Meta'
import { IEventsOut } from '../../app/models'
import { Link } from 'react-router-dom'
import Margin from '../common/Margin'
import { dateFormat, getTagType, timeFormat } from '../../helpers'

interface IProps {
  event: IEventsOut
}
const EventCard = ({ event }: IProps) => {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <Link to={`/event/${event.id}`}>
            <EyeOutlined key="Eye" />
          </Link>,
          // <EditOutlined key="edit" />,
          // <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          title={event.name.toUpperCase()}
          description={
            <Margin bottom={'.5rem'}>
              <Tag color={getTagType(event.kanban_state_label)}>
                {event.kanban_state_label}
              </Tag>
            </Margin>
          }
        />
        <Meta
          title={'Desde: '}
          description={`${dateFormat(event.date_begin)} ${timeFormat(
            event.date_begin
          )}`}
        />
        <Meta
          title={'Hasta: '}
          description={`${dateFormat(event.date_end)} ${timeFormat(
            event.date_end
          )}`}
        />
      </Card>
    </div>
  )
}

export default EventCard
