(()=>{"use strict";function t(){let t=document.createElement("div");return t.id="about_page",t.setAttribute("class","nav_tab"),t.appendChild(function(){let t=document.createElement("img");return t.src="../media/kawaii_toast.png",t.alt="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/2-cute-kawaii-toast-and-toaster-valentina-hramov.jpg",t.id="cute_toast",t.class="bg-image",t}()),t.appendChild(function(){let t=document.createElement("p");return t.textContent="We are a small restaurant inside Vancouver, WA. Check out our menu via the buttons above!\n\nDisclaimer: We don't actually exist",t}()),t}function e(){document.querySelector(".nav_tab").remove(),a.style.backgroundColor="lightskyblue"}let n=document.querySelector("div#content");n.appendChild(function(){let t=document.createElement("ul"),e=document.createElement("li"),n=document.createElement("li"),a=document.createElement("li");return e.textContent="About",e.id="about_tab",n.textContent="Menu",n.id="menu_tab",a.textContent="Contact Us",a.id="contact_us_tab",t.appendChild(e),t.appendChild(n),t.appendChild(a),t}()),n.appendChild(t());let a=document.getElementById("about_tab");document.getElementById("about_tab").onclick=function(a){e(),n.appendChild(t()),document.getElementById("about_tab").style.backgroundColor="#3eaff5"}})();