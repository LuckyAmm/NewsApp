import './App.css';
import Navbar from './components/Navbar'
import NewsPage from './components/NewsPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  const apiKey = "517c01fe74064b26b455888f863ba0ea";
  const pageSize = 10;
  // const [state, setState] = useState(15);
  // const [data, setData] = useState([]);
  // const perPage = 15;
  // let [loading, setLoading] = useState(true);

  // const handleState = () => {
  //   setState(state + 1);
  // }

  // useEffect(() => {
  //   setLoading(true);
  //   async function getData() {
  //     const url = await fetch(`https://reqres.in/api/users?page=${state}&per_page=${perPage}`);
  //     const res = await url.json();
  //     setData([...data, ...res]);
  //     setLoading(false);
  //   }
  //   getData();
  // },[state])
  

  return (
    <>
      <Router>
        <Navbar title="News Point" />
        <Routes>
          <Route exact path="/" element={<NewsPage apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route exact path="/business" element={<NewsPage apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" /> } />
          <Route exact path="/entertainment" element={<NewsPage apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /> } />
          <Route exact path="/general" element={<NewsPage apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" /> } />
          <Route exact path="/health" element={<NewsPage apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" /> } />
          <Route exact path="/science" element={<NewsPage apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" /> } />
          <Route exact path="/sports" element={<NewsPage apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" /> } />
          <Route exact path="/technology" element={<NewsPage apiKey={apiKey} key="techmology" pageSize={pageSize} country="in" category="technology" /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
