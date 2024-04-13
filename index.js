import inquirer from "inquirer";
import { get, save } from "./filesMethods.js";
import { promptNewSpent } from "./spentPrompts.js";



const main = async () => {
  let run = true;
  while(run) {
    const action = await inquirer.prompt([
        {
            type: "list",
            name: "chosen",
            message: "Que desea hacer?",
            choices: [

                {value:1, name:"Ver Todos Los gastos"},
                {value:2, name:"Ingresar un nuevo gasto"},
                {value:99, name:"Salir"},

            ]
        }
    ])
    switch(action.chosen){
        case 1: 
            await getAllSpent();
            break;
        case 2: 
            await addSpent();
            break;
        case 99:
            run=false;
            break;
        default:
            run=false
            break
    }
  }
  console.log(`Nos vemos pronto!`);
}


main();


async function addSpent() {
    console.log('cargando gastos...');
    const newSpentData = await promptNewSpent();
    console.log('Creando: ', newSpentData);

    const currentSpent = await get('spent');

    currentSpent.push(newSpentData);

    await save('spent', currentSpent);

}

async function getAllSpent() {
    const currentSpent = await get('spent');
    console.log('Todos los gastos: ', currentSpent);
}




