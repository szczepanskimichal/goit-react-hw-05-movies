Video World

Movie search engine by title

Introduction

An application using single-page application. For the backend I used
themoviedb.org API. The Trending list is displayed on the HOME main page,
clicking on the selected title takes you to the movie card with detailed data.
After clicking on Movies in the header, a searchbar appears to search for a
movie by title. When you enter part of the title, a list of titles with the
entered phrase appears. List consisting of the poster, title and genre of the
film. Clicking on the selected title takes you to the movie card with details.
After pressing the 'Go back' button, we return to movies and can search for
another title again. The film card contains information: title, release date,
description, duration of the film and additional information in which, after
pressing the "cast" link, the cast will appear, and after pressing the "reviews"
link, opinions about the film will appear. By clicking on the same links, the
content closes.

![m2](https://github.com/szczepanskimichal/goit-react-hw-05-movies/assets/127307935/5b12fe2d-12e2-4f54-a2d3-dc60e0f52571)
![m1](https://github.com/szczepanskimichal/goit-react-hw-05-movies/assets/127307935/8bc3645b-676b-4148-8851-c51c38cc1bbc)
![m4](https://github.com/szczepanskimichal/goit-react-hw-05-movies/assets/127307935/2ec89118-6ca0-4d4f-b5d2-dc52d7edf01a)
![m3](https://github.com/szczepanskimichal/goit-react-hw-05-movies/assets/127307935/e49f0e2b-dca8-401e-a877-4ea9f582d11c)



Technologies

- HTML

- CSS

- Java Script

- React.js

- single-page application

- themoviedb.org API


Starting up


First install all required dependencies: npm install


To run the application, use the following command: npm start

The application will run on localhost:3000.


Project Structure


src/

    |--App/

        ||--App.css

        ||--App.jsx

        ||--index.js

    |--components

        ||--BackLink/

            |||--BackLink.jsx

            |||--BackLink.module.css

            |||--index.js

        ||--Cast/

            |||--Cast.jsx

            |||--Cast.module.css

            |||--index.js

        ||--Loader/

            |||--Loader.jsx

            |||--index.js

        ||--MovieCard/

            |||--index.js

            |||--MovieCard.jsx

            |||--MovieCard.module.css

        ||--MovieList/

            |||--index.js

            |||--MovieList.jsx

            |||--MovieList.module.css

        ||--Navigation/

            |||--index.js

            |||--Navigation.jsx

            |||--Navigation.module.css

        ||--Reviews/

            |||--index.js

            |||--Reviews.jsx

            |||--Reviews.module.css

        ||--SearchBar/

            |||--index.js

            |||--SearchBar.jsx

            |||--SearchBar.module.css

        ||--SharedLayout/

            |||--index.js

            |||--SharedLayout.jsx

            |||--SharedLayout.module.css

        ||--index.js

    |--pages

        ||--Home

            |||--index.js

            |||--Home.jsx

            |||--Home.module.css

        ||--MovieDetails

            |||--index.js

            |||--MovieDetails.jsx

            |||--MovieDetails.module.css

        ||--Movies

            |||--index.js

            |||--Movies.jsx

            |||--Movies.module.jsx

        ||--NotFound

            |||--index.js

            |||--NorFound.jsx

            |||--NorFound.module.css

    |--services

        ||--movieAPI.js

    |--index.js

    |--index.css


    

Author

Szczepanski Michal

e-mail: michalszczepanski07@gmail.com

GitHub: https://github.com/szczepanskimichal

Linkedin: wwww.linkedin.com/in/michal-szczepanski-a2bb9126b
