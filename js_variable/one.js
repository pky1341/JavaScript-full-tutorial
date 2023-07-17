// How to Use JavaScript Variables in Block Scope

{
    let b;
    let a = 10;
    var c = 20;
    const d = 30;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}
console.log(c);
console.log(d);
console.log(a);
