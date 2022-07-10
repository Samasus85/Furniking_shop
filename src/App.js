import { Route, Routes } from 'react-router-dom';
import { About, Accordion, Blog, Card, Catalog, Contact, Header, Home, LikeList, Notfound, PolicyPage, Product, Profile } from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="/"><Redirect to="/home" /></Route> */}
        {/* <Route path='/home' exact><Home /></Route> */}
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Card />} />
        <Route path="likelist" element={<LikeList />} />
        <Route path="profile" element={<Profile />} />
        <Route path="catalog" element={<Catalog />} />
        <Route exact path="catalog/:id" element={<Product />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Notfound />} />
        <Route path="blog" element={<Blog />} />
        <Route path="policy" element={<PolicyPage />} />
        <Route path="accordion" element={<Accordion />} />

      </Routes>

    </div>
  );
}

export default App;
