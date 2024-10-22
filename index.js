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
      <button class="button-6">Register Now</button>
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
const members = [
  {
    photo: "Photos/regHeadshot.png",
    name: "Reginald <br> Neal",
    role: "President",
    message:
      "Reginald Neal has been a lifelong resident of Maywood, proudly calling it home for 52 years. As a former business owner in the village, he holds a deep connection to the community. For the past 14 years, he has been employed by The Law Offices of Blitt and Gaines, P.C., where he currently serves as a supervisor—a role he has held for the past six years. <br> In his personal life, Reginald has enjoyed 24 years of marriage with his wonderful wife, Kasonjia Neal. He is a proud father of six children—four daughters (one of whom is sadly no longer with us) and two sons—and a devoted grandfather to eight cherished grandchildren: five lovely granddaughters and three handsome grandsons.",
  },
  {
    photo: "Photos/anthony headshot.png",
    name: "Anthony <br> Lindsey",
    role: "Board Member",
    message:
      "Anthony** is a dedicated board member of the 13th Positive Foundation, committed to empowering communities through education, mentorship, and positive change. Alongside his board responsibilities, Anthony is a passionate youth football and basketball coach, mentoring young athletes to excel both on and off the field. With extensive leadership experience and a deep commitment to fostering growth and opportunity, Anthony plays a key role in shaping the foundation’s strategic vision, ensuring its mission inspires and uplifts those it serves.",
  },
  {
    photo: "Photos/image0.png",
    name: "Antwan <br> Coffie ",
    role: "Board Member",
    message:
      "Antwan serves as a board member of the 13th Positive Foundation, an organization focused on fostering community development through education, mentorship, and impactful change. A lifelong resident of Maywood for 47 years, he found the love of his life in the same community. His wife, a beloved educational leader, left a lasting legacy even after her passing. <br> Antwan raised two daughters, Kennedy and Brittanie—both master’s degree holders with strong community connections—and now mentors his son, Antwan Jr., who hopes to attend Proviso Math and Science Academy (PMSA). Deeply understanding the importance of family unity, Antwan remains committed to both his loved ones and the broader community. <br> In addition to his work with 13th Positive, he has coached youth baseball and youth boxing, shaping future generations through sports and mentorship. Dedicated to honoring the Coffie name, Antwan upholds his family’s legacy while contributing to a united, resilient future for Maywood.",
  },
  {
    photo: "Photos/chuck.png",
    name: "Charles M.<br> Stu ",
    role: "Board Member",
    message:
      "Clarence Frison is a barber, entrepreneur, and investor with roots going back four generations in Maywood. He has spent the majority of his life in the Proviso Township, supporting local initiatives to rebuild, restore, and reinvigorate the area and the children within it. With over 25 years as a neighborhood barber, Clarence has used his role to mentor from behind the chair and collaborate with grassroots organizations. His partnerships include participating in community clean-ups, fundraising, and supporting various efforts for community partners, reflecting his deep commitment to service and community growth.",
  },

  {
    photo: "Photos/clarence.png",
    name: "Clarence <br> Frison ",
    role: "Board Member",
    message:
      "Clarence Frison is a proud husband to his lovely wife, Kenya, with whom he has shared eight wonderful years of marriage. He is a dedicated father of ten children—seven boys and three girls—and a proud grandfather of 16. As a humble servant of the Lord Jesus Christ, Clarence is a resident of Mississippi, though he was born and raised in Maywood, IL. He has devoted his life to the service of others, embodying a commitment to uplifting those around him.",
  },
  {
    photo: "Photos/clay2.png",
    name: "Clayton <br> Howard ",
    role: "Board Member",
    message:
      "Clayton Howard is a passionate entrepreneur with a lifelong commitment to business excellence. Throughout his career, he has built a track record of success by embracing innovation and maintaining a strong work ethic. Happily married for 25 years, Clayton is a proud father of three and a devoted grandfather. <br> In addition to his business ventures, Clayton is dedicated to giving back to the community. He has volunteered in juvenile detention programs, mentoring young individuals and striving to make a positive impact. His life reflects a thoughtful balance between family, business, and service, embodying his roles as a loving family man, accomplished entrepreneur, and committed mentor.",
  },
  {
    photo: "Photos/james.png",
    name: "James<br> Truman",
    role: "Board Member",
    message:
      "James Truman is an active board member and Secretary of the 13th Positive Foundation, a community-driven organization dedicated to supporting the Proviso Township through food drives, toy drives, youth scholarships, and acts of kindness. <br> A proud Chicagoan, James is a devoted fan of the Bulls, Cubs, and Bears. He lives, works, and thrives in Proviso Township, demonstrating his deep connection to the community. A committed family man, he balances his roles as a husband, father, and 'pop-pop' to two grandsons while remaining devoted to his faith, family, friends, and service.",
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
            <button class="cardModalBtn button-6" data-index="${index}">About</button>
            <!-- HTML !-->

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
document.querySelector(".events-container").innerHTML = eventsHtml;

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
