// lower case
var personName = "Eric";
console.log("lowercase:", personName.toLocaleLowerCase());
// UPPER CASE
console.log("UPPWECASE:", personName.toLocaleUpperCase());
// Title Case
console.log("Titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
