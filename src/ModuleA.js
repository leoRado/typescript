
import {fname, lname, obj} from './ModuleB.js';

// fname = "Lazar"; // -> won't work
obj.name = "Lazar";

console.log(`${fname} ${lname} -> ${obj.name}`);