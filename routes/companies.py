from fastapi import APIRouter
from odoo_connection import db, models, uid, password

router = APIRouter(
    prefix='/api/v1/companies',
    tags=['companies']
)

@router.get('/all')
def get_companies():
    companies = models.execute_kw(db, uid, password, 'res.company', 'search_read', [[]], {'fields': ['id', 'name']})
    return companies