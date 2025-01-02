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

// contact form using smtpjs.
const form = document.querySelector('form');
const fullname = document.getElementById("fullName");
const email = document.getElementById("emailID");
const phone = document.getElementById("phoneNumber");
const emailSub = document.getElementById("emailSubject");
const msgBody = document.getElementById("messageBody");


function sendEmail(){
  const bodyMessage= `Full Name: ${fullname.value}<br>  
  Email: ${email.value}<br>
  Phone: ${phone.value}<br>
  Message: ${msgBody.value}`

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "kumardalvi2019@gmail.com",
    Password : "9EE59BBB36AC3877504C6B3AA213CECB9429",
    To : 'kumardalvi2019@gmail.com',
    From : "kumardalvi2019@gmail.com",
    Subject : emailSub.value,
    Body : bodyMessage
  }).then(
  message => {
    if(message=="OK"){
      Swal.fire({
        title: "Success!",
        text: "Message Sent Succesfully!",
        icon: "success"
      });
      fullname.value="",
      email.value="",
      phone.value="",
      emailSub.value="",
      msgBody.value=""
    }
  }


  );
}

form.addEventListener("submit", e=>{
  e.preventDefault();
  sendEmail()
})
