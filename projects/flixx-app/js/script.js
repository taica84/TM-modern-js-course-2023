console.log('flixx-app');

const global = {
  currentPage: window.location.pathname,
};

console.log(global.currentPage);

function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    } 
   if(global.currentPage === 'home.html') {
      document.querySelector('.logo a').classList.add('active');
    }
  });
}

function init() {
  switch (global.currentPage) {
    case `/`:
    case `home.html`:
      console.log('Home');
      break;
    case `shows.html`:
      console.log('Shows');
      break;
    case `movie-details.html`:
      console.log('Movie-Details');
      break;
    case `tv-details.html`:
      console.log('Tv-Details');
      break;
    case `search.html`:
      console.log('Search');
      break;
  }

  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
