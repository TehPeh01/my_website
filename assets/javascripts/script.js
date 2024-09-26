document.addEventListener('includesLoaded', () => {
    // Select all navbar link elements
    const navLinksEls = document.querySelectorAll('.navbar-link');

    // Get the current page URL (the part after the last '/')
    const currentPage = window.location.pathname.split('/').pop();

    // Iterate over each nav link
    navLinksEls.forEach(navLink => {
        // Get the href from the parent anchor tag
        const linkHref = navLink.closest('a').getAttribute('href');

        // Check if the link matches the current page URL
        if (linkHref === currentPage) {
            // Remove 'active' class from any previously active element
            document.querySelector('.active')?.classList.remove('active');
            
            // Add 'active' class to the matched element
            navLink.classList.add('active');
        }
    });

    //SIDEBAR
    const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    // sidebar toggle functionality for mobile
    sidebarBtn.addEventListener("click", function () { 
        elementToggleFunc(sidebar); 
    });

    //PORTFOLIO
    // custom select variables
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");
    const filterBtn = document.querySelectorAll("[data-filter-btn]");

    select.addEventListener("click", function () { 
        elementToggleFunc(this); 
    });

    // add event in all select items
    for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {

            let selectedValue = this.innerText.toLowerCase();
            selectValue.innerText = this.innerText;
            elementToggleFunc(select);
            filterFunc(selectedValue);

        });
    }

    // filter variables
    const filterItems = document.querySelectorAll("[data-filter-item]");

    const filterFunc = function (selectedValue) {

        for (let i = 0; i < filterItems.length; i++) {

            if (selectedValue === "all") {
                filterItems[i].classList.add("active");
            } else if (selectedValue === filterItems[i].dataset.category) {
                filterItems[i].classList.add("active");
            } else {
                filterItems[i].classList.remove("active");
            }
        }
    }

    let lastClickedBtn = filterBtn[0];
    for (let i = 0; i < filterBtn.length; i++) {

        filterBtn[i].addEventListener("click", function () {
      
          let selectedValue = this.innerText.toLowerCase();
          selectValue.innerText = this.innerText;
          filterFunc(selectedValue);
      
          lastClickedBtn.classList.remove("active");
          this.classList.add("active");
          lastClickedBtn = this;
        });   
    }
});


