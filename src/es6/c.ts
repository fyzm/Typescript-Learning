import {a,b,c} from './a';// some export
import { P } from './a'; //export interface
import {f as F} from './a'; //new name when export 
import * as All from './a'; // import all ,bangding in All
import myFunction from './a'; //no add {},import 

 console.log(a,b,c)
 let p: P = {
     x: 1,
     y: 1
 }
 console.log(All)

 myFunction()