describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});

//EJERCICIOS DE TEST
//PARA INSTALAR JASMINE = npm install save--dev jasmine-browser-runner jasmine-core
//PARA INSTALAR PARTE 2 = npx jasmine-browser-runner init
//PARA LEVANTAR EL SERVER DE JASMINE = npx jasmine-browser-runner serve
const sumar = (a, b) => a + b;

describe("este es el grupo de test", () => {
  it("la funcion sumar debe estar definida", () =>{
    expect(sumar).toBeDefined();
  });

  it("yo espero que se sumen los argumentos", () =>{
    expect(sumar(2, 2)).toBe(4);
    expect(sumar(2, 3)).toBe(5);
    expect(sumar(2, 9)).toBe(11);
    expect(sumar(2, 0)).toBe(2);
  });

  it("yo espero que los numeros sean iguales", () => {
    expect(2).toEqual(2);
    expect(40).toEqual(40);
    expect(2326).toEqual(2326);
  });

  it("yo espero que las palabras sean iguales", () => {
    expect("hola").toBe("hola");
  });

  it("yo espero que los objetos sean iguales", () => {
    expect({hola2: "hola1", hola2: "hola 2"}).toEqual({hola2: "hola1", hola2: "hola 2"});
  });

  it("yo espero que los arrays sean iguales", () => {
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });


});
