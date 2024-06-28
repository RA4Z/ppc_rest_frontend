import { update_database } from "services/functions"

export const itens = [
    {
        title: 'Display WEN Indicadors',
        description: 'Listar todos os indicadores cadastrados na página WEN Indicators',
        link: '/WenIndicators'
    },
    {
        title: 'Update WEN Indicadors',
        description: 'Atualizar dados de WEN Indicators',
        onclick: () => update_database('/update')
    },
]