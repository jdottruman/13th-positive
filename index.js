const events = [
  {
    title: "Tester Event",
    date: "10/10/2024",
    location: "Maywood,IL",
    memo: "dummy text dummy text dummy text dummy text dummy text",
  },
];

let eventsHtml = ``;

events.forEach((event) => {
  eventsHtml += `
    <article class="event-card">
      <h3>${event.title}</h3>
      <p><strong>Date:</strong>${event.date}</p>
      <p><strong>Location:</strong>${event.location}</p>
      <p>${event.memo}</p>
    </article>



`;
});

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

let resourcesHtml = ``;

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

const fromLeftElements = document.querySelectorAll(".fromLeft");

document.addEventListener("scroll", () => {
  fromRightElements.forEach((element) => {
    if (isInView(element)) {
      element.classList.add("fromRight--visible"); // Make sure this matches the CSS
    } else {
      element.classList.remove("fromRight--visible");
    }
  });
});

document.addEventListener("scroll", () => {
  fromLeftElements.forEach((element) => {
    if (isInView(element)) {
      element.classList.add("fromLeft--visible"); // Make sure this matches the CSS
    } else {
      element.classList.remove("fromLeft--visible");
    }
  });
});

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
