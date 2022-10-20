import noPoster from "../assets/images/no-poster.png";
import { useState, useEffect, useRef } from 'react'


function SearchMovies() {

  // Credenciales de API
  const [movies, setMovies] = useState([])
  const [keyword, setKeyword] = useState('action')
  
  const apiKey = "dce60ae3"; // Ingresa la API key que llego a tu mail 
  const peliculaBuscada = useRef()

  function handlePeliculaBuscada(e){
    e.preventDefault();
    let value = peliculaBuscada.current.value
    setKeyword(value)
  }
  console.log(peliculaBuscada.current.value) //)

  useEffect(() => {
    const llamadoApi = async () => {
      const response = await fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
      const movies = await response.json()  
      setMovies(movies.Search)
    }
    llamadoApi()
  }, []) 

  useEffect(() => {
    const llamadoApi = async () => {
      const response = await fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`)
      const movies = await response.json()  
      setMovies(movies.Search)
    }
    llamadoApi()
  }, [keyword]) 

  return (
    <div className="container-fluid">
      {/* Si hay una api key se mostrará el siguiente contenido */}
      {apiKey !== "" ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador de Películas */}
              <form>  {/* A esta etiqueta form debemos agregar el onSubmit con una funcion dentro */}
                <div className="form-group">
                  <label htmlFor="">Buscar por título:</label>
                  <input type="text" className="form-control" ref={peliculaBuscada}/>
                </div>
                <button className="btn btn-info" onSubmit={(e) =>handlePeliculaBuscada()}>Search</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Películas para la palabra: {keyword}</h2>
            </div>
            {/* Listado de Películas */}
            {/* Si hay películas mostrar el listado */}
            {movies.length > 0 ? (
              movies.map((movie, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="text-center m-0 font-weight-bold text-gray-800">
                          {movie.Title}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            // Si existe movie.Poster y si es distinto "N/A", mostramos movie.Poster y si no mostramos la imagen local noPoster importada de los assets
                            src={
                              movie.Poster && movie.Poster !== "N/A"
                                ? movie.Poster
                                : noPoster
                            }
                            alt={movie.Title}
                            style={{
                              width: "90%",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <p className="text-center">{movie.Year}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              // Si no hay películas deberemos mostrar el siguiente mensaje
              <div className="alert alert-warning text-center">
                No se encontraron películas
              </div>
            )}
          </div>
        </>
      ) : (
        // Si no hay una api key se mostrará este mensaje
        <div className="alert alert-danger text-center my-4 fs-2">
          Eyyyy... ¿PUSISTE TU APIKEY?
        </div>
      )}
    </div>
  );
}

export default SearchMovies;
