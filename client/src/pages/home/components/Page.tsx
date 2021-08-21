import { Divider, PageHeader } from 'antd'
import { useEffect, useState } from 'react'
import EventList from '../../../components/Event/EventList'
import { IEventsOut } from '../../../app/models'
import { Events } from '../../../app/api/agent'
import Skeleton from '../../../components/common/Skeleton'

const Page = () => {
  const [events, setEvents] = useState<IEventsOut[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = () => {
      setLoading(true)
      Events.list()
        .then((response) => setEvents(response))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }

    fetchEvents()
  }, [])

  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Eventos"
        subTitle="Listado de Eventos disponibles"
      />
      <Divider type="horizontal" />
      {loading ? <Skeleton /> : <EventList events={events} />}
    </div>
  )
}

export default Page
