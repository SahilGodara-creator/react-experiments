import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Product Stock
      </h1>

      <div className="flex flex-wrap gap-6 justify-center">

        <ProductCard
          name="Headphones"
          price="129"
          inStock={true}
          image="https://images.unsplash.com/photo-1505740106531-4243f3831c78"
        />

        <ProductCard
          name="Mechanical Keyboard"
          price="89"
          inStock={false}
          image="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef"
        />

        <ProductCard
          name="Smart Watch"
          price="199"
          inStock={true}
          image="https://images.unsplash.com/photo-1544117519-31a4b719223d"
        />

        <ProductCard
          name="Wireless Mouse"
          price="49"
          inStock={true}
          image="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7"
        />

        <ProductCard
          name="Laptop"
          price="899"
          inStock={true}
          image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
        />

        <ProductCard
          name="Bluetooth Speaker"
          price="79"
          inStock={false}
          image="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
        />

        <ProductCard
          name="DSLR Camera"
          price="599"
          inStock={true}
          image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
        />

      </div>
    </div>
  );
}

export default App;