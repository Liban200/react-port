import React from "react";
import MyImg from "../../assets/cover/Imageofme.jpeg";


function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <img src={MyImg} className="my-2" style={{ width: "10%" }} alt="cover" />
          <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div>
        <p>
          Hello there, I'm Liban Duale, a dedicated front-end developer
          proficient in HTML, CSS, JavaScript, jQuery, responsive design, React,
          and Bootstrap. My journey began with a solid foundation in HTML and
          CSS, enabling me to craft visually appealing and well-structured web
          pages. As I delved deeper into the world of web development, I honed
          my skills in JavaScript and jQuery, adding interactivity and dynamic
          elements to my projects for a captivating user experience. Driven by
          my passion for creating seamless user interfaces, I immersed myself in
          React's component-based architecture and virtual DOM. Leveraging these
          technologies, I design and build efficient, scalable web applications
          that leave a lasting impression on users. With the flexibility of
          Bootstrap, I ensure that my designs are responsive and adapt
          flawlessly to various screen sizes, providing a consistent experience
          across devices.
        </p>
        <p>
          On the back-end, I'm well-versed in working with APIs, utilizing Node
          and Express to develop robust server-side applications. I have
          experience with databases such as MySQL (Sequelize) and MongoDB
          (Mongoose), which allows me to choose the best-fit solutions for
          different project requirements. Additionally, I'm proficient in
          RESTful and GraphQL APIs, facilitating seamless communication between
          the front-end and back-end for enhanced data flow and functionality.
          Continuous learning is ingrained in my journey as a developer, and I
          stay updated with the latest trends and technologies in both front-end
          and back-end development. I thrive on challenges and find joy in
          collaborating with fellow developers to create meaningful and
          innovative solutions. Let's collaborate on exciting projects and bring
          our ideas to life in the digital realm! 🚀 Feel free to reach out, and
          together, we can craft exceptional digital experiences that make a
          difference.
        </p>
      </div>
    </section>
  );
}

export default About;