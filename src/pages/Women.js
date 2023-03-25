import { Card, Grid, Typography } from "@mui/material";
import Menu from "../component/Menu";
import Product from "../component/Product";
import ImageBg from "../pages/ImageBg.css"
import ProductFont from "../component/ProductFont.css";

function Women() {
    return(
        <div>
                <img className="ImageWM" src='/images/women-bg.png' />
                <Menu />
                <div className="ProductWm">    
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <Product name="FILLEBLOUSE" price="150.00"image="/images/tswm1.png"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product name="AIKO" price="169.00"image="/images/tswm2.png"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product name="PIAOFUL" price="189.00"image="/images/tswm4.png"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product name="PATONFEMI" price="269.00"image="/images/swm1.png"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product name="WOCOUTURE" price="340.00"image="/images/swm2.png"/>
                    </Grid>
                    <Grid item xs={4}>
                        <Product name="JUPEMETRIC" price="249.00"image="/images/swm3.png"/>
                    </Grid>
                </Grid>
                <img className="ImageBw" src="/images/buttom.png" />
            </div>
        </div>
    );
}

export default Women;