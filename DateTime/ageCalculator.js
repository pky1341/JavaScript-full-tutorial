function calculateAge(birthDate) {
  // Check if the input is not a valid date
  if (isNaN(Date.parse(birthDate))) {
    throw new TypeError("Invalid date format");
  }

  // Convert the birthdate string to a Date object
  const birthDateObj = new Date(birthDate);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const diffInMs = currentDate.getTime() - birthDateObj.getTime();

  // Convert milliseconds to years
  const ageInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));

  return ageInYears;
}

// Example usage
const birthDate = "2003-07-05";
const age = calculateAge(birthDate);

console.log(`Age: ${age}`);
