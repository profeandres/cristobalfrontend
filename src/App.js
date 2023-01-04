import "../src/styles/App.css";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Inicio,
  NotFound,
  MainLayOut,
  NoticiasList,
  NoticiasLayOut,
  Noticia,
  NewNoticia,
} from "./pages/pages";
import NoticiasProvider from "./context/NoticiasContext";
function App() {
  return (
    <div className="App">
      <NoticiasProvider>
        <Routes>
          <Route path="/" element={<MainLayOut/>}>
            <Route index element={<Inicio/>} />
            <Route path="noticias" element={<NoticiasLayOut/>}>
              <Route index element={<NoticiasList />} />
              <Route path=":id" element={<Noticia/>} />
              <Route path="new" element={<NewNoticia/>} />
            </Route>
            <Route path="about" element={<About/>} />
            <Route path="*" element={<NotFound/>} />

          </Route>
        </Routes>
      </NoticiasProvider>
    </div>
  );
}

export default App;
