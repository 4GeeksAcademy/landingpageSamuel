import React from "react";
import PropTypes from "prop-types"
const Card = (props) => {
    return(
        <div class="card m-3" style= {{width: "18rem", display: "flex",}}>
        <img src="https://images.pexels.com/photos/7966748/pexels-photo-7966748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    )
}
export default Card;

