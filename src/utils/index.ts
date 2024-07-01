export const getCountryImage = (country: string) => {
    switch (country) {
        case 'Brasil':
            return '/flags/bandeira brasil.png';
        case 'Estados Unidos':
            return '/flags/bandeira usa.png';
        case 'Portugal':
            return '/flags/bandeira portugal.png';
        case 'Índia':
            return '/flags/bandeira india.png';
        case 'África do Sul':
            return '/flags/bandeira africa.png';
        case 'China':
            return '/flags/bandeira china.png';
        case 'Alemanha':
            return '/flags/bandeira alemanha.png';
        case 'Global':
            return '/flags/global.png';
        default:
            return '/flags/global.png';
    }
};