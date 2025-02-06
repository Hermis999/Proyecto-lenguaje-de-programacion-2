import { ChangeEvent, FormEvent, useState } from "react";
import { createMangaRequest } from "../../api/apiMangas";

function MangaForm() {

    const [manga, setManga] = useState({
        title: '',
        price: 0,
        stock: 0,
        description: '',
        status: false,
    });
    

    const Change = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
    
        // Convertir price y stock a números si es necesario
        const updatedValue = (name === "price" || name === "stock") ? Number(value) : value;
    
        setManga({ ...manga, [name]: updatedValue });
    };

    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // Convertir price y stock a números
        const mangaData = {
            ...manga,
            price: Number(manga.price),
            stock: Number(manga.stock),
        };
    
        console.log(mangaData); // Verifica que los valores sean números
    
        const res = await createMangaRequest(mangaData);
        const data = await res.json();
        console.log(data);
    };

    return (

        <div className='bg-gray-950 p-4 w-2/5'>
            <h1 className='text-center font-bold text-4xl my-2'> APP Mangas</h1>
            <form onSubmit={submitForm} action="">
                <input type="text" name="title" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Title of Manga"
                onChange={Change}
                />
                <input type="number" name="price" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Price of Manga" 
                onChange={Change}/>

                <input type="number" name="stock" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="stock of Manga" onChange={Change}/>

                <textarea name="description" rows={3} id="" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Description the Manga" onChange={Change}>
                </textarea>

                <label htmlFor="" className="inline-flex items-center gap-x-2">
                    <input type="checkbox" name="status" className="h-5 w-5 text-indigo-600"
                    onChange={(e) => setManga({ ... manga, status: !manga.status})}
                    />
                    <span>Executed</span>
                </label>
                <button 
                    className="bg-indigo-500 hover:bg-indigo-700 px-3 block py-2 w-full"
                    onClick={() => window.history.back()}
                    >
                        Save
                </button>
                <button 
                    className="bg-red-500 hover:bg-red-700 px-3 block py-2 w-full my-2"
                    onClick={() => window.history.back()}
                    >
                        Cancel
                </button>
            </form>
            </div>

    )
}
export default MangaForm