import explore from '../assets/shared/explore-desktop.svg'
import '../styles/maindescription.css'

const MainDescription = () => {
  return (
    <section>
      <section class="main-description">
        <h5 class="heading5">SO, YOU WANT TO TRAVEL TO</h5>
        <h1 class="heading1">SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
        <a href="./destination-titan.html"></a>
      </section>
      <aside>
        <img src={explore} alt="" />
      </aside>
    </section>
  );
};

export default MainDescription;
