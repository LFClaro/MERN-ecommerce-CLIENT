import { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Typography } from '@mui/material';
import ItemCard from '../Components/Item/ItemCard';
import axios from 'axios';
import decode from 'jwt-decode';

const categories = ['House', 'Car', 'Leisure', 'Baby', 'Beauty', 'Books', 'Clothing', 'Electronics', 'Grocery', 'Furniture', 'Everything Else',];
const dummy = [{ image: "https://www.inexhibit.com/wp-content/uploads/2016/06/Microsoft-Hololens-augmented-reality-headset.jpg", price: "8.999", title: 'sdgfdsfggsdffgsd', rate: 2.5 },]
const ItemList = () => {
    const [listMode, setListMode] = useState("normal");  //mode to different list styles.
    const [categorySelected, setcategorySelected] = useState([]);
    const [items, setItems] = useState([]);

    let decodetoken = decode(localStorage.getItem('token'));

    useEffect(() => {
        sendApiRequest();
    }, []);
    const sendApiRequest = async () => {
        try {
            let token = localStorage.getItem('token');
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
            };
            const response = await axios.get(
                process.env.REACT_APP_API_URL + '/api/items/',
                config
            );
            setItems(response.data);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    };

    const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length

    return (
        <div>
            <section id="hero" className="d-flex justify-content-center">
                {/* searchBar
                <div className='searchBar'>
                </div> */}

                <div className='container bg-light'>


                    {/* content for filter and itemList */}
                    <div className="d-flex flex-row justify-content-center">

                        {/* Filters */}
                        <div className="col-3">
                            <p className='h6 fw-bold'>Departments</p>
                            <FormGroup>
                                {categories.map((category) => {
                                    return (
                                        <div>
                                            <FormControlLabel control={<Checkbox />} label={category} />
                                        </div>
                                    )
                                })}
                            </FormGroup>


                        </div>

                        {/* itemList */}
                        <div className="container col-9">
                            {items.map((item) => (
                                console.log(arrAvg(item.overallRating)),
                                <ItemCard image={item.image} price={item.price} title={item.name} rate={arrAvg(item.overallRating)} key={item._id} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
};

export default ItemList


// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.black, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.black, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//     },
// }));

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));







    // <div div div className = 'container col-11 bg-light' >
    //                 <div className='d-flex align-items-start justify-content-center border border-5 border-dark p-2'>
    //                     <p className="logo col-1 text-center border border-5 border-primary"><a href="index.html">MERN Maniacs</a></p>
    //                     <Search>
    //                         <SearchIconWrapper>
    //                             <SearchIcon />
    //                         </SearchIconWrapper>
    //                         <StyledInputBase
    //                             placeholder="Search…"
    //                             inputProps={{ 'aria-label': 'search' }}
    //                         />
    //                     </Search>


    //                 </div>
    //                 <div className='row border border-5 border-dark'>
    //                     <div className='col justify-content-center'>
    //                         <h1 className='text-reset'>this is the ads area</h1>
    //                         <img calss="img-fluid" src='' alt="" />
    //                     </div>
    //                 </div>
    //                 <div className='row justify-content-center'>
    //                     This is the sorting area
    //                 </div>
    //                 <div className='row'>
    //                     <div className='col justify-content-cente'>
    //                         This is the search area
    //                         <ul>
    //                             {categories.map((category) => {
    //                                 <li>{category}</li>
    //                             })}

    //                         </ul>

    //                     </div>
    //                     <div className='col'>
    //                         This is the list area
    //                     </div>


    //                 </div>
    //             </div >