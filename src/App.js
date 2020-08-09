import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Section from './components/Section/Section';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';




const projectSection = [
  'Projects',
  'Learning',
  'New technology',
  'Testing'
];
const aboutSection = [
  'Faisons un peu connaissance',
];
const contactSection = [
  'Say me just Hello',
];

function App() {
  
  const [projects, setProjects] = useState([
    {
      id: 1,
      show: false,
      date: "2019",
      name: "Becoast",
      title: "One Page",
      generateTag: {
        link: ["https://getbootstrap.com"],
        name: ["Bootstrap"],
        cssColor: ["bootstrap"]
      },
      titleDescription: "Landing Page pour Becoast",
      paraDescription: "Site internet réaliser pour le lancement du MVP pour le concept d'application de Becoast, un One Page responsive et efficace qui permettait d'avoir un CTA pour une carte météo dynamique.",
      linkLanguage: ["HTML", "CSS", "JS"],
      linkDescription: ["https://github.com/Dumpinator", "https://becoast.fr"],
      image: "images/p1.jpg"
    },
    {
      id: 2,
      show: false,
      date: "2019",
      name: "Star Wars Academy",
      title: "Glossaire",
      generateTag: {
        name: ["Fetch API", "Github Pages"],
        link: ["https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API", "https://pages.github.com/"],
        cssColor: ["fetchApi", "github"]
      },
      titleDescription: "Manipulation de data depuis une URL",
      paraDescription: "- Récupération de données depuis une URL avec la méthode fetch - injection de ces données dans le DOM avec une template string - Mise en place d'un filtre par espèces : [ Human, Droid, Other et All ]",
      linkLanguage: ["HTML", "CSS", "JS"],
      linkDescription: ["https://github.com/Dumpinator/StarWarsAcademy", "https://dumpinator.github.io/StarWarsAcademy/"],
      image: "images/p2.jpg"
    },
    {
      id: 3,
      show: false,
      date: "2019",
      name: "Twitter Clone",
      title: "CRUD Database",
      generateTag: {
        name: ["MeteorJS", "BlazeJS", "Bootstrap", "Heroku"],
        link: ["https://www.meteor.com/", "http://blazejs.org/", "https://getbootstrap.com", "https://docs.mongodb.com/", "https://dashboard.heroku.com/"],
        cssColor: ["meteor", "blazejs", "bootstrap", "mongodb", "heroku"]
      },
      titleDescription: "Manipulation de data depuis une URL",
      paraDescription: "- Récupération de données depuis une URL avec la méthode fetch - injection de ces données dans le DOM avec une template string - Mise en place d'un filtre par espèces : [ Human, Droid, Other et All ]",
      linkLanguage: ["HTML", "CSS", "JS"],
      linkDescription: ["https://github.com/Dumpinator/StarWarsAcademy", "https://dumpinator.github.io/StarWarsAcademy/"],
      image: "images/p3.jpg"
    },
    {
      id: 4,
      show: false,
      date: "2020",
      name: "Todo List",
      title: "DOM Vanilla JS",
      generateTag: {
        name: ["VanillaJS"],
        link: ["http://vanilla-js.com/"],
        cssColor: ["js"]
      },
      titleDescription: "Manipulation de data depuis une URL",
      paraDescription: "- Récupération de données depuis une URL avec la méthode fetch - injection de ces données dans le DOM avec une template string - Mise en place d'un filtre par espèces : [ Human, Droid, Other et All ]",
      linkLanguage: ["HTML", "CSS", "JS"],
      linkDescription: ["https://github.com/Dumpinator/StarWarsAcademy", "https://dumpinator.github.io/StarWarsAcademy/"],
      image: "images/p4.jpg"
    },
    {
      id: 5,
      show: false,
      date: "2019",
      name: "Runtours",
      title: "NodeJS Masterclass",
      generateTag: {
        name: ["NodeJS", "PUG","MongoDB", "Heroku"],
        link: ["https://nodejs.org/en/", "https://pugjs.org/api/getting-started.html", "https://docs.mongodb.com/", "https://dashboard.heroku.com/"],
        cssColor: ["node", "pug", "bootstrap", "mongodb", "heroku"]
      },
      titleDescription: "Manipulation de data depuis une URL",
      paraDescription: "- Récupération de données depuis une URL avec la méthode fetch - injection de ces données dans le DOM avec une template string - Mise en place d'un filtre par espèces : [ Human, Droid, Other et All ]",
      linkLanguage: ["HTML", "CSS", "JS"],
      linkDescription: ["https://github.com/Dumpinator", "https://runtours.herokuapp.com/"],
      image: "images/p5.jpg"
    },
    {
      id: 6,
      show: false,
      date: "2019",
      name: "Twitter Clone",
      title: "CRUD Database",
      generateTag: {
        name: ["MeteorJS", "BlazeJS", "Bootstrap", "Heroku"],
        link: ["https://www.meteor.com/", "http://blazejs.org/", "https://getbootstrap.com", "https://docs.mongodb.com/", "https://dashboard.heroku.com/"],
        cssColor: ["meteor", "blazejs", "bootstrap", "mongodb", "heroku"]
      },
      titleDescription: "Manipulation de data depuis une URL",
      paraDescription: "- Récupération de données depuis une URL avec la méthode fetch - injection de ces données dans le DOM avec une template string - Mise en place d'un filtre par espèces : [ Human, Droid, Other et All ]",
      linkLanguage: ["HTML", "CSS", "JS"],
      linkDescription: ["https://github.com/Dumpinator/StarWarsAcademy", "https://dumpinator.github.io/StarWarsAcademy/"],
      image: "images/p3.jpg"
    },
  ]);

  const onToggleClick = (e, id) => {
    e.preventDefault();
    setProjects(
      projects.map((project) => {
        if (project.id === id) { project.show = !project.show }
        else project.show = false;
        return project;
      })
    );
  };

  return (
    <div className="App">
      <NavBar />
      <Section data={ projectSection } id={'portfolio'} />
      <Gallery  data={ projects } onToggleClick={ onToggleClick } />
      <Section data={ aboutSection } id={'about'} />
      <About />
      <Section data={ contactSection } id={'contact'} />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;