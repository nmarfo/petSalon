function displayCardsPets(){
    let card="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        card+=`
        <div class="pet">
            <h4>Name: ${pet.name}</h4>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
        </div>

        `;
    }
    document.getElementById("pet-cards").innerHTML=card;
}