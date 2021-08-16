import xmlrpc.client
from decouple import config

url = config('ODOO_URL')
db = config('ODOO_DB')
username = config('ODOO_USERNAME')
password = config('ODOO_PASSWORD')

common = xmlrpc.client.ServerProxy('{}/common'.format(url))

uid = common.authenticate(db, username, password, {})

models = xmlrpc.client.ServerProxy('{}/object'.format(url))


