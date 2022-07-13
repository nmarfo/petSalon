//arrays[]
//objects{}
let petSalon = {
    //attributes
    name:"The Fashion Pet",
    address:"486 Mosholu Parkway",
    hours:{
        open:"9:30am",
        close:"6:00pm"
    },
     //anonymous object
    pets:[]
}
//constructor function
//---------------Parameters/ local variables ----------->
function Pet(name,age,gender,breed,service,ownerName,contactPhone){
    //attributes = parameters
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=ownerName;
    this.phone=contactPhone;
}
//creating the function
function displayInfo(){
    document.getElementById("Info").innerHTML=`Welcome to ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
}

function displayNumberOfPets(){
    document.getElementById("number-pets").innerHTML=`There are ${petSalon.pets.length} pets`;
}
function register(){
    //get info from the input
    let petName=document.getElementById("addPetName").value;
    let petAge=document.getElementById("addPetAge").value;
    let petGender=document.getElementById("addPetGender").value;
    let petBreed=document.getElementById("addPetBreed").value;
    let petOwner=document.getElementById("addPetOwnerName").value;
    let petPhone=document.getElementById("addPetPhone").value;

    
    //create the obj
    let newPet=new Pet(petName,petAge,petGender,petBreed,petOwner,petPhone);
    console.log(newPet);
    //create push
    petSalon.pets.push(Pet);
    console.log(petSalon.pets);
    displayNumberOfPets();
    displayCardsPets();
}
function init(){
//creating objectss
let scooby = new Pet("Scooby",50,"Male","Dane","Grooming","Shaggy","666-666-666");
let bingo = new Pet("Bingo",40,"Male","Mixed","Vaccination","Nolan","555-666-666");
let nyame = new Pet("Nyame",80,"Female","German Shepherd","cutting nails","Maverick","777-777-777");
petSalon.pets.push(scooby,bingo,nyame);
console.log(petSalon.pets);
//calling the function
displayInfo();
displayNumberOfPets();
displayCardsPets();


//hook events

}


window.onload=init;

