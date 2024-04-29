import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ProjectItems from "./ProjectItems";
import Recipe from "../images/Recipe.png";
import Movie from "../images/MovieApp.png";
import Translator from "../images/Translator.png";
import Food from "../images/food.png";
import Product from "../images/productManage.png";
import USA from "../images/us.png";
import Summary from "./Summary";

const Projects = () => {
  const projects = [
    {
      title: "Project Management",
      description:
        "The Product Management app offers a robust set of functionalities, including pagination, user registration and login capabilities for secure access. Users can: filter products by category names,add product to database, search product with debounce optimized functionality.",
      img: Product,
      linkSource: "https://github.com/MetinVn/Product-Management",
      techStack:
        "React, Semantic UI, Formik, Yup, Redux, PostgreSQL, Java, Swagger, Spring Boot",
    },
    {
      title: "Individual Armament",
      description:
        "Individual armament project retrieves USA crime rates across all states. It includes an interactive map of the USA, allowing users to click on states and access specific crime data. The project leverages RapidAPI for data retrieval, also integrates React Charts for data visualization, and utilizes Framer Motion for smooth and interactive animations.",
      img: USA,
      linkProject: "https://metinvn.github.io/Bireysel-Silahlanma/",
      linkSource: "https://github.com/MetinVn/Bireysel-Silahlanma",
      techStack: "React, React charts, Framer-Motion, TailwindCSS, Axios",
    },
    {
      title: "Movie App",
      description:
        "App utilizes RapidAPI to fetch data and dynamically visualizes movie charts based on user search input. Users can explore movie details including ,release date ,original language and overview.",
      img: Movie,
      linkProject: "https://metinvn.github.io/Movie-App/",
      linkSource: "https://github.com/MetinVn/Movie-App",
      techStack: "HTML, CSS, JavaScript",
    },
    {
      title: "E-Commerce",
      description:
        "My demo version of e-commerce website for popular food in Turkey called Orcik. Users can order the food through filling the form and after that, they can track their cargo details with the help of RapidApi call and the key we send them.",
      img: Food,
      linkProject: "https://metinvn.github.io/Orcik-Website/",
      linkSource: "https://github.com/MetinVn/Orcik-Website",
      techStack: "React, TailwindCSS, Framer-Motion",
    },
    {
      title: "Translator",
      description:
        "Lifesaver translation app. It makes switching between Russian, German, Spanish, Turkish, Italian, and Azerbaijani a breeze, helping users communicate effectively and explore new languages with ease.",
      img: Translator,
      linkProject: "https://metinvn.github.io/Translator/",
      linkSource: "https://github.com/MetinVn/Translator",
      techStack: "React, React spinners, TailwindCSS, Axios",
    },
    {
      title: "Recipe App",
      description:
        "Recipe app utilizes meal api that retrieves meal ingredients, instructions and measures.Users can also save meals to favorites for later.",
      img: Recipe,
      linkProject: "https://metinvn.github.io/Recipe-App/recipe.html",
      linkSource: "https://github.com/MetinVn/Recipe-App",
      techStack: "HTML, CSS, JavaScript",
    },
  ];

  const [visibleItems, setVisibleItems] = useState({});

  const itemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleItems((prevVisibleItems) => ({
            ...prevVisibleItems,
            [entry.target.dataset.index]: true,
          }));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    itemsRef.current.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="w-full h-2 bg-gradient-to-b from-black/30 to-white"></div>
      <div className="w-full">
        <div className="max-w-[1340px] mx-auto md:pl-20 p-4 py-16">
          <Summary />
          <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-[#9966CC]">
              Portfolio
            </h1>
            <div className="grid grid-cols-1 gap-5 rounded-xl">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    visibleItems[index]
                      ? { opacity: 1, y: 0, transition: { duration: 1 } }
                      : {}
                  }
                  ref={(node) => (itemsRef.current[index] = node)}
                  data-index={index}>
                  <ProjectItems {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
