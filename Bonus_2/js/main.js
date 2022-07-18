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

// stampo su html i valori di ogni singola chiave, creando un nuovo <div> e riempiendolo ad ogni giro del ciclo
for (let y = 0; y < arrayTeam.length; y++) {
    
    const containerDom = document.getElementById('container'); // richiamo il container
    const newDivCard = document.createElement('div'); // creo un nuovo <div> (sarà la card che contiene l'img e il testo)
    newDivCard.classList.add('card'); // aggiungo la classe al <div> appena creato
    containerDom.append(newDivCard); // aggiungo il <div> card al container

    newDivCard.innerHTML = `<img src='${arrayTeam[y]['profilePicture']}' alt=Profile_pic />`; // inserisco l'img in card

    const newDivName = document.createElement('p');
    newDivCard.append(newDivName);
    newDivName.innerHTML += arrayTeam[y]['name'];

    const newDivRole = document.createElement('p');
    newDivCard.append(newDivRole);
    newDivRole.innerHTML += arrayTeam[y].role;


    /* const newDiv = document.createElement('div'); // creo <div>
    containerDom.append(newDiv); // inserisco il <div> nel container
    newDiv.innerHTML = (y+1) + ' --- '; // inserisco uno alla volta i singoli valori delle chiavi
    newDiv.innerHTML += arrayTeam[y]['name'] + ' --- ';
    newDiv.innerHTML += arrayTeam[y].role + ' --- ';
    newDiv.innerHTML += `<img src='${arrayTeam[y]['profilePicture']}' alt=Profile_pic />`; // oppure posso mettere direttamente nella chiave 'profilePic' l'indirizzo ad ogni singola immagine dentro al tag <img> */
}