
import Banner from "../composants/banner.jsx";

import Gallery from "../composants/gallery.jsx";




const Home = () => {
  return (
    <div>
      <Banner />
      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2><Gallery/></h2>
      </section>
    </div>
  );
};

export default Home;