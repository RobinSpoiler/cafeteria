import { addBebida } from "../mainFunction.js";

describe('Plan de pruebas', () => {
    // test('Receive only strings', () => { 
    //     var prueba = addBebida(1); //regresa una lista parseada
    //     expect(prueba).toBe("El formato de ingreso es un string, intente de nuevo")
    // })

    // test('Name is less than 2 characters in length', () =>{
    //     var prueba = addBebida("C, 2,3,4,6"); //regresa una lista parseada
    //     expect(prueba).toBe("Item inserted as Drink name is invalid (Has to be more than 2 characters)");
    // });

    // test('Item name is alphabetic', () =>{
    //     var prueba = addBebida("1Coca 1Cola,2,3,4,5"); //regresa una lista parseada
    //     expect(prueba).toBe("Item inserted as Drink name is invalid (Not an alphabetic name)");
        
    // });

    // test('Item name is 2 to 15 characters in length', () =>{
    //     var prueba = addBebida("CocaCola PinkFlavor,2,3,4,5"); //regresa una lista parseada
    //     expect(prueba).toBe("Item inserted as Drink name is invalid (Has to be more than 2 characters and less than 15)");
        
    // });

    test('Item name is 2 characters in length', () =>{
        var prueba = addBebida("Co,6,8,19,36"); //regresa una lista parseada
        expect(prueba).toBe("La bebida ha sido agregada correctamente");
        
    });

    test('Item name is 15 characters in length', () =>{
        var prueba = addBebida("CoCaCola Cherry,3,4,5,6"); //regresa una lista parseada
        expect(prueba).toBe("La bebida ha sido agregada correctamente");
        
    });

    // test('Size value is less than 1', () =>{
    //     var prueba = addBebida("CoCaCola Cherry,0,4,5,6"); //regresa una lista parseada
    //     expect(prueba).toBe("Invalid size - Size value in position 1 is less than 1");
    // });

    // test('Size value is greater than 48', () =>{
    //     var prueba = addBebida("CoCaCola Cherry,2,49,5,6"); //regresa una lista parseada
    //     expect(prueba).toBe("Invalid size - Size value in position 2 is greater than 48");
    // });

    // test('Size value is decimal', () =>{
    //     var prueba = addBebida("CoCaCola Cherry,2,40,10.3,6"); //regresa una lista parseada
    //     expect(prueba).toBe("Invalid size - Size value in position 3 is a decimal");
    // });

    // test('Size value contains nonnumeric values', () =>{
    //     var prueba = addBebida("CoCaCola Cherry,2,40,10,2a"); //regresa una lista parseada
    //     expect(prueba).toBe("Invalid size - Size value in position 4 is contains nonnumeric values");
    // });

    // test('Size value contains nonnumeric values', () =>{
    //     var prueba = addBebida("CoCaCola Cherry,2,40,10,20"); //regresa una lista parseada
    //     expect(prueba).toBe("Invalid - Size values entered in nonascending order");
    // });


   

});

