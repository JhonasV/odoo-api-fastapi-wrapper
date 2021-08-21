import React, { useEffect, useState } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { Events } from '../../../app/api/agent'
import { IEventsOut } from '../../../app/models'
import { Tag } from 'antd'
import { GridReadyEvent, GridApi, ColumnApi } from 'ag-grid-community'

interface IProps {
  setGridApiPage: React.Dispatch<React.SetStateAction<GridApi | undefined>>
  events: IEventsOut[] | undefined
}

const Table = ({ setGridApiPage, events }: IProps) => {
  const onGridReady = (params: GridReadyEvent) => {
    setGridApiPage(params.api)
  }

  const countryCellRenderer = (params: any) => {
    let res = params.data.is_published
      ? '<span class="ant-tag ant-tag-green">Está Publicado</span>'
      : '<span class="ant-tag ant-tag-yellow">No Está Publicado</span>'

    return res
  }

  return (
    <div className="ag-theme-alpine" style={{ height: '70vh', width: '100%' }}>
      <AgGridReact
        rowData={events}
        onGridReady={onGridReady}
        rowSelection={'single'}
      >
        <AgGridColumn
          headerName="Codigo"
          sortable={true}
          filter={true}
          field="id"
          width={100}
        ></AgGridColumn>
        <AgGridColumn
          width={300}
          headerName="Nombre Evento"
          sortable={true}
          filter={true}
          field="name"
        ></AgGridColumn>
        <AgGridColumn
          width={170}
          headerName="Máximo de Asientos"
          sortable={true}
          filter={true}
          field="seats_max"
        ></AgGridColumn>
        <AgGridColumn
          width={170}
          headerName="Asientos Reservados"
          sortable={true}
          filter={true}
          field="seats_reserved"
        ></AgGridColumn>
        <AgGridColumn
          width={170}
          headerName="Asientos Disponibles"
          sortable={true}
          filter={true}
          field="seats_available"
        ></AgGridColumn>
        <AgGridColumn
          sortable={true}
          filter={true}
          width={250}
          headerName="Estado del Evento"
          field="kanban_state_label"
        ></AgGridColumn>
        <AgGridColumn
          sortable={true}
          filter={true}
          width={200}
          headerName="Fecha de Inicio"
          field="date_begin"
        ></AgGridColumn>
        <AgGridColumn
          sortable={true}
          filter={true}
          width={200}
          headerName="Fecha de Fin"
          field="date_end"
        ></AgGridColumn>
        <AgGridColumn
          headerName="¿Está publicado? "
          sortable={true}
          cellRenderer={countryCellRenderer}
          filter={true}
          field="is_published"
        ></AgGridColumn>
      </AgGridReact>
    </div>
  )
}

export default Table
