
// this file is the one you run through the cli
import colorizer  from "./..";


if (process.argv[0] == "node") {
    console.error("This shall be used from bin ");
    // @ts-ignore
    process.exit(1);
}
//@ts-ignore 
var color = process.argv[1];
// @ts-ignore 
console.log(colorizer(process.argv.slice(2).join(""), color));
