import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header title="Galería React" />
      <div className="boX">
        <Card
          key="1"
          src="https://fotografias.lasexta.com/clipping/cmsimages02/2021/10/09/24C85527-82DF-44F7-8D7B-794D17823188/96.jpg?crop=1200,675,x0,y99&width=1200&height=675&optimize=low&format=webply"
          alt="Francesco Totti en su partido de retiro"
          name="Francesco Totti"
          category="Francesco Totti es conocido por pasar toda su carrera (25 años) en el equipo de fútbol AS Roma, en este equipo conquistó un total de 5 trofeos y participó junto a Italia para ser campeón del mundo en el año 2006"
        />
        <Card
          key="1"
          src="https://s.hs-data.com/bilder/spieler/gross/13301.jpg?fallback=png"
          alt="Daniele De Rossi como capitán de la As Roma"
          name="Daniele De Rossi"
          category="Al igual que Totti, Daniele De rossi pasó casi toda su carrera defendiendo la AS Roma, aquí conquistó un total de 3 trofeos y participó junto a Italia para ser campeón del mundo en el año 2006"
        />
        <Card
          key="1"
          src="https://scontent.fscl9-2.fna.fbcdn.net/v/t39.30808-6/281397809_3141604882769678_1095786790889859338_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uH7-n836MAwAX9OzK1P&_nc_ht=scontent.fscl9-2.fna&oh=00_AT8bxrYldOzCtMwcH4jolcR8pHehyS4vaLNJs-bvkdOUcw&oe=630A47CA"
          alt="Lorenzo Pellegrini levantando un trofeo"
          name="Lorenzo Pelegrini"
          category="Es el actual capitán de la As Roma y Campeón inagural de la UEFA Conference League"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
