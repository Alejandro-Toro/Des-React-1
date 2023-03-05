import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Card from './components/card';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
     <Header titulo="Galeria de imagenes con React"/>
     <Card ruta="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg" 
     titulo="Martin Pescador" 
     descripcion="Pajaro"/>
     
     <Card ruta="https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588_1280.jpg" 
     titulo="Zorro" 
     descripcion="Mamifero vulpino"/>
     
     <Card ruta="https://cdn.pixabay.com/photo/2017/01/16/19/54/ireland-1985088_1280.jpg" 
     titulo="Oveja" 
     descripcion="Mamífero cuadrúpedo ungulado"/>
     
     <Card ruta="https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_1280.jpg" 
     titulo="Buho" 
     descripcion="Ave de rapiña"/>
    
     <Footer/>
    </>
  );
}

export default App;
