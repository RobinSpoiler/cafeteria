import { parse } from "@babel/core";

export function addBebida(lista){
    //Input is a single string line
    if(typeof lista !== 'string'){
        return "El formato de ingreso es un string, intente de nuevo";
    }

    //Input being parsed
    var parsed = lista.split(",");

    //Name is less than 2 characters in length
    if((parsed[0].length < 2)){
        return "Item inserted as Drink name is invalid (Has to be more than 2 characters)";
    }

    //Item name is alphabetic
    var isalpha = str => /^([A-Za-z]+[\s]*[\w]+)$/.test(str);
    if(!(isalpha(parsed[0]))){
        return "Item inserted as Drink name is invalid (Not an alphabetic name)";
    }
    
    //Item name is 2 to 15 characters in lenght
    if((parsed[0].length > 15)){
        console.log(parsed[0].length)
        return "Item inserted as Drink name is invalid (Has to be more than 2 characters and less than 15)";
    }
    
    //Size value 
    var isonlynum = num => /^[0-9]+$/.test(num);
    for(var i = 1; i < parsed.length; i++){
        var order = parsed[i];
        if(parsed[i].includes(".")){
            return `Invalid size - Size value in position ${i} is a decimal`;
        }
        if(!(isonlynum(Number(parsed[i])))){
            return `Invalid size - Size value in position ${i} is contains nonnumeric values`;
        }
        if(Number(parsed[i]) < 1){
            return `Invalid size - Size value in position ${i} is less than 1`;
        }
        if(Number(parsed[i]) > 48){
            return `Invalid size - Size value in position ${i} is greater than 48`;
        }
        if(order < parsed[i+1]){
            return `Invalid - Size values entered in nonascending order`;
        }
    }
    
    

    
    return "La bebida ha sido agregada correctamente";
}

