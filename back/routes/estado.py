from fastapi import APIRouter

estados_db = (
    {'nome': 'Acre', 'sigla': 'AC'},
    {'nome': 'Alagoas', 'sigla': 'AL'},
    {'nome': 'Amapá', 'sigla': 'AP'},
    {'nome': 'Amazonas', 'sigla': 'AM'},
    {'nome': 'Bahia', 'sigla': 'BA'},
    {'nome': 'Ceará', 'sigla': 'CE'},
    {'nome': 'Distrito Federal', 'sigla': 'DF'},
    {'nome': 'Espírito Santo', 'sigla': 'ES'},
    {'nome': 'Góias', 'sigla': 'GO'},
    {'nome': 'Mato Grosso', 'sigla': 'MT'},
    {'nome': 'Mato Grosso do Sul', 'sigla': 'MS'},
    {'nome': 'Minas Gerais', 'sigla': 'SP'},
    {'nome': 'Pará', 'sigla': 'PA'},
    {'nome': 'Paraíba', 'sigla': 'PB'},
    {'nome': 'Paraná', 'sigla': 'PR'},
    {'nome': 'Pernambuco', 'sigla': 'PE'},
    {'nome': 'Piauí', 'sigla': 'PI'},
    {'nome': 'Rio de Janeiro', 'sigla': 'RJ'},
    {'nome': 'Rio Grande do Norte', 'sigla': 'RN'},
    {'nome': 'Rio Grande do Sul', 'sigla': 'RS'},
    {'nome': 'Rondônia', 'sigla': 'RO'},
    {'nome': 'Roraima', 'sigla': 'RR'},
    {'nome': 'Santa Catarina', 'sigla': 'SC'},
    {'nome': 'São Paulo', 'sigla': 'SP'},
    {'nome': 'Sergipe', 'sigla': 'SE'},
    {'nome': 'Tocantins', 'sigla': 'TO'}
)

router =APIRouter()

@router.get('/')
async def listar_estados():
    return estados_db