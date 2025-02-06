import nomeCognome from "./names.js";
import hobby from "./hobbies.js";

function completa() {
    return {
        fullName: nomeCognome('simone', 'corsi'),
        hobbies: hobby('pesca', 'carte', 'nuoto')
    };
}

console.log(completa());