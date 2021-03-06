import headshot from "../../images/Liz_Lee_Headshot.jpg";
import vine from "../../images/Vine.svg";

function Home() {
  return (
    <div className="container">
      <img src={vine} className="vine" alt="decorative vine" />
      <header className="header">
        <span className="headshot">
          <img src={headshot} alt="Liz Lee Headshot" />
        </span>

        <h1>Liz Lee</h1>
        <div class="details">
          <p>Lead Front End Engineer</p>
          <p>Engineering Mangement</p>
          <p>JavaScript / Typescript / HTML / CSS</p>
          <p>React / Redux / Angular / NgRx</p>
          <p>UI Design Systems</p>
          <p>Expert Level</p>
        </div>
      </header>
      <section className="content">
        <h2>
          Lets Build
          <br />
          Great Products
        </h2>
        <nav class="nav">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/lizluxlee/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/lizlux"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a href="/Liz_Lee_Resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Home;
