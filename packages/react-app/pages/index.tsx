// This is the main page of the app

// Import the AddProductModal and ProductList components
import AddProductModal from "@/components/AddProductModal";
import ProductList from "@/components/ProductList";
import Dashboard from "@/components/Dashboard";
import DisplayBalance from "@/components/DisplayBalance";

// Export the Home component
export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center justify-between">
          <AddProductModal/>
          <Dashboard/>
        </div>
          <DisplayBalance/>
      </div>
        <ProductList />
    </div>
  )
}