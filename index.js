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
const members = [
  {
    photo: "Photos/New_user_icon-01.svg.png",
    name: "Anthony Lindsey",
    role: "Board Member",
    message:
      "Anthony is a dedicated board member of 13th Positive, committed to empowering communities through education, mentorship, and positive change. In addition to serving on the board, Anthony is also a passionate youth football and basketball coach, working closely with young athletes to develop their skills both on and off the field. With years of leadership experience and a strong commitment to fostering growth and opportunity, Anthony plays a crucial role in guiding the foundation’s strategic vision, ensuring its mission continues to inspire and uplift those it serves.",
  },
  {
    photo: "Photos/New_user_icon-01.svg.png",
    name: "John Doe",
    role: "Board Member",
    message: "Short Message/ description / memo",
  },
  {
    photo: "Photos/New_user_icon-01.svg.png",
    name: "John Doe",
    role: "Board Member",
    message: "Short Message/ description / memo",
  },
];

let resourcesHtml = ``;
let membersHtml = ``;
members.forEach((member) => {
  membersHtml += `
        <div class="memberCard">
          <div class="cardImg">
            <img src="${member.photo}" alt="" />
          </div>
          <div class="cardText">
            <p class="name">${member.name}</p>
            <p class="title">${member.role}</p>
            <p class="memo">${member.message}</p>
          </div>
        </div>`;
});

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

document.querySelector(".resources-container").innerHTML = resourcesHtml;
document.querySelector(".cardContainer").innerHTML = membersHtml;

const paragraphs = document.querySelectorAll(".section__paragraph");
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
  return (
    rect.bottom > 0 &&
    rect.top < (window.innerHeight - 150 || documentElement.clientHeight - 150)
  );
}
