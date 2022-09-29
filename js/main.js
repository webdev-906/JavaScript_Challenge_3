// Easy Challenge

// function name = todaysExercise 
// params =  1 
// functionality = Returning the value of exercise and stating what exercise will be done today. 

function todaysExercise(exercise){
  return `You are ${exercise} today`
}

// function name = running
// params =  1 
// functionality = This param will reference or callback the initial function we created and replace exercise with running 
function running(callback){
  let exercise = "running";
  return callback(exercise);
}

// function name = running
// params =  1 
// functionality = This param will reference or callback the initial function we created and replace exercise with swimming 

function swimming(callback){
  let exercise = "swimming";
  return callback(exercise);
}

// Storing our function results within a variable and invoking it 
var exerise1 = running(todaysExercise)
console.log(exerise1);
var exercise2 = swimming(todaysExercise);
console.log(exercise2);


// Medium Challenge
// function name - cutPizzaSlices 
// number of params: 2 
// functionality - Dividing 2 params to see how many slices of pizza a group can have 

function cutPizzaSlices(numOfSlices, numOfPeople){
  let sharePizza = parseFloat(numOfSlices / numOfPeople);
  return `Each person gets ${sharePizza} slices of pizza`;
}
var sharePizza = cutPizzaSlices(8, 4);
console.log(sharePizza)
var sharePizza = cutPizzaSlices(10.7, 4);
console.log(sharePizza)


// Hard Challenge
// function name = dataSecurityExercise
// params =  0
// functionality = This function has an object that's in a annomyous function where you can access the name of the object
function dataSecurityExercise(){
  return function(){
    pii = {name: 'John',
    ssn: 000-00-0000
  }
    console.log(`Hi ${pii.name}`)
  }
}
// Storing our functions results within a variable and calling it 
const result1 = dataSecurityExercise();
result1();


// Very Hard 
// Creating a blueprint of a person; characteristics or values
class Person {
  constructor(name, job, age){
    this.name = name, 
    this.job = job, 
    this.age = age 
  }
  // behaviors of our Person blueprint 
  exercise(){
    console.log(`${this.name} said running is fun! - said no one ever`)
  }

  fetchJob(){
    console.log(`${this.name} is a ${this.job}`)
  }

}
// Creating a new Person and storing values were our methods will be invoked 
const programmer1 = new Person('Brad', 'Backend-developer', 30);
programmer1.exercise()
programmer1.fetchJob()

// Creating a Program class and extending into Person to use all the methods that were created
class Program extends Person{
  constructor(name, job, age, lanuages){
    super()
    this.name = name, 
    this.job = job, 
    this.age = age, 
    this.lanuages = lanuages
    this.isBusy = true; 
  }
  
  completeTask(){
   var isBusy = false
   return isBusy
  }

  acceptNewTask(){
    var isBusy = true
    return isBusy;
  }
  offerNewTask(){
    if(this.completeTask() === false){
      console.log(`${this.name} can accept a new task`)
    }else {
      if(this.acceptNewTask() === true){
        console.log(`${this.name} is already working on a task `)
      }
    }
  }
  learnLanguage(){
    console.log(`${this.name} would like to learn ${this.lanuages}`)
  }

  listLanguages(){
    let currentLanguagesSpoken = 'English'
    console.log(`${this.name} currently knows ${currentLanguagesSpoken} `)
  }
}

const additionalProgramer = new Program('Alannah', 'Junior Software Enginner', 351, 'Spanish')
additionalProgramer.exercise();
additionalProgramer.fetchJob();
additionalProgramer.offerNewTask();
additionalProgramer.learnLanguage();
additionalProgramer.listLanguages();

//checking to see if other programmers can use all methods created 
const programmer2 = new Program('Sibrina', 'Senior Software Engineer', 500, 'French')
programmer2.exercise();
programmer2.fetchJob();
programmer2.offerNewTask();
programmer2.learnLanguage();
programmer2.listLanguages();



