const ToDoList = require('../src/index.mjs');

describe("ToDoList", function() {
let list;

beforeEach(function() {
    list = new ToDoList();
});

it("Debe ser una clase", function() {
    expect(typeof ToDoList).toBe('function');
});

it("Cada lista debe ser una instancia de ToDoList", function() {
    expect(list instanceof ToDoList).toBe(true);
});

it("Debería agregar un elemento a la lista", function() {
    list.add("Elemento 1");
    expect(list.getItems()).toEqual(["Elemento 1"]);
});

it("Debería eliminar el último elemento de la lista", function() {
    list.add("Elemento 1");
    list.add("Elemento 2");
    list.removeLast();
    expect(list.getItems()).toEqual(["Elemento 1"]);
});

it("Debería retornar la lista de elementos", function() {
    list.add("Elemento 1");
    list.add("Elemento 2");
    expect(list.getItems()).toEqual(["Elemento 1", "Elemento 2"]);
});
});
