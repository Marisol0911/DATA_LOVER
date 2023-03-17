//como se agregan valores a los objetos u atributos
/*const student = {
  track: "Front the developer",
};

const name = prompt("cual es tu nombre?");
const age = prompt("cual es tu edad?");

student.name = name;
student.age = age;
student.track = "ux";
console.log(student);*/

// como se agregan elemnentos al array

/*const array = [];

array[0] = "elemento";
array[1] = "elemento1";

//como lo cambio

array[0] = "elemento0";
console.log(array);*/

/*const guardarCaraMultiple = function (imprimirMuchasCaras, carita) {
  for (i = 1; i <= imprimirMuchasCaras; i++) {
    console.log(i + "" + carita);
  }
};
guardarCaraMultiple(5, "(:)");*/

let employees = [
  { nombre: "jhon", salary: 90000, hireDate: "juli 1, 2010" },
  { nombre: "david", salary: 7500, hireDate: "agust 1, 2009" },
  { nombre: "ana", salary: 8000, hireDate: "december 12, 2011" },
];

employees.forEach((employee, index) => console.log(employee));
