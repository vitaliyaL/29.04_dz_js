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
      for (let i = num1; i >= num2; i--) {
        console.log(i);
      }
    } else {
      for (let i = num1; i <= num2; i++) {
        console.log(i);
      }
    }
  } else {
    console.log("Некорректный ввод.");
  }
} else {
  console.log("Некорректный ввод.");
}

let i = 3;
let j = 4;
let pin = prompt("Введите PIN: у вас 3 попытки");

pin ? password(i, j, pin) : alert("Всего доброго!");

function password(i, j, pin) {
  if (i > 1) {
    if (pin === "12345") {
      alert("Добро пожаловать!");
    } else {
      i--;
      pin = prompt(`Введите PIN: \nКоличество оставшихся попыток: ${i}`);
      if (pin) {
        password(i, j, pin);
      } else {
        alert("Всего доброго!");
      }
    }
  } else {
    //puk
    if (j > 0) {
      if (pin === "67890") {
        alert("Добро пожаловать!");
      } else {
        j--;
        pin = prompt(`Введите PUK: \nКоличество оставшихся попыток: ${j}`);
        if (pin) {
          password(i, j, pin);
        } else {
          alert("Всего доброго!");
        }
      }
    } else {
      alert("Всего доброго!");
    }
  }
}

let n1 = +prompt("Введите первое число диапазона:");
if (!isNaN(n1) && n1) {
  let n2 = +prompt("Введите второе число диапазона:");
  if (!isNaN(n2) && n2) {
    if (n1 > n2) {
      for (let i = n1; i >= n2; i--) {
        let str = `${i} - `;
        i >= 100 ? (str += "больше ста, ") : (str += "меньше ста, ");
        i % 2 === 0 ? (str += "четное, ") : (str += "нечетное, ");
        i >= 0 ? (str += "положительное.") : (str += "отрицательное.");
        console.log(str);
      }
    } else {
      for (let i = n1; i <= n2; i++) {
        let str = `${i} - `;
        i >= 100 ? (str += "больше ста, ") : (str += "меньше ста, ");
        i % 2 === 0 ? (str += "четное, ") : (str += "нечетное, ");
        i >= 0 ? (str += "положительное.") : (str += "отрицательное.");
        console.log(str);
      }
    }
  }
}

let n3 = +prompt("Введите первое число диапазона:");
if (!isNaN(n3) && n3) {
  let n4 = +prompt("Введите второе число диапазона:");
  if (!isNaN(n4) && n4) {
    let a = 7;
    if (n3 > n4) {
      for (let i = n3; i >= n4 && a > 0; i--) {
        console.log(i);
        a--;
      }
    } else {
      for (let i = n3; i <= n4 && a > 0; i++) {
        console.log(i);
        a--;
      }
    }
  }
}

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 2, 3));
console.log(sum("c", "a", "t"));

function sumSort(str1, str2, str3) {
  const arr = [str1, str2, str3];
  arr.sort();
  return arr[0] + " " + arr[1] + " " + arr[2];
}

console.log(sumSort("ulululu", "ololol", "alalal"));

function userName(name) {
  if (name) {
    return console.log(`С уважением, ${name}`);
  } else {
      name = prompt("Введите ваше имя:");
    return console.log(`С уважением, ${name}`);
  }
}

userName("vita");
userName();



function numPow(num1, num2) {
  if (num2) {
    return num1 ** num2;
  } else {
    return num1 ** 2;
  }
}

console.log(numPow(2, 3));
console.log(numPow(2));
