//import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

 const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One Punch Man']);

 //   const handleAdd = () => {
 //    setCategories( ['caballeros del Zodiaco', ...categories]);
 //   }

    return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />

       <ul>
           {
            categories.map( category => ( 
              <GifGrid 
              key={ category }
              category={ category }
              />  
            ))
           }
       </ul>
    </div>
    )
}

export default GifExpertApp;