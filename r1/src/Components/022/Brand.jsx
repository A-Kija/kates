import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import randColor from '../../Functions/randColor';
import DataContext from './DataContext';

function Brand() {

const { brands } = useContext(DataContext);

const {id} = useParams();

const [brand, setBrand] = useState(null);

useEffect(() => {
    setBrand(brands?.find(b => b.id === parseInt(id)));
}, [brands, id])

    if (null === brand || typeof brand === 'undefined') {
        return null;
    }

    return (
        <h2 style={{color: randColor()}}>{brand.title}</h2>
    )

}

export default Brand;