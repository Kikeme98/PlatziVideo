import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import '../assets/styles/App.scss';
import Search from '../components/Search'
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
const App = () => {

  const API = 'http://localhost:3000/initalState';
  const videos = useInitialState(API);
  console.log(videos);

  return (
    <div className="app">
      <Header />
      <Search />
      {
        videos.mylist?.length > 0 &&
        <Categories text="Mi lista">
          <Carousel>
            {
              videos.mylist?.map(item => {
                console.log(item);
                return (<CarouselItem key={item.id} {...item} />)
              })
            }
          </Carousel>
        </Categories>
      }

      <Categories text="Tendencias">
        <Carousel>
          {
            videos.trends?.map(item => {
              console.log(item);
              return (<CarouselItem key={item.id} {...item} />)
            })
          }
        </Carousel>

      </Categories>

      <Categories text="Originales de platzi video">
        <Carousel>
          {
            videos.originals?.map(item => {
              console.log(item);
              return (<CarouselItem key={item.id} {...item} />)
            })
          }
        </Carousel>

      </Categories>



      <Footer />
    </div>
  )
}

export default App;