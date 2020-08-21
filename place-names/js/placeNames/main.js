function main() {
  // Put your code here
  // Array of Locations
  const names = ["Nashville", "Hong Kong", "The back yard", "Earth", "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]


  console.log("All Place Names")

  // Replace for foreach
  for (let name of names) {
    console.log(name)
  }
  // New line
  console.log("\n")

  const theNames = names.filter(name => name.includes("The"))

  console.log("'The' Place Names")

  for (let name of theNames) {
    console.log(name)
  }

}


main();