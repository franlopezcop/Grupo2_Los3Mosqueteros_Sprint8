import { useEffect, useRef, useState} from "react";
import noPoster from "../assets/images/no-poster.png";

function SearchMovies() {
  // Credenciales de API
  const apiKey = "a93897b9"; // Ingresa la API key que llego a tu mail 

  // keyword será la palabra por la que queremos buscar la / las películas
  // const keyword = "comedy";

  // Array de Peliculas hardcodeado que reemplazaremos por lo que devuelva la OMDb API
  const [movies, setMovies] = useState([]);
  const [keyword, setKeyword] = useState("comedy");

  useEffect(() => {
    let url = `http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`
    fetch(url)
      .then( response => response.json())
      .then( data => setMovies(data.Search))

  }, [keyword])

  const search = useRef();

  function handleSubmit (e) {
    e.preventDefault();
    let value = search.current.value;
    setKeyword(value)
  };
  
  // const movies = [
  //   {
  //     Title: "Parchís",
  //     Year: "1983",
  //     Poster:
  //       "https://m.media-amazon.com/images/M/MV5BYTgxNjg2MTAtYjhmYS00NjQwLTk1YTMtNmZmOTMyNTAwZWUwXkEyXkFqcGdeQXVyMTY5MDE5NA@@._V1_SX300.jpg",
  //   },
  //   {
  //     Title: "Brigada en acción",
  //     Year: "1977",
  //     Poster: "N/A",
  //   },
  // ];

  return (
    <div className="container-fluid">
      {/* Si hay una api key se mostrará el siguiente contenido */}
      {apiKey !== "" ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador de Películas */}
              <form onSubmit={handleSubmit}>  {/* A esta etiqueta form debemos agregar el onSubmit con una funcion dentro */}
                <div className="form-group">
                  <label htmlFor="">Buscar por título:</label>
                  <input ref={search} type="text" className="form-control" />
                </div>
                <button className="btn btn-info">Search</button>
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
