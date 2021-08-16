# odoo-api-fastapi-wrapper
FastAPI Rest API wrapper, consuming odoo xmlrpc API


## Features
- Contacts
- Events


## Technologies
- python 3
- fastapi
- odoo xmlrpc api

## Installation

### Create environment
```bash
virtualenv env
```

### Activate environment
Git Bash
```bash
source ./env/Scrips/Activate
```

Powershell
```bash
./env/Scrips/Activate
```
## Install dependencies

Install the dependecies in the folder `odoo-api-fastapi-wrapper` root

```bash
pip install -r requirements.txt
```



## Run the project
Go to the project root folder
```bash
uvicorn main:app --reload
```

App must be running at:
```bash
 http://127.0.0.1:8000/docs
```



