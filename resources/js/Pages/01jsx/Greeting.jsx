import greeting from "@/data/greeting";
import GreetingComponent from "@/Components/01jsx/GreetingComponent";

export default function Greeting() {
    return (
        <div className="grid px-4 py-8 grid:cols-3 gap-4 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5">

           {greeting.map((greeting) => (
                <GreetingComponent 
                    key={greeting.id}
                    id={greeting.id}
                    title={greeting.title}
                    message={greeting.message}
                    emoji={greeting.emoji}
                    time={greeting.time}
                    category={greeting.category}
                />
            ))}
        </div>
    );
}