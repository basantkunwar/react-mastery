export default function GreetingComponent({
    id, 
    title,
    message,
    emoji,
    time,
    category
}
) {
    return (
       <div className="rounded-lg px-6 py-4 bg-white p-4 shadow-lg green:bg-gray-800 border-gray-700 dark:border-gray-700 dark:hover:bg-gray-700 transition duration-300">
           <h2 className="text-2xl font-bold mb-2">{title}</h2>
           <p className="text-gray-600 dark:text-gray-400">{message}</p>
           <p className="text-gray-600 dark:text-gray-400">{emoji}</p>
           <p className="text-gray-600 dark:text-gray-400">{time}</p>
           <p className="text-gray-600 dark:text-gray-400">{category}</p>
       </div>
    );
}