import me from "../assets/me.png";

function AboutMe() {
  return (
    <div className="about-me">
      <img src={me} alt="Taylor Poe headshot" />

      <p>
        My name is Taylor Poe, and I’m a Full Stack software engineering student
        at Atlas School. I’m currently in my last trimester, and my favorite
        technologies to work with are JavaScript, React, and Python. After
        school, I want to work as a software engineer building real products,
        especially in sports tech and data-driven apps. Outside of coding, I’m
        into sports analytics, watching football and basketball, and building
        personal projects to keep leveling up.
      </p>
    </div>
  );
}

export default AboutMe;
