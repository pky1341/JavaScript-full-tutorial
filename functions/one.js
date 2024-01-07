function numberGenerator() {
    let num=1;
    function checkNumber() {
        console.log(num);
    }
    num++;
    return checkNumber;
}
let number=numberGenerator();
number();