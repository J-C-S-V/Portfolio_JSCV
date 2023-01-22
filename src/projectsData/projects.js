// images 1920 x 970

import todoImage from './images/to-do-app.png';
import bookstoreImage from './images/bookstore.png';
import spacehubImage from './images/spacehub.png';
import calculatorImage from './images/calculator.png';
import studioghibliImage from './images/studioghibli.png';
import tvmazeImage from './images/tvmaze.png';
import cashAppImage from './images/cash-app.png';
import exoCars from './images/exo-cars.png';

const projects = [
  {
    id: 8,
    name: 'Exo-cars',
    live: 'https://exo-cars.herokuapp.com/',
    github: 'https://github.com/GiuseppeTG/Exo-cars-frontend',
    description: 'Full stack web app for renting exotic cars. Created API with Ruby on Rails, database with PostgreSQL, frontend with React. Users can rent cars, admins can add and delete cars.',
    languages: ['Ruby on Rails', 'React/Redux'],
    image: exoCars,
  },
  {
    id: 4,
    name: 'Studio Ghibli\'s Movies',
    live: 'https://glittering-meringue-ba1533.netlify.app/',
    github: 'https://github.com/GiuseppeTG/studio-ghibli',
    description: 'In this App, I used Studio Ghibli API to render a list of movies that can be filtered by director name. You can see the details of each movie when you click on them. It also has a list of human characters with a short description and a link to their movie.',
    languages: ['HTML', 'CSS', 'Javascript', 'React/Redux'],
    image: studioghibliImage,
  },
  {
    id: 1,
    name: 'To Do App',
    live: 'https://62c774fa615d2a0d1a10e151--musical-syrniki-aa9be6.netlify.app/',
    github: 'https://github.com/GiuseppeTG/To-Do-App',
    description: 'Interactive to do list built with react. It lets you add tasks, check them, and edit them. It uses local storage to store the values of the user data.',
    languages: ['HTML', 'CSS', 'Javascript', 'React'],
    image: todoImage,
  },
  {
    id: 2,
    name: 'Space Traverels\' Hub',
    live: 'https://dev--frolicking-kataifi-133879.netlify.app/',
    github: 'https://github.com/GiuseppeTG/Space-Travelers-Hub',
    description: 'This web app works with the real live data from the SpaceX API. It is for a company (not a real one) that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
    languages: ['HTML', 'CSS', 'Javascript', 'React/Redux'],
    image: spacehubImage,
  },
  {
    id: 3,
    name: 'Calculator',
    live: 'https://resilient-lebkuchen-6e7352.netlify.app/',
    github: 'https://github.com/GiuseppeTG/Calculator',
    description: 'A webpage for using a simple calculator made with React. Navbar for displaying three different routes.',
    languages: ['HTML', 'CSS', 'Javascript', 'React'],
    image: calculatorImage,
  },
  {
    id: 5,
    name: 'TVMaze',
    live: 'https://giuseppetg.github.io/TVmaze/dist/',
    github: 'https://github.com/GiuseppeTG/TVmaze',
    description: 'In this project I built a webpage where the user can search for different TV shows, comment them and like them, using TVmaze and Involvement APIs.',
    languages: ['HTML', 'CSS', 'Javascript'],
    image: tvmazeImage,
  },
  {
    id: 6,
    name: 'Bookstore',
    live: 'https://dev--jade-sprinkles-8acc06.netlify.app/',
    github: 'https://github.com/GiuseppeTG/Bookstore',
    description: 'Bookstore is a SPA that lets you display a list of books, add and, remove them, using an API.',
    languages: ['HTML', 'CSS', 'Javascript', 'React/Redux'],
    image: bookstoreImage,
  },
  {
    id: 7,
    name: 'Cash-app',
    live: 'https://warm-ridge-34734.herokuapp.com/',
    github: 'https://github.com/GiuseppeTG/Cash-app',
    description: 'Cash-app is a mobile app that allows you to group your expenses in different categories to keep track of them. Database is made using postgresql.',
    languages: ['Ruby on Rails', 'SCSS', 'Postgresql'],
    image: cashAppImage,
  },
];

export default { projects };
