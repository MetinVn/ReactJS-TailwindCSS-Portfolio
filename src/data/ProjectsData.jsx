import blurRecipe from "../images/reduced/RecipeApp.jpg";
import blurRecipeDark from "../images/reduced/Recipe.jpg";
import blurMovie from "../images/reduced/MovieApp.jpg";
import blurWeather from "../images/reduced/Capture.jpg";
import blurTranslator from "../images/reduced/Translator.jpg";
import blurFood from "../images/reduced/food.jpg";
import blurProduct from "../images/reduced/productManage.jpg";
import blurUSA from "../images/reduced/us.jpg";
import blurAuthorsPage from "../images/reduced/AuthorsPage.jpg";
import blurAuthorsPageDark from "../images/reduced/AuthorsPageDark.jpg";
import blurBooksPage from "../images/reduced/BooksPage.jpg";
import blurBooksPageDark from "../images/reduced/BooksPageDark.jpg";
import blurAddProduct from "../images/reduced/AddProduct.jpg";
import blurCartView from "../images/reduced/CartView.jpg";
import blurLogin from "../images/reduced/Login.jpg";
import RecipeDark from "../images/Recipe.png";
import Recipe from "../images/RecipeApp.png";
import Movie from "../images/MovieApp.png";
import Weather from "../images/Capture.png";
import Translator from "../images/Translator.jpeg";
import Food from "../images/food.png";
import Product from "../images/productManage.png";
import USA from "../images/us.jpg";
import AuthorsPage from "../images/AuthorsPage.jpg";
import AuthorsPageDark from "../images/AuthorsPageDark.jpg";
import BooksPage from "../images/BooksPage.jpg";
import BooksPageDark from "../images/BooksPageDark.jpg";
import AddProduct from "../images/AddProduct.jpg";
import CartView from "../images/CartView.jpg";
import Login from "../images/Login.jpg";

export const projects = [
  {
    year: 2024,
    title: "Open Library Project",
    description:
      "I built this project using React.js, integrated Open Library APIs for searching books and authors. It features Material UI components for design and TailwindCSS for additional styling. Data storage in IndexDB optimizes performance by minimizing API requests. I enhanced user interaction with features like Abort Controller for managing and canceling API requests. Plus, I implemented sorting algorithms for sorting author and book titles.",
    img: [AuthorsPage, AuthorsPageDark, BooksPage, BooksPageDark],
    blurImg: [
      blurAuthorsPage,
      blurAuthorsPageDark,
      blurBooksPage,
      blurBooksPageDark,
    ],
    linkProject: "https://metinvn.github.io/Open-Library-Search-API/",
    linkSource: "https://github.com/MetinVn/Open-Library-Search-API",
    techStack: "React, MUI Material, TailwindCSS, React Hooks",
  },
  {
    year: 2023,
    title: "Product Management",
    description:
      "The Product Management app offers a robust set of functionalities, including pagination, user registration and login capabilities for secure access. Users can: filter products by category names,add product to database, search product with debounce optimized functionality.",
    img: [Product, AddProduct, CartView, Login],
    blurImg: [blurProduct, blurAddProduct, blurCartView, blurLogin],
    linkSource: "https://github.com/MetinVn/Product-Management",
    techStack:
      "React, Semantic UI, Formik, Yup, Redux, PostgreSQL, Java, Swagger, Spring Boot",
  },
  {
    year: 2024,
    title: "Weather App",
    description:
      "Real-Time Weather Data: Fetches real-time weather information for various locations. Search Functionality: Allows users to search for weather information by city name.",
    img: [Weather],
    blurImg: [blurWeather],
    linkProject: "https://metinvn.github.io/Weather/",
    linkSource: "https://github.com/MetinVn/Weather",
    techStack: "React, Tailwind CSS, Framer Motion, Debounce",
  },
  {
    year: 2023,
    title: "Individual Armament",
    description:
      "Individual armament project retrieves USA crime rates across all states. It includes an interactive map of the USA, allowing users to click on states and access specific crime data. The project leverages GeoJson for data retrieval, also integrates React Charts for data visualization, and utilizes Framer Motion for smooth and interactive animations.",
    img: [USA],
    blurImg: [blurUSA],
    linkProject: "https://metinvn.github.io/Bireysel-Silahlanma/",
    linkSource: "https://github.com/MetinVn/Bireysel-Silahlanma",
    techStack: "React, React charts, Framer-Motion, TailwindCSS, Axios",
  },
  {
    year: 2022,
    title: "E-Commerce",
    description:
      "My demo version of e-commerce website for popular food in Turkey called Orcik. Users can order the food through filling the form and after that, they can track their cargo details with the help of RapidApi call and the key we send them.",
    img: [Food],
    blurImg: [blurFood],
    linkProject: "https://metinvn.github.io/Orcik-Website/",
    linkSource: "https://github.com/MetinVn/Orcik-Website",
    techStack: "React, TailwindCSS, Framer-Motion",
  },
  {
    year: 2021,
    title: "Movie App",
    description:
      "App utilizes RapidAPI to fetch data and dynamically visualizes movie charts based on user search input. Users can explore movie details including ,release date ,original language and overview.",
    img: [Movie],
    blurImg: [blurMovie],
    linkProject: "https://metinvn.github.io/Movie-App/",
    linkSource: "https://github.com/MetinVn/Movie-App",
    techStack: "HTML, CSS, JavaScript",
  },
  {
    year: 2023,
    title: "Translator",
    description:
      "Lifesaver translation app. It makes switching between Russian, German, Spanish, Turkish, Italian, and Azerbaijani a breeze, helping users communicate effectively and explore new languages with ease.",
    img: [Translator],
    blurImg: [blurTranslator],
    linkProject: "https://metinvn.github.io/Translator/",
    linkSource: "https://github.com/MetinVn/Translator",
    techStack: "React, React spinners, TailwindCSS, Axios",
  },
  {
    year: 2021,
    title: "Recipe App",
    description:
      "Recipe app utilizes meal api that retrieves meal ingredients, instructions and measures.Users can also save meals to favorites for later.",
    img: [Recipe, RecipeDark],
    blurImg: [blurRecipe, blurRecipeDark],
    linkProject: "https://metinvn.github.io/Recipe-App/recipe.html",
    linkSource: "https://github.com/MetinVn/Recipe-App",
    techStack: "HTML, CSS, JavaScript",
  },
];
