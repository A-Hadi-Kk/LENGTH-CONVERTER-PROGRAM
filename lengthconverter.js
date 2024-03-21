#! /usr/bin/env node
import inquirer from "inquirer";
const lengthtypes = ["metres", "foots", "centimetres", "millimetres", "inches", "yards", "kilometres", "Exit"];
//For Running Continuosly
let conversionround = true;
while (conversionround) {
    //For Selecting the type of Length
    const choice = await inquirer.prompt({
        name: "convertor",
        type: "list",
        message: "Select the form in which you have the length:\n",
        choices: lengthtypes,
        pageSize: lengthtypes.length,
    });
    //For Exiting
    if (choice.convertor == "Exit") {
        conversionround = false;
        console.log("Exited...");
        break;
    }
    //For Metres
    else if (choice.convertor == "metres") {
        const answer = await inquirer.prompt({
            name: "conversion",
            type: "list",
            message: "Select the conversion\n",
            choices: ["m-km", "m-cm", "m-ft", "m-mm", "m-inc", "m-yar", "Exit"],
        });
        //For Exiting
        if (answer.conversion == "Exit") {
            conversionround = false;
            console.log("Exited...");
            break;
        }
        //metres to kilometres
        else if (answer.conversion == "m-km") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let mKm = 0.001;
            let output = input1.value * mKm;
            console.log(`The result of your conversion from metres to kilometres is: ${output}km`);
        }
        //metres to centimetres
        else if (answer.conversion == "m-cm") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let mCm = 100;
            let output = input1.value * mCm;
            console.log(`The result of your conversion from metres to centimetres is: ${output}cm`);
        }
        //metres to foots
        else if (answer.conversion == "m-ft") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let mFt = 3.281;
            let output = input1.value * mFt;
            console.log(`The result of your conversion from metres to foots is: ${output}ft`);
        }
        //metres to millimetres
        else if (answer.conversion == "m-mm") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let mMm = 1000;
            let output = input1.value * mMm;
            console.log(`The result of your conversion from metres to millimetres is: ${output}mm`);
        }
        //metres to inches
        else if (answer.conversion == "m-inc") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let mInc = 39.37;
            let output = input1.value * mInc;
            console.log(`The result of your conversion from metres to inches is: ${output}inches`);
        }
        //metres to yards
        else if (answer.conversion == "m-yar") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let mYar = 1.094;
            let output = input1.value * mYar;
            console.log(`The result of your conversion from metres to yards is: ${output}yd`);
        }
    }
    //For Foots
    else if (choice.convertor == "foots") {
        const answer = await inquirer.prompt({
            name: "conversion",
            type: "list",
            message: "Select the conversion\n",
            choices: ["ft-km", "ft-cm", "ft-m", "ft-mm", "ft-inc", "ft-yar", "Exit"],
        });
        //For Exiting
        if (answer.conversion == "Exit") {
            conversionround = false;
            console.log("Exited...");
            break;
        }
        //foots to kilometres
        else if (answer.conversion == "ft-km") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let ftKm = 3281;
            let output = input1.value / ftKm;
            console.log(`The result of your conversion from foots to kilometres is: ${output}km`);
        }
        //foots to centimetres
        else if (answer.conversion == "ft-cm") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let ftCm = 30.48;
            let output = input1.value * ftCm;
            console.log(`The result of your conversion from foots to centimetres is: ${output}cm`);
        }
        //foots to metres
        else if (answer.conversion == "ft-m") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let ftm = 3.281;
            let output = input1.value / ftm;
            console.log(`The result of your conversion from foots to metres is: ${output}m`);
        }
        //foots to millimetres
        else if (answer.conversion == "ft-mm") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let ftMm = 304.8;
            let output = input1.value * ftMm;
            console.log(`The result of your conversion from foots to millimetres is: ${output}mm`);
        }
        //foots to inches
        else if (answer.conversion == "ft-inc") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let ftInc = 12;
            let output = input1.value * ftInc;
            console.log(`The result of your conversion from foots to inches is: ${output}inches`);
        }
        //foots to yards
        else if (answer.conversion == "ft-yar") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let ftYd = 3;
            let output = input1.value / ftYd;
            console.log(`The result of your conversion from foots to yards is: ${output}yd`);
        }
    }
    //For Centimetres
    else if (choice.convertor == "centimetres") {
        const answer = await inquirer.prompt({
            name: "conversion",
            type: "list",
            message: "Select the conversion\n",
            choices: ["cm-km", "cm-m", "cm-ft", "cm-mm", "cm-inc", "cm-yar", "Exit"],
        });
        //For Exiting
        if (answer.conversion == "Exit") {
            conversionround = false;
            console.log("Exited...");
            break;
        }
        //centimetres to kilometres
        else if (answer.conversion == "cm-km") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let cmKm = 100000;
            let output = input1.value / cmKm;
            console.log(`The result of your conversion from centimetres to kilometres is: ${output}km`);
        }
        //centimetre to metres
        else if (answer.conversion == "cm-m") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let cmm = 100;
            let output = input1.value / cmm;
            console.log(`The result of your conversion from centimetres to metres is: ${output}m`);
        }
        //centimetres to foots
        else if (answer.conversion == "cm-ft") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let cmFt = 30.48;
            let output = input1.value / cmFt;
            console.log(`The result of your conversion from centimetres to foots is: ${output}ft`);
        }
        //centimetres to millimetres
        else if (answer.conversion == "cm-mm") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let cmMm = 10;
            let output = input1.value * cmMm;
            console.log(`The result of your conversion from centimetres to millimetres is: ${output}mm`);
        }
        //centimetres to inches
        else if (answer.conversion == "cm-inc") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let cmInc = 2.54;
            let output = input1.value / cmInc;
            console.log(`The result of your conversion from centimetres to inches is: ${output}inches`);
        }
        //centimetres to yards
        else if (answer.conversion == "cm-yar") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let cmYd = 91.44;
            let output = input1.value / cmYd;
            console.log(`The result of your conversion from centimetres to yards is: ${output}yd`);
        }
    }
    //For Millimetres
    else if (choice.convertor == "millimetres") {
        const answer = await inquirer.prompt({
            name: "conversion",
            type: "list",
            message: "Select the conversion\n",
            choices: ["mm-km", "mm-m", "mm-ft", "mm-cm", "mm-inc", "mm-yar", "Exit"],
        });
        //For Exiting
        if (answer.conversion == "Exit") {
            conversionround = false;
            console.log("Exited...");
            break;
        }
        //millimetres to kilometres
        else if (answer.conversion == "mm-km") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let mmKm = 1000000;
            let output = input1.value / mmKm;
            console.log(`The result of your conversion from millimetres to kilometres is: ${output}km`);
        }
        //millimetres to metres
        else if (answer.conversion == "mm-m") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let mmM = 1000;
            let output = input1.value / mmM;
            console.log(`The result of your conversion from millimetres to metres is: ${output}m`);
        }
        //millimetres to foots
        else if (answer.conversion == "mm-ft") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let mmFt = 304.8;
            let output = input1.value / mmFt;
            console.log(`The result of your conversion from millimetres to foots is: ${output}ft`);
        }
        //millimetres to centimetres
        else if (answer.conversion == "mm-cm") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let mmCm = 10;
            let output = input1.value / mmCm;
            console.log(`The result of your conversion from millimetres to centimetres is: ${output}cm`);
        }
        //millimetres to inches
        else if (answer.conversion == "mm-inc") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let mmInc = 25.4;
            let output = input1.value / mmInc;
            console.log(`The result of your conversion from millimetres to inches is: ${output}inches`);
        }
        //millimetres to yards
        else if (answer.conversion == "mm-yar") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let mmYd = 914.4;
            let output = input1.value / mmYd;
            console.log(`The result of your conversion from millimetres to yards is: ${output}yd`);
        }
    }
    //For Inches
    else if (choice.convertor == "inches") {
        const answer = await inquirer.prompt({
            name: "conversion",
            type: "list",
            message: "Select the conversion\n",
            choices: ["inc-km", "inc-cm", "inc-ft", "inc-mm", "inc-m", "inc-yar", "Exit"],
        });
        //For Exiting
        if (answer.conversion == "Exit") {
            conversionround = false;
            console.log("Exited...");
            break;
        }
        //inches to kilometres
        else if (answer.conversion == "inc-km") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let incKm = 39370;
            let output = input1.value / incKm;
            console.log(`The result of your conversion from inches to kilometres is: ${output}km`);
        }
        //inches to centimetres
        else if (answer.conversion == "inc-cm") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let incCm = 2.54;
            let output = input1.value * incCm;
            console.log(`The result of your conversion from inches to centimetres is: ${output}cm`);
        }
        //inches to foots
        else if (answer.conversion == "inc-ft") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let incFt = 12;
            let output = input1.value / incFt;
            console.log(`The result of your conversion from inches to foots is: ${output}ft`);
        }
        //inches to millimetres
        else if (answer.conversion == "inc-mm") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let incMm = 25.4;
            let output = input1.value * incMm;
            console.log(`The result of your conversion from inches to millimetres is: ${output}mm`);
        }
        //inches to metres
        else if (answer.conversion == "inc-m") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let incM = 39.37;
            let output = input1.value / incM;
            console.log(`The result of your conversion from inches to metres is: ${output}m`);
        }
        //inches to yards
        else if (answer.conversion == "inc-yar") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let incYd = 36;
            let output = input1.value / incYd;
            console.log(`The result of your conversion from inches to yards is: ${output}yd`);
        }
    }
    //For Yards
    else if (choice.convertor == "yards") {
        const answer = await inquirer.prompt({
            name: "conversion",
            type: "list",
            message: "Select the conversion\n",
            choices: ["yar-km", "yar-cm", "yar-ft", "yar-mm", "yar-inc", "yar-m", "Exit"],
        });
        //For Exiting
        if (answer.conversion == "Exit") {
            conversionround = false;
            console.log("Exited...");
            break;
        }
        //yards to kilometres
        else if (answer.conversion == "yar-km") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let ydKm = 1094;
            let output = input1.value / ydKm;
            console.log(`The result of your conversion from yards to kilometres is: ${output}km`);
        }
        //yards to centimetres
        else if (answer.conversion == "yar-cm") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let ydCm = 91.44;
            let output = input1.value * ydCm;
            console.log(`The result of your conversion from yards to centimetres is: ${output}cm`);
        }
        //yards to foots
        else if (answer.conversion == "yar-ft") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let ydFt = 3;
            let output = input1.value * ydFt;
            console.log(`The result of your conversion from yards to foots is: ${output}ft`);
        }
        //yards to millimetres
        else if (answer.conversion == "yar-mm") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let ydMm = 914.4;
            let output = input1.value * ydMm;
            console.log(`The result of your conversion from yards to millimetres is: ${output}mm`);
        }
        //yards to inches
        else if (answer.conversion == "yar-inc") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let ydInc = 36;
            let output = input1.value * ydInc;
            console.log(`The result of your conversion from yards to inches is: ${output}inches`);
        }
        //yards to metres
        else if (answer.conversion == "yar-m") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let ydM = 1.094;
            let output = input1.value / ydM;
            console.log(`The result of your conversion from yards to metres is: ${output}m`);
        }
    }
    //For Kilometres 
    else if (choice.convertor == "kilometres") {
        const answer = await inquirer.prompt({
            name: "conversion",
            type: "list",
            message: "Select the conversion\n",
            choices: ["km-m", "km-cm", "km-ft", "km-mm", "km-inc", "km-yar", "Exit"],
        });
        //For Exiting
        if (answer.conversion == "Exit") {
            conversionround = false;
            console.log("Exited...");
            break;
        }
        //kilometres to metres
        else if (answer.conversion == "km-m") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let kmM = 1000;
            let output = input1.value * kmM;
            console.log(`The result of your conversion from kilometres to metres is: ${output}m`);
        }
        //kilometres to centimetres
        else if (answer.conversion == "km-cm") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let kmCm = 100000;
            let output = input1.value * kmCm;
            console.log(`The result of your conversion from kilometres to centimetres is: ${output}cm`);
        }
        //kilometres to foots
        else if (answer.conversion == "km-ft") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let kmFt = 3281;
            let output = input1.value * kmFt;
            console.log(`The result of your conversion from kilometres to foots is: ${output}ft`);
        }
        //kilometres to millimetres
        else if (answer.conversion == "km-mm") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let kmMm = 1000000;
            let output = input1.value * kmMm;
            console.log(`The result of your conversion from kilometres to millimetres is: ${output}mm`);
        }
        //kilometres to inches
        else if (answer.conversion == "km-inc") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let kmInc = 39370;
            let output = input1.value * kmInc;
            console.log(`The result of your conversion from kilometres to inches is: ${output}inches`);
        }
        //kilometres to yards
        else if (answer.conversion == "km-yar") {
            const input1 = await inquirer.prompt({
                name: "value",
                type: "number",
                message: "Enter the length in numbers:\n",
            });
            let kmYd = 1094;
            let output = input1.value * kmYd;
            console.log(`The result of your conversion from kilometres to yards is: ${output}yd`);
        }
    }
}
