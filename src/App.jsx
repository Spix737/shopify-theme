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

          {/* p */}
          <div className='flex justify-center p-10 border border-b-1 border-l-0 border-r-0 lg:text-4xl lg:mx-10 border-t-1 border-t-[#cdc9c0] border-b-[#cdc9c0]'>
            <h2 class='text-center text-2xl text-[#46321e] font-galliard'>We are still only operating as a takeout window. Our online shop is always open and the beans we offer continue to rotate, depending on what is available to our roastery!</h2>
          </div>

          {/* shop grid */}
          <div className='grid-cols-2 text-[#46321e] py-16 border border-l-0 border-r-0 md:grid-cols-3 border-b-1 border-b-[#cdc9c0]'>
            <div className='flex flex-col items-center justify-center '>
              <img onMouseOver={<h1>Expand Image</h1>} src="//cdn.shopify.com/s/files/1/0248/3425/products/pouch-espresso-1_450x450.jpg?v=1590446774" alt="" data-rimg="loaded" data-rimg-scale="1" data-rimg-template="//cdn.shopify.com/s/files/1/0248/3425/products/pouch-espresso-1_{size}.jpg?v=1590446774" data-rimg-max="2375x2375" data-rimg-crop="false" srcset="//cdn.shopify.com/s/files/1/0248/3425/products/pouch-espresso-1_576x576.jpg?v=1590446774 2.00x" data-rimg-template-svg="data:image/svg+xml;utf8,<svg%20xmlns='http://www.w3.org/2000/svg'%20width='450'%20height='450'></svg>"></img>
              <a><h3 className='pb-3 text-xl font-galliard'>Espresso</h3></a>
              <p className='text-sm'>from $25.00</p>
            </div>
          </div>

          {/* articles grid */}
          <div className='grid-cols-1 text-[#46321e] py-16 md:grid-cols-2'>
            <div className='flex flex-col items-center justify-center space-y-3 '>
              <p className='text-xs tracking-wider uppercase'>August 07, 2020</p>
              <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-2xl font-galliard'>4 ways to elevate your morning routine</h1>
                <img className='w-[1080px]' src='https://cdn.shopify.com/s/files/1/0248/3425/articles/editions-modern-blog-1_800x544.jpg?v=1596844017' alt='coffee-drinkers'></img>
                <p className='text-left'>There are many simple ways to practice mindfulness and it all starts with the perfect morning routine to utilize your time and energy to the best of its ability. Here are 4 things that you can start your day with!</p>
              </div>
              <a className='self-start text-left underline underline-offset-8 hover:underline-offset-4'>Continue reading</a>
            </div>
          </div>

          {/* subscribe */}
          <div className='flex flex-col items-center space-y-3 text-center py-12 border border-b-1 border-l-0 border-r-0 border-t-1 text-[#46321e] border-[#cdc9c0]'>
            <h1 className='text-2xl font-galliard'>Join The Family</h1>
            <p>Sign up to our newsletter to receive updates about our future roasts!</p>
            <div className='flex flex-row items-center py-3 space-x-3'>
              <input type="text" name="search" placeholder="Email address" className='w-full text-[#46321f] font-light border-[#cdc9c0] rounded-sm placeholder:text-[#cdc9c0] placeholder: focus:max-w-[190px] focus:border-transparent focus:ring-2'/>
              
              <button className='uppercase px-[18px] py-[12px] tracking-widest font-[500] text-[13px] text-white rounded cursor-pointer bg-[#89724c] border-[#89724c]'>Subscribe</button>
            </div>
          </div>

          {/* links */}
          <div className={`grid-col-1 md:grid-col-3 prose-h1:font-galliard`}>
            <div>
              <h1>Social</h1>
            </div>
            <div>
              <h1>Navigate</h1>
            </div>
            <div>
              <h1>Local Curbside Pickup</h1>
              <p>We are working to fulfill all bean orders and are offering safe pickup from Monday-Saturday!</p>
              <p>Please contact us with any questions.</p>
            </div>
          </div>

          {/* Footer */}
          <p>© 2022 <span><a href=''>Editions Modern.</a></span><span> Shopping Cart by Shopify</span></p>
          {/* DROPDOWN */}
        </div>
      </body>
    </>
  );
}

export default App;
