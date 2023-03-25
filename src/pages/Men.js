import { Card, Grid, Typography } from "@mui/material";
import Menu from "../component/Menu";
import Product from "../component/Product";
import ImageBg from "../pages/ImageBg.css"
import ProductFont from "../component/ProductFont.css";

function Men() {
    return(
        <div>
            <Menu />
            <img className="ImageM" src="/images/men-bg.png" />
            <div className="ProductM">    
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <Product name="1ST COLLECTION" price="100.00"image="/images/tsm1.jpg"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product name="SCOTTY" price="160.00"image="/images/tsm3.png"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product name="FORMA" price="150.00"image="/images/tsm4.png"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product name="SHIRO" price="240.00"image="/images/sm1.png"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product name="VINGUY" price="200.00"image="/images/sm2.png"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product name="ROYOL CARA" price="280.00"image="/images/sm3.png"/>
                    </Grid>
                </Grid>
            </div>
            <img className="ImageB" src="/images/buttom.png" />
        </div>
    );
}

export default Men;