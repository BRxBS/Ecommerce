import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HeartStraight, ShoppingCart, CaretDown, CaretUp } from "phosphor-react";
import { api } from "../../services/api";
import { SizeDropdown } from "./sizeDropdown";
import Slider from "react-slick";
import { useCart } from '../../hooks/useCart';
import { useFav } from "../../hooks/useFav"; 
import './styles.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams(); //é o _id

  const { addProductFav, fav, removeProduct } = useFav();
  const { addProduct, cart } = useCart();

  const [showDetails, setsShowDetails] = useState(false);
  const [showSizeInfo, setShowSizeInfo] = useState(false);

  const cartItemsAmount = cart.reduce((sumAmount, Product) =>{
    const newSumAmount = {...sumAmount};
    newSumAmount[Product.id] = Product.amount;

    return newSumAmount;
  }, 0);


  const FavItemsAmount = fav.reduce((sumAmount, Product) =>{
    const newSumAmount = {...sumAmount};
    newSumAmount[Product.id] = Product.amount;

    return newSumAmount;
  }, 0);

  const getTheProducts = () => {
    api.get(`/products/${id}`).then((res) => {
      const Product = res.data;
      setProduct(Product);
    });
  };
  
  useEffect(() => {
    getTheProducts();
  }, []);

  useEffect(() => {
    getTheProducts();

    const handlerShowDetails = () => setsShowDetails(false)
    window.addEventListener('click', handlerShowDetails)
    return () => {
        window.addEventListener('click', handlerShowDetails)
    }
  }, []);

  useEffect(() => {
    const handlerSizeInfo = () => setShowSizeInfo(false)
    window.addEventListener('click', handlerSizeInfo)
    return () => {
        window.addEventListener('click', handlerSizeInfo)
    }
  }, []);

  const handleInputClickShowDetails = (e) => {
    e.stopPropagation()
    setsShowDetails(!showDetails);
}
const handleInputClickShowSizeInfo = (e) => {
  e.stopPropagation()

  setShowSizeInfo(!showSizeInfo);
}

  function handleAddProductOnCart(id) {
    addProduct(id);
   
  };
  
  function handleAddProductOnFav(id) {
    addProductFav(id);
   
  };
    
  function handleRemoveProductFav(id) {
    removeProduct(id)


  }

  const options = [   
    {"id": "Único", "productSize": "Único"},
  ]

   var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (

    <div className="main_container">

      <div className="first_container">
       
       <div className="slide_imgs">
        <Slider {...settings}>
            <div className="img_wrapper">
            <img className="img_1"
                src={product?.productImage1}
              />
            </div>
            <div className="img_wrapper">
            <img className="img_2"
                src={product?.productImage2}
              />
            </div>
 
                <div className="img_wrapper">
                <img className="img_3"
                src={product?.productImage3}
              />       
              </div>

                <div className="img_wrapper">
                <img className="img_4"
                src={product?.productImage4}
              />
              </div>
    
                <div className="img_wrapper">
                <img className="img_5"
                src={product?.productImage5}
              />  
              </div>

        </Slider>
       </div>

          <div className="img_wrapper">

            <img className="img_1"
                src={product?.productImage1}
              />
            <img className="img_2"
                src={product?.productImage2}
              />
            <img className="img_3"
                src={product?.productImage3}
              />
            <img className="img_4"
                src={product?.productImage4}
              />
            <img className="img_5"
                src={product?.productImage5}
              />
           
          </div>

          <div className="name_price_continer">
            
              <div className="productName_wrapper">
                <h2 >{product.productName}</h2>
              </div>

             
                <div className="productPrice_wrapper">
                  <h6>R${product.productPrice}</h6>
                </div>


              <div className="wrapper_dropdown_button">

                <SizeDropdown placeHolder='Tamanhos' options={options}/>
      
                <div className="wrapper_button">
                <button 
                type="button"
                onClick={() => handleAddProductOnCart(product.id)}
                className="card_button">
                      <div>
                        <ShoppingCart size={28} className=" ShoppingCart" />
                         <p>{cartItemsAmount[product.id] || 0} </p>
                     </div>
                     Adicionar ao carrinho
                    </button>

                    {
                  FavItemsAmount[product.id] > 0
                  ?  <HeartStraight size={40}    weight="fill" color= "#017ff0"  onClick={() => handleRemoveProductFav(product.id)} className="fav_HeartStraight" /> 
                  : <HeartStraight size={40}  onClick={() =>  handleAddProductOnFav(product.id)}  className="fav_HeartStraight"/>
                 }
                      
                      {/* change the colo of the heart */}
              
              </div>

               
              
           
          </div>
        </div>
      </div>

      <div className="second_container">

      <div className="wrapper">
        <div className="tabs">
    <div className="tab">
      <input type="radio" name="css-tabs" id="tab-1" defaultChecked className="tab-switch" />

      <label htmlFor="tab-1" className="tab-label">OS DETALHES</label>
       <div className="tab-content">

        <div className="first-box">
          <span>
            <h3>{product.productName}</h3>
            <p className="productDiscription">{product.productDiscription}</p>
          </span>

          <span>
          <h4>Destaques</h4>
              <ul className="destaques_ul" >
         
          
              </ul>
          </span>
        </div>
        <div className="second-box">
          <span>
            <h4>Composição</h4>
            <p>algodão</p>
          </span>

          <span>
            <h4>Instruções de lavagem</h4>
            <p>Lavar na máquina</p>
          </span>

          <span>
            <h4>IDs do produto</h4>
            <p>ID da marca: AMAI21002</p>
          </span>
          
        </div>
        <div className="third-box">
        <img 
                src={product?.productImage2}
              />
        </div>
       </div>
    </div>
    
    <div className="tab">
      <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" />
      <label htmlFor="tab-2" className="tab-label">TAMANHOS & MEDIDAS</label>
        <div className="tab-content">
          <div className="first-box">
    
          <span>
          <h4>Informações sobre tamanhos</h4>
              <ul className="Informações_ul" >
                <li>Essa peça possui numeração correspondente ao seu tamanho real. Recomendamos a compra de seu tamanho regular</li>
                <li>Possui modelagem slim</li>
                <li>Feito com um tecido de peso mediano sem stretch</li>
              </ul>
          </span>

          <div>
          <h4>Informações sobre tamanhos</h4>
          <table>
            <tbody>
            <tr>
              <td>Altura</td>
              <td>0,01 m</td>
            </tr>
            <tr>
              <td>Busto/peito</td>
              <td>81 cm</td>
            </tr>
            <tr>
              <td>Quadril</td>
              <td>93 cm</td>
            </tr>
            <tr>
              <td>Cintura</td>
              <td>61 cm</td>
            </tr>
            </tbody>
          </table>

          <p>O(a) modelo mede 0,01 m e está usando tamanho P (BR).</p>

          </div>

        </div>
        <div className="second-box">
          <span>
            <h4>Composição</h4>
            <p>algodão</p>
          </span>

          <span>
            <h4>Instruções de lavagem</h4>
            <p>Lavar na máquina</p>
          </span>

          <span>
            <h4>IDs do produto</h4>
            <p>ID da marca: AMAI21002</p>
          </span>
          
        </div>
        <div className="third-box">
        <img 
                src={product?.productImage2}
              />
        </div>
        </div>
    </div>
  
      </div>
        
        <div onClick={handleInputClickShowDetails} className="details_dropdown" >
          <div className="label_CaretUp_down">
          <label >OS DETALHES</label>
        <div className="dropdown_size_tool">
              {showDetails ? <CaretUp size={25} /> :  <CaretDown size={25}  />}
            </div>
          </div>

        {showDetails && (
        <div className="details_dropdown_content">
          
           <div className="first-box">
             <span>
               <h3>{product.productName}</h3>
               <p className="productDiscription">{product.productDiscription}</p>
             </span>
   
             <span>
             <h4>Destaques</h4>
                 <ul className="destaques_ul" >
            
             
                 </ul>
             </span>
           </div>
           <div className="second-box">
             <span>
               <h4>Composição</h4>
               <p>algodão</p>
             </span>
   
             <span>
               <h4>Instruções de lavagem</h4>
               <p>Lavar na máquina</p>
             </span>
   
             <span>
               <h4>IDs do produto</h4>
               <p>ID da marca: AMAI21002</p>
             </span>
             
           </div>
           <div className="third-box">
           <img 
                   src={product?.productImage2}
                 />
           </div>

           </div>
        )}


        
        </div>
       
        <div onClick={handleInputClickShowSizeInfo} className="details_dropdown" >
          <div className="label_CaretUp_down">
          <label>TAMANHOS & MEDIDAS</label>
        <div className="dropdown_size_tool">
              {showSizeInfo ? <CaretUp size={25} /> :  <CaretDown size={25}  />}
            </div>
          </div>

        {showSizeInfo && (
        <div className="details_dropdown_content">
          
    
          <div className="first-box">
    
          <span>
          <h4>Informações sobre tamanhos</h4>
              <ul className="Informações_ul" >
                <li>Essa peça possui numeração correspondente ao seu tamanho real. Recomendamos a compra de seu tamanho regular</li>
                <li>Possui modelagem slim</li>
                <li>Feito com um tecido de peso mediano sem stretch</li>
              </ul>
          </span>

          <div>
          <h4>Informações sobre tamanhos</h4>
          <table>
            <tbody>
            <tr>
              <td>Altura</td>
              <td>0,01 m</td>
            </tr>
            <tr>
              <td>Busto/peito</td>
              <td>81 cm</td>
            </tr>
            <tr>
              <td>Quadril</td>
              <td>93 cm</td>
            </tr>
            <tr>
              <td>Cintura</td>
              <td>61 cm</td>
            </tr>
            </tbody>
          </table>

          <p>O(a) modelo mede 0,01 m e está usando tamanho P (BR).</p>

          </div>

        </div>
        <div className="second-box">
          <span>
            <h4>Composição</h4>
            <p>algodão</p>
          </span>

          <span>
            <h4>Instruções de lavagem</h4>
            <p>Lavar na máquina</p>
          </span>

          <span>
            <h4>IDs do produto</h4>
            <p>ID da marca: AMAI21002</p>
          </span>
            </div> 
      
        </div>
        )}


        
        </div>
      </div> 
     </div>
    </div>
  );

};
