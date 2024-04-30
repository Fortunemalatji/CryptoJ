const active = document.getElementsByTagName("active");

function coloract(){  
        active.display.color = '#ec5';
}

coloract();

function toggleDropdown() {
        var dropdown = document.getElementById("myDropdown");
        if (dropdown.style.display === "none") {
          dropdown.style.display = "block";
        } else {
          dropdown.style.display = "none";
        }
      }

function myFunction() {
 var x = document.getElementById("myHeader");
 if (x.className === "header-bottom") {
 x.className += " responsive";
} else {
 x.className = "header-bottom";
}
 }
 // JavaScript code
document.addEventListener("DOMContentLoaded", function() {
        var menuIcon = document.querySelector('.menu-icon');
        var navbar = document.querySelector('.navbar');
    
        // Add event listener to the menu icon
        menuIcon.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    });
// JavaScript code
function togglebar() {
        var navbar = document.getElementById('navbar');
    
        // Toggle the visibility of the navigation menu
        if (navbar.style.display === 'block') {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'block';
        }
    }

    function myFunction() {
        var x = document.getElementById("navbar");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
        
      document.querySelector('#contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.elements.name.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
      });
    

      function checkVisibility() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        const windowHeight = window.innerHeight;
  
        galleryItems.forEach(item => {
          const position = item.getBoundingClientRect().top;
          if (position < windowHeight * 0.9) {
            item.classList.add('show');
          } else {
            item.classList.remove('show');
          }
        });
      }
  
      window.addEventListener('scroll', checkVisibility);
      window.addEventListener('resize', checkVisibility);
      window.addEventListener('load', checkVisibility);

      //Testimonies
      document.addEventListener("DOMContentLoaded", function () {
        const testimonials = document.querySelectorAll(".testimonial");
        let currentTestimonialIndex = 0;
    
        function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                if (i === index) {
                    testimonial.classList.add("active");
                } else {
                    testimonial.classList.remove("active");
                }
            });
        }
    
        function nextTestimonial() {
            currentTestimonialIndex++;
            if (currentTestimonialIndex >= testimonials.length) {
                currentTestimonialIndex = 0;
            }
            showTestimonial(currentTestimonialIndex);
        }
    
        function prevTestimonial() {
            currentTestimonialIndex--;
            if (currentTestimonialIndex < 0) {
                currentTestimonialIndex = testimonials.length - 1;
            }
            showTestimonial(currentTestimonialIndex);
        }
    
        document.querySelector(".next-arrow").addEventListener("click", nextTestimonial);
        document.querySelector(".prev-arrow").addEventListener("click", prevTestimonial);
    
        setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds (adjust as needed)
    });
        
    