from sys import base_prefix
from fastapi import APIRouter, HTTPException
from odoo_connection import models, db, uid, password
from typing import Optional
from helpers.api_fields import event_fields
router = APIRouter(
    prefix='/api/v1/events',
    tags=['events']
)



@router.get("/")
def get_events(offset: Optional[int] = 1, limit: int = 5):
    record = models.execute_kw(db, uid, password, 
    'event.event', 'search_read', 
    [[['is_published', '=', 'true']]], 
    {'fields': event_fields,
    'offset': offset, 'limit': limit})

    if len(record) > 0:
        return record
    return HTTPException(status_code=404, detail="No events found")


@router.get('/{event_id}')
def get_event(event_id: int):
    event = models.execute_kw(db, uid, password,
            'event.event', 'search_read', [[['id', '=', event_id]]],
            {'fields': event_fields})

    if len(event) == 0 :
        return HTTPException(status_code=404, detail='Event not found')

    return event[0]


@router.delete('/{event_id}')
def delete_event(event_id: int):    
    event_removed = models.execute_kw(db, uid, password, 'event.event', 'unlink', [event_id])

    return event_removed