// Q.1 Difference between “ == “ and “ === “ operators.
// ans=>  these two are comparision operators,
        //    "==" operator checks or tests for absract equality ,
        //    and checks the values ,ie.it does the necessary type conversions before doing the equalty comparison .
        // "===" operators tests for strict equlity,it checks not only comparision of operator also checks their 
        //   data type

// Q2. What is the spread operator?
 
// ans=> the syntax of spread operators is tripple dot  (...).
    //  spread operator which will target all value in particular variable .
    // used for making copy of the same array or objects as it is .
    // ...ocurs in function call is called spread operators ,spread operator can be used in many cases like when we want to
    //   expand ,copy ,cocate, with math objects.

// Q3.What are the differences between var, let and const?

// Ans=> let, var , const these key words in js .
//      var -is the global scope variable ,this variable can be redecleared and modified .
//      let - is block scope variable ,this variable can be modified bud cannot be redecleared .
//      const- is the block scope variable ,this variable cannot redecleared and modified.

// Q4.What is execution context

// Ans => Execution context is the concept for describing the internal working of code,
        //   during the execution context the specific code get parsed line by line
        //  then the variable and functions are stored  in the memory.
        // an execution context is similar to a container tha stores variable and code gets evaluated and then executed.
        // types of E.C. 1. Global E.C. ,2. functional E.C. and 3. Eval E.C.

// Q5.What is meant by first class functions.

// Ans=> function can be assigned to any other variable.
        //  function can be passed an argument .
        // function can be returned by an function.

// Q.6 What are closures? Give an example of closure.

// Ans=> it is the combination of inner function and lexical environment of outer function.

    //   eg .
     function func1(){
        let a=20;
        function func2(){
            console.log(a);
        }
        func2()
     }
     func1()

    //  Q.7 Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind().

    // Ans => these are just different ways of calling or invoking a function. when you are calling a
    //  function using any of these then you dont have to define in the function that 
    // the first argument will be an object.

     let user1={
        name:"nanasaheb",
        age:25 
    }

    let user2 = {
        name :"govind",
        age: 22
    }

    function userdetail(company ){
         console.log(this.name +'is' + this.age + 'yearold.' + 'in' , company,' ' )
    }

//    call: Argument will be passed individuallym

      userdetail.call(user2, "google" )

    //   Apply: Argument be will passed in an array

    userdetail.apply(user1,['microsoft'])

    // Bind: it will return you new function you can use it any where.

    const newFunction = userdetail.bind(user1)

    
    