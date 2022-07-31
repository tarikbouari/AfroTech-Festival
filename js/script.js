const speaker = [

  {
    image: './images/aisha.jpg',
    name: 'Aicha Johnson',
    profession: 'Software engineer',
    details: 'Magna reprehenderit id eu sit enim ex. Id minim ess',

  },

  {
    image: 'images/flake.jpg',
    name: 'Robert Gisky',
    profession: 'Head executive of Google',
    details: 'Magna reprehenderit id eu sit enim ex. Id minim ess',

  },

  {
    image: 'images/rik.jpg',
    name: 'Habib Diallo',
    profession: ' Techcnical recruiter at AfriqLeaders',
    details: 'Magna reprehenderit id eu sit enim ex. Id minim ess',

  },

  {
    image: 'images/aida.jpg',
    name: 'Ria Diang',
    profession: 'Content writter at Freecodecamp',
    details: 'Magna reprehenderit id eu sit enim ex. Id minim ess',

  },

  {
    image: 'images/michel.jpg',
    name: 'David simth',
    profession: ' Software developper at Squarecode',
    details: 'Magna reprehenderit id eu sit enim ex. Id minim ess',

  },

  {
    image: 'images/reane.jpg',
    name: 'Lesley hae',
    profession: 'Ceo of Africa Electronics Developers',
    details: 'Magna reprehenderit id eu sit enim ex. Id minim ess',

  },

];

const grid = document.getElementById('grid-speaker');

function loadSpeakers() {
  const speakers = speaker.map((item) => `<article class='speaker-box py-3'>
        <div class='box-img'>
          <img src='${item.image}' class='img-profile' alt="profile-image">  
        </div>
      <div class='paragraph text-start d-flex flex-column'>
        <h5 class='mb-0'>${item.name}</h5>
        <small class=' sm-red'> ${item.profession}</small>
        <div class='lines '> </div>
        <small>${item.details}</small> 
      </div>
    </article>`).join('');

  grid.innerHTML = speakers;
}

document.addEventListener('DOMContentLoaded', (e) => {
 e.preventDefault();
  loadSpeakers();

});
