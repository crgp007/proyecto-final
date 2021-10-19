
import "./styles/style.scss"
import Taller from './Taller'
import Banner from './Banner'
import Registro from './Registro'
import Facturacion from "./Facturacion"
import Videos from "./Videos"
import Tienda from "./Tienda"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"




 const talleres = [
     {
     "nombre" : "Curso Desarrollo Web desde 10",
     "image" : "https://losmejoresdemalaga.es/wp-content/uploads/2020/08/mejores-empresas-desarrollo-web-programacion-malaga.png",
     "price" : "$$1200",
     "profesor" : "Geek Tutorials",
     "location" : "Online"

     },

     {
     "nombre" : "JAVA Web desde 10",
     "image" : "https://www.digitalriser.com/wp-content/uploads/2021/01/download_java_offline_installer.webp",
     "price" : "$$12100",
     "profesor" : "Tony Stark",
     "location" : "Online"
    
     },

     {
     "nombre" : "CISCO CCNA",
     "image" : "https://scontent.fmex11-4.fna.fbcdn.net/v/t1.18169-9/11149353_997779110234516_4625259103582522351_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=973b4a&_nc_ohc=oITRliwDGc0AX9TCywd&_nc_ht=scontent.fmex11-4.fna&oh=5f098a4fc72cba641673461cf41937f5&oe=61895DA8",
     "price" : "$$12400",
     "profesor" : "Elena Ayala",
     "location" : "Online"
      
     },

     {
     "nombre" : "Curso IA",
     "image" : "https://www.lavanguardia.com/uploads/2020/04/07/5fa90194de582.jpeg",
     "price" : "$$11000",
     "profesor" : "Jarvis",
     "location" : "Online"
        
     }
]




const App = () => (

    

<Router>

    <Switch>
    <Route path="/" exact component = {Banner}/>
      

    <Route path="/talleres" exact component = {Banner}/>
    <Route path="/registro" exact component = {Registro}/>
    <Route path="/facturacion" exact component = {Facturacion}/>
    <Route path="/videos" exact component = {Videos}/>
    <Route path="/tienda" exact component = {Tienda}/>
    <Route component ={() =>(
        <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Web Page not found!!</span>
        </div>
    )}/>
    </Switch>


    </Router>


)




export default App;
