import inquirer from "inquirer";




// spent = gasto
export async function promptNewSpent() {
    return await inquirer.prompt(newSpent);    
}

const newSpent=[
    {
        type: "input",
        name: "name",
        message: "Ingrese su nombre:"
    },
    {
        type: "input",
        name: "spent",
        message: "Ingrese el gasto:",
    }
];