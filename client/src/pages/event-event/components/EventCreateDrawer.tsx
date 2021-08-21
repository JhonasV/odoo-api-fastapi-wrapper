import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Switch,
  Checkbox,
  FormInstance,
} from 'antd'
import { AxiosError } from 'axios'
import moment from 'moment'
import { useState } from 'react'
import { Events } from '../../../app/api/agent'
import { IEventsIn } from '../../../app/models'

const { Option } = Select

interface IProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  saving: boolean
  saveEvent: (event: IEventsIn, form: FormInstance<any>) => void
}

const EventCreateDrawer = ({
  visible,
  setVisible,
  saving,
  saveEvent,
}: IProps) => {
  const [form] = Form.useForm()
  const [active, setActive] = useState(true)
  const [seatsLimited, setSeatsLimited] = useState(false)

  const onFinish = (values: any) => {
    let dateFormat = 'yyyy-MM-DDThh:mm:ss'
    let eventIn: IEventsIn = {
      name: values.name,
      active: active,
      company_id: values.company_id,
      date_begin: moment(values.dates[0]).format(dateFormat),
      date_end: moment(values.dates[1]).format(dateFormat).toString(),
      id: 0,
      organizer_id: values.company_id,
      description: values.description,
      seats_limited: seatsLimited,
      seats_max: values.seats_max,
    }

    saveEvent(eventIn, form)
  }

  const onFinishFailed = (errorInfo: any) => {}
  return (
    <>
      <Drawer
        title="Crea Un Nuevo Evento"
        width={900}
        onClose={() => {
          setVisible(false)
          form.resetFields()
        }}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button
              disabled={saving}
              onClick={() => setVisible(false)}
              style={{ marginRight: 8 }}
            >
              Cancelar
            </Button>
            <Button
              disabled={saving}
              loading={saving}
              onClick={form.submit}
              htmlType="submit"
              type="primary"
            >
              Crear Evento
            </Button>
          </div>
        }
      >
        <Form
          form={form}
          layout="vertical"
          hideRequiredMark
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Nombre del Evento"
                rules={[{ required: true, message: 'El nombre es requerido' }]}
              >
                <Input placeholder="Porfavor ingrese el nombre del evento" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="company_id"
                label="Compañía"
                rules={[
                  {
                    required: true,
                    message: 'Porfavor selecciona una compañía',
                  },
                ]}
              >
                <Select placeholder="Porfavor selecciona una compañía">
                  <Option value="1">TourCompany</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="dates"
                label="Fecha de Inicio y Final"
                rules={[
                  {
                    required: true,
                    message: 'Porfavor ingresa la fecha de inicio y final"',
                  },
                ]}
              >
                <DatePicker.RangePicker
                  style={{ width: '100%' }}
                  // getPopupContainer={(trigger) => trigger.parentElement}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="¿El Evento será visible?">
                <Switch
                  defaultChecked={active}
                  onChange={(value) => setActive(value)}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Checkbox
                defaultChecked={seatsLimited}
                onChange={(event) => setSeatsLimited(event.target.checked)}
              >
                ¿Hacientos limitados?
              </Checkbox>
            </Col>
            <Col span={6}>
              <Form.Item
                name="seats_max"
                label="Maximo de Asientos"
                rules={[
                  {
                    required: !seatsLimited,
                    message: 'El Maximo de Asientos es requerido',
                  },
                ]}
              >
                <Input
                  type="number"
                  disabled={!seatsLimited}
                  placeholder="Porfavor ingrese el Maximo de Asientos"
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Descripción"
                rules={[
                  {
                    required: true,
                    message: 'Porfavor ingrese una descripción',
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Porfavor ingrese una descripción"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  )
}

export default EventCreateDrawer
