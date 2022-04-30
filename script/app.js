let num1 = +prompt("Введите первое число диапазона:");
if (!isNaN(num1) && num1) {
  let num2 = +prompt("Введите второе число диапазона:");
  if (!isNaN(num2) && num2) {
    while (Math.abs(num1 - num2) < 4) {
      num2 = +prompt(
        "Некорректный ввод: диапазон должен включать минимум 5 чисел! \nПовторно введите второе число диапазона:"
      );
    }
    if (num1 > num2) {
        for (let i = num1; i >= num2; i--)
      {
        console.log(i);
      }
    } else {
      for (let i = num1; i <= num2; i++)  {
        console.log(i);
      }
    }
  } else {
    console.log("Некорректный ввод.");
  }
} else {
  console.log("Некорректный ввод.");
}
