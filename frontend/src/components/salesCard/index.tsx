import NotificationButton from '../NotificationButton'
import './styles.css'

function salesCard() {
  return (

    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <input className="dsmeta-form-control" type="text"/>
        </div>
        <div className="dsmeta-form-control-container">
          <input className="dsmeta-form-control" type="text"/>
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Vistitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="show992">#341</th>
              <th className="show576">23/05/1988</th>
              <th>Saber</th>
              <th className="show992">15</th>
              <th className="show992">11</th>
              <th>R$ 14000.00</th>
              <th>
                <div className="dsmeta-red-btn-container">
                <NotificationButton/>
                </div>
              </th>
            </tr>


            <tr>
              <th className="show992">#643</th>
              <th className="show576">13/09/1997</th>
              <th>Archer</th>
              <th className="show992">17</th>
              <th className="show992">12</th>
              <th>R$ 16400.00</th>
              <th>
                <div className="dsmeta-red-btn-container">
                <NotificationButton/>
                </div>
              </th>
            </tr>
            <tr>
              <th className="show992">#923</th>
              <th className="show576">18/08/2000</th>
              <th>Lancer</th>
              <th className="show992">4</th>
              <th className="show992">23</th>
              <th>R$ 13700.00</th>
              <th>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton/>
                </div>
              </th>
            </tr>
          </tbody>

        </table>

      </div>

    </div>

  )
}

export default salesCard
