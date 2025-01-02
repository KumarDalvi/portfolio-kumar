document.querySelector(".bars-box").classList.add("active");

const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active')
})

const activePage = () => {
  const header = document.querySelector("header");
  const barsBox = document.querySelector(".bars-box");

  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  barsBox.classList.remove("active");
  setTimeout(() => {
    barsBox.classList.add("active");
  }, 1100);

  sections.forEach((section) => {
    section.classList.remove("active");
  });

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active')
};

navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (!link.classList.contains("active")) {
      activePage();
      link.classList.add("active");

      setTimeout(() => {
        sections[idx].classList.add("active");
      }, 1100);
    }
  });
});

logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();

    navLinks[0].classList.add("active");

    setTimeout(() => {
      sections[0].classList.add("active");
    }, 1100);
  }
});

const resumeBtns = document.querySelectorAll(".resume-btn");

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume-detail");

    resumeBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    resumeDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    resumeDetails[idx].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".portfolio-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".portfolio-box .navigation .arrow-left"
);

let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".portfolio-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".portfolio-detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2
    }rem))`;

  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < 4) {
    index++;
    arrowRight.classList.remove("disabled");
    arrowLeft.classList.remove('disabled')
  } else {
    index = 5;
    arrowRight.classList.add("disabled");
  }
  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowLeft.classList.remove("disabled");
    arrowRight.classList.remove('disabled')
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }
  activePortfolio();
});


// Contact Me Form

// get elements from DOM
const contactForm = document.querySelector('#contactForm');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const userPhone = document.querySelector('#userPhone');
const emailSubject = document.querySelector('#emailSubject');
const userMessage = document.querySelector('#userMessage');

// get data from email JS
const publicKey = 'bhUKgWUi2fHzH5gKj';
const serviceID = 'service_tz0pspp';
const templateID = 'template_g73phyj';

// initialize email js with public key
emailjs.init(publicKey);

// add submit event to the form
contactForm.addEventListener("submit", (e) => {
  // Prevent default behavior
  e.preventDefault();

  // Change button text
  submit_btn.innerText = "Just a moment...";

  // Get all input field values
  const inputFields = {
    from_name: userName.value,
    from_email: userEmail.value,
    from_mob: userPhone.value,
    from_subject: subject.value,
    message: userMessage.value,
  };

  // Send the email
  emailjs
    .send(serviceID, templateID, inputFields)
    .then(() => {
      // Change button text
      submit_btn.innerText = "Message Sent Successfully";

      // Clear all input values
      userName.value = "";
      userEmail.value = "";
      userPhone.value = "";
      subject.value = "";
      userMessage.value = "";
    })
    .catch((error) => {
      // Console log the error
      console.log(error);
      // Change button text
      submit_btn.innerText = "Something Went Wrong";
    });
});
