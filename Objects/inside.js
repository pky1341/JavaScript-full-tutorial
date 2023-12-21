const object = {
  name: 'John',
  age: 30,
  city: 'New York'
};

object.printProperties = function () {
  const properties = Object.keys(object);
  let output = '';

  properties.forEach((property) => {
    const value = object[property];
    output += property + ': ' + value + '\n';
  });

  console.log(output);
};

object.printProperties();