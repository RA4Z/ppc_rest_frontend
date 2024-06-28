import api from 'services/api'

export const itens = [
    {
        title: 'Display WEN Indicadors',
        description: 'Listar todos os indicadores cadastrados na página WEN Indicators',
        link: '/WenIndicators'
    },
    {
        title: 'Update WEN Indicadors',
        description: 'Atualizar dados de WEN Indicators',
        onclick: () => api.GET.update_database('/update')
    },
]