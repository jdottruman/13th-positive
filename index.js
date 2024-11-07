const testimoney = [
  {
    photo: "Photos/New_user_icon-01.svg.png",
    name: "John Dow",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const resources = [
  {
    icons: "fa-solid fa-house",
    header: "Housing",
    firstLink: "https://www.thecha.org/residents/", // Added https://
    firstName: "Chicago Housing Authority (CHA)",

    secondLink: "https://chicago.gov/housing", // Added https://
    secondName: "City of Chicago Department of Housing",

    thirdLink: "https://chicagoparkdistrict.com", // Added https://
    thirdName: "Chicago Park District",
  },
  {
    icons: "fa-solid fa-apple-whole",
    header: "Food Assistance",
    firstLink: "https://abe.illinois.gov/access/",
    firstName: "Illinois Supplemental Nutrition Assistance Program (SNAP)",
    secondLink: "https://www.dhs.state.il.us/page.aspx?item=30513",
    secondName: "Women, Infants, and Children (WIC)",
    thirdLink:
      "https://www.findhelp.org/food/food-pantry--maywood-il?postal=60153",
    thirdName: "FindHelp.org(Food Pantry Finder)",
  },

  {
    icons: "fa-solid fa-briefcase",
    header: "Job Opportunities",
    firstLink:
      "https://www.goodwillchicago.com/help-for-employers/workforce-connection-centers",
    firstName: "Goodwill Workforce Connection Center",
    secondLink: "https://enroll.jobcorps.gov/",
    secondName: "U.S. Department of Labor - Job Corps",
    thirdLink:
      "https://ides.illinois.gov/jobs-workforce/programs/re-entry.html",
    thirdName: "Re-Entry Employment Service Program",
  },
];
let testimoneyHtml = ``;
let resourcesHtml = ``;

testimoney.forEach((test) => {
  resourcesHtml += `
  
      
        <div class="card">
          <svg
            height="100%"
            width="100%"
            class="border"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y2="0" x2="600" y1="0" x1="0" class="top"></line>
            <line y2="-960" x2="0" y1="320" x1="0" class="left"></line>
            <line y2="320" x2="-600" y1="320" x1="200" class="bottom"></line>
            <line y2="960" x2="200" y1="0" x1="200" class="right"></line>
          </svg>
          <div class="testimonyHeadshotCon">
            <img src="${test.photo}" alt="" />
          </div>
          <div class="testimonyCardText">
            <h1 class="testimonyCardName">${test.name}</h1>
            <p class="testimonyCardStory">${test.message}</p>
          </div>
        </div>
  
  
  `;
});
// document.querySelector(".testimonyCardContainer").innerHTML = resourcesHtml;

resources.forEach((resource) => {
  resourcesHtml += `

          <div class="resource section__paragraph">
          <i class="${resource.icons}"></i>
          <h3>${resource.header}</h3>
          <ul>
            <li>
              <p>
                <a
                  target="_blank"
                  href="${resource.firstLink}"
                >
                  ${resource.firstName}
                </a>
              </p>
            </li>

            <li>
              <p>
                <a
                  target="_blank"
                  href="${resource.secondLink}"
                >
                  ${resource.secondName}
                </a>
              </p>
            </li>

            <li>
              <p>
                <a
                  target="_blank"
                  href="${resource.thirdLink}"
                >
                 ${resource.thirdName}
                </a>
              </p>
            </li>
          </ul>
        </div>
  
  `;
});
// document.querySelector(".events-container").innerHTML = eventsHtml;

// document.querySelector(".resources-container").innerHTML = resourcesHtml;
//

const paragraphs = document.querySelectorAll(".section__paragraph");
const fromRightElements = document.querySelectorAll(".fromRight");

// const fromLeftElements = document.querySelectorAll(".fromLeft");

document.addEventListener("scroll", () => {
  fromRightElements.forEach((element) => {
    if (isInView(element)) {
      element.classList.add("fromRight--visible"); // Make sure this matches the CSS
    } else {
      element.classList.remove("fromRight--visible");
    }
  });
});

// document.addEventListener("scroll", () => {
//   fromLeftElements.forEach((element) => {
//     if (isInView(element)) {
//       element.classList.add("fromLeft--visible"); // Make sure this matches the CSS
//     } else {
//       element.classList.remove("fromLeft--visible");
//     }
//   });
// });

document.addEventListener("scroll", () => {
  paragraphs.forEach((paragraph) => {
    if (isInView(paragraph)) {
      paragraph.classList.add("section__paragraph--visible");
    } else {
      paragraph.classList.remove("section__paragraph--visible");
    }
  });
});

function isInView(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return rect.top < windowHeight - 150 && rect.bottom > 0;
}
// for about button
const aboutButtons = document.getElementsByClassName("aboutBtn");
for (let button of aboutButtons) {
  button.addEventListener("click", () => {
    window.location.href = "about.html";
  });
}

document.getElementById("payPalBtn").addEventListener("click", () => {
  window.location.href = "https://www.paypal.com"; // Replace with the correct PayPal link
});

// CashApp button click event
document.getElementById("cashAppBtn").addEventListener("click", () => {
  window.location.href = "https://cash.app"; // Replace with the correct CashApp link
});
document.getElementById("aboutBtn").addEventListener("click", () => {
  window.location.href = "about.html"; // Replace with the correct PayPal link
});
document.getElementById("takeActionBtn").addEventListener("click", () => {
  window.location.href = "#"; // Replace with the correct PayPal link
});
