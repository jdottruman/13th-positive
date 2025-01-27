const testimonies = [
  {
    name: "Maria Gonzalez",
    message:
      "I can’t thank 13th Positive Foundation enough for stepping in when my family was struggling. They provided groceries when we had nothing in the fridge. Their kindness and support kept us going through a very tough time.",
  },
  {
    name: "James Carter",
    message:
      "When I lost my job during the pandemic, the 13th Positive Foundation was there for me. They helped with rent and gave us food vouchers to feed my kids. I don’t know what I would have done without them.",
  },
  {
    name: "Tiffany Brown",
    message:
      "Christmas was looking bleak for my kids last year, but the 13th Positive Foundation gave us hope. The toys they provided brought huge smiles to my kids’ faces. It was a holiday we will never forget.",
  },
  {
    name: "Michael Smith",
    message:
      "As a first responder during COVID-19, I worked long hours and often felt overlooked. The 13th Positive Foundation sent care packages and meals to our station, reminding us that we were appreciated. It meant the world to us.",
  },
  {
    name: "Ashley Robinson",
    message:
      "My family was hit hard by the pandemic, and we didn’t have enough money for rent. The monetary assistance we received from the 13th Positive Foundation gave us breathing room to get back on our feet. Thank you for being our lifeline.",
  },
  {
    name: "Robert Jackson",
    message:
      "After Hurricane Ida, we had nowhere to turn. The 13th Positive Foundation provided clothes, food, and even temporary shelter. They truly care about the community, and I’ll never forget what they did for us.",
  },
  {
    name: "Jessica Nguyen",
    message:
      "My daughter was so worried about not getting presents for Christmas. Thanks to the 13th Positive Foundation’s toy drive, she woke up to a beautiful holiday morning filled with joy. I’m forever grateful.",
  },
  {
    name: "Eric Williams",
    message:
      "I got sick with COVID-19 and couldn’t leave my house. 13th Positive Foundation delivered groceries and essentials straight to my door. They went above and beyond to make sure I was okay.",
  },

  {
    name: "Sandra Miller",
    message:
      "During the holidays, I wasn’t sure how I’d make ends meet, let alone buy gifts. The 13th Positive Foundation’s toy drive was a blessing for my three kids. Their generosity is something I’ll always treasure.",
  },
  {
    name: "Kevin Brooks",
    message:
      "I was injured at work and out of a paycheck for weeks. 13th Positive Foundation stepped in to help pay for my medications and groceries. They gave me hope when I was feeling hopeless.",
  },
  {
    name: "Nicole Taylor",
    message:
      "Last winter, I didn’t know how I would keep my family warm. 13th Positive Foundation provided coats and blankets, along with food packages. Their compassion made all the difference.",
  },
  {
    name: "Jason Thomas",
    message:
      "As a paramedic during COVID, I was exhausted and stretched thin. The meals and support provided by the 13th Positive Foundation reminded me that people cared. It gave me the strength to keep going.",
  },
  {
    name: "Angela White",
    message:
      "My son’s birthday falls around Christmas, and I couldn’t afford anything for him. The 13th Positive Foundation surprised us with toys and gifts. Seeing my son happy again was the best gift I could ever receive.",
  },
  {
    name: "David Perez",
    message:
      "After losing my job, I was in tears trying to figure out how to feed my family. The 13th Positive Foundation didn’t just provide food—they gave us hope that things would get better.",
  },
  {
    name: "Lisa Green",
    message:
      "When I caught COVID-19, I was alone and scared. The 13th Positive Foundation sent over care packages and checked in regularly. They treated me like family, and I will never forget their kindness.",
  },
];

const testimoneyText = document.getElementById("testimonyText");

// Clear the element
testimonyText.innerHTML = "";

// Loop through each testimony and add it to the HTML
testimonies.forEach((testimony) => {
  const testimonyDiv = document.createElement("div");
  testimonyDiv.classList.add("testimony");

  testimonyDiv.innerHTML = `
    <h3>${testimony.name}</h3>
    <p>${testimony.message}</p>
  `;

  testimonyText.appendChild(testimonyDiv);
});

// Get modal elements
const modal = document.getElementById("testimonyModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

// Open the modal
openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close the modal when clicking the close button
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
