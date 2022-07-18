// creo un array con oggetti nella lista passataci
const arrayTeam = [

    {
        'name': 'Wayne Barnett',
        role: 'Founder & CEO',
        'profilePicture': "<img src='img/wayne-barnett-founder-ceo.jpg' alt=Profile_pic />"
    },

    {
        'name': 'Angela Caroll',
        role: 'Chief Editor',
        'profilePicture': "<img src='img/angela-caroll-chief-editor.jpg' alt=Profile_pic />"
    },

    {
        'name': 'Walter Gordon',
        role: 'Office Manager',
        'profilePicture': "<img src='img/walter-gordon-office-manager.jpg' alt=Profile_pic />"
    },

    {
        'name': 'Angela Lopez',
        role: 'Social Media Manager',
        'profilePicture': "<img src='img/angela-lopez-social-media-manager.jpg' alt=Profile_pic />"
    },

    {
        'name': 'Scott Estrada',
        role: 'Developer',
        'profilePicture': "<img src='img/scott-estrada-developer.jpg' alt=Profile_pic />"
    },

    {
        'name': 'Barbara Ramos',
        role: 'Graphic Designer',
        'profilePicture': "<img src='img/barbara-ramos-graphic-designer.jpg' alt=Profile_pic />"
    }

]

// per ogni singolo oggetto, stampo su console i valori di 'name', 'role', 'profilePicture'
for (let x = 0; x < arrayTeam.length; x++) {
    console.log(arrayTeam[x]['name']);
    console.log(arrayTeam[x].role); // equivale a console.log(arrayTeam[x]['role']); sintassi che NON si può usare quando il nome della CHIAVE contiene SPAZI
    console.log(arrayTeam[x]['profilePicture']);
    console.log(''); // creo spazio per rendere distinguibile, in console, ogni ripetizione del ciclo
}

// stampo su html i valori di ogni singola chiave, creando un nuovo <div> e riempiendolo ad ogni giro del ciclo
for (let y = 0; y < arrayTeam.length; y++) {
    const newDiv = document.createElement('div'); // creo <div>
    const containerDom = document.getElementById('container'); // richiamo il container
    containerDom.append(newDiv); // inserisco il <div> nel container
    newDiv.innerHTML = (y+1) + ' --- '; // inserisco uno alla volta i singoli valori delle chiavi
    newDiv.innerHTML += arrayTeam[y]['name'] + ' --- ';
    newDiv.innerHTML += arrayTeam[y].role + ' --- ';
    newDiv.innerHTML += arrayTeam[y]['profilePicture'];
}

