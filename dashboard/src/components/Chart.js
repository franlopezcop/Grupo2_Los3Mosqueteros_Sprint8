import ChartRow from './ChartRow';

function Chart (){

    let tableRowsData = [
        {
            Title: 'Billy Elliot ',
            Length: '123',
            Rating: '5',
            Categories: ['Drama','Comedia'],
            Awards: 2
        },
        {
            Title: 'Alicia en el país de las maravillas',
            Length: '142',
            Rating: '4.8',
            Categories: ['Drama','Acción','Comedia'],
            Awards: 3
        }
    ]

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Categoria</th>
                                <th>X</th>
                                <th>X</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;