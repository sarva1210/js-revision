// js questions

// Create a user object that stores name and email and has a login method which prints “User logged in”.
const user ={
    name: "John Doe",
    email: "johndoe@gmail.com",
    login: function(){
        console.log("User Logged In")
    }
}
user.login()


// Imagine you now have 5 users. First, think how you would manage them without using a class. Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches
class user {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log(`${this.name} Logged In`)
    }
}

const user1 = new user("John Doe", "johndoe@gmail.com");
const user2 = new user("Jane Smith", "janesmith@gmail.com");
const user3 = new user("Bob Johnson", "bobjohnson@gmail.com");
const user4 = new user("Alice Williams", "alicewilliams@gmail.com");
const user5 = new user("Charlie Brown", "charliebrown@gmail.com");

user1.login();
user2.login();
user3.login();
user4.login();
user5.login();