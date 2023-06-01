




const person ={
    firstName: "Mike",
    lastName: "Flamehouse",
    city: "Abuja",
    fullName: function(){
        let x = this;
        return `Hello there ${x.firstName} ${x.lastName} is a man`
    }
}


console.log(person.fullName())
