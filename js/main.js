"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

// tabs
var tabsBtn = document.querySelectorAll(".tabs__nav-btn");
var tabsItems = document.querySelectorAll(".tabs__item");
tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    var currentBtn = item;
    var tabId = currentBtn.getAttribute("data-tab");
    var currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });
      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });
      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

document.querySelector('.tabs__nav-btn').click(); // burger

var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
//# sourceMappingURL=main.js.map
