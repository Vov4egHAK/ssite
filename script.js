function season () {
    let a = Number(prompt(`Укажите номер месяца - `));
    if ((a >= 1 && a < 3) || a === 12) {alert(`Это ЗИМА :)`)
}
    else if (a > 2 && a < 6) {alert(`Это ВЕСНА :)`)} 
    else if (a > 5 && a <9 ) {alert(`Это ЛЕТО :)`)}
    else if (a > 8 && a < 12) {alert(`Это ОСЕНЬ :)`)}
    else {alert(`Вы ввели неверное значение`)};
}


function word () {
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert(list)

    let use1 = prompt(`Чему равнялся первый элемент массива?`);
    let use2 = prompt(`Чему равнялся последний элемент массива?`)

    const name = use1
    const result = name.charAt(0).toUpperCase() + name.slice(1)
    use1 = result;
    
    const name2 = use2
    const result2 = name2.charAt(0).toUpperCase() + name2.slice(1)
    use2 = result2;    

    if (use1 === list[0] && use2 === list[6]) {
        alert(`Молодец! Вы угадали оба слова!`)
    } else if (use1 === list [0] || use2 === list[6]) {
        alert(`Вы были близки к победе!`)
    } else {alert(`Вы ответили неверно оба раза...`)}

    
}

let useAnswer = String
function riddle2 () {
    useAnswer = prompt(`У тебя последняя попытка
    Какое колесо не крутится при левом развороте?
    (Это можно ассоциировать с пословицей о пятой колонне...)`)
    if (useAnswer.toLowerCase()===`запасное`) {
    alert(`Молодец, угадал хоть и проигрыш был уже не далеко`)
    } else {alert(`Извини ты проиграл друг`)}
}
function ridlle1 () {
    useAnswer = prompt(`У тебя еще 2 попытки
    Какое колесо не крутится при левом развороте?
    (Вспомни, сколько у машины колес...)`)
    if (useAnswer.toLowerCase()===`запасное`) {
    alert(`Вау круто молодец ты угадал со второго раза`)}
    else {riddle2()}
}


function riddle () {
    useAnswer = (prompt(`Какое колесо не крутится при левом развороте? (у тебя три попытки...)`));
    if (useAnswer.toLowerCase()===`запасное`) {
        alert(`Молодец, угадал с первого раза`)}
        else {ridlle1()}
}




