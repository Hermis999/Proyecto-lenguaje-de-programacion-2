import { ChangeEvent, FormEvent, useState } from "react";
import { createMangaRequest } from "../../api/apiMangas";

function MangaForm() {

    const [manga, setManga] = useState({
        img: '',
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
    
        const mangaData = {
            ...manga,
            price: Number(manga.price),
            stock: Number(manga.stock),
            status: manga.status === true, // Asegurar que sea booleano
        };
    
        console.log("Datos a enviar:", mangaData); // Verifica que los valores sean correctos
    
        const res = await createMangaRequest(mangaData);
        const data = await res.json();
        console.log("Respuesta del servidor:", data);
    
        // Redirigir después de enviar el formulario
        if (res.ok) {
            window.history.back();
        }
    };

    return (

        <div className='bg-gray-950 p-4 w-2/5'>
            <h1 className='text-center font-bold text-4xl my-2'> APP Mangas</h1>
            <form onSubmit={submitForm} action="">
                <input type="text" name="img" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Imagen del Manga"
                onChange={Change}
                />
                <input type="text" name="title" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Titulo del Manga"
                onChange={Change}
                />
                <input type="number" name="price" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Precio del Manga" 
                onChange={Change}/>

                <input type="number" name="stock" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Cantidad del Manga" onChange={Change}/>

                <textarea name="description" rows={3} id="" 
                className="border-2 border-grey-700 p-2 
                rounded-lg bg-zinc-800 block w-full my-2" 
                placeholder="Descripcion del Manga" onChange={Change}>
                </textarea>
                <select
                    name="status"
                    className="border-2 border-grey-700 p-2 rounded-lg bg-zinc-800 block w-full my-2"
                    value={manga.status ? "true" : "false"} // Controla el valor seleccionado
                    onChange={(e) => setManga({ ...manga, status: e.target.value === "true" })}
                >
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
                </select>
                <button 
                    type="submit" // Asegúrate de que sea type="submit"
                    className="bg-indigo-500 hover:bg-indigo-700 px-3 block py-2 w-full"
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