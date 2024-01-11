(function iife(){
    console.log("hello guys i am pradiep kumar from india");
})();

(function(value) {
    let hi="pradiep";
    console.log(hi+' '+value);
})('hey');

let sum=((name,name2)=>(name+name2))(23,56);

console.log(sum);