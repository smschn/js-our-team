// creo un array con oggetti nella lista passataci
const arrayTeam = [

    {
        'name': 'Wayne Barnett',
        role: 'Founder & CEO',
        'profilePicture': 'img/wayne-barnett-founder-ceo.jpg'
    },

    {
        'name': 'Angela Caroll',
        role: 'Chief Editor',
        'profilePicture': 'img/angela-caroll-chief-editor.jpg'
    },

    {
        'name': 'Walter Gordon',
        role: 'Office Manager',
        'profilePicture': 'img/walter-gordon-office-manager.jpg'
    },

    {
        'name': 'Angela Lopez',
        role: 'Social Media Manager',
        'profilePicture': 'img/angela-lopez-social-media-manager.jpg'
    },

    {
        'name': 'Scott Estrada',
        role: 'Developer',
        'profilePicture': 'img/scott-estrada-developer.jpg'
    },

    {
        'name': 'Barbara Ramos',
        role: 'Graphic Designer',
        'profilePicture': 'img/barbara-ramos-graphic-designer.jpg'
    }

]

// tramite un ciclo inserisco nel DOM un <div .card> che contiene: l'img, il nome, il ruolo
for (let y = 0; y < arrayTeam.length; y++) {
    
    // --- fase 1
    const containerDom = document.getElementById('container'); // richiamo il container
    const newDivCard = document.createElement('div'); // creo un nuovo <div> (sarà la card che contiene l'img e il testo)
    newDivCard.classList.add('card'); // aggiungo la classe .card al <div> appena creato
    containerDom.append(newDivCard); // aggiungo il <div .card> al container
    newDivCard.innerHTML = `<img src='${arrayTeam[y]['profilePicture']}' alt=Profile_pic />`; // inserisco l'img in .card

    // --- fase 2
    const newDivName = document.createElement('p'); // creo nuovo tag <p>
    newDivCard.append(newDivName); // inserisco tag <p> dentro .card (finisce sotto l'img perché l'img prende il 100% della larghezza - vedi css)
    newDivName.innerHTML += arrayTeam[y]['name']; // inserisco in <p> il nome preso dall'oggetto nell'array (in base al ciclo prende il valore corrispondente)

    // --- fase 3
    const newDivRole = document.createElement('p'); // creo un secondo tag <p>
    newDivCard.append(newDivRole); // inserisco il secondo tag <p> dentro .card (come sopra)
    newDivRole.innerHTML += arrayTeam[y].role; // inserisco nel secondo <p> il ruolo preso dall'oggetto nell'array (in base al ciclo prende il valore corrispondente)

}