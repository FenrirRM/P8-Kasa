import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";

function Home() {
  return (
    <main>
      <Banner
        title="Chez vous, partout et ailleurs"
        src="/assets/Banner1.png"
        alt="Image d'un paysage"
      />
      <Cards />
    </main>
  );
}

export default Home;
