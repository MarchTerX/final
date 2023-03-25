import { Grid, Typography } from "@mui/material";
import Menu from "../component/Menu";
import Type from "../component/Type";

function Home() {
    return(
        <div>
            <Menu />
            
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Type name="women" image="/images/women2.png" type="/Women" />
                </Grid>
                
                <Grid item xs={6}>
                    <Type name="men" image="/images/men2.png" type="/Men" />
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;