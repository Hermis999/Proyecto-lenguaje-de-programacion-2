import { useEffect, useState } from "react"
import { deleteMangaRequest, updateMangaRequest, getMangaRequest } from "../../api/apiMangas"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

function MangasIndex() {
    const [ mangas, setMangas ] = useState([]);
    const [ error, setError] = useState("");
    const [ updateList, setUpdateList ] = useState(false);


    useEffect(() => {
        setUpdateList(false);
        const fetchMangas = async () => {
            try {
                const response = await getMangaRequest();
                const data = await response.json();
                setMangas(data);
            } catch (e) {
                setError('No se trajo los valores');
                console.error(e);
            }
            
        }
        fetchMangas();
    }, [updateList])

    const handleEdit = async (id, e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
        try {
            const form = e.target;
            const newImage = form.img.value;
            const newTitle = form.title.value;
            const newPrice = Number(form.price.value);
            const newStock = Number(form.stock.value);
            const newDescription = form.description.value;
            const newStatus = form.status.checked ? true : false;
            
    
            const updatedManga = {  img: newImage, title: newTitle, price: newPrice, stock: newStock, description: newDescription, status: newStatus};
    
            // Usar updateMangaRequest para enviar la solicitud PUT
            const responseUpdate = await updateMangaRequest(id, updatedManga);
    
            if (responseUpdate.ok) {
                // Actualizar el estado local
                setMangas(mangas.map((m) => (m._id === id ? { ...m, ...updatedManga } : m)));
                setUpdateList(true);
    
                // Cerrar el modal
                const modal = document.getElementById(`modal-edit-${id}`);
                if (modal) {
                    modal.classList.add('hidden');
                }
            } else {
                console.error("Error al actualizar el Manga");
                const errorData = await responseUpdate.json();
                console.error(errorData);
            }
        } catch (error) {
            console.error(error);
        }
    };

const handleDelete = async (id) => {
    try {
        console.log(`Eliminar Manga con ID: ${id}`);
        await deleteMangaRequest(id);
        setMangas(mangas.filter((manga) => manga._id !== id));
        setUpdateList(true);
    } catch (error) {
        console.log(error);
    }
};


    return (
        <div>
            <div className="mt-2 mx-20 px-5 py-4 flex flex-wrap justify-between">
                <h1 className="text-4xl font-bold mb-4">Lista de Mangas</h1>
                <a href="/productos/nuevo" className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-4 rounded-full">
                    Crear nuevo Manga
                </a>               
            </div>
            {error && <p className="text-red-500">{error}</p>}
            <div className="mt-2 px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 max-h-[80vh] overflow-y-auto">
                {mangas.length > 0 ? (
                mangas.map((manga) => (
                    <div
                    key={manga._id}
                    className="bg-gray-800 p-4 rounded-2xl shadow-lg relative"
                    >
                    <img src={manga.img || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5R-jYIfuYoocqeVytxMEviYYrR1obxFd6Q&s"} 
                    alt="Imagen del manga" className="w-full h-68 object-cover rounded-t-2xl" />
                    <h3 className="text-3xl py-3 font-semibold">{manga.title}</h3>
                    <p className="text-yellow-400">Precio: {manga.price}</p>
                    <p className="text-yellow-400">Stock: {manga.stock}</p>
                    <p className="text-gray-400">Descripcion: {manga.description || "Sin descripción"}</p>
                    <p className="text-gray-400">Estado: {manga.status ? "Activo" : "Inactivo"}</p>

                    <div className="flex justify-end space-x-2 mt-4">
                        <button
                        className="flex items-center px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
                        onClick={() => {
                            const modal = document.getElementById(`modal-edit-${manga._id}`);
                            if (modal) {
                                modal.classList.remove('hidden');
                            }
                        }}
                        >
                            <PencilIcon className="h-5 w-5 mr-1" />
                            Editar
                        </button>

                        <div id={`modal-edit-${manga._id}`} className="hidden fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                    <div>
                                        <div className="text-center sm:mt-5 sm:ml-4 sm:text-left">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                                                Editar Manga
                                            </h3>
                                            <div className="mt-2">
                                            <form onSubmit={(e) => handleEdit(manga._id, e)}>
                                                <div className="space-y-6">
                                                    <div className="sm:col-span-6">
                                                        <label htmlFor="img" className="block text-sm font-medium text-black">
                                                            Imagen
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="img"
                                                                id="img"
                                                                defaultValue={manga.img}
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-black-300 rounded-md text-black"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-6">
                                                        <label htmlFor="title" className="block text-sm font-medium text-black">
                                                            Titulo
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="title"
                                                                id="title"
                                                                defaultValue={manga.title}
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-black-300 rounded-md text-black"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-6">
                                                        <label htmlFor="price" className="block text-sm font-medium text-black">
                                                            Precio
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="number"
                                                                name="price"
                                                                id="price"
                                                                defaultValue={manga.price}
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-black"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-6">
                                                        <label htmlFor="stock" className="block text-sm font-medium text-black">
                                                            Stock
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="number"
                                                                name="stock"
                                                                id="stock"
                                                                defaultValue={manga.stock}
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-black"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-6">
                                                        <label htmlFor="description" className="block text-sm font-medium text-black">
                                                            Descripcion
                                                        </label>
                                                        <div className="mt-1">
                                                            <textarea
                                                                id="description"
                                                                name="description"
                                                                defaultValue={manga.description}
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-black"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-6">
                                                        <label htmlFor="status" className="block text-sm font-medium text-black">
                                                            Estado
                                                        </label>
                                                        <div className="mt-1">
                                                            <select
                                                                id="status"
                                                                name="status"
                                                                defaultValue={manga.status ? "true" : "false"}
                                                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-black"
                                                            >
                                                                <option value="true" selected={manga.status ? true : false}>Activo</option>
                                                                <option value="false" selected={manga.status ? false : true}>Inactivo</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-5 sm:mt-6 space-x-4">
                                                    <button type="submit" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:text-sm">
                                                        Actualizar
                                                    </button>
                                                    <button type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto sm:text-sm" 
                                                    onClick={() => {
                                                        const modal = document.getElementById(`modal-edit-${manga._id}`);
                                                        if (modal) {
                                                            modal.classList.add('hidden');
                                                        }
                                                    }}>
                                                        Cancelar
                                                    </button>
                                                </div>
                                            </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                        className="flex items-center px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-500"
                        onClick={() => handleDelete(manga._id)}
                        >
                                <TrashIcon className="h-5 w-5 mr-1" />
                                Eliminar
                        </button>
                    </div>
                    </div>
                ))
                ) : (
                    <p>No hay actividades disponibles.</p>
                )}
            </div>
        </div>
    )
}
export default MangasIndex
