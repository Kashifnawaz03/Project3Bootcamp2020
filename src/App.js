import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet, useParams} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"><b>Home</b></Link><hr />
        <Link to="/launch"><b><i>Launch</i></b></Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

function Launch() {
  return (
    <div>
      <h1>Launch</h1>

      <Outlet />
    </div>
  );
}

function LaunchIndex() {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
        <li key={slug}>
          <Link to={`/launch/${slug}`}>
            <h2>{name}</h2>
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LaunchShoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];

  if (!shoe) {
    return <h2>Not Found!</h2>;
  }

  const { name, img } = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

const shoes = {
  "Air Shoe": {
    name: "Air Shoes ",
    img:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  "Tyron Harkiss-Foster": {
    name: "Tyron Harkiss-Foster",
    img:
      "https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  "Converse All Star": {
    name: "Converse All Star",
    img:
      "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
  },
  "Steel Toe": {
    name: "Steel Toe",
    img:
      "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
  }
};

export default App;



