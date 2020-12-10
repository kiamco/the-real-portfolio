import Questr from '../img/proj/QuestrProj.PNG';
import Portfolio from '../img/proj/myportfolio.PNG';
import Hangman from '../img/proj/hangman.PNG';
import DarkMode from '../img/proj/darkmode.PNG';
import FarmFreshAPI from '../img/proj/farmFresh.PNG'
import Entrylevel from '../img/proj/entrylevel.PNG';
import Unifind from '../img/proj/Unifind.png';

export const product = [{
        product:"Unifind",
        description:"UniFind aims to create an innovative platform that will help high school students make the right choice of university and program through current students",
        image:Unifind,
        url:"https://app.unifind.ca/",
        stack: "HTML, CSS, JavaScript, Node.js, Express, MongoDB"
    },
    {
        product: "Entrylevel.io",
        description: "Entrylevel is a job aggregator targeting students, recent grads, career changers, and individuals with less than 3 years of experience. Our main mission is to provide valuable job content to help our users find the job they love. We want to make the job search process easier for beginners.",
        image: Entrylevel,
        url: "https://entrylevel.io",
        stack: "HTML, CSS, JavaScript, ReactJS, NodeJS, PostgreSQL, Nginx, Elasticsearch, MaterialUI, Python3"
    }
];


export const projects = [
    {
        product: "Payme",
        description: "An API made with Node.js, Express, and MongoDb that should give the user the ability to transfer fiat currencies through the use of the Stellar Ledger",
        url: "https://github.com/kiamco/payme-backend",
        image: FarmFreshAPI,
        stack:"Node.js, Express, MongoDB, Stellar Ledger, TypeScript"
    },
    {
        product: "Fresh Farm produce API",
        description: "An api the can be used to create an ecommerce website for farmers that want to sell their produce independently. The purpose of this project was to test my overall understanding of API's and how they interact with databases. I also used this as an oppurtunity solidify my knowledge of the following concepts: authentication, authorization, web tokens, cookies, middlewares, and other database concepts",
        url: "https://documenter.getpostman.com/view/7751062/SWLe6nmm ",
        image: FarmFreshAPI,
        stack:"Node.js, Express, PostgreSQL"
    },
    {
        product: "Hangman",
        description: "I created a hangman game, that uses React/Redux. This project was an oppurtunity to learn redux in depth because when I first started learning redux I experienced some difficulty. After I completed this project I was able gain more insight into Redux ",
        image: Hangman,
        url: "https://react-redux-app.kiamcoo.now.sh",
        stack: "HTML, SASS, JavaScript, ReactJS, Redux"

    },
    {
        product: "Dark mode",
        description: "the Purpose of this project is to lear how to use custom hooks and implement switch, that would change light mode to dark mode.",
        url: "https://dark-mode.kiamcoo.now.sh/",
        image: DarkMode,
        stack: "HTML, LESS, ReactJS"
    }
];