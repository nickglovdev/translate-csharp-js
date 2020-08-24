function main() {
  console.log("My Enemies List!")
  console.log("----------------")

  // const enemies = GetEnemies();

  // for (let myEnemy of enemies) {
  //   if (myEmemy.IsReallyHated) {
  //     console.log(`${myEnemy.firstName} ${myEnemy.lastName} (Really, really dislike)`)
  //   }
  // }

  const GetEnemies = (firstName, lastName, offenses, isReallyHated) => {
    this.firstName = firstName;
    this.lastName = lastName;
    this.addOffense = (offense) => {
      offenses.push(offense)
    },
      this.isReallyHated = isReallyHated
  }
  let user = new GetEnemies("Joshua", "Flowers", [
    "Being a jerk to me in elementary school",
    "Not being nice to me in elementary school"
  ],
    true)
  console.log(user)


}

main();