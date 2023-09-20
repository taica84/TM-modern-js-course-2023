console.log('flixx-app');

const global = {
  currentPage: window.location.pathname,
};

const myPath = '/projects/flixx-app'

console.log(global.currentPage);

function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

function init() {
    
    
  switch (global.currentPage) {
    case `${myPath}/`:
    case `${myPath}/home.html`:
      console.log('Home');
      break;
    case `${myPath}/shows.html`:
      console.log('Shows');
      break;
    case `${myPath}/movie-details.html`:
      console.log('Movie-Details');
      break;
    case `${myPath}/tv-details.html`:
      console.log('Tv-Details');
      break;
    case `${myPath}/search.html`:
      console.log('Search');
      break;
  }

  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
