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
    pets:[
        
        {
            name:"Scooby",
            age:50,
            breed: "Dane",
            gender:"Male",
            service:"Grooming",
            ownerName:"Shaggy",
            contactPhone:"666-666-666"
        },
        {
            name:"Bingo",
            age:40,
            breed: "Mixed",
            gender:"Female",
            service:"Nails cut",
            ownerName:"Akuffo Ado",
            contactPhone:"666-666-888"
        },
        {
            name:"Landy",
            age:55,
            breed: "Cano Corso",
            gender:"Male",
            service:"Vaccination",
            ownerName:"Nolan",
            contactPhone:"777-444-999"
        }


        
    ]
}
// for loop to help travel
for(let i=0;i<petSalon.pets.length;i++){
    console.log(petSalon.pets[i].name);
}
alert(`What's the number of Pets?: ${petSalon.pets.length} `)

//creating the function
function displayInfo(){
    document.getElementById("Info").innerHTML=`Welcome to ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
}
displayInfo();