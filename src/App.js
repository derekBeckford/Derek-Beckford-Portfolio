import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import profilePicture from "./assets/profile-picture/profile-picture.jpg";
import Portfolio from "./components/portolio";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    { name: "about", description: "About me" },
    { name: "portfolio", description: "My coding portfolio" },
    { name: "resume", description: "My Resume" },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Header>
      <div>
        <img src={profilePicture} alt="" class="profile-picture" />
        <div class="image1"></div>
      </div>
      <main>
        {currentCategory.name === "about" ? 
        (
          <About></About>
        ) : currentCategory.name === "portfolio" ? 
        (
          <Portfolio></Portfolio>
        ) : currentCategory.name === "resume" ? (
          <Resume></Resume>
        ) : (
          <></>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
