import logo from './logo.svg';
import coffee1 from './images/coffee-1.jpg';
//import SearchIcon from '@mui/icons-material/SearchIcon';
import { Search } from '@mui/icons-material';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
      <header className="App-header" class="px-10 mt-20 lg:mx-40 md:mx-20 sm:mx-10">
      {/* announcements */}
      {/* Header */}
      <div className="header-top" class="flex justify-between">
        <Sidebar className=""/>
        <form method="POST" action="#" class='border border-b-yellow-800 border-b-1 border-l-0 border-r-0 border-t-0'>
          <Search />
          <input type="text" name="search" placeholder="Search" />
        </form>
        <img src='https://cdn.shopify.com/s/files/1/0248/3425/files/editions-modern-logo_71b1c742-7220-472e-be1f-5a417686b4eb_320x76.png?v=1590526061' alt='' />
        <div>
          <button className="p-2 btn-account">Account</button>
          <button className="p-2 btn-cart">Cart</button>
        </div>
      </div>
      {/* Navbar */}
      <div className="navbar" class="mt-20 pb-4 flex space-x-5 justify-center border border-b-yellow-800 border-b-1 border-l-0 border-r-0 border-t-0">
        <a href="#">Shop</a>
        <a href="#">Subscription</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
    </header>
    
    <body>
        {/* Image */}
        <div className='flex justify-center p-16'>
          <img className='max-w-4xl' src={coffee1} alt='coffePic1' />
        </div>
        {/* P */}
        <div className='flex justify-center p-10 border border-b-0 border-l-0 border-r-0 lg:text-4xl lg:mx-60 border-t-1 border-t-yellow-800'>
          <p class='text-center'>We are still only operating as a takeout window. Our online shop is always open and the beans we offer continue to rotate, depending on what is available to our roastery!</p>
        </div>
        {/* gridShop */}
        {/* grid2 articles */}
        {/* subscribe */}
        {/* links */}
        {/* Footer */}
      </body>
    </>
  );
}

export default App;
