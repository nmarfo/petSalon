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
    //counter
    let c=0;
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
        this.id=c++;
    }
    //creating the function
    function displayInfo(){
        document.getElementById("Info").innerHTML=`Welcome to ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}`;
    }

    function displayNumberOfPets(){
        document.getElementById("number-pets").innerHTML=`There are ${petSalon.pets.length} pets`;
    }
    


    function isValid(aPet){
        let valid=true;
        if(aPet.name==""){// is empty?
            valid=false;
            //alert("Please enter a pet name to be registered");

        } 

        return valid;
    }


    function register(){
        //get info from the input
        let petName=document.getElementById("addPetName").value;
        let petAge=document.getElementById("addPetAge").value;
        let petGender=document.getElementById("addPetGender").value;
        let petBreed=document.getElementById("addPetBreed").value;
        let petService=document.getElementById("selService").value;
        let petOwner=document.getElementById("addPetOwnerName").value;
        let petPhone=document.getElementById("addPetPhone").value;
        
       

        
        //create the obj
        let newPet=new Pet(petName,petAge,petGender,petBreed,petService,petOwner,petPhone);
        if(isValid(newPet)){
            petSalon.pets.push(newPet);
            displayNumberOfPets();
            console.log(petSalon.pets);
            //displayCardsPets();
            diplayPetsTable();
            clearInputs();
        }else{
            alert("Please enter the pet name to Register");
        }

        
    }
    function clearInputs(){
        document.getElementById("addPetName").value="";
        document.getElementById("addPetAge").value="";
        document.getElementById("addPetGender").value="";
        document.getElementById("addPetBreed").value="";
        document.getElementById("addPetOwnerName").value="";
        document.getElementById("addPetPhone").value="";

    }
     function deletePet(petID){
        document.getElementById(petID).remove();
        //travel the array
        let petIndex;
        for(let i=0;i<petSalon.pets.length;i++){
            let pet=petSalon.pets[i];
        //compare the id of the pet
        if(pet.id == petID){
            petIndex=i;// get the pet index
            }
        }
        petSalon.pets.splice(petIndex,1);//remove from the array
        displayNumberOfPets();//update the displayNumberOfPets()
        diplayPetsTable();
     }
     function search(){
        let searchItem=document.getElementById("addSearch").value;
        console.log("Searching for pets ..." +searchItem)
        for(let i=0;i<petSalon.pets.length;i++){
            let pet=petSalon.pets[i];
            if(searchItem.toLowerCase() == pet.name.toLowerCase()){
                document.getElementById(pet.id).classList.add("selected");
            }else{
                document.getElementById(pet.id).classList.remove("selected");
            }

        }
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
        //register();
        displayNumberOfPets();
        //displayCardsPets();
        diplayPetsTable();



    //hook events

    }


    window.onload=init;

