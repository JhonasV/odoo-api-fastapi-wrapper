from fastapi import FastAPI
from routes import events, countries, companies

app = FastAPI()
app.include_router(events.router)
app.include_router(countries.router)
app.include_router(companies.router)