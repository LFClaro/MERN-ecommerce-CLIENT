import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Autocomplete, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputLabel, MenuItem, Pagination, Select, Typography } from '@mui/material';
import ItemCard from '../Components/Item/ItemCard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MapIcon from '@mui/icons-material/Map';
import GoogleMapStyle from '../Components/GoogleMapStyle';
import { GoogleMap, InfoWindow, LoadScript, Marker, useLoadScript, } from '@react-google-maps/api';
import axios from 'axios';
import decode from 'jwt-decode';

// const categories = ['House', 'Car', 'Leisure', 'Baby', 'Beauty', 'Books', 'Clothing', 'Electronics', 'Grocery', 'Furniture', 'Everything Else',];
const constants = require('../lib/constants');
const categories = constants.CATEGORY_CONSTANT;

// TODO: only get partial data from the database according to the pagination
const ItemList = () => {
    const [listMode, setListMode] = useState("normal");  //mode to different list styles.
    const [categorySelected, setcategorySelected] = useState([]);
    const [items, setItems] = useState([]);
    const [sort, setSort] = useState();         //sort handle
    const [LoadingStatus, setLoadingStatus] = useState(true);

    // pagination settings
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6); //############set the number of items per page#########
    const handlePageChange = (e, p) => { setCurrentPage(p); }

    // Get current page items
    const indexOfLastItem = currentPage * itemsPerPage; //last item in curernt page
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // first item in current page
    // console.log("items status", items);
    const currentPageItems = items.slice(indexOfFirstItem, indexOfLastItem);

    //GoogleMap settings
    const [pinSelected, setPinSelected] = useState();
    const [selectedItem, setSelectedItem] = useState({ image: "", price: 0, title: "", overallRating: 0 });
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => { mapRef.current = map; }, []);

    const handleSortChanges = async (e) => {
        // console.log(e.target.value);        
        // axios.get(`${process.env.REACT_APP_API_URL}/api/items`)
    }

    // Sort items arry by date and price
    const sortItems = (rule) => {
        items.sort(function (a, b) {
            switch (rule) {
                case "dateASC": return new Date(b.updated) - new Date(a.updated);
                case "dateDESC": return new Date(a.updated) - new Date(b.updated);
                case "priceASC": return new Number(a.price) - Number(b.price);
                case "priceDESC": return new Number(b.price) - Number(a.price);
                default: return items;
            }
        });
        // console.log("after sorting: ", items);
    }

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
            // console.log(response.data);
            // const date = new Date(response.data[0].updated);
            // console.log(date.getTime());
            // console.log(response.data[0].updated) //undefined
        } catch (err) {
            console.log(err);
        }
    };

    const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length //get the overall rating

    return (
        <div>
            <section id="hero" className="d-flex justify-content-center h-auto">
                <div className='container bg-light pb-5'>

                    {/* content for filter and itemList */}
                    <div className="d-flex flex-row justify-content-center me-2 ">

                        {/* Category Filters */}
                        <div className="col-3 ps-1">
                            <p className='h6 fw-bold'>Departments</p>
                            <FormGroup>
                                {categories.map((category, index) => (<FormControlLabel key={index} control={<Checkbox />} label={category} />))}
                            </FormGroup>
                        </div>

                        <Grid>
                            {/* formControl: list view, map view, and sort by */}
                            <div className='d-flex justify-content-end column mb-2'>
                                <IconButton onClick={() => { setListMode('normal'); }} >
                                    <ListAltIcon />
                                </IconButton>
                                <IconButton onClick={() => { setListMode('map'); }}>
                                    <MapIcon />
                                </IconButton>

                                {/* //Items sorting */}
                                <FormControl size='small' style={{ minWidth: 200 + 'px' }}>
                                    <InputLabel id="demo-simple-select-label">Features</InputLabel>
                                    <Select labelId="demo-simple-select-label" id="demo-simple-select"
                                        label="Features" onChange={handleSortChanges} value={sort}>
                                        <MenuItem onClick={() => { sortItems("dateASC"); setSort("Newest") }}>Newest</MenuItem>
                                        <MenuItem onClick={() => { sortItems("dateDESC"); setSort("Oldest") }}>Oldest</MenuItem>
                                        <MenuItem onClick={() => { sortItems("priceASC"); setSort("Price-low to highest") }}>Price-low to high</MenuItem>
                                        <MenuItem onClick={() => { sortItems("priceDESC"); setSort("Price-high to low") }}>Price-high to low</MenuItem>:
                                    </Select>
                                </FormControl>

                            </div>

                            <Grid container direction="row" justifyContent="center" alignItems="center" border={'1px solid yellow'}>

                                {/* Display when the user click the list option */}
                                {listMode === 'normal' && <>
                                    {/* itemList */}
                                    <Grid container spacing={1} justifyContent={'space-evenly'} alignItems={'center'} border={'1px solid black'} gap={1}>
                                        {/* {currentPageItems.map(item => { console.log(item) })} */}
                                        {currentPageItems.map((item, index) => (
                                            <ItemCard key={index} image={item.image} price={item.price} title={item.name} rate={item.overallRating} date={item.updated} />
                                        ))}
                                    </Grid>

                                    {/* Pagination */}
                                    <Pagination count={Math.ceil(items.length / itemsPerPage)} page={currentPage} onChange={handlePageChange} size='large' />
                                </>}

                                {/* Display when the user click the map option */}
                                {listMode === 'map' &&
                                    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
                                        <GoogleMap
                                            mapContainerStyle={{
                                                width: '800px',
                                                height: '700px'
                                            }}
                                            center={pinSelected || { lat: 43.6532, lng: -79.3832, }}
                                            zoom={13}
                                            options={{ disableDefaultUI: true, styles: GoogleMapStyle, zoomControl: true, }}
                                            onLoad={onMapLoad}
                                        >
                                            { /* Child components, such as markers, info windows, etc. */}
                                            {items.map((item, index) => {
                                                if (item.lat) {
                                                    return <Marker key={index} position={{ lat: item.lat, lng: item.lng }}
                                                        onClick={() => {
                                                            setPinSelected({ lat: item.lat, lng: item.lng });
                                                            setSelectedItem(item); //make a state when the user click a pin on the google map
                                                        }} />
                                                }
                                            })}

                                            {pinSelected ?
                                                <InfoWindow position={pinSelected} onCloseClick={() => { setPinSelected(null); }}>
                                                    <Grid>
                                                        <ItemCard image={selectedItem.image} price={selectedItem.price}
                                                            title={selectedItem.name} rate={selectedItem.overallRating}
                                                            date={selectedItem.updated} />
                                                    </Grid>
                                                </InfoWindow> : null}

                                        </GoogleMap>
                                    </LoadScript>
                                }
                            </Grid>
                        </Grid>
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