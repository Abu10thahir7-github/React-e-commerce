import React, { useEffect, useState } from 'react';
import './Collection.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function Collection() {
    const [random, setRandom] = useState([]);
    const [category, setCategory] = useState([]);
    const [buttonCategory, setButtonCategory] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setRandom(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setCategory(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filteredProducts = buttonCategory
        ? random.filter((item) => item.category === buttonCategory)
        : random;

    return (
        <div>
            <div className="collection">
                <div className="collec-title">
                    <h1>Collection</h1>
                    <h3>Offers</h3>
                </div>
                <div className="category">
                    <button onClick={() => setButtonCategory('')} key="all">
                        All
                    </button>
                    {category.map((itemsCategory) => (
                        <button onClick={() => setButtonCategory(itemsCategory)} key={itemsCategory}>
                            {itemsCategory}
                        </button>
                    ))}
                </div>
                <div className="pro-collection">
                    {filteredProducts.map((items) => (
                        <div className="pro-random" key={items.id}>
                            <div className="pro-card">
                                <div className="pro-img">
                                    <img src={items.image} alt="" />
                                </div>
                                <div className="pro-content">
                                    <div className="pro-title">
                                        <p>{items.title}</p>
                                    </div>
                                    <div className="pro-deatils">
                                        <div className="categy">
                                            <p>
                                                category : <span>{items.category}</span>
                                            </p>
                                        </div>
                                        <div className="pri-rate">
                                            <p>
                                                {' '}
                                                Price : <span> ${items.price}</span>{' '}
                                            </p>
                                            <p>
                                                Rating :{' '}
                                                <span className="star-span">
                                                    {' '}
                                                    <StarIcon className="star" />{' '}
                                                    <StarIcon className="star" />{' '}
                                                    <StarHalfIcon className="star" />{' '}
                                                    {items.rating.rate}
                                                </span>
                                            </p>
                                            <p>
                                                View : <span>{items.rating.count}</span>
                                            </p>
                                        </div>
                                        <div className="purchase-like-save">
                                            <button className="buy">
                                                Add  <ShoppingCartIcon />
                                            </button>
                                            <div>
                                                <button className="save">
                                                    Save <BookmarkAddOutlinedIcon />
                                                </button>
                                                <button className="like">
                                                    Like <FavoriteBorderOutlinedIcon />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Collection;
