
   
   const btn = document.querySelector('.mobile-menu-button');
    const menu = document.querySelector('.mobile-menu');
 
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

/

// <!-- <div class="mx-auto w-full max-w-7xl md:px-10 md:pt-10 lg:pb-28">

// <div class="flex flex-col items-center justify-center ">
 
//   <div class="flex flex-col items-center rounded-md shadow-2xl border-slate-300 border">

//      <i data-visualcompletion="css-img" aria-label="Instagram" class="mb-8 mt-14" role="img" style="background-image: url(&quot;https://static.cdninstagram.com/rsrc.php/v3/yv/r/KoLLpWDb4f6.png&quot;); background-position: 0px -52px; background-size: auto; width: 175px; height: 51px; background-repeat: no-repeat; display: inline-block;"></i>
    
//      <div class="flex flex-col">
//            <div class="flex flex-col items-center ">
//              <div class="flex ">
                 
//                  <a href="#" class="bg-blue-600 py-2 px-4 w-72 text-center my-2 mx-10 text-white rounded-md " > Continue With Facebook </a>
//              </div>

//              <div class="flex py-3 items-center w-72 mb-5 mt-3 my-10">
//                  <div class="flex-grow border-t border-gray-400"></div>
//                  <span class="flex-shrink mx-4 text-gray-800 text-md font-bold">OR</span>
//                  <div class="flex-grow border-t border-gray-400"></div>
//              </div>
           
//              <div class="mb-2  ">
//                  <input type="email" name="email" class=" py-2 px-4  w-72 bg-gray-200 border shadow-sm border-slate-300 text-gray-900 text-sm rounded-md  placeholder-gray-700 " placeholder="Phone number, username, or email">
//              </div>
           
//              <div class="mb-2  ">
//                  <input type="password" name="password" class=" py-2 px-4  w-72  bg-gray-200 border shadow-sm border-slate-300  text-sm rounded-md placeholder-gray-700" placeholder="Password">
//              </div>

//              <div class="flex justify-end w-72 py-3 ">
//                  <p class="text-blue-500 text-sm"> Forgot Password? </p>
//              </div>
             
//              <div class=" flex">
//                  <a href="#" class="bg-blue-400 py-2 px-4 w-72 text-center my-2 mx-10 text-gray-100 rounded-md font-bold ">
//                      Log in
//                  </a>
//              </div>
            
//            </div>
            
//            <div class="flex flex-col items-center mt-1 ">
//               <span class="flex gap-1 pt-5">
//                  <p class="text-sm text-gray-500">
//                      Don't have an Account ?
//                  </p>
//                  <a href="#" class="text-blue-400 font-bold text-sm">
//                      Sign Up
//                  </a>
//               </span>

//               <div class="py-9">
//                  <span class="text-sm text-gray-500 leading-5 block">
//                      By continuing, you agree to Instagram's
//                      <span class="block indent-6">
//                          <a href="#" class="text-gray-600 font-bold hover:underline indent-6">Terms of Use</a> and 
//                          <a href="#" class="text-gray-600 font-bold hover:underline">Privacy Policy</a>.
//                      </span>
                     
//                  </span>
//              </div>
                 
//            </div>
//      </div>
   

//  </div>
 



// </div>
// </div> -->


<section>
  <!-- Container -->
  <div class="grid gap-0 md:h-screen md:grid-cols-2">
    <!-- Component -->
    <div class="flex items-center justify-center bg-gray-100">
      <div class="mx-auto max-w-md px-5 py-16 md:px-10 md:py-20">
        <div class="mb-5 flex h-14 w-14 flex-col items-center justify-center bg-white md:mb-6 lg:mb-8">
          <img src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a949eade6cf7d_Vector-2.svg" alt="" class="inline-block" />
        </div>
        <p class="mb-8 text-sm sm:text-base md:mb-12 lg:mb-16 text-gray-500"> Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim. </p>
        <p class="text-sm font-bold sm:text-base">John Robert</p>
        <p class="text-sm sm:text-sm text-gray-500"> Senior Webflow Developer </p>
      </div>
    </div>
    <!-- Component -->
    <div class="flex items-center justify-center px-5 py-16 md:px-10 md:py-20">
      <div class="max-w-md text-center">
        <h2 class="mb-8 text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16"> Start your 14-day free trial </h2>
        <!-- Form -->
        <div class="mx-auto mb-4 max-w-sm pb-4">
          <form name="wf-form-password" method="get">
            <div class="relative">
              <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9455fae6cf89_EnvelopeSimple.svg" class="absolute left-5 top-3 inline-block" />
              <input type="email" class="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-black placeholder:text-black" placeholder="Email Address" required="" />
            </div>
            <div class="relative mb-4">
              <img alt="" src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946794e6cf8a_Lock-2.svg" class="absolute left-5 top-3 inline-block" />
              <input type="password" class="mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-black placeholder:text-black" placeholder="Password (min 8 characters)" required="" />
            </div>
            <label class="mb-6 flex items-center justify-start pb-12 pl-5 font-medium md:mb-10 lg:mb-1">
              <input type="checkbox" name="checkbox" class="float-left mt-1" />
              <span class="ml-4 inline-block cursor-pointer text-sm" htmlFor="checkbox"> I agree with the <a href="#" class="font-bold text-black"> Terms &amp; Conditions </a>
              </span>
            </label>
            <input type="submit" value="Join Flowspark" class="inline-block w-full cursor-pointer items-center bg-black px-6 py-3 text-center font-semibold text-white" />
          </form>
        </div>
        <p class="text-sm text-gray-500 sm:text-sm"> Already have an account? <a href="#" class="font-bold text-black">
            <span> </span> Login now
          </a>
        </p>
      </div>
    </div>
  </div>
</section>





<div class="flex h-full w-full">

<div class="flex flex-row mx-auto max-w-7xl ">
    <div class="flex flex-col w-[95%] h-screen justify-center items-center p-4">
        <div class=" w-full flex flex-col p-5 ">
            <h1 class="text-white text-8xl *:font-ver font-extrabold mb-4"> Explore New Shoes! </h1>
            <p class="text-white text-lg font-ver indent-1 mb-6"> Get a wide range of footwear that covers your every need</p>
            <button class="btn btn-primary w-fit">Get Started</button>
        </div>            
    </div>

    <div class="w-full">
        <div class="flex flex-col w-full h-full items-center justify-center flex-1">
            <div class=" flex justify-center w-full p-8">
                <img src="nike (2).png" alt="" class="w-[50vw] h-[50vw] object-cover -rotate-45">
            </div>
            
             </div>
    </div>
    
    </div>
</div>