// the menu object
// objects are mutable even when declared with const. hmm, nice!
const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  // getters for individual courses
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.appetizers;
  },
  get desserts() {
    return this._courses.appetizers;
  },
  // setters for them
  set appetizers(appetizersParam) {
    this._courses.appetizers = appetizersParam;
  },
  set mains(mainsParam) {
    this._courses.mains = mainsParam;
  },
  set desserts(dessertsParam) {
    this._courses.desserts = dessertsParam;
  },
  // getter for _courses
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  // method addDishToCourse, which is used to add a new dish to the specified course
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    // push the dish obj to the appropriate array in _courses obj based on the course name
    return this._courses[courseName].push(dish);
  },
  // method getRandomDishFromCourse, takes in one parameter, courseName,
  // and returns a random dish from the course, courseName
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]; // creates an array, dishes, which contains all the dishes in the specified course
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]; // returns a random dish
  },
  // method generateRandomMeal, returns three, random dishes from each of the courses
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    // string that will be logged to the console after you generate a random meal
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The total price is $${totalPrice}.`;
  },
};

// adding some dishes to the menu
menu.addDishToCourse("appetizers", "Sandwich", 3);
menu.addDishToCourse("appetizers", "Chicken Chilly", 3);
menu.addDishToCourse("mains", "Butter Chicken", 3);
menu.addDishToCourse("mains", "Paneer Makhani", 3);
menu.addDishToCourse("desserts", "Chocolate Icecream", 3);
menu.addDishToCourse("desserts", "Vanilla Icecream", 3);

// generating the random meal
const meal = menu.generateRandomMeal();
console.log(meal);
