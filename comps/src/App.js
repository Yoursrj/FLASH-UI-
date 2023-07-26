//3
import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import CounterPage2 from "./pages/CounterPage 2";

function App() {
//jo humare main page par dikhega wo saari cheeze App.ja me jayengi kyuki wihi render hora hai App.js se jo itself render hora hai index.html se
    return <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar/>
        {/* <Link to="/accordion">Go To Accordion</Link><br/>{/* Link ka jo ''to wala parameter hai usme jayega ye /accordion and /dropdown */}
         {/* <Link to="/dropdown">Go to Dropdown</Link>  */}
         <div className="col-span-4">
            <Route path="/accordion">{/* Route ka jo path wala parameter hai usme jayega /accordion or agar default path / hoga to dropdown page jayega aage*/}
                <AccordionPage/>
            </Route>
            <Route path = "/">
                <DropdownPage/>
            </Route>
            <Route path="/buttons">
                <ButtonPage/>
            </Route>
            <Route path="/modal">
                <ModalPage/>
            </Route>
            <Route path="/table">
                <TablePage/>
            </Route>
            <Route path="/counter">
               <CounterPage initialCount={10}/>
            </Route>
            <Route path="/counter2">
              <CounterPage2 initialCount={5}/>
            </Route>
         </div>
    </div>

   

}
export default App;