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
    photo: "Photos/regHeadshot.png",
    name: "Reginald <br> Neal",
    role: "President",
    message:
      "I’ve been a lifelong resident of Maywood, proudly calling it home for 52 years. As a former business owner in the village, I carry a deep connection to the community. For the past 14 years, I’ve been employed by The Law Offices of Blitt and Gaines, P.C., where I currently serve as a supervisor, a role I’ve held for the last six years. In my personal life, I’ve had the joy of being happily married for 24 years to my wonderful wife, Kasonjia Neal. I’m a proud father of six children—four daughters (one of whom is sadly no longer with us) and two sons—and a devoted grandfather to eight beautiful grandchildren: five lovely granddaughters and three handsome grandsons.",
  },
  {
    photo: "Photos/anthony headshot.png",
    name: "Anthony <br> Lindsey",
    role: "Board Member",
    message:
      " Anthony is a dedicated board member of 13th Positive, committed to empowering communities through education, mentorship, and positive change. In addition to serving on the board, Anthony is also a passionate youth football and basketball coach, working closely with young athletes to develop their skills both on and off the field. With years of leadership experience and a strong commitment to fostering growth and opportunity, Anthony plays a crucial role in guiding the foundation’s strategic vision, ensuring its mission continues to inspire and uplift those it serves.",
  },
  {
    photo: "Photos/image0.jpeg",
    name: "Antwan <br> Coffie ",
    role: "Board Member",
    message:
      "Antwan serves as a board member for 13th Positive, an organization dedicated to fostering community development through education, mentorship, and impactful change. A lifelong Maywood resident of 47 years, he found the love of his life in the same community. His wife, a beloved educational leader, left a lasting impact even after her passing. He raised two daughters, Kennedy and Brittanie, both master’s degree holders with strong community ties, and now guides his son, Antwan Jr., who hopes to attend Proviso Math and Science Academy (PMSA). Antwan truly understanding the impact of family unity. In addition to his work with 13th Positive, Antwan has coached youth baseball & youth boxing, shaping future generations through sports and mentorship. Dedicated to honoring the Coffie name, he upholds his family’s legacy while contributing to a united, resilient future for Maywood.",
  },
  {
    photo: "Photos/New_user_icon-01.svg.png",
    name: "Clayton <br> Howard ",
    role: "Board Member",
    message:
      "Clayton Howard is a dedicated business owner with a lifelong passion for entrepreneurship. Over the years, he has built a successful career by pursuing innovative ventures and maintaining a strong work ethic. Clayton has been happily married for 25 years and is a proud father of three children and a grandchild. In addition to his business pursuits, Clayton is committed to giving back to the community, having volunteered in a juvenile detention program in 2008-09. His commitment to both his family and his business defines his approach to life, balancing his roles as a family man, entrepreneur, and mentor.",
  },
];

let resourcesHtml = ``;
let membersHtml = ``;
members.forEach((member, index) => {
  membersHtml += `
        <div class="memberCard">
          <div class="cardImg">
            <img src="${member.photo}" alt="" />
          </div>
          <div class="cardText">
            <p class="name">${member.name}</p>
            <p class="title">${member.role}</p>
            <button class="cardModalBtn" data-index="${index}">About</button>
          </div>

        </div>
        
        <div id="myModal-${index}" class="modal">
                    <span class="close-btn" data-index="${index}">&times;</span>

          <div class="modal-content">          
            <img src="${member.photo}" alt="" />
            <p class="name">${member.name}</p>
            <p class="title">${member.role}</p>
            <p class="memo">${member.message}</p>
      
          </div>
        </div>
  `;
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

document.querySelectorAll(".cardModalBtn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const index = e.target.getAttribute("data-index");
    document.getElementById(`myModal-${index}`).style.display = "block";
  });
});

document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const index = e.target.getAttribute("data-index");
    document.getElementById(`myModal-${index}`).style.display = "none";
  });
});

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

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
