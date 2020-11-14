import Header from "./Page/Header";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuKontak from "./Page/MenuKontak";
import Footer from "./Page/Footer";
import MenuMakanan from "./Page/MenuMakanan";

function App() {
  return (
    <div>
      <Header/>
      <MenuMakanan/>
      <MenuTentangKami/>
      <MenuKontak/>
      <Footer/>
    </div>
  );
}

export default App;
