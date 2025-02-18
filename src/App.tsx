import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BreadcrumbNav } from "./components/ui/breadcrumb";
import { InvestmentScope } from "./components/Scope";
import { PropertyDashboard } from "./components/properDashboard";
import ArticlesGrid from "./components/articles-grid";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <BreadcrumbNav/>
      <Home />
      <InvestmentScope/>
      <PropertyDashboard/>
      <ArticlesGrid/>
      <Footer/>
    </div>
  );
}

export default App;