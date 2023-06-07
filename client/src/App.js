import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import About from "./pages/About";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Contact from "./pages/Contact";
import Cart from "./components/Cart";
//import Sidebar from "./components/Sidebar";
import ErrorPage from "./pageNotFound/ErrorPage";
import { GlobalStyle } from "./pages/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import BookDetail from "./pages/BookDetails";
import SingleBook from "./components/SingleBook";
import AddBook from "./pages/AddBook";
import DashBoard from "./pages/DashBoard";
=======
import { GlobalStyle } from "./pages/GlobalStyle";
import { ThemeProvider } from "styled-components";
import ErrorPage from "./pageNotFound/ErrorPage";
import {
  About,
  Home,
  Books,
  Contact,
  Login,
  Admin,
  Register,
  ForgotPassword,
  BookDetails,
} from "./pages";
import { Cart, Header, Footer, SingleBook } from "./components";

>>>>>>> 3021ed56995299fb10fac7f04df85eed5e09b101
const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
          <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/forget-password" element={<ForgotPassword/>} />
         <Route path="/admin" element={<Admin/>}/>
         <Route path="/addbook" element={<AddBook/>}/>
         <Route path="/dashboard" element={<DashBoard/>}/>
         <Route path="/cart" element={<Cart/>}/>
         
         <Route path="/books/:id" element={<BookDetail />} />
         <Route path="/singlebook" element={<SingleBook/>} />
=======
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/singlebook" element={<SingleBook />} />
>>>>>>> 3021ed56995299fb10fac7f04df85eed5e09b101
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
