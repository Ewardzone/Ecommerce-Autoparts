import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800;900&display=swap');

:root{
    --blue-bg: #4165B2;
    --skyblue: #089AED;
    --red: #D92020;
    --orange: #EB7609;
    --gray-bg: rgba(186, 180, 183, 1);
    --gray: #616165;
    --white: #FEFEFE;
    --btn-gradient: linear-gradient(100deg, #368FBE, #3655BE);
}

body {
    margin: 0;
    padding: 0;
    background: #242996;
    font-family: 'Montserrat', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
}

a {
    text-decoration: none;
}

a:visited {
    color: white;
}

li {
  list-style: none;  
}

`;
