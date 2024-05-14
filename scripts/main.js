// START PLUGINS LINKS


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// simple gallery

var lightbox1 = new SimpleLightbox('.gallery a', { /* options */ });
var lightbox2 = new SimpleLightbox('.grid-imgs a', { /* options */ });


// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });

// Lenis

const lenis = new Lenis({
  // Valeur entre 0 et 1
  // Valeur par défaut : 0,1
  // Plus la valeur est faible, plus le scroll sera fluide
  lerp: 0.08, 
  // Valeur par défaut : 1
  // Plus la valeur est haute, plus le défilement sera rapide 
  wheelMultiplier: 1, 
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


// Wow Plugins start
new WOW().init();

// Swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay :  {
    delay: 10000,
    disableOnInteraction:false,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable : true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// END PLUGINS LINKS

// NAV APPEAR

let nav = document.querySelector('nav'); 
let currentScrollPosition =0;
window.addEventListener("scroll", function(){  
       currentScrollPosition = window.scrollY;         
       if (currentScrollPosition  > 0)
       {nav.classList.add('translateUp');} else {nav.classList.remove("translateUp");}   
} );

// Back to top

let backToTop = document.querySelector('.back-to-top')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}
backToTop.addEventListener('click', ()=>{
  window.scrollTo({top: 0, behavior: "smooth"});
})

// // Default options
// const options = {
//   animationDuration: 0.5, // in seconds
//   callbacks: { 
//     onFilteringStart: function() { },
//     onFilteringEnd: function() { },
//     onShufflingStart: function() { },
//     onShufflingEnd: function() { },
//     onSortingStart: function() { },
//     onSortingEnd: function() { }
//   },
//   controlsSelector: '', // Selector for custom controls
//   delay: 0, // Transition delay in ms
//   delayMode: 'progressive', // 'progressive' or 'alternate'
//   easing: 'ease-out',
//   filter: 'all', // Initial filter
//   filterOutCss: { // Filtering out animation
//     opacity: 0,
//     transform: 'scale(0.5)'
//   },
//   filterInCss: { // Filtering in animation
//     opacity: 0,
//     transform: 'scale(1)'
//   },
//   gridItemsSelector: '.filtr-container',
//   gutterPixels: 0, // Items spacing in pixels
//   layout: 'sameSize', // See layouts
//   multifilterLogicalOperator: 'or',
//   searchTerm: '',
//   setupControls: true, // Should be false if controlsSelector is set 
//   spinner: { // Configuration for built-in spinner
//     enabled: false,
//     fillColor: '#2184D0',
//     styles: {
//       height: '75px',
//       margin: '0 auto',
//       width: '75px',
//       'z-index': 2,
//     },
//   },
// } 
// const filterizr = new Filterizr('.gallery-section', options);
// document.querySelector('.filterizr-filter').addEventListener('click', ()=> {
//   filterizr.filter(targetFilter);
// })
// Filterizr

// document.querySelector('body').ready(function() {

//   document.querySelector('.filterizr-filter button').click(function() {
//     document.querySelector('.filterizr-filter button').removeClass('filtr-active');
//     document.querySelector(this).addClass('filtr-active');
//   });
//   // document.querySelector('.filterizr-sorting li').click(function() {
//   //   $('.filterizr-sorting li').removeClass('filtr-active');
//   //   $(this).addClass('filtr-active');
//   // });

//   var filterizd = document.querySelector('.gallery').filterizr();

//   filterizd.filterizr('sort', 'title', 'asc');
// });


// BTN ACTIF
	
let container = document.querySelector('.gallery-btns');
container.addEventListener('click', (event)=> {
  
// On check si on est bien sur un bouton
if (event.target.classList.contains('gal')) {
    // On vérifie si le bouton a déjà une classe active
    if (event.target.classList.contains('active')) {
        event.target.classList.remove('active') 
        // On vérifie si l'élément cliqué n'a pas déjà une classe active 
    } else {
        // Si mon container a un autre enfant que celui sur lequel je suis en train de cliquer qui possède déjà la classe active
        if (container.querySelector('.active')) {
            container.querySelector('.active').classList.remove('active') 
        }
        // Si mon wrapper n'a aucun enfant qui a la classe active alors ... 
        event.target.classList.add('active')

       let selector = event.target.getAttribute('data-filter')
            // console.log(selector)
            let imgs = document.querySelectorAll('.gallery-img-box')
            imgs.forEach(img => {
              if (selector === '*') {
                img.classList.remove('hide')
                // setTimeout(() => {
                //   img.classList.remove('destroy')
                // }, "1");
                document.querySelector('.gallery').classList.remove('gallerySwitch')
              } else if (img.getAttribute('data-filter') !== selector) {
                img.classList.add('hide')
                // setTimeout(() => {
                //   img.classList.add('destroy')
                // }, "1");
                if (event.target.getAttribute('data-filter')) { 
                  document.querySelector('.gallery').classList.add('gallerySwitch')
                }
              } else {
                  img.classList.remove('hide')
                  // setTimeout(() => {
                  //   img.classList.remove('destroy')
                  // }, "1"); 
              }
            })
            // if (selector != document.querySelector('.gallery img').getAttribute('data-filter')) {document.querySelector('.gallery img').classList.add('hide') }
     } 
}
});




// let container = document.querySelector('.gallery-btns');
// container.addEventListener('click', (event)=> {
  
// // On check si on est bien sur un bouton
// if (event.target.classList.contains('gal')) {
//     // On vérifie si le bouton a déjà une classe active
//     if (event.target.classList.contains('active')) {
//         event.target.classList.remove('active') 
//         // On vérifie si l'élément cliqué n'a pas déjà une classe active 
//     } else {
//         // Si mon container a un autre enfant que celui sur lequel je suis en train de cliquer qui possède déjà la classe active
//         if (container.querySelector('.active')) {
//             container.querySelector('.active').classList.remove('active') 
//         }
//         // Si mon wrapper n'a aucun enfant qui a la classe active alors ... 
//         event.target.classList.add('active')

//        let selector = event.target.getAttribute('data-filter')
//             // console.log(selector)
//             let imgs = document.querySelectorAll('.gallery-img-box')
//             imgs.forEach(img => {
//               if (selector === '*') {
//                 img.classList.remove('hide')
//                 // setTimeout(() => {
//                 //   img.classList.remove('destroy')
//                 // }, "800");
//                 document.querySelector('.gallery').classList.remove('gallerySwitchSmall')
//                 document.querySelector('.gallery').classList.remove('gallerySwitch')
//               } else if (img.getAttribute('data-filter') !== selector) {
//                 img.classList.add('hide')
//                 // setTimeout(() => {
//                 //   img.classList.add('destroy')
//                 // }, "800");
//                 if (event.target.getAttribute('data-filter') === '2020'){
//                   document.querySelector('.gallery').classList.remove('gallerySwitch')
//                   document.querySelector('.gallery').classList.add('gallerySwitchSmall')
//                 } else { 
//                   document.querySelector('.gallery').classList.remove('gallerySwitchSmall')
//                   document.querySelector('.gallery').classList.add('gallerySwitch')
//                 }
//               } else {
                
//                   img.classList.remove('hide')
//                   // setTimeout(() => {
//                   //   img.classList.remove('destroy')
//                   // }, "800");
                  
//               }
//             })
//             // if (selector != document.querySelector('.gallery img').getAttribute('data-filter')) {document.querySelector('.gallery img').classList.add('hide') }
//      } 
// }
// });








// window.addEventListener("scroll", function(){  
           
//        if (window.scrollY > 0)
//        {backToTop.classList.add('appear');} else {backToTop.classList.remove("appear");}   
// } );



  //   // Back to top button
  //     document.querySelector(window).scroll(function () {
  //     if (document.querySelector(window).scrollTop() > 300) {
  //       document.querySelector('.back-to-top').fadeIn('slow');
  //     } else {
  //       document.querySelector('.back-to-top').fadeOut('slow');
  //     }
  // });



// // init Isotope
// var iso = new Isotope( '.gallery', {
//   // main isotope options
//   itemSelector: 'img',
  
//   });


// ISOTOPE CODE

// Isotope.Item.prototype._create = function() {
//   // assign id, used for original-order sorting
//   this.id = this.layout.itemGUID++;
//   // transition objects
//   this._transn = {
//     ingProperties: {},
//     clean: {},
//     onEnd: {}
//   };
//   this.sortData = {};
// };

// Isotope.prototype.arrange = function( opts ) {
//   // set any options pass
//   this.option( opts );
//   this._getIsInstant();
//   // just filter
//   this.filteredItems = this._filter( this.items );
//   // flag for initalized
//   this._isLayoutInited = true;
// };



  // 	// Portfolio isotope filter
  //   document.querySelector(window).load(function() {
  //     var container = document.querySelector('.gallery');
  //     container.isotope({
  //         filter: '*',
  //         animationOptions: {
  //             duration: 750,
  //             easing: 'linear',
  //             queue: false
  //         }
  //     });
  //     document.querySelector('.gal').click(function() {
  //         // $('.cat .active').removeClass('active');
  //         // $(this).addClass('active');
  //         var selector = document.querySelector(this).attr('data-filter');
  //         container.isotope({
  //             filter: selector,
  //             animationOptions: {
  //                 duration: 750,
  //                 easing: 'linear',
  //                 queue: false
  //             }
  //         });
  //         return false;
  //     });

  // });

// // filter functions
// var filterFns = {
//   // show if number is greater than 50
//   numberGreaterThan50: function( itemElem ) {
//     var number = itemElem.querySelector('.number').textContent;
//     return parseInt( number, 10 ) > 50;
//   },
//   // show if name ends with -ium
//   ium: function( itemElem ) {
//     var name = itemElem.querySelector('.name').textContent;
//     return name.match( /ium$/ );
//   }
// };

// // bind filter button click
// var filtersElem = document.querySelector('.gallery-btns');
// filtersElem.addEventListener( 'click', function( event ) {
//   // only work with buttons
//   if ( !matchesSelector( event.target, 'button' ) ) {
//     return;
//   }
//   var filterValue = event.target.getAttribute('data-filter');
//   // use matching filter function
//   filterValue = filterFns[ filterValue ] || filterValue;
//   iso.arrange({ filter: filterValue });
// });

// // change is-checked class on buttons
// var buttonGroups = document.querySelectorAll('.button-group');
// for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
//   var buttonGroup = buttonGroups[i];
//   radioButtonGroup( buttonGroup );
// }

// function radioButtonGroup( buttonGroup ) {
//   buttonGroup.addEventListener( 'click', function( event ) {
//     // only work with buttons
//     if ( !matchesSelector( event.target, 'button' ) ) {
//       return;
//     }
//     buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
//     event.target.classList.add('is-checked');
//   });
// }










// CONTENT REVEAL

// let options = {
//        root: null,
//        rootMargin: '0px',
//        threshold: 0.1
//    }
//    // Register IntersectionObserver
//    let io = new IntersectionObserver(function(entries) {
//        entries.forEach((entry) => {
//          if (entry.intersectionRatio > 0) {
//            // if (entry.isIntersecting) {
//            // Add 'active' class if observation target is inside viewport
//            entry.target.classList.add("reveal");
//          } else {
//            // Remove 'active' class otherwise
//            entry.target.classList.remove("reveal");
//          }
//        });
//    }, options);
     
//      // Declares what to observe, and observes its properties.
//      let element = document.querySelectorAll(".elementjs");
//      element.forEach((el) => {
//        io.observe(el);
//      });
//      let elementright = document.querySelectorAll(".elementjsright");
//      elementright.forEach((elright) => {
//        io.observe(elright); 
//      });
//      let elementleft = document.querySelectorAll(".elementjsleft");
//      elementleft.forEach((elleft) => {
//        io.observe(elleft); 
//      });
   