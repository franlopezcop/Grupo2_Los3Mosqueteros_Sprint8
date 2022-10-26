import React from 'react';
//import AllCategories  from './AllCategories';

function CategoriesInDb(){
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
      let endpoint = 'http://localhost:3030/api/products';
      fetch(endpoint)
      .then(response => response.json())
      .then(data => {
          if(!data.errors){
/*               delete data.info.status;
              delete data.info.total;
              delete data.info.url; */
              setCategories(data.meta.countByCategory);
          }
      })
    },[])

  let Mesas = {
    name:"Mesas", 
    count: categories.Mesas
    }

  let MesasRatonas ={
    name: 'Mesas Ratonas', 
    count: categories.MesasRatonas
    }

  let Espejos = {
    name: 'Espejos', 
    count: categories.Espejos
    }

  let Escritorios ={
    name: 'Escritorios', 
    count: categories.Escritorios
    }
 
  let categoriesInDb = [Mesas, MesasRatonas, Espejos, Escritorios]

  return (
      <React.Fragment>
              {/*<!-- Categories in DB -->*/}
              <div className="col-lg-6 mb-4">						
                  <div className="card shadow mb-4">
                      <div className="card-header py-3">
                          <h6 className="m-0 font-weight-bold text-gray-800">Categorías de productos</h6>
                      </div>
                      <div className="card-body">
                          <div className="row">
                        {categoriesInDb.map((category, i) => (
                            <div className="col-lg-6 mb-4" key={i}>
                                <div className="card bg-dark text-white shadow">
                                    <div className="card-body">{category.name}: {category.count}</div>
                                </div>
                            </div>
                        ))}
                          </div>
                      </div>
                  </div>
              </div>
         
      </React.Fragment>
  )

}
export default CategoriesInDb;


//Logramos la visual, pero no nos trae la info de nuestra BD para el conteo
// Detecta con http://localhost:3000/categories-in-db el cambio pero no trae la info.
