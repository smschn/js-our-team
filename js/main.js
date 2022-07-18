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
    console.log(arrayTeam[x]['role']);
    console.log(arrayTeam[x]['profilePicture']);
    console.log(''); // creo spazio per rendere risultati più leggibili nella console
}