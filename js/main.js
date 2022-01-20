"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
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

document.querySelector('.tabs__nav-btn').click();
//# sourceMappingURL=main.js.map
