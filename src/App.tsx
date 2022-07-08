//import coffee1 from './images/coffee-1.jpg';
import Navbar from './components/Navbar';
import './App.css';
import React from 'react';

//const Navbar = require('./components/Navbar');

export type CoffeeItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  size: string;
}

function mouseBig(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
  e.currentTarget.style.width = '460px';
  e.currentTarget.style.height = '460px';
}
function mouseSmall(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
  e.currentTarget.style.width = '450px';
  e.currentTarget.style.height = '450px';
}

function App() {
  return (
    <>
      <head>
        <title>Editions Coffee</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
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
            <h2 className='text-center text-2xl text-[#46321e] font-galliard'>We are still only operating as a takeout window. Our online shop is always open and the beans we offer continue to rotate, depending on what is available to our roastery!</h2>
          </div>

          {/* shop grid */}
          <div className='grid-cols-2 text-[#46321e] py-16 border border-l-0 border-r-0 md:grid-cols-3 border-b-1 border-b-[#cdc9c0]'>
            <div className='flex flex-col items-center justify-center '>
              <img onMouseEnter={mouseBig} onMouseLeave={mouseSmall} src="//cdn.shopify.com/s/files/1/0248/3425/products/pouch-espresso-1_450x450.jpg?v=1590446774" alt="" data-rimg="loaded" data-rimg-scale="1" data-rimg-template="//cdn.shopify.com/s/files/1/0248/3425/products/pouch-espresso-1_{size}.jpg?v=1590446774" data-rimg-max="2375x2375" data-rimg-crop="false" data-rimg-template-svg="data:image/svg+xml;utf8,<svg%20xmlns='http://www.w3.org/2000/svg'%20width='450'%20height='450'></svg>"></img>
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
              <input type="text" name="search" placeholder="Email address" className='w-full text-[#46321f] font-light border-[#cdc9c0] rounded-sm placeholder:text-[#cdc9c0] placeholder: focus:max-w-[190px] focus:border-transparent focus:ring-2' />

              <button className='uppercase px-[18px] py-[12px] tracking-widest font-[500] text-[13px] text-white rounded cursor-pointer bg-[#89724c] border-[#89724c]'>Subscribe</button>
            </div>
          </div>

          {/* links */}
          <div className={`py-8 gap-4 grid-col-1 md:grid-col-3 flex flex-row prose-h1:font-galliard`}>
            <div>
              <h1>Social</h1>
              <ul className='flex flex-row'>
                <li><svg className="icon-houzz " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M1.25 20V0H5.86556V4.61556L19.4544 8.46222V20H13.0456V13.3333H7.91667V20H1.25Z" fill="currentColor"></path></svg></li>
                <li><svg className="icon-instagram " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M10 1.933c2.629 0 2.938.012 3.977.06.96.042 1.48.202 1.828.339.46.18.789.39 1.133.734.343.344.558.672.734 1.133.133.348.297.867.34 1.828.047 1.04.058 1.348.058 3.977 0 2.629-.011 2.937-.058 3.976-.043.961-.203 1.48-.34 1.829-.18.46-.39.789-.735 1.132a3.006 3.006 0 01-1.132.735c-.348.133-.867.297-1.828.34-1.04.046-1.348.058-3.977.058-2.629 0-2.938-.012-3.977-.059-.96-.042-1.48-.203-1.828-.34-.46-.179-.789-.39-1.133-.734a3.006 3.006 0 01-.734-1.132c-.133-.348-.297-.868-.34-1.829-.047-1.039-.058-1.347-.058-3.976 0-2.63.011-2.938.058-3.977.043-.96.203-1.48.34-1.828.18-.46.39-.789.735-1.133a3.006 3.006 0 011.132-.734c.348-.133.867-.297 1.828-.34 1.04-.05 1.348-.058 3.977-.058zM10 .16C7.328.16 6.992.172 5.941.22 4.895.266 4.18.434 3.555.676c-.649.25-1.196.59-1.743 1.136A4.88 4.88 0 00.677 3.555c-.242.625-.41 1.34-.457 2.39C.172 6.992.16 7.328.16 10c0 2.672.012 3.008.059 4.059.047 1.046.215 1.761.457 2.39.25.649.59 1.195 1.136 1.742a4.88 4.88 0 001.743 1.137c.625.242 1.34.41 2.39.457 1.051.047 1.383.059 4.059.059s3.008-.012 4.059-.059c1.046-.047 1.761-.215 2.39-.457a4.796 4.796 0 001.742-1.137 4.88 4.88 0 001.137-1.742c.242-.625.41-1.34.457-2.39.047-1.051.059-1.383.059-4.06 0-2.675-.012-3.007-.059-4.058-.047-1.047-.215-1.761-.457-2.39a4.796 4.796 0 00-1.137-1.743A4.88 4.88 0 0016.453.673c-.625-.242-1.34-.41-2.39-.457C13.008.172 12.671.16 10 .16z"></path>      <path fill="currentColor" d="M10 4.945a5.055 5.055 0 000 10.11A5.058 5.058 0 0015.055 10 5.058 5.058 0 0010 4.945zm0 8.336a3.28 3.28 0 110-6.562 3.28 3.28 0 010 6.562zM15.254 5.926a1.18 1.18 0 100-2.36 1.18 1.18 0 000 2.36z"></path></svg></li>
                <li><svg className="icon-kickstarter " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.1726 10.0041L16.7638 8.42346C18.4121 6.78614 18.4121 4.11939 16.7638 2.48205C15.1154 0.844718 12.4308 0.844718 10.7825 2.48205L10.2031 3.05755C9.43603 1.96329 8.17123 1.25 6.72691 1.25C4.39313 1.25 2.5 3.1305 2.5 5.4487V14.5513C2.5 16.8695 4.39313 18.75 6.72691 18.75C8.17123 18.75 9.43603 18.0367 10.2031 16.9425L10.7825 17.518C12.4308 19.1553 15.1154 19.1553 16.7638 17.518C18.4121 15.8806 18.4121 13.2139 16.7638 11.5765L15.1726 10.0041Z" fill="currentColor"></path>    </svg></li>
                <li><svg className="icon-snapchat " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18.6819 14.0517C18.568 13.7572 18.3472 13.5183 18.065 13.3844L17.9309 13.3117L17.6895 13.1892C16.9297 12.8012 16.2746 12.2309 15.7808 11.5277C15.6548 11.3414 15.5456 11.1439 15.4545 10.9376C15.4187 10.8287 15.4187 10.7651 15.4456 10.7106C15.4724 10.6652 15.5081 10.6244 15.5528 10.5971C15.8148 10.4175 16.0786 10.2404 16.344 10.066C16.6401 9.8691 16.8854 9.60291 17.0592 9.28979C17.1868 9.05304 17.2502 8.78618 17.243 8.51642C17.2358 8.24667 17.1582 7.98368 17.0183 7.7543C16.8783 7.52492 16.6809 7.33736 16.4462 7.21076C16.2115 7.08417 15.948 7.02306 15.6825 7.03368C15.5042 7.03395 15.3269 7.05838 15.155 7.10631C15.1595 6.69776 15.155 6.26198 15.1148 5.83981C15.0701 5.04356 14.8294 4.27142 14.4147 3.59413C14 2.91684 13.4246 2.35604 12.7412 1.96312C11.9041 1.48418 10.9573 1.23832 9.99657 1.25043C8.99081 1.25043 8.07445 1.49102 7.25643 1.96312C6.57109 2.35419 5.99391 2.91442 5.57825 3.59202C5.1626 4.26962 4.92188 5.04271 4.87836 5.83981C4.8426 6.26652 4.83366 6.7023 4.8426 7.10631C4.66786 7.05757 4.48741 7.03313 4.3062 7.03368C4.04116 7.02448 3.77844 7.0865 3.54457 7.21346C3.3107 7.34042 3.11398 7.52783 2.97428 7.75674C2.83459 7.98565 2.75688 8.24796 2.749 8.51714C2.74113 8.78633 2.80336 9.05286 2.92942 9.28979C3.10408 9.60497 3.35094 9.87279 3.6491 10.0706L4.05587 10.3429L4.42689 10.5881C4.47159 10.6198 4.51629 10.6607 4.54311 10.7106C4.5744 10.7696 4.5744 10.8332 4.53417 10.9512C4.44477 11.1555 4.33302 11.3462 4.20786 11.5323C3.72789 12.2189 3.09343 12.7791 2.35726 13.1665C1.9326 13.3934 1.49454 13.5433 1.31126 14.0517C1.17269 14.4375 1.26656 14.8778 1.6197 15.2455C1.74933 15.3817 1.89684 15.4998 2.0667 15.5905C2.4109 15.7812 2.77744 15.931 3.15739 16.0354C3.23698 16.0554 3.31258 16.0892 3.3809 16.1353C3.51053 16.2488 3.48818 16.4213 3.66251 16.68C3.75191 16.8071 3.85919 16.9206 3.98435 17.0114C4.34643 17.2656 4.7532 17.2838 5.18233 17.2974C5.57122 17.311 6.00929 17.3292 6.5144 17.4971C6.72449 17.5652 6.93906 17.7014 7.18938 17.8603C8.01382 18.4407 8.99337 18.7512 9.99657 18.75C11.3733 18.75 12.2048 18.2325 12.8127 17.8557C13.0213 17.7121 13.2446 17.5918 13.4787 17.4971C13.9794 17.3292 14.4174 17.3155 14.8108 17.2974C15.2399 17.2792 15.6467 17.2656 16.0088 17.0114C16.1563 16.907 16.2859 16.7663 16.3753 16.6028C16.5005 16.3895 16.496 16.2397 16.6122 16.1353C16.6748 16.0899 16.7463 16.0581 16.8179 16.0399C17.2068 15.9355 17.5778 15.7857 17.9264 15.5905C18.1043 15.4952 18.2647 15.3692 18.4003 15.2183L18.4047 15.2138C18.74 14.8506 18.8249 14.4239 18.6863 14.0517H18.6819ZM17.4571 14.719C16.7061 15.1366 16.2099 15.0957 15.8255 15.3454C15.4947 15.5633 15.6914 16.0263 15.45 16.1897C15.1595 16.3986 14.2878 16.1761 13.1703 16.5529C12.2495 16.8616 11.6594 17.7559 9.99657 17.7559C8.33818 17.7559 7.76154 16.8661 6.82283 16.5484C5.70532 16.1761 4.83813 16.394 4.54311 16.1852C4.3062 16.0218 4.49841 15.5588 4.1721 15.3454C3.7832 15.0912 3.28703 15.1366 2.54053 14.719C2.06223 14.4511 2.33491 14.2877 2.49136 14.2105C5.20021 12.876 5.6338 10.8196 5.65168 10.6698C5.67403 10.4837 5.70085 10.3384 5.4997 10.1477C5.30749 9.96617 4.44924 9.43051 4.20786 9.25801C3.81449 8.98111 3.64463 8.69966 3.76979 8.3592C3.85919 8.11861 4.07822 8.03236 4.3062 8.03236C4.37772 8.03236 4.44924 8.04144 4.52076 8.05506C4.95435 8.15039 5.37454 8.37282 5.61592 8.43183L5.70532 8.44091C5.83942 8.44091 5.88412 8.37736 5.87518 8.22756C5.84389 7.74638 5.77684 6.80671 5.85283 5.9306C5.88246 5.06555 6.21536 4.2397 6.79154 3.60186C7.19952 3.15685 7.69671 2.80583 8.24958 2.57248C8.80246 2.33912 9.39817 2.22885 9.99657 2.24911C11.9544 2.24911 12.9826 3.34311 13.2016 3.59732C13.7778 4.23516 14.1107 5.06101 14.1403 5.92606C14.2163 6.80217 14.1492 7.74184 14.118 8.21848C14.109 8.37736 14.1582 8.43637 14.2878 8.43637C14.3146 8.43637 14.3459 8.43637 14.3772 8.42275C14.6186 8.36374 15.0388 8.14585 15.4724 8.05052C15.5427 8.03372 15.6148 8.0261 15.6869 8.02782C15.9149 8.02782 16.1339 8.11861 16.2233 8.35466C16.3485 8.69512 16.1786 8.97657 15.7808 9.25347C15.5439 9.42143 14.6856 9.96163 14.4934 10.1432C14.2923 10.3339 14.3146 10.4791 14.3415 10.6607C14.3593 10.8196 14.7885 12.876 17.5018 14.2015C17.6627 14.2832 17.9309 14.4511 17.4571 14.719Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"></path></svg></li>
                <li><svg className="icon-tiktok " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10.5443 0H14.0703C14.0703 0 13.8691 4.38828 18.9569 4.70994V8.0988C18.9569 8.0988 16.2355 8.25962 14.0703 6.65135L14.1058 13.6588C14.1058 14.9135 13.7224 16.1399 13.0042 17.183C12.286 18.226 11.2653 19.0388 10.0711 19.5184C8.87699 19.998 7.56315 20.1229 6.29587 19.8773C5.02859 19.6317 3.86484 19.0266 2.95189 18.1386C2.03894 17.2507 1.41783 16.1197 1.16715 14.8889C0.916477 13.658 1.04751 12.3827 1.54366 11.2242C2.03982 10.0657 2.8788 9.07612 3.95443 8.38073C5.03006 7.68533 6.29398 7.31536 7.58626 7.31764H8.49734V10.7984C7.90288 10.6196 7.26547 10.6273 6.67581 10.8205C6.08615 11.0138 5.57429 11.3826 5.21306 11.8746C4.85183 12.3667 4.65963 12.9568 4.66383 13.561C4.66802 14.1652 4.86839 14.7527 5.23642 15.24C5.60445 15.7272 6.12139 16.0894 6.71368 16.2749C7.30597 16.4603 7.94343 16.4597 8.53534 16.2731C9.12726 16.0865 9.64348 15.7234 10.0105 15.2355C10.3776 14.7476 10.5768 14.1596 10.5798 13.5554L10.5443 0Z" fill="currentColor"></path>    </svg></li>
                <li><svg className="icon-youtube " aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20"><g clip-path="url(#clip0)"><path fill="currentColor" d="M-.155 16.022c0 .827.277 1.53.83 2.11A2.69 2.69 0 002.699 19h15.293c.795 0 1.469-.29 2.023-.868.554-.58.83-1.282.83-2.11V4.027c0-.827-.279-1.538-.838-2.134C19.446 1.298 18.775 1 17.99 1H2.698c-.783 0-1.454.298-2.014.893a3.003 3.003 0 00-.84 2.134v11.995zm7.638-2.167v-7.66c0-.078.022-.138.067-.182a.284.284 0 01.084-.016l.084.016 7.32 3.838c.044.045.067.1.067.166 0 .044-.023.088-.068.132l-7.319 3.838c-.022.022-.045.033-.067.033-.045 0-.079-.01-.1-.033-.046-.044-.068-.088-.068-.132z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h21v20H0z"></path></clipPath></defs></svg></li>
              </ul>
            </div>
            <div>
              <h1>Navigate</h1>
              <ul>
                <li>Shop</li>
                <li>Subscription</li>
                <li>About Us</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h1>Local Curbside Pickup</h1>
              <p>We are working to fulfill all bean orders and are offering safe pickup from Monday-Saturday!</p>
              <p>Please contact us with any questions.</p>
            </div>
          </div>

          {/* Footer */}
          <div className='text-sm'>
            <p>© 2022 <span><a href=''>Editions Modern.</a></span><span> Shopping Cart by Shopify</span></p>
          </div>
          {/* DROPDOWN */}
        </div>
      </body>
    </>
  );
}

export default App;
