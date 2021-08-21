import { GridApi } from 'ag-grid-community'
import { Form, FormInstance, message, PageHeader } from 'antd'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { Events } from '../../../app/api/agent'
import { IEventsIn, IEventsOut } from '../../../app/models'
import Margin from '../../../components/common/Margin'
import EventCreateDrawer from './EventCreateDrawer'
import Table from './Table'
import Toolbar from './Toolbar'

const Page = () => {
  const [visible, setVisible] = useState(false)
  const [gridApi, setGridApiPage] = useState<GridApi>()
  const [publishingEvent, setPublishingEvent] = useState<boolean>(false)
  const [events, setEvents] = useState<IEventsOut[]>()
  const [saving, setSaving] = useState(false)

  const publishEvent = () => {
    let row: IEventsOut = gridApi?.getSelectedRows()[0]
    if (!row) {
      message.warning('Debe de seleccionar un evento en la tabla primero!')
      return
    }

    if (row.is_published) {
      message.info('Este evento ya es publico!')
    } else {
      savePublishedEvent(row.id)
    }
  }
  const fetchEvents = () => {
    Events.listAllActive().then((response) => setEvents(response))
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const saveEvent = (event: IEventsIn, form: FormInstance<any>) => {
    setSaving(true)
    Events.create(event)
      .then((res) => {
        message.success('El evento se ha creado exitosamente!')
        setVisible(false)
        form.resetFields()
        fetchEvents()
      })
      .catch((err: AxiosError) => {
        if (err.response) {
          if (err.response.status === 422) {
            console.log(err.response)
            message.error(err.response.data.message)
          }
        } else {
          message.error(JSON.stringify(err))
        }
      })
      .finally(() => setSaving(false))
  }

  const savePublishedEvent = (event_id: number) => {
    setPublishingEvent(true)
    Events.updateEventToPublished(event_id)
      .then((response) => {
        message.success('El evento se actualizó correctamente')
        fetchEvents()
      })
      .catch((err) => {
        message.error(
          'No pudimos publicar el evento en estos momentos, error desconocido'
        )
      })
      .finally(() => setPublishingEvent(false))
  }
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="Administrador de Eventos"
        subTitle="Mantenimiento"
      />
      <Margin top="1em">
        <Toolbar
          publishingEvent={publishingEvent}
          onPublish={publishEvent}
          setVisible={setVisible}
        />
      </Margin>
      <Margin top="1em">
        <Table events={events} setGridApiPage={setGridApiPage} />
      </Margin>
      <EventCreateDrawer
        saving={saving}
        saveEvent={saveEvent}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  )
}

export default Page
