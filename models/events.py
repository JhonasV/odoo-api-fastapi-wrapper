from datetime import datetime
from pydantic import BaseModel

class EventsIn(BaseModel):
    id: int
    name: str
    active: bool
    company_id: int
    organizer_id: int
    date_begin: datetime
    date_end: datetime


class EventOut(BaseModel):
    id: int
    name: str
    active: bool
    company_id: int
    organizer_id: int
    date_begin: datetime
    date_end: datetime
    kanban_state_label: str
    country_id: int
    event_logo: int
    is_published: bool

