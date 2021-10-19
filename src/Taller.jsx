import React from "react";
import PropTypes from  'prop-types'


const Taller = ({nombre, image, price, profesor}) => (
<>
<article class="card">
  <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <img src={image} alt=""/>
  </div>
  <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 class="t5 s-mb-2 s-center">
      {nombre}
    </h3>
    <div class="s-mb-2 s-main-center">
      <div class="card__teacher s-cross-center">
        <span class="small"> {profesor} </span>
      </div>
    </div>
    <div class="s-main-center">
      <a class="button--ghost-alert button--tiny" href="#">{price}</a>
    </div>
  </div>
</article>
</>



)

Taller.propTypes =  {
  nombre: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  profesor: PropTypes.string
}

Taller.defaultProps = {
 title: "No se encontro Titulo",
 image: "https://www.setaswall.com/wp-content/uploads/2018/05/Big-Planets-Over-The-Field-Wallpaper-800x480.jpg",
 price: "--",
 profesor: "Sin instructor"
}



export default Taller;