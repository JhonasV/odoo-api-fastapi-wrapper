from models.events import EventOut, EventsIn
from fastapi import APIRouter, HTTPException
from odoo_connection import models, db, uid, password
from typing import List, Optional
from helpers.api_fields import event_fields
router = APIRouter(
    prefix='/api/v1/events',
    tags=['events']
)

@router.get("/all/active", response_model=List[EventOut])
def get_events():
    record = models.execute_kw(db, uid, password, 
    'event.event', 'search_read', 
    [[['active', '=', 'true']]], 
    {'fields': event_fields})

    if len(record) > 0:
        return record
    return HTTPException(status_code=404, detail="No events found")

@router.get("/all", response_model=List[EventOut])
def get_events():
    record = models.execute_kw(db, uid, password, 
    'event.event', 'search_read', 
    [[['is_published', '=', 'true'], ['active','=', 'true']]], 
    {'fields': event_fields})

    if len(record) > 0:
        return record
    return HTTPException(status_code=404, detail="No events found")



@router.get('/types')
def get_event_types():    
    record = models.execute_kw(db, uid, password, 'event.type', 'search_read', [[]], {'fields': ['id', 'name']})
    return record

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
    models.execute_kw(db, uid, password, 'event.event', 'write', [[event_id], {'active': False}])
    deleted_event_name = models.execute_kw(db, uid, password, 'event.event', 'name_get', [[event_id]])
    return deleted_event_name

@router.put('/{event_id}')
def put_publish_event(event_id: int):
    models.execute_kw(db, uid, password, 'event.event', 'write', [[event_id], {'is_published': True}])
    published_event_name = models.execute_kw(db, uid, password, 'event.event', 'name_get', [[event_id]])
    return published_event_name
    
@router.post('/create')
def post_event(event: EventsIn):

    event_dict = {
        'id': event.id,
        'name': event.name,
        'active': event.active,
        'company_id': event.company_id,
        'organizer_id': event.organizer_id,
        'date_begin': str(event.date_begin),
        'date_end': str(event.date_end),
        'description': event.description,
        'seats_max': event.seats_max,
        'seats_limited': event.seats_limited
    }
    
    id = models.execute_kw(db, uid, password, 'event.event', 'create', [event_dict])
    return {'id': id};




