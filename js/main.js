var isDark = false;
var btnElement = document.getElementById("theme-toggle-button");
var darkMode = document.getElementById("demo");
var nav = document.querySelector("nav"); 
var children = document.querySelectorAll("nav .nav-links a");
var click = document.getElementById("theme-toggle-button");
var about = document.getElementById("about");
var white = document.getElementById("white");
var colorText = document.querySelectorAll(".span span");
var textsection = document.querySelectorAll(".section p");
var boxBgcolor = document.querySelectorAll(".box-bgcolor div");
var boxground = document.querySelectorAll(".boxGround a");
var bgbatch = document.getElementById("bg-batch");
var firstCharacter = document.getElementById("firstCharacter");
var skillstitle = document.getElementById("skills-title");
var grid = document.querySelectorAll(".section3 div");
var portfolio = document.getElementById("portfolio");
var website =document.getElementById("website");
var Catch = document.getElementById("portfolio-grid");
var app = document.getElementById("app");
var design = document.getElementById("design");
var commerical = document.getElementById("commerical");
var allBtn = document.getElementById("allBtn");
var experience = document.querySelectorAll(".exp");
var experiencetitle = document.getElementById("experience-title");
var footer =document.getElementById("footer");
var changeBg =document.querySelector(".changeBg");
var textcolor = document.querySelectorAll(".textcolor span");
var changeFont = document.getElementById("changeFont");
var changeBgHead = document.querySelector(".color-bg div");
var changeBgHeadRed = document.querySelector(".red");
var bgImg = document.getElementById("bgImg");
click.innerHTML=`
       <div class="coll new">
    <div class="setting shape">
<i class="fa-solid fa-moon fa-sm" style="color: #6C64F2;"></i>  </div>
</div>

`

if (localStorage.getItem("theme") && localStorage.getItem("theme") == "true" ) {
    console.log(typeof JSON.parse( localStorage.getItem("theme"))  );
      darkMode.classList.add("theme");
       localStorage.setItem("theme", "true");

}else{
      darkMode.classList.remove("theme");
        localStorage.setItem("theme", "false");
}

