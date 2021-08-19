from models.countries import Countries
from fastapi import APIRouter
from odoo_connection import uid, password, models, db
router = APIRouter(
    prefix='/api/v1/countries',
    tags=['countries']
)


@router.get('/all', response_model=Countries)
def get_countries():
    countries = models.execute_kw(db, uid, password, 'res.country', 'search_read', [[]], {'fields': ['id', 'name']})
    return countries