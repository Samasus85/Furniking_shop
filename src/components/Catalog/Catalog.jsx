import React, { useState } from 'react';
import usePagination from '../../hooks/usePagination';
import { DATA } from '../../data/data';
import {Card} from '..';
import css from'./Catalog.module.css'


const Catalog = () => {
              const [filter, setFilter] = useState("all");
              const [search, setSearch] = useState('');

              const filteredData = DATA.filter(prod => filter === 'all' ? prod : prod.category === filter)
                                      .filter(prod => prod.title.toLocaleLowerCase().includes(search.trim()) && prod);

              const { next, prev, jump, currentData, currentPage,  } = usePagination(filteredData , 12);

              const changeHandle =(e)=> {
              setFilter(e.target.value);
              setSearch("")
                jump(0);
              }
              const serachHandle = (e)=>{
                setSearch(e.target.value.toLocaleLowerCase());
              }
              window.scroll({top: 0});

  return <div  className={css.search} >
          <div>
            <h1>Our Products </h1>
            <div className ={css.search_block}>
                  <div className={css.search_input}>
                    <input onChange={serachHandle} 
                    value={search} type="search" />
                  </div>
                  <div>
                        <select onChange={changeHandle}                        >
                            <option value="all" >Categories </option>
                            <option value="all" >All </option>
                            <option value="furniture">Furniture</option>
                            <option value="table">Table</option>
                            <option value="bench">Bench</option>
                            <option value="chair">Chair </option>
                        </select>
                    <button className={css.search_btn}> <i className='fas fa-search '></i></button>
                  </div>
            </div>
            <div className={css.card} >
              {currentData().map(prod => <Card key={prod.id} id={prod.id} title={prod.title} price={prod.price} image={prod.thumbnail} oldPrice={prod.oldPrice} /> )}
            </div>
            {filteredData.length > 8 &&
             (<div className={css.filter} >
              <p>Page<span>{currentPage}</span> of   <span>3</span></p>
              <div  className={css.btns}>
              <button onClick={prev}> <i className="fas fa-chevron-left"></i> </button>
              <button onClick={next}> <i className="fas fa-chevron-right"></i> </button>
               </div>
              </div>)
            }
          </div>
  </div>;
};

export default Catalog;
