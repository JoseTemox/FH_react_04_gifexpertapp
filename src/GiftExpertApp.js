import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GiftExpertApp = props => {

    const [categories, setCategories] = useState(['Bleach']);
    // const handleAdd = () => {
    //     // setCategories(['OnePucnch', ...categories]);
    //     setCategories(cats => [...cats, 'OnePunch']);
    // }

    return (


      <>
          <h2>Gif-ExpertApp</h2>
          <AddCategory setCategories={ setCategories }/>
          <hr />


          <ol>
              {
                  categories.map( category => (

                      //   return <li key={category}> {category} </li>
                    <GifGrid
                        key={ category }
                        category={ category }/>

                  ))
              }
          </ol>
      </>
    )


}

