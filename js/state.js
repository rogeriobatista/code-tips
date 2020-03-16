// Original
function getCapital(state) {
    let capital
    switch(state) {
        case 'RJ':
            capital = 'Rio de Janeiro'
            break
        case 'SP':
            capital = "São Paulo"
            break
        case 'MG':
            capital = 'Belo Horizonte'
            break
        default:
            capital = 'Do not exist'
    }
    return capital
}

// Clean Code
function getCapital(state) {
    const states = {
        'RJ': () => 'Rio de Janeiro',
        'SP': () => 'São Paulo',
        'MG': () => 'Belo Horizonte',
        'Default': () => 'Do not exist'
    }
    return (states[state] || states['Default'])()
}