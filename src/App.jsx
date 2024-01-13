import Header from "./components/Header";
import MyCard from "./components/Card";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Header title="Adopta un Perrito" />
      <main>
        <MyCard
          name="Bartolo"
          description="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
          image="https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_640.jpg"
          colorBadge="success"
          textBadge="Dachshund"
        />
        <MyCard
          name="Messi"
          description="Es jugueton, amigable y se lleva bien con los niños y otros animale. ¡Haz de Messi parte de tu familia hoy mismo!."
          image="https://cdn.pixabay.com/photo/2016/02/26/16/32/bulldog-1224267_640.jpg"
          colorBadge="primary"
          textBadge="Pug"
        />
        <MyCard
          name="Gohan"
          description="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experiemnta un amor incondicional."
          image="https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_640.jpg"
          colorBadge="danger"
          textBadge="Siberiano"
        />
        <MyCard
          name="Princesa"
          description="Es una compañera leal y cariñoza que adora los niños y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
          image="https://cdn.pixabay.com/photo/2017/08/28/07/42/dog-2688634_1280.jpg"
          colorBadge="warning"
          textBadge="Labrador"
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
