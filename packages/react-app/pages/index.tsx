// This is the main page of the app

// Import the AddProductModal, ProductList, Dashboard, and DisplayBalance components
import AddProductModal from "@/components/AddProductModal";
import ProductList from "@/components/ProductList";
import Dashboard from "@/components/Dashboard";
import DisplayBalance from "@/components/DisplayBalance";

// Export the Home component
export default function Home() {
  return (
    <div>
      {/* Render the components imported above */}
      <div className="flex justify-between">
        <div className="flex items-center justify-between">
          {/* Render the AddProductMdoal component */}
          <AddProductModal/>
          {/* Render the Dashboard component */}
          <Dashboard/>
        </div>
        {/* Render the DisplayBalance component */}
          <DisplayBalance/>
      </div>
      {/* Render the ProductList component */}
        <ProductList />
    </div>
  )
}