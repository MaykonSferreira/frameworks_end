import axios from 'axios'
import Link from 'next/link'


 function Products({products}) {
  return (
<div>


	<header className='header-position'>
		<a className="logo">M&K produtos</a>
		<div className="bx bx-menu" id="menu-icon"></div>

		<ul className="navbar">
			<li><a href="#shop">Loja</a></li>
			<li><a href="#about">Sobre</a></li>
			<li><a href="#faq">FAC</a></li>
			<li><a href="#contact">Contate-nos</a></li>
		</ul>

		<div className="icons">
			<a href="#"><i className='bx bx-search'></i></a>
			<a href="#"><i className='bx bxs-user-circle' ></i></a>
			<a href="#"><i className='bx bxs-shopping-bag' ></i></a>
		</div>
	</header>

	<section className="shop" id="shop">
		<div className="container">

      {
        products.map((detail)=>(
          <div className="box" key={detail.id}>
          <img src={detail.image}/>
          <h4>{detail.title}</h4>
          <h5>${detail.price}</h5>
          <div className="cart">
            <Link href="/detail/[id]" as={`/detail/${detail.id}`}><i >Clique Aqui</i></Link>
          </div>
        </div>
        ))
      }

		</div>
	</section>


	<section className="about" id="about">
		<div className="about-content">
			<h2>Sobre</h2>
			<p>A loja M&K oferece produtos e atendimentos de alta qualidade desde 2004, com a sua fundação na cidade de Dourados-MS</p>
		</div>
	</section>


	
</div>
  )
}

export async function getStaticProps(context){

  const response= await axios.get(
    'https://fakestoreapi.com/products'
  );
  const data = await response.data;
  return {
    props: {products:data},
  }
  
}

export default Products;