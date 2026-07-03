import ProductCart from "@/Components/ProductCart";
import profile from "../asset/images/profile.jpeg";
import accer from "../asset/images/accer.webp";
import laptop from "../asset/images/laptop.webp";

export default function Products() {
    const products = [
     {
            id: 1,
            image: laptop,
            name: "Gaming Laptop",
            category: "Electronics",
            price: 95000,
            description:
                "High-performance gaming laptop with Intel i7 processor and RTX graphics.",
        },

        {
            id: 2,
            image: accer,
            name: "Wireless Headphone",
            category: "Accessories",
            price: 3500,
            description:
                "Premium wireless headphones with noise cancellation.",
        },

        {
            id: 3,
            image: laptop,
            name: "Mechanical Keyboard",
            category: "Accessories",
            price: 4500,
            description:"RGB mechanical keyboard with blue switches.",
        },
    ]
    return (
        <div className="bg-gradient-to-br">
        <h2 className="text-xl font-semibold bg-gradient-to-br leading-tight text-gray-800">Products</h2>
        <div className=" grid grid-cols-3 gap-4 min:grid-cols-4  bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6">
          {products.map((product) => (
            <ProductCart
              key={product.name}
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              description={product.description}
            />
          ))}
          
</div>
          </div>
    );
}   
