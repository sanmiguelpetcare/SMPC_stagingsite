import React from "react";

const ProductImage = (props) => {

    return (
        (props.product.images || []).length > 0 ? <img src={ `/${ process.env.REACT_APP_IMAGE_PATH }/${ props.product.images[0].name }` } alt={ props.product.name } /> : <img src={ `/images/default.png` } alt={ props.product.name } />
    );
};

export default ProductImage;