import { Redirect, Route, Switch } from 'react-router-dom';
import { About, Accordion, Blog, Cart, Catalog, Contact, Header, Home, LikeList, Notfound, Product, Profile } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/"><Redirect to="/home" /></Route>
        <Route path='/home' exact><Home /></Route>
        <Route path="cart" ><Cart /></Route>
        <Route path="likeList" ><LikeList /> </Route>
        <Route path="profile"><Profile /></Route>
        <Route path="catalog"><Catalog /></Route>
        <Route path="catalog/:id"><Product /></Route>
        <Route path="contact"><Contact /></Route>
        <Route path="about"><About /></Route>
        {/* <Route path="about" element={<About />} /> */}
        <Route path="*"><Notfound /></Route>
        {/* <Route path="*" element={<Notfound />} /> */}
        <Route path="blog"><Blog /></Route>
        {/* <Route path="blog" element={<Blog />} /> */}
        {/* <Route path="policy" element={<PolicyPage />} /> */}
        <Route path="accordion"><Accordion /></Route>
        {/* <Route path="accordion" element={<Accordion />} /> */}
      </Switch>

    </div>
  );
}

export default App;
