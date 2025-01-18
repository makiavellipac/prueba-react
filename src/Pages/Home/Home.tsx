import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      <section className="home__intro">
        <h1>En una galaxia no tan lejana...</h1>
        <p>
          Bienvenido a mi universo personal. Soy Santiago González, un desarrollador web
          apasionado por la tecnología.
        </p>
      </section>
      <div className="home__content">
        <section className="home__section">
          <h2>Pasiones Tecnológicas</h2>
          <ul>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </section>
        <section className="home__section">
          <h2>Pasatiempos</h2>
          <ul>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </section>
        <section className="home__section">
          <h2>Objetivos Galácticos</h2>
          <ul>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
          </ul>
        </section>
      </div>

      <footer className="home__footer">
        <p>"El camino asi es, Mandalorian"</p>
      </footer>
    </div>
  );
};

export default Home;
