import Questr from '../img/proj/QuestrProj.PNG';
import Portfolio from '../img/proj/myportfolio.PNG';
import Hangman from '../img/proj/hangman.PNG';
import DarkMode from '../img/proj/darkmode.PNG';

export const product = [
    {
        product: "Questr",
        description: "Questr, an Open Source platform giving student a place they can ask questions related to their classes and professors. Which allow them to build communities that's good enough to support themselves and other individuals who don't have tutors or friends to study with.",
        image: Questr,
        url: "https://questr-front-end.now.sh/dashboard"
    },

];


export const projects = [
    {
        product: "Hangman",
        description: "I created a hangman game, that uses React/Redux. This project was an oppurtunity to learn redux in depth because when I first started learning redux I experienced some difficulty. After I completed this project I was able gain more insight into Redux ",
        image: Hangman,
        url: "https://react-redux-app.kiamcoo.now.sh"
    },
    {
        product: "My Portfolio",
        description: "A website that can showcase my indie projects and personal side project. This is built with React,SASS, and Javascript.",
        image:Portfolio
    },
    {
        product: "Dark mode",
        description: "the Purpose of this project is to lear how to use custom hooks and implement switch, that would change light mode to dark mode.",
        url: "https://dark-mode.kiamcoo.now.sh/",
        image: DarkMode
    },
];