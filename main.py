from fastapi import FastAPI
from routes import events

app = FastAPI()
app.include_router(events.router)