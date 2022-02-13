AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Ultimate AWS Certified Cloud Practitioner",
    cardImage: "assets/images/education-page/cloudpract.jpg",
    moocLink: "https://www.udemy.com/share/103aFP3@4ICMySP3PF5E0zUGUpBM2AqIaQziJV9R8Sxr0Pfa8Bx89xf8U7HoahcDDIWSkUS-/",
  },
  {
    title: "Ultimate AWS Certified Solutions Architect Associate",
    cardImage: "assets/images/education-page/SolArch.jpg",
    moocLink: "https://www.udemy.com/share/102CZ73@PpU1b7sSfNtSHyF27NaGk5jVDo5dSnsFL1nwrHQfQUtg7zzToCIhAQNjCRtgbR4e/",
  },
  {
    title: "Docker Mastery: with Kubernetes +Swarm from a Docker Captain",
    cardImage: "assets/images/education-page/docker.jpg",
    moocLink: "https://www.udemy.com/share/101WlG3@iOmubBC10A0zEwRcfNyxd7g-YtgWSngvJOQoMt78CYzPFU17AHZ6jDo_rqTIumcE/",
  },
  {
    title: "Certified Kubernetes Administrator ",
    cardImage: "assets/images/education-page/kub.jpg",
    moocLink: "https://www.udemy.com/share/101WlG3@iOmubBC10A0zEwRcfNyxd7g-YtgWSngvJOQoMt78CYzPFU17AHZ6jDo_rqTIumcE/",
  },
  {
    title: "CompTIA Security+",
    cardImage: "assets/images/education-page/sec+.jpg",
    moocLink: "https://www.udemy.com/share/101WlG3@iOmubBC10A0zEwRcfNyxd7g-YtgWSngvJOQoMt78CYzPFU17AHZ6jDo_rqTIumcE/",
  },
  {
    title: "CompTIA Network+",
    cardImage: "assets/images/education-page/net+.jpg",
    moocLink: "https://www.udemy.com/share/101WlG3@iOmubBC10A0zEwRcfNyxd7g-YtgWSngvJOQoMt78CYzPFU17AHZ6jDo_rqTIumcE/",
  },
  {
    title: "The Complete Web Development Bootcamp",
    cardImage: "assets/images/education-page/webdev.jpg",
    moocLink: "https://www.udemy.com/share/101WlG3@iOmubBC10A0zEwRcfNyxd7g-YtgWSngvJOQoMt78CYzPFU17AHZ6jDo_rqTIumcE/",
  },
  {
    title: "The Complete JavaScript Course",
    cardImage: "assets/images/education-page/js.jpg",
    moocLink: "https://www.udemy.com/share/101WlG3@iOmubBC10A0zEwRcfNyxd7g-YtgWSngvJOQoMt78CYzPFU17AHZ6jDo_rqTIumcE/",
  },
  {
    title: "The Complete Object Oriented PHP Developer Course",
    cardImage: "assets/images/education-page/php.jpg",
    moocLink: "https://www.udemy.com/share/101WlG3@iOmubBC10A0zEwRcfNyxd7g-YtgWSngvJOQoMt78CYzPFU17AHZ6jDo_rqTIumcE/",
  },
  {
    title: "Complete Python Bootcamp",
    cardImage: "assets/images/education-page/python.jpg",
    moocLink: "https://www.udemy.com/share/101WlG3@iOmubBC10A0zEwRcfNyxd7g-YtgWSngvJOQoMt78CYzPFU17AHZ6jDo_rqTIumcE/",
  },

];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
