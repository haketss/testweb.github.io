import './App.css'

function App() {

  return (
    <>

      <nav class="navbar shadow-sm  text-center navbar-light bg-light">
        <div class="container-fluid">
          <span id='navbar-brand' class="navbar-brand mb-0 h1"><img class="logo" alt='logo' height={60} src='https://cdn-icons-png.flaticon.com/512/968/968988.png' /></span>
          <div> <a id='navtext'>listas</a>
            <a id='navtext'>contato</a>
            <a id='navtext'>informação</a></div>
        </div>
      </nav>
      <br />
      <h1>Eventos disponiveis</h1>
      <br />
      <h2>conheça todos os eventos na sua cidade hoje</h2>
      <br />
      <div id='containerprincipal' class="container">
        <div className='row '>
          <img id='foto1' alt='baner' width={400} src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-music-headset-red-simple-banner-image_174717.jpg" />
        </div>
        <br />
        <div id='rowprincipal' class="row">
          <div class="col ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fuga voluptate alias, suscipit sapiente explicabo cum voluptatibus accusantium officiis impedit qui. Hic ullam porro tempora? Voluptatibus soluta modi sed quaerat?
          </div>

          <div class="col ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A maxime mollitia doloribus dignissimos, repudiandae unde quia quod enim. Minus voluptate earum omnis adipisci ad! Mollitia consectetur exercitationem totam ipsam cupiditate.
          </div>
        </div>
        <br />
        <div class="row">

          <div class="col ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita consequuntur quaerat consectetur dignissimos minima, voluptate sit deserunt! Amet quod repudiandae officia velit, sapiente consectetur? Cupiditate exercitationem est, odio magnam harum natus corporis quaerat obcaecati aperiam numquam esse fugit delectus.
          </div>
          <div class="col ">
            sit amet consectetur adipisicing elit. Inventore expedita consequuntur quaerat consectetur dignissimos minima, voluptate sit deserunt! Amet quod repudiandae officia velit, sapiente consectetur? Cupiditate exercitationem est, odio magnam harum natus corporis quaerat obcaecati aperiam numquam esse
          </div>
          <div class="col ">
            <img alt='foto2' className='img-fluid mb-1' width={300} src='https://image.freepik.com/vetores-gratis/modelo-de-banner-de-evento-de-musica-com-foto_52683-13694.jpg' />
            <img alt='foto3' className='img-fluid mb-1' width={300} src='https://image.freepik.com/vetores-gratis/modelo-de-banner-de-evento-de-musica-com-foto_52683-13691.jpg' />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div id class="card">
              <img width={100} src="https://image.freepik.com/vetores-gratis/modelo-de-banner-de-evento-de-musica-com-foto_52683-13691.jpg" class="card-img-top" alt="hehe" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

          </div>
          <div class="col">
            <div class="card">
              <img width={100} src="https://image.freepik.com/vetores-gratis/modelo-de-banner-de-evento-de-musica-com-foto_52683-13694.jpg" class="card-img-top" alt="hehe1" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img width={100} src="https://image.freepik.com/vetores-gratis/modelo-de-banner-de-evento-de-musica-com-foto_52683-13694.jpg" class="card-img-top" alt="hehe1" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
