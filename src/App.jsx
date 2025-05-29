import productsData from './products/Products';
import ProductList from "./compounts/ProductList";
import { useState } from 'react';
import SearchBar from './compounts/SearchBar';

function App() {
    const [searchBar, setSearchBar] = useState("");

    const filterProducts = productsData.filter(product =>
        product.name.toLowerCase().includes(searchBar.toLowerCase())
    );

    return (
        <div className='containers'>
            <nav className=' bg-amber-300'>
                
                <ul className=' flex  space-x-10 px-8 py-5 '>

                    <li className=' cursor-pointer'>
                        Home
                    </li>

                    <li className=' cursor-pointer'>
                        Project
                    </li>

                    <li className=' cursor-pointer'>
                        contact me
                    </li>

                    <SearchBar className=' border-0 focus:border-2' searchBar={searchBar} onChange={setSearchBar} />

                </ul>
                
            </nav>
            <ProductList products={filterProducts} />
        </div>
    );
}

export default App;
