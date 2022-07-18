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
    const newDiv = document.createElement('div'); // creo <div>
    const containerDom = document.getElementById('container'); // richiamo il container
    containerDom.append(newDiv); // inserisco il <div> nel container
    newDiv.innerHTML = (y+1) + ' --- '; // inserisco uno alla volta i singoli valori delle chiavi
    newDiv.innerHTML += arrayTeam[y]['name'] + ' --- ';
    newDiv.innerHTML += arrayTeam[y].role + ' --- ';
    newDiv.innerHTML += `<img src='${arrayTeam[y]['profilePicture']}' alt=Profile_pic />`; // oppure posso mettere direttamente nella chiave 'profilePic' l'indirizzo ad ogni singola immagine dentro al tag <img>
}