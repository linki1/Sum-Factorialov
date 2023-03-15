//создаем переменые 
let a, b, h;
// проверка переменых
do {
    a = +prompt('enter number a', 1);
} while (isNaN(a) || !a);
document.write(`a = ${a}  <br>`);

do {
    b = +prompt('enter number b', 5);
} while (isNaN(b) || !b || b <= a);
document.write(`b = ${b}  <br>`);

do {
    h = +prompt('enter number h', 1);

} while (isNaN(h) || !h || h < 0);
document.write(`h = ${h}  <br>`);
// подсчет сумы факториалов с ее выводом 
let sum = 0;
for (a; a <= b; a += h) {
    for (j = 1, factorial = 1; j <= a; j++) {
        console.log(`${j} `);
        factorial = factorial * j;
    }
    sum += factorial;
}
document.write(`${sum}`);