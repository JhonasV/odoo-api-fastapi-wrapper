from datetime import datetime
from models.companies import Companies
from pydantic import BaseModel
from typing import List, Union

class EventsIn(BaseModel):
    id: int
    name: str
    active: bool
    company_id: int
    organizer_id: int
    date_begin: datetime
    date_end: datetime
    description: str
    seats_max: int
    seats_limited: bool




class EventOut(BaseModel):
    id: int
    name: str
    active: bool
    company_id: List[Union[int, str]]
    organizer_id: List[Union[int, str]]
    kanban_state_label: str
    date_begin: datetime
    date_end: datetime
    event_logo: bool
    is_published: bool
    description: str 
    seats_max: int
    seats_available:int
    seats_reserved: int
    menu_register_cta: bool

