// creo array con oggetti nella lista passataci
const arrayTeam = [

    {
        'name': 'Wayne Barnett',
        role: 'Founder & CEO',
        'profilePicture': 'wayne-barnett-founder-ceo.jpg'
    },

    {
        'name': 'Angela Caroll',
        role: 'Chief Editor',
        'profilePicture': 'wayne-barnett-founder-ceo.jpg'
    },

    {
        'name': 'Walter Gordon',
        role: 'Office Manager',
        'profilePicture': 'walter-gordon-office-manager.jpg'
    },

    {
        'name': 'Angela Lopez',
        role: 'Social Media Manager',
        'profilePicture': 'angela-lopez-social-media-manager.jpg'
    },

    {
        'name': 'Scott Estrada',
        role: 'Developer',
        'profilePicture': 'scott-estrada-developer.jpg'
    },

    {
        'name': 'Barbara Ramos',
        role: 'Graphic Designer',
        'profilePicture': 'barbara-ramos-graphic-designer.jpg'
    }

]

// stampo su console i valori di 'name', 'role', 'profilePicture' per ogni oggetto
for (let x = 0; x < arrayTeam.length; x++) {
    console.log(arrayTeam[x]['name']);
    console.log(arrayTeam[x].role); // equivale a console.log(arrayTeam[x]['role']); sintassi che NON si può usare quando la CHIAVE contiene SPAZI
    console.log(arrayTeam[x]['profilePicture']);
    console.log(''); // creo spazio per rendere risultati più leggibili nella console
}

// stampo su html i valori di ogni singola chiave, creando un nuovo <div> e riempiendolo ad ogni giro del ciclo
for (let y = 0; y < arrayTeam.length; y++) {
    const newDiv = document.createElement('div'); // creo <div>
    const containerDom = document.getElementById('container'); // richiamo il container
    containerDom.append(newDiv); // inserisco il <div> nel container
    newDiv.innerHTML = (y+1) + ' --- '; // inserisco uno alla volta i vari valori
    newDiv.innerHTML += arrayTeam[y]['name'] + ' --- ';
    newDiv.innerHTML += arrayTeam[y].role + ' --- ';
    newDiv.innerHTML += arrayTeam[y]['profilePicture'];
}