btnElement.addEventListener("click" , function(){

    isDark = !isDark
    if(isDark){
        for(var i = 0 ; i < colorText.length ; i++){
          colorText[i].classList.add("black")  
        }
  for (var i = 0; i < experience.length; i++) {
      experience[i].classList.add("white" , "black")
  }
for (var i = 0; i < textcolor.length; i++) {
 textcolor[i].classList.add("black")
  
}

experiencetitle.classList.add("black");
footer.classList.remove("mainbg" )
for( var i = 0 ; i < grid.length ; i++){
     grid[i].classList.add("white" , "black")
}
changeBg.classList.add("white");
     portfolio.classList.add("white" , "black");
        firstCharacter.classList.add("black");
        bgbatch.classList.add("white");
        skillstitle.classList.add("black");
        bgbatch.children[1].classList.add("black")
        for(var i = 0 ; i < textsection.length ; i++){
               textsection[i].classList.add("black") 
        };
        for( var i = 0 ; i < boxBgcolor.length ; i++){
                  boxBgcolor[i].classList.add("white")
        }
        for( var i = 0 ; i < boxground.length ; i++){
          boxground[i].classList.add("white", "black");
        }

       white.classList.add("my-class")
       darkMode.classList.add("theme");
        nav.classList.add("theme");
about.classList.add("my-class");
       localStorage.setItem("theme", "true");
       click.innerHTML=`  
       <div class="coll">
    <div class="setting">
      <i class="fa-solid fa-sun fa-sm" style="color: rgb(241, 191, 8);"></i>
  </div>
</div>
       `
          for (var i = 0; i < children.length; i++) {
                           children[i].classList.add("color")
                }
    } 
    else{

footer.classList.add("mainbg" )
changeBg.classList.remove("white");
experiencetitle.classList.remove("black");
for (var i = 0; i < textcolor.length; i++) {
 textcolor[i].classList.remove("black")
  
}
  for (var i = 0; i < experience.length; i++) {
      experience[i].classList.remove("white" , "black")
    
  }
        for( var i = 0 ; i < boxground.length ; i++){
          boxground[i].classList.remove("white","black" );
        }
        skillstitle.classList.remove("black");
                bgbatch.classList.remove("white");
                firstCharacter.classList.remove("black");
                    bgbatch.children[1].classList.remove("black");
                         portfolio.classList.remove("white" , "black");


for( var i = 0 ; i < grid.length ; i++){
     grid[i].classList.remove("white" , "black");
}

        for( var i = 0 ; i <boxBgcolor.length ; i++){
                  boxBgcolor[i].classList.remove("white")
        }
          for(var i = 0 ; i < colorText.length ; i++){
          colorText[i].classList.remove("black")  
        }
           for(var i = 0 ; i < textsection.length ; i++){
               textsection[i].classList.remove("black") 
        }
               white.classList.remove("my-class")

        darkMode.classList.remove("theme");
        about.classList.remove("my-class");
                nav.classList.remove("theme");
                click.innerHTML=` 
        <div class="coll new">
    <div class="setting shape">
<i class="fa-solid fa-moon fa-sm" style="color: #6C64F2;"></i>  </div>
</div>

     `
          for (var i = 0; i < children.length; i++) {
                           children[i].classList.add("color")
                }
                for (var i = 0; i < children.length; i++) {
                       children[i].classList.remove("color")
                }
        localStorage.setItem("theme", "false");
    }

})
website.addEventListener("click" , function(){
  Catch.innerHTML=`
    <div
            class="portfolio-item group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300"
            data-category="web">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-1-BqicZ04C.webp"
                alt="modern e-commerce website design with purple gradient, shopping cart interface, product showcase" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>

            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">موقع ويب</span>
                <div class="flex gap-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">متجر إلكتروني متكامل</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                منصة تجارة إلكترونية حديثة مع نظام دفع آمن وإدارة المنتجات
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">React</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Node.js</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">MongoDB</span>
              </div>
            </div>
          </div>
    <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-primary transition-all duration-300"
            data-category="web">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-4-Czusdp5K.webp"
                alt="corporate business website with professional layout, blue and white color scheme, modern design" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">موقع ويب</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">موقع شركة استشارية</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                موقع احترافي لشركة استشارات مع نظام حجز المواعيد
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Next.js</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">TypeScript</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Prisma</span>
              </div>
            </div>
          </div>
     <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-primary transition-all duration-300"
            data-category="web">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-7-BXDNVwGk.webp"
                alt="restaurant website with food menu, online ordering system, appetizing food photography" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">موقع ويب</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">موقع مطعم وتوصيل</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                منصة طلب طعام مع نظام توصيل وتتبع الطلبات
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">React</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Express</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">PostgreSQL</span>
              </div>
            </div>
          </div>
  
  
  
  
  
  
  
  
  `
})
app.addEventListener("click", function(){
  Catch.innerHTML=`
   <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
            data-category="app">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-2-D0_acfF_.webp"
                alt="mobile task management app interface with colorful cards, todo list, modern UI design" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>

            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">تطبيق</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">تطبيق إدارة المهام</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                تطبيق ويب تفاعلي لإدارة المهام مع ميزات التعاون الجماعي
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Vue.js</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Firebase</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Tailwind</span>
              </div>
            </div>
          </div>
    <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
            data-category="app">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-5-ChqqtI-W.webp"
                alt="social media dashboard with analytics charts, user engagement metrics, modern interface design" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">تطبيق</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">لوحة تحليلات اجتماعية</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                منصة تحليل وإدارة حسابات التواصل الاجتماعي
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">React</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Chart.js</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">API</span>
              </div>
            </div>
          </div>
                <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
            data-category="app">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-8-BnHB_F_a.webp"
                alt="fitness tracking app interface with workout plans, progress charts, health metrics dashboard" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">تطبيق</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">تطبيق لياقة بدنية</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                تطبيق متكامل لتتبع التمارين والتغذية والتقدم
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">React Native</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Redux</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Firebase</span>
              </div>
            </div>
          </div>
  
  
  
  
  
  
  
  
  `
})
design.addEventListener("click" , function(){
  Catch.innerHTML=`
   <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
            data-category="design">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-3-uJsBXCgl.webp"
                alt="modern portfolio website design with minimalist layout, creative typography, pink and purple accents" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">تصميم</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                    aria-label="تصميم المشروع على Figma">
                    <i class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">موقع شخصي إبداعي</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                تصميم موقع شخصي بأسلوب عصري وألوان جريئة
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Figma</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">UI/UX</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Prototype</span>
              </div>
            </div>
          </div>
   <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
            data-category="design">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-9-Q6q-wpwU.webp"
                alt="mobile app ui design mockup with colorful screens, modern interface, user experience showcase" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">تصميم</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                    aria-label="تصميم المشروع على Figma">
                    <i class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">تصميم تطبيق جوال</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                تصميم UI/UX كامل لتطبيق جوال متعدد الوظائف
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Figma</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Adobe XD</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Sketch</span>
              </div>
            </div>
          </div>
  
  
  
  `
})
commerical.addEventListener("click" , function(){

  Catch.innerHTML=`
     <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
            data-category="ecommerce">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-6-C9bxzsei.webp"
                alt="fashion e-commerce website with luxury product display, elegant design, shopping experience" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">تجارة</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">متجر أزياء فاخر</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                منصة تسوق راقية للأزياء مع تجربة مستخدم استثنائية
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Next.js</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Stripe</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Sanity</span>
              </div>
            </div>
          </div>
  `
})
allBtn.addEventListener("click" , function(){
  Catch.innerHTML=`
   <div
            class="portfolio-item group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300"
            data-category="web">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-1-BqicZ04C.webp"
                alt="modern e-commerce website design with purple gradient, shopping cart interface, product showcase" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>

            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">موقع ويب</span>
                <div class="flex gap-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">متجر إلكتروني متكامل</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                منصة تجارة إلكترونية حديثة مع نظام دفع آمن وإدارة المنتجات
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">React</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Node.js</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">MongoDB</span>
              </div>
            </div>
          </div> 




        <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
            data-category="app">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-2-D0_acfF_.webp"
                alt="mobile task management app interface with colorful cards, todo list, modern UI design" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>

            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">تطبيق</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">تطبيق إدارة المهام</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                تطبيق ويب تفاعلي لإدارة المهام مع ميزات التعاون الجماعي
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Vue.js</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Firebase</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Tailwind</span>
              </div>
            </div>
          </div> 

           <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
            data-category="design">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-3-uJsBXCgl.webp"
                alt="modern portfolio website design with minimalist layout, creative typography, pink and purple accents" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">تصميم</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                    aria-label="تصميم المشروع على Figma">
                    <i class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">موقع شخصي إبداعي</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                تصميم موقع شخصي بأسلوب عصري وألوان جريئة
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Figma</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">UI/UX</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Prototype</span>
              </div>
            </div>
          </div> 

          <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-primary transition-all duration-300"
            data-category="web">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-4-Czusdp5K.webp"
                alt="corporate business website with professional layout, blue and white color scheme, modern design" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">موقع ويب</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">موقع شركة استشارية</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                موقع احترافي لشركة استشارات مع نظام حجز المواعيد
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Next.js</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">TypeScript</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Prisma</span>
              </div>
            </div>
          </div> 

           <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
            data-category="app">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-5-ChqqtI-W.webp"
                alt="social media dashboard with analytics charts, user engagement metrics, modern interface design" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">تطبيق</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">لوحة تحليلات اجتماعية</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                منصة تحليل وإدارة حسابات التواصل الاجتماعي
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">React</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Chart.js</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">API</span>
              </div>
            </div>
          </div> 

           <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
            data-category="ecommerce">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-6-C9bxzsei.webp"
                alt="fashion e-commerce website with luxury product display, elegant design, shopping experience" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">تجارة</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">متجر أزياء فاخر</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                منصة تسوق راقية للأزياء مع تجربة مستخدم استثنائية
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Next.js</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Stripe</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Sanity</span>
              </div>
            </div>
          </div>

           <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-primary transition-all duration-300"
            data-category="web">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-7-BXDNVwGk.webp"
                alt="restaurant website with food menu, online ordering system, appetizing food photography" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">موقع ويب</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">موقع مطعم وتوصيل</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                منصة طلب طعام مع نظام توصيل وتتبع الطلبات
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">React</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Express</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">PostgreSQL</span>
              </div>
            </div>
          </div>

           <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
            data-category="app">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-8-BnHB_F_a.webp"
                alt="fitness tracking app interface with workout plans, progress charts, health metrics dashboard" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">تطبيق</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                    aria-label="كود المشروع على GitHub">
                    <i class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">تطبيق لياقة بدنية</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                تطبيق متكامل لتتبع التمارين والتغذية والتقدم
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">React Native</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Redux</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Firebase</span>
              </div>
            </div>
          </div> 

           <div
            class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
            data-category="design">
            <div class="relative h-72 overflow-hidden">
              <img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" decoding="async" src="./img/portfolio-9-Q6q-wpwU.webp"
                alt="mobile app ui design mockup with colorful screens, modern interface, user experience showcase" />
              <div
                class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">تصميم</span>
                <div class="flex space-x-2">
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                    aria-label="معاينة المشروع">
                    <i class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                  <a href="#"
                    class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                    aria-label="تصميم المشروع على Figma">
                    <i class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                      aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <h3 class="text-2xl font-bold mb-2">تصميم تطبيق جوال</h3>
              <p class="text-slate-500 dark:text-slate-400 mb-4">
                تصميم UI/UX كامل لتطبيق جوال متعدد الوظائف
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Figma</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Adobe XD</span>
                <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs">Sketch</span>
              </div>
            </div>
          </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  `
})
changeFont.addEventListener("click" , function(){
 document.body.classList.add("changFont")
})
changeFont.nextElementSibling.addEventListener("click" , function(){
   document.body.classList.remove("changFont")
})

  changeBgHead.addEventListener("click" , function(){
bgImg.classList.replace("redbg" , "bg-img");
  })
  changeBgHeadRed.addEventListener("click" , function(){
    bgImg.classList.replace("bg-img" , "redbg");

  })



