from pydantic import BaseModel


class Countries(BaseModel):
    id: int
    name: str