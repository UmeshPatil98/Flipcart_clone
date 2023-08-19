import { Box } from "@mui/material";

import { navData } from "../../Constants/data";

const NavBar = () =>{
    return(
       <Box>
        {
            navData.map(data => (
                <Box>
                   <img src={data.url} alt=""/>
                   <p>{data.text}</p>
                     
                    </Box>

            ))
        }
       </Box>
    )
}

export default NavBar;