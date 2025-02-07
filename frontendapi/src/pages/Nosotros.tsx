function Nosotros() {
    return (
      <div className="container mx-auto m-0 p-0 text-center bg-purple-800">
        
        {/* Espacio inicial */}
        <div className="py-2"></div>
  
        <h1 className="text-xl font-extrabold text-yellow-400 mb-4">
          🌸 Sobre Nosotros 🌸
        </h1>
  
        <p className="text-[10px] leading-relaxed mb-4">
          ¡Bienvenidos a <span className="text-yellow-400 font-semibold">Manga Kami</span>!  
          Nos apasiona el mundo del manga, las novelas ligeras y los artículos coleccionables.  
          Somos más que una tienda, somos una comunidad para todos los amantes del anime y la cultura japonesa.
        </p>
  
        <div className="text-left max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-base font-bold mt-6 text-yellow-400">📖 Nuestra Historia</h2>
            <p className="text-[10px] mt-2">
              <span className="font-semibold text-white">Desde 2010</span>, <span className="text-yellow-400 font-semibold">Manga Kami</span> ha crecido de ser una pequeña tienda en línea 
              a convertirse en un referente en el mundo del manga y el coleccionismo.  
              Gracias a nuestra comunidad, hemos logrado llevar historias fascinantes a más personas cada día.
            </p>
  
            <h2 className="text-base font-bold mt-6 text-yellow-400">🎯 Nuestra Misión</h2>
            <p className="text-[10px] mt-2">
              Queremos que <span className="text-yellow-400 font-semibold">todos</span> puedan acceder a sus historias favoritas, 
              descubrir nuevas aventuras y conectar con otros fans en un espacio hecho para ellos.
            </p>
  
            <h2 className="text-base font-bold mt-6 text-yellow-400">🌟 Nuestra Visión</h2>
            <p className="text-[10px] mt-2">
              Nos visualizamos como la <span className="text-yellow-400 font-semibold">tienda de mangas líder</span> en habla hispana, 
              ofreciendo experiencias únicas, ediciones especiales y un espacio de encuentro para la comunidad otaku.
            </p>
  
            <h2 className="text-base font-bold mt-6 text-yellow-400">💡 ¿Qué Ofrecemos?</h2>
            <ul className="list-none text-[10px] mt-2 space-y-2">
              <li>📚 <span className="font-semibold text-white">Un catálogo extenso</span> de mangas y novelas ligeras.</li>
              <li>🎁 <span className="font-semibold text-white">Merchandising exclusivo</span> de tus animes favoritos.</li>
              <li>🚀 <span className="font-semibold text-white">Lanzamientos y ediciones especiales</span> difíciles de encontrar.</li>
              <li>💬 <span className="font-semibold text-white">Una comunidad</span> para compartir y descubrir nuevos títulos.</li>
            </ul>
          </div>
  
          <div>
            <h2 className="text-base font-bold mt-6 text-yellow-400">🔑 Nuestros Valores</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-900 p-2 rounded-lg">
                🛍️ <span className="font-semibold text-yellow-400">Pasión:</span> Amamos el manga tanto como tú.
              </div>
              <div className="bg-gray-900 p-2 rounded-lg">
                🤝 <span className="font-semibold text-yellow-400">Compromiso:</span> Calidad en cada producto.
              </div>
              <div className="bg-gray-900 p-2 rounded-lg">
                🌍 <span className="font-semibold text-yellow-400">Comunidad:</span> Un espacio para compartir.
              </div>
              <div className="bg-gray-900 p-2 rounded-lg">
                🎨 <span className="font-semibold text-yellow-400">Creatividad:</span> Innovación en cada colección.
              </div>
            </div>
  
            <h2 className="text-base font-bold mt-6 text-yellow-400">📜 Nuestra Filosofía</h2>
            <p className="text-[10px] mt-2">
              Creemos que el manga es <span className="text-yellow-400 font-semibold">más que entretenimiento</span>,  
              es arte, cultura e inspiración. Nos esforzamos en ofrecer una experiencia auténtica y de calidad,  
              promoviendo la industria y compartiendo la pasión por el manga con el mundo.
            </p>
  
            {/* Nueva sección de Contacto */}
            <h2 className="text-base font-bold mt-6 text-yellow-400">📞 Contacto</h2>
            <p className="text-[10px] mt-2">
              ¿Tienes dudas o quieres saber más? Contáctanos a través de nuestros canales oficiales:
            </p>
            <ul className="list-none text-[10px] mt-2 space-y-2">
              <li>📍 <span className="font-semibold text-white">Ubicación:</span> Calle 123, Ciudad Otaku, Japón</li>
              <li>📧 <span className="font-semibold text-white">Email:</span> contacto@mangakami.com</li>
              <li>📱 <span className="font-semibold text-white">WhatsApp:</span> +123 456 7890</li>
              <li>🔗 <span className="font-semibold text-white">Redes Sociales:</span></li>
            </ul>
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://facebook.com/storekami" className="text-blue-500 hover:text-blue-700 text-xl">📘 Facebook</a>
              <a href="https://twitter.com/Storemkami" className="text-blue-400 hover:text-blue-600 text-xl">🐦 Twitter</a>
              <a href="https://instagram.com/Storemkami" className="text-pink-500 hover:text-pink-700 text-xl">📸 Instagram</a>
            </div>
          </div>
        </div>
  
        <p className="text-[10px] mt-6 font-semibold text-yellow-400">
          ¡Gracias por formar parte de la familia <span className="text-white">Manga Kami</span>! 💖
        </p>
  
        {/* Espacio final */}
        <div className="py-2"></div>
        
      </div>
    );
  }
  
  export default Nosotros;