import React, { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, Pagination, Typography } from '@mui/material';
import ItemCard from '../Components/ItemCard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MapIcon from '@mui/icons-material/Map';
import GoogleMapStyle from '../Components/GoogleMapStyle';
import { GoogleMap, InfoWindow, LoadScript, Marker, useLoadScript, } from '@react-google-maps/api';
import axios from 'axios';

const categories = ['House', 'Car', 'Leisure', 'Baby', 'Beauty', 'Books', 'Clothing', 'Electronics', 'Grocery', 'Furniture', 'Everything Else',];
const dummy = [{ image: "https://www.inexhibit.com/wp-content/uploads/2016/06/Microsoft-Hololens-augmented-reality-headset.jpg", price: "8.999", name: '1Hololens/Microsoft/2nd generation', overallRating: 2.5 },
{ image: "https://www.inexhibit.com/wp-content/uploads/2016/06/Microsoft-Hololens-augmented-reality-headset.jpg", price: "8.999", name: '2Hololens/Microsoft/2nd generation', overallRating: 2.5 },
{ image: "https://www.inexhibit.com/wp-content/uploads/2016/06/Microsoft-Hololens-augmented-reality-headset.jpg", price: "8.999", name: '3Hololens/Microsoft/2nd generation', overallRating: 2.5 },
{ image: "https://www.inexhibit.com/wp-content/uploads/2016/06/Microsoft-Hololens-augmented-reality-headset.jpg", price: "8.999", name: '4Hololens/Microsoft/2nd generation', overallRating: 2.5 },
{ image: "https://www.inexhibit.com/wp-content/uploads/2016/06/Microsoft-Hololens-augmented-reality-headset.jpg", price: "8.999", name: '5Hololens/Microsoft/2nd generation', overallRating: 2.5 },
{ image: "https://www.inexhibit.com/wp-content/uploads/2016/06/Microsoft-Hololens-augmented-reality-headset.jpg", price: "8.999", name: '6Hololens/Microsoft/2nd generation', overallRating: 2.5 },
{ image: "https://www.inexhibit.com/wp-content/uploads/2016/06/Microsoft-Hololens-augmented-reality-headset.jpg", price: "8.999", name: '7Hololens/Microsoft/2nd generation', overallRating: 2.5 },
{ image: "https://www.inexhibit.com/wp-content/uploads/2016/06/Microsoft-Hololens-augmented-reality-headset.jpg", price: "8.999", name: '8Hololens/Microsoft/2nd generation', overallRating: 2.5 },
]

// TODO: only get partial data from the database according to the pagination
const ItemList = () => {
    const [listMode, setListMode] = useState("normal");  //mode to different list styles.

    const [categorySelected, setcategorySelected] = useState([]);

    // Get Posts from database
    // useEffect(async () => {
    //     await axios.get(`${process.env.REACT_APP_API_URL}/api/items`)
    //         .then((res) => {
    //             console.log(res.data);
    //             setPosts(res.data);
    //             setLoadingStatus(false);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }, []);
    const [posts, setPosts] = useState(dummy);
    const [LoadingStatus, setLoadingStatus] = useState(true);

    // pagination settings
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3); //############set the number of posts per page#########
    const handlePageChange = (e, p) => { setCurrentPage(p); }

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage; //last post in curernt page
    const indexOfFirstPost = indexOfLastPost - postsPerPage; // first post in current page
    const currentPagePosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //GoogleMap settings
    // console.log(process.env.REACT_APP_GOOGLE_MAP_API_KEY);
    const [pinSelected, setPinSelected] = useState();
    const [userLocations, setUserLocations] = useState([{ lat: 43.6532, lng: -79.3832, }])
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {mapRef.current = map;}, []);

    return (
        <div>
            <section id="hero" className="d-flex justify-content-center h-auto">
                {/* searchBar
                <div className='searchBar'>
                </div> */}

                <div className='container bg-light pb-5'>

                    {/* content for filter and itemList */}
                    <div className="d-flex flex-row justify-content-center">

                        {/* Category Filters */}
                        <div className="col-3 ps-1">
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

                        <Grid container direction="row" justifyContent="center" alignItems="center" border={'1px solid yellow'}>

                            <Grid border={'1px solid black'} paddingRight={1}>
                                <IconButton onClick={() => { setListMode('normal'); console.log(listMode) }} >
                                    <ListAltIcon />
                                </IconButton>
                                <IconButton onClick={() => { setListMode('map'); console.log(listMode) }}>
                                    <MapIcon />
                                </IconButton>
                            </Grid>

                            {listMode === 'normal' && <>
                                {/* itemList */}
                                <Grid container spacing={1} justifyContent={'space-evenly'} alignItems={'center'} border={'1px solid black'}>
                                    {currentPagePosts.map(item => (
                                        <Grid item><ItemCard image={item.image} price={item.price} title={item.name} rate={item.overallRating} /></Grid>
                                    ))}
                                </Grid>

                                {/* Pagination */}
                                <Pagination count={Math.ceil(posts.length / postsPerPage)} page={currentPage} onChange={handlePageChange} size='large' />
                            </>}

                            {/* Display when the user click the map option */}
                            {listMode === 'map' && <>
                                <>
                                    <div className='mapWrap' style={{ width: 500 + 'px', height: 500 + 'px', border: '1px solide black' }}>
                                        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
                                            <GoogleMap
                                                mapContainerStyle={{
                                                    width: '100vw',
                                                    height: '100vh'
                                                }}
                                                center={{ lat: 43.6532, lng: -79.3832, }}
                                                zoom={13}
                                                options={{ disableDefaultUI: true, styles: GoogleMapStyle }}
                                                onLoad={onMapLoad}
                                            >
                                                { /* Child components, such as markers, info windows, etc. */}
                                                {userLocations.map((userLocation, index) => (
                                                    <Marker key={index} position={userLocation} onClick={() => { setPinSelected(userLocation) }} />

                                                ))}

                                                {/* ^^^^^^^^^^^^^^^^^^^need to connect with the real data */}
                                                {pinSelected ?
                                                    <InfoWindow position={pinSelected} onCloseClick={() => { setPinSelected(null); }}>
                                                        <Grid>
                                                            <ItemCard image={dummy[0].image} price={dummy[0].price} title={dummy[0].name} rate={dummy[0].overallRating} />
                                                        </Grid>
                                                    </InfoWindow> : null}
                                            </GoogleMap>
                                        </LoadScript>
                                    </div>
                                </>
                            </>}
                        </Grid>

                    </div>
                </div>
            </section >
        </div >

    )
}

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