console.log('flixx-app');

const global = {
  currentPage: window.location.pathname,
};

console.log(global.currentPage);

function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage.slice(20)) {
      link.classList.add('active');
    } 
  });
}

function init() {
  switch (global.currentPage) {
    case `/`:
    case `/projects/flixx-app/home.html`:
      console.log('Home');
      break;
    case `/projects/flixx-app/shows.html`:
      console.log('Shows');
      break;
    case `/projects/flixx-app/movie-details.html`:
      console.log('Movie-Details');
      break;
    case `/projects/flixx-app/tv-details.html`:
      console.log('Tv-Details');
      break;
    case `/projects/flixx-app/search.html`:
      console.log('Search');
      break;
  }

  highlightActiveLink();
}

document.addEventListener('DOMContentLoaded', init);
