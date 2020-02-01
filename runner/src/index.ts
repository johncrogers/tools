/**
 * Write code below...
 */

/**
 * Write assertions below...
 */
type TDDAssertionsType = {
  condition(): boolean;
  message: string;
}[];
let TDDassertions: TDDAssertionsType = [];
TDDassertions.forEach(({ condition, message }) => {
  console.assert(condition(), message);
});
console.log("$");
