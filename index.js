const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// Featured speakers
const projects = [
  {
    title: 'Chimamanda Adichei',
    headTitle: 'Havard graguate.',
    description: 'Creative writer.',
    src: 'images/Chimamanda.webp'
  },

  {
    title: 'Wole Soyinka',
    headTitle: 'A noble prize winner.',
    description: 'Play Writer of art and culture.',
    src: 'images/wole-Soyinka.jpg',
  },

  {
    title: ' Godswill Apabio',
    headTitle: 'His Excellency Governor of Cross River.',
    description: 'The Host.',
    src: 'images/ed9a4da9-godswill-akpabio.jpg',
  },

  {
    title: 'Abimbola Fashola',
    headTitle: 'Former Lagos state first lady.',
    description: 'Public Figure.',
    src: 'images/Abimbola-Fashola.webp',
  },

  {
    title: 'Megan Cameroon',
    headTitle: 'Dancer.',
    description: 'Lead dancer.',
    src: 'images/megan.png',
  },

  // {
  //   title: 'Jack Maron',
  //   headTitle: 'Creative Director.',
  //   description: 'A well-known investor.',
  //   src: 'images/Jack.png',
  // },
];

let projectList = '';
projects.forEach((item) => {
  projectList += `<article class="row">
  <div class="col my-4">
  <img class="img-fluid" src="${item.src}" alt="A Saudi Prince">
  </div>
  <div class="col  my-4">
    <h2>${item.title}</h2>
    <p class="feature-text">${item.headTitle}</p>
    <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
    <p class="fst-italic">${item.description}</p>
    </div>
  </article>`;
});

const speakers = document.querySelector('#speakers');
speakers.innerHTML = `
<h2 class="mt-5 text-center">Featured Speakers</h2>
<hr style="width:10%; height: 3px; color:red; margin-left: 45%;">
<div class="container">
${projectList}
</div>
`;
// Desktop Feature

let speakerData = '';
let i = 0;
while ( i < projects.length){
  speakerData += `<section>
  <div class="row">
 <div class="col-3">
  <img class="img-fluid" src="${projects[i].src}" alt="A Saudi Prince">
  </div>
  <div class="col-3">
  <h4>${projects[i].title}</h4>
    <p class="feature-text">${projects[i].headTitle}</p>
    <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
    <p class="fst-italic">${projects[i].description}</p>
  </div>${(i + 1) < projects.length ? `
  <div class="col-3">
  <img class="img-fluid" src="${projects[i + 1].src}" alt="A Saudi Prince">
  </div>
  <div class="col-3">
  <h4>${projects[i + 1].title}</h4>
    <p class="feature-text">${projects[i + 1].headTitle}</p>
    <hr style="width: 13%; height: 3px; color: black; margin-bottom: 8%" />
    <p class="fst-italic">${projects[i + 1].description}</p>
  </div>
  ` : `` }
  </div>
  </section>`;
  i += (i + 1) < projects.length ? (i == 0 ? 2 : (i + 1)) : 1;
}
const speakersDesktop = document.querySelector('#speakers-desktop');
speakersDesktop.innerHTML = `
<h5 class="mt-5 text-center">Featured Speakers</h5>
<hr style="width:10%; height: 3px; color:red; margin-left: 45%;"> 
<div class="container mt-5 pt-5">
${speakerData}
</div>
`;