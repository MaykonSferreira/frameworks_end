import axios from 'axios'



function Detail({product = {}}) {
  return (
  <div>

<div>
<header>

<div className="header-wrapper" id="header-wrapper">

    <div className="bg-second">

    </div>

    <div className="bg-main">
        <div className="mid-header container1">
            <a href="#" className="logo">M&K produtos</a>
            <div className="search">
                <input type="text" placeholder="Search"/>
                <i className='bx bx-search-alt'></i>
            </div>
            <ul className="user-menu">
              
                <li><a href="#"><i className='bx bx-user-circle'></i></a></li>
                <li><a href="#"><i className='bx bx-cart'></i></a></li>
            </ul>
        </div>
    </div>

    <div className="bg-second">

    </div>

</div>

</header>

<div className="bg-main">
<div className="container1">
    <div className="box">
        <div className="breadcumb">
            <a href="/#">Menu</a>
            <span><i className='bx bxs-chevrons-right'></i></span>
            <a href={product.id}>{product.title}</a>
        </div>
    </div>
    <div className="row product-row">
        <div className="col-5 col-md-12">
            <div className="product-img" id="product-img">
                <img src={product.image} alt=""/>
            </div>
        </div>
        <div className="col-7 col-md-12">
            <div className="product-info">
                <h1>
                    {product.title}
                </h1>
                <div className="product-info-detail">
                    <span className="product-info-detail-title">Categoria: </span>
                    <a href="#"> {product.category}</a>
                </div>
                <div className="product-info-detail">
                    <span className="product-info-detail-title">Avaliação: {product.rating.rate} </span>
                    <span className="rating">
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                        <i className='bx bxs-star'></i>
                    </span>
                </div>
                <p className="product-description">
                    {product.description}
                </p>
                <div className="product-info-price">${product.price}</div>
                <div className="product-quantity-wrapper">
                    <span className="product-quantity-btn">
                        <i className='bx bx-minus'></i>
                    </span>
                    <span className="product-quantity">1</span>
                    <span className="product-quantity-btn">
                        <i className='bx bx-plus'></i>
                    </span>
                </div>
                <div>
                    <button className="btn-flat btn-hover">Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

</div>
    </div>

  )
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products/' + context.params.id
    )

    const product = await response.data;
    return {
        props: {product}
    }
}

export async function getStaticPaths(){
    const response = await axios.get (
        'https://fakestoreapi.com/products'
    )
    const products = await response.data;
    const paths = products.map((product)=>{
        return {params: {id: String(product.id)}}
    })
    
    return {
        paths,
        fallback: false,
    }
}

export default Detail