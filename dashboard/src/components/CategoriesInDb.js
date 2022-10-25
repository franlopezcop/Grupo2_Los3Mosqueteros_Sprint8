// in Progress
function CategoriesInDb() {

  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
      let endpoint = 'http://localhost:3000/api/products';
      fetch(endpoint)
      .then(response => response.json())
      .then(data => {
          if(!data.errors){
              delete data.info.status;
              delete data.info.total;
              delete data.info.url;
              setCategories(data.info);
          }
      })
  })
  let allCategories = [
      {categor: 'Mesas'},
      {category: 'Mesas Ratonas'},
      {category: 'Espejos'},
      {category: 'Escritorios'},
  ]

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {allCategories.map((category, i) => (
              <div className="col-lg-6 mb-4" key={i}>
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">{category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
