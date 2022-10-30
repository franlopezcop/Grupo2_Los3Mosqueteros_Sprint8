import React from 'react';

function LastProductInDb() {
  const [detail, setDetail] = React.useState()
  const [lastProduct, setLastProduct] = React.useState([])

  // se ejecutará ni bien se monta el componente, antes deberiamos crear la condicion
  React.useEffect (()=>{
      // Consulta de productos
      let url = "http://localhost:3030/api/products"
        fetch(url)
        .then(response => response.json())
        .then(data =>{
          setDetail(data.data[data.data.length - 1].detail)
        })
        if(detail){
      let detailUrl = `http://${detail}` 
      fetch(detailUrl)
      .then(response => response.json())
      .then(data =>{
          setLastProduct(data.data)
      })}
  },[detail])


  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último producto
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <h3>{lastProduct.name}</h3>
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={lastProduct.image}
              alt="Last Product Image"
            />
            <p>{lastProduct.description}</p>
            <div className="minor-details">
              <p>Medidas: {lastProduct.measures}</p>
              <p>Precio: ${lastProduct.price}</p>
              {lastProduct.discount > 0 && <p>{lastProduct.discount}% OFF</p>}
            </div>
          </div>
          {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View product detail
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default LastProductInDb;