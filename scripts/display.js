function displayCardsPets(){
    //travel the array

    //create the card (HTML)

    //inject the card into the HTML (register.html)


    let card="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        card+=`
        <div id="${pet.id}" class="pet">
            <h4>Name: ${pet.name}</h4>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Breed: ${pet.breed}</p>
            <p>Owner: ${pet.owner}</p>
            <p>Service:${pet.service}</p>
            <p>Phone: ${pet.phone}</p>
            
        </div>

        `;

        console.log(card);
    }
    document.getElementById("pet-cards").innerHTML=card;
}

function diplayPetsTable(){
   let tr="";
   for(let i=0;i<petSalon.pets.length;i++){
    let pet=petSalon.pets[i];
    tr+=`
    <tr id="${pet.id}">
        <td> ${pet.name}</td>
        <td> ${pet.age}</td>
        <td> ${pet.gender}</td>
        <td> ${pet.breed}</td>
        <td> ${pet.owner}</td>
        <td> ${pet.service}</td>
        <td> ${pet.phone}</td>
        <td><button class="btn btn-danger" onclick="deletePet(${pet.id})"> Delete </button></td>
        
    </tr>
    
    `;
    document.getElementById("pet-table").innerHTML=tr;
}
console.log(tr);
}