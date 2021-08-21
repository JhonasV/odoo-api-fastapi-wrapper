from pydantic import BaseModel


class Companies(BaseModel):
    id: int
    name: str