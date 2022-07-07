import logo from './logo.svg';
import coffee1 from './images/coffee-1.jpg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <head>
        <title>Editions Coffee</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"></link>
        <link href="//db.onlinewebfonts.com/c/c4562c5e30fd5a5afdd2eeb54ebdac29?family=ITC+Galliard" rel="stylesheet" type="text/css" />

      </head>

      {/* announcements */}
      <div className='bg-[#eeece8] pb-[6px]'>
        <div className='py-3 text-sm font-light text-center text-[#eeece8] bg-[#53342e]'>
          <p>We are now offering local delivery on Sunday's. <span className='hidden md:inline-block'> Place your order before Saturday 3:00pm! </span></p>
        </div>
      </div>

      <body className="font-openSans body-font bg-[#eeece8]" >
        <div className='mx-auto max-w-[1080px] px-11'>


          {/* Navbar */}
          <Navbar />

          {/* Image */}
          <div className='relative flex flex-col justify-center my-[54px]'>
            <img className='w-[1080px]' src='https://cdn.shopify.com/s/files/1/0248/3425/files/slideshow-2_36acd5ae-0af1-439d-8896-e9fc187ca24f_1312x672_crop_center.jpg?v=1590189387' alt='coffePic1' />
            <div className='text-center pt-[18px] inset-0 flex flex-col items-center justify-center sm:absolute sm:text-white font-bold'>
              <h2 className='font-light text-3xl mb-[18px] text-[#241c14] sm:text-white font-galliard '>Begin Brewing At Home.</h2>
              <p className='mb-6 text-base font-normal'>Our beans are all medium roast and pair perfectly with any brewing method.</p>
              <button className='px-8 py-[18px] tracking-widest font-[500] text-[13px] text-white rounded cursor-pointer bg-[#89724c] border-[#89724c]'>BROWSE BEANS</button>
            </div>
          </div>

          {/* P */}
          <div className='flex justify-center p-10 border border-b-1 border-l-0 border-r-0 lg:text-4xl lg:mx-10 border-t-1 border-t-[#cdc9c0] border-b-[#cdc9c0]'>
            <h2 class='text-center text-2xl text-[#46321e] font-galliard'>We are still only operating as a takeout window. Our online shop is always open and the beans we offer continue to rotate, depending on what is available to our roastery!</h2>
          </div>

          {/* gridShop */}
          <div className='grid-cols-2 py-16 border border-l-0 border-r-0 md:grid-cols-3 border-b-1 border-b-[#cdc9c0]'>
            <div className='flex flex-col items-center justify-center '>
              <img onMouseOver={<h1>Expand Image</h1>} src="//cdn.shopify.com/s/files/1/0248/3425/products/pouch-espresso-1_450x450.jpg?v=1590446774" alt="" data-rimg="loaded" data-rimg-scale="1" data-rimg-template="//cdn.shopify.com/s/files/1/0248/3425/products/pouch-espresso-1_{size}.jpg?v=1590446774" data-rimg-max="2375x2375" data-rimg-crop="false" srcset="//cdn.shopify.com/s/files/1/0248/3425/products/pouch-espresso-1_576x576.jpg?v=1590446774 2.00x" data-rimg-template-svg="data:image/svg+xml;utf8,<svg%20xmlns='http://www.w3.org/2000/svg'%20width='450'%20height='450'></svg>"></img>
              <a><h3 className='pb-3 text-xl font-galliard'>Espresso</h3></a>
              <p className='text-sm'>from $25.00</p>
            </div>
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
        </div>
      </body>
    </>
  );
}

export default App;
