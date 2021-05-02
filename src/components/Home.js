import React from 'react';

const Home = () => {
    return (
       <div className='basic'>
            <p>
               Welcome to the Home page for the in development CSP Bookstore
            </p>
            <p>
               Above is a NavBar that will take the user across the site
            </p>
            <p>
                The Login page contains a form that prompts for username and password <br />
                as of right now it doesnt do anything but when we add database support next week that will change   
            </p>
            <p>
               The product list contains a list of products availible <br />
               Each can be added to the cart
            </p>
            <p>
                Clicking on the White Cart Button will take the user to the cart <br />
                where they can edit the number of items, delete items from the cart and checkout.
            </p>

       </div>
    );
}
 
export default Home;