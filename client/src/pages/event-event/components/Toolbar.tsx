import { Button, Popconfirm } from 'antd'
import { SaveOutlined, DeleteOutlined } from '@ant-design/icons'
import React from 'react'

interface IProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  onPublish: () => void
  publishingEvent: boolean
  deletingEvent: boolean
  onDelete: () => void
}

const Toolbar = ({
  setVisible,
  onPublish,
  publishingEvent,
  deletingEvent,
  onDelete,
}: IProps) => {
  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        icon={<SaveOutlined />}
        type="primary"
        disabled={publishingEvent || deletingEvent}
      >
        Agregar
      </Button>{' '}
      <Popconfirm
        title="¿Estás seguro de eliminar este evento？"
        okText="Si"
        cancelText="No"
        onConfirm={() => onDelete()}
      >
        <Button
          disabled={publishingEvent || deletingEvent}
          icon={<DeleteOutlined />}
          loading={deletingEvent}
          type="primary"
          danger
        >
          Eliminar
        </Button>
      </Popconfirm>{' '}
      <Popconfirm
        title="¿Estás seguro de publicar este evento？"
        okText="Si"
        cancelText="No"
        onConfirm={() => onPublish()}
      >
        <Button
          loading={publishingEvent}
          disabled={publishingEvent || deletingEvent}
          type="ghost"
        >
          Publicar
        </Button>
      </Popconfirm>
    </>
  )
}

export default Toolbar
