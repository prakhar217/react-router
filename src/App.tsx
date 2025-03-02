import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Product from "./pages/Product";
import {} from "react-router";
import RootLayout from "./layout/RootLayout";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import ContactLayout from "./layout/ContactLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import NotFound from "./components/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";
import JobDetails, { JobDetailsLoader } from "./components/JobDetails";
import Error from "./components/Error";

function App() {
  //this is a new way to routing
  // route path / will contain component we want on all pages , and every subsequent route inside will relative path
  // ie / + product
  // so whene ever we are on / we will see Rootlayout and when we arw at /product we will see
  // Rootlayyout + product component

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="contactForm" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />}>
          <Route index element={<Jobs />} loader={jobsLoader} /> 
          <Route path=":id" element={ <JobDetails /> } loader={JobDetailsLoader} errorElement={<Error/>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
