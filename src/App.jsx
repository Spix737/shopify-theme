import logo from './logo.svg';
import coffee1 from './images/coffee-1.jpg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
      </head>

      {/* announcements */}
      <body className="font-openSans body-font mx-11" >
        <title>Editions Coffee</title>

        <Navbar />

        {/* Image */}
        <div className='relative flex flex-col justify-center my-16'>
          <img className='w-full' src={coffee1} alt='coffePic1' />
          <div className='text-center py-[18px] inset-0 sm:absolute sm:text-white font-bold'>
            <p className='my-auto'>Our beans are all medium roast and pair perfectly with any brewing method.</p>
          </div>
        </div>
        {/* P */}
        <div className='flex justify-center p-10 border border-b-0 border-l-0 border-r-0 lg:text-4xl lg:mx-10 border-t-1 border-t-yellow-800'>
          <p class='text-center'>We are still only operating as a takeout window. Our online shop is always open and the beans we offer continue to rotate, depending on what is available to our roastery!</p>
        </div>
        {/* gridShop */}
        <div className='grid-cols-2 md:grid-cols-3'>

        </div>
        {/* grid2 articles */}
        <div className='grid-cols-1 md:grid-cols-2'>

        </div>
        {/* subscribe */}
        <p>Join The Family</p>
        <p>Sign up to our newsletter to receive updates about our future roasts!</p>

        <form>Email address</form>
        <button>SUBSCRIBE</button>
        {/* links */}
        <div className='grid-col-1 md:grid-col-3'>

        </div>
        {/* Footer */}
        <p>© 2022 <span>Editions Modern.</span><span> Shopping Cart by Shopify</span></p>
        {/* DROPDOWN */}
      </body>
    </>
  );
}

export default App;