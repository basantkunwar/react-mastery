import { reasonstojoin } from "@/data/reasontojoin";

export default function Reasontojoin() {
    return (
        <div className="bg-black">
            <div className="grid grid-cols-2 gap-4 mx-7  p-4 md:grid-cols-4 lg:grid-cols-4  ">
                {reasonstojoin.map((reason) => (
                    <div className="rounded-2xl border py-8 border-zinc-800 px-4 mx-7 bg-zinc-900 p-6 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 
                    hover:border-2 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20" key={reason.id}>
                        <h3 className="text-2xl font-bold">{reason.title}</h3>
                        <p className="mt-2 text-lg">{reason.description}</p>
                        <i>{reason.icon}</i>
                    </div>
                ))}
            </div>
         </div>
    );
}