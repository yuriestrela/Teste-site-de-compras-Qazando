export const format = (value) => {

let formattedValue

formattedValue = value.replace(/\./g, '').replace(',', '.')
formattedValue = Number(formattedValue.split('$')[1].trim())
if (value.includes('-')) {
    formattedValue = formattedValue * -1;
}

return formattedValue
}

function randomNumber(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

export const prepareLocalStorage = (win) => {

    win.localStorage.setItem('dev.finances:transactions', JSON.stringify([
        {
            description:'Pagamento',
            amount: randomNumber() * 100,
            date: '11/03/2025'
        },
        {
            description: 'Noitada',
            amount: - (randomNumber() * 100),
            date: '12/03/2025'
        }
    ]))
}