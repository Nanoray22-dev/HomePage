import "./App.css";
import  ArticlesContainer  from "./Components/ArticleContainer";
import Header from "./Components/Header";
import MainArticle from "./Components/MainArticle";
import { NewContainer } from "./Components/NewContainer";


function App() {
  return (
    <>
      <main className=" font-Inter">
        <Header />
        <div className="md:flex md:gap-8 md:mb-10">
       <MainArticle/>
       <NewContainer/>
        </div>
        <ArticlesContainer/>
      </main>
    </>
  );
}

export default App;
