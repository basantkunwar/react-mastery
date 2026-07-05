import products from "@/data/product";
import ProductCard from "@/Components/01jsx/ProductCard";

export default function ProductsCartPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {products.map((product) => (
                <ProductCard 
                key={product.id}
             product={product} />
            ))}
        </div>
    )
}