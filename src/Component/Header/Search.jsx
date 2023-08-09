import { Box, InputBase,styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background:#fff;
    width:38%;
    border-radius: 2px;
    margin-left:10px; 
    display:flex;
`;
const SearchIconWraper = styled(Box)`
   color:blue;
   padding:5px;
   font-size:unset;

`;

const InputSearchbase = styled(InputBase)`
    padding-left:20px;
    width:100%;
`;

const Search = ()=>{
   return(
    <SearchContainer>
       <InputSearchbase 
         placeholder='search for products,brans and more'/>

         <SearchIconWraper>
            <SearchIcon/>
         </SearchIconWraper>
    </SearchContainer>
   )
}

export default Search;