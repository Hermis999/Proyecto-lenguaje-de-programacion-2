import { Link } from "react-router-dom";

function Bienvenida() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center md:p-0 md:max-w-7xl md:mx-auto">
      
      {/* Sección Hero */}
        <header className="text-center p-4 w-full max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">
                ¡Bienvenido a MangaKami! 📚✨
            </h1>
            <p className="text-base max-w-3xl mx-auto">
                Tu tienda especializada en mangas, novelas ligeras y artículos coleccionables.  
                Sumérgete en un mundo lleno de aventuras, emociones y tus historias favoritas.
            </p>
        </header>
        <h3 className="text-base max-w-3xl mx-auto">
            En MangaKami, tu tienda definitiva para los mejores mangas. 
            Descubre las últimas novedades, ediciones exclusivas y clásicos imperdibles en un solo lugar. 
            Sumérgete en un mundo lleno de aventuras, fantasía y emoción con nuestras colecciones 
            cuidadosamente seleccionadas para los verdaderos fanáticos del manga.
        </h3>

      {/* Botón de exploración */}
      <div className="mt-4">
        <Link to="/productos">
          <button className="bg-yellow-400 text-gray-900 px-6 py-2 text-base font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
            Explorar Catálogo 📖
          </button>
        </Link>
      </div>

      {/* Espacio antes de los destacados */}
      <div className="py-4"></div>

      {/* Sección de destacados */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        <div className="bg-gray-800 p-3 rounded-lg text-center shadow-lg">
          <h2 className="text-lg font-semibold text-yellow-400">🔥 Últimos Lanzamientos</h2>
          <p className="mt-2 text-xs">Encuentra las novedades más recientes en nuestro catálogo.</p>
        </div>

        <div className="bg-gray-800 p-3 rounded-lg text-center shadow-lg">
          <h2 className="text-lg font-semibold text-yellow-400">🏆 Ediciones Exclusivas</h2>
          <p className="mt-2 text-xs">Descubre tomos especiales y coleccionables únicos.</p>
        </div>

        <div className="bg-gray-800 p-3 rounded-lg text-center shadow-lg">
          <h2 className="text-lg font-semibold text-yellow-400">🎁 Promociones y Descuentos</h2>
          <p className="mt-2 text-xs">Aprovecha nuestras ofertas en mangas y figuras.</p>
        </div>
      </section>

      {/* Espacio antes del CTA */}
      <div className="py-4"></div>

      {/* Sección de llamada a la acción */}
      <section className="text-center w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-yellow-400">📩 ¡Únete a Nuestra Comunidad!</h2>
        <p className="text-base mt-2">
          Suscríbete a nuestro boletín y recibe noticias, descuentos y contenido exclusivo sobre el mundo del manga y anime.
        </p>
        
        <div className="mt-4">
          <Link to="/nosotros">
            <button className="bg-yellow-400 text-gray-900 px-6 py-2 text-base font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
              Conócenos 📬
            </button>
          </Link>
        </div>
      </section>

      {/* Espacio antes del pie de página */}
      <div className="py-4"></div>
      
      {/* Pie de Página */}
      <footer className="p-4 bg-gray-800 w-full text-center">
        <p className="text-xs text-gray-400">© 2025 Manga World - Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}

export default Bienvenida;
