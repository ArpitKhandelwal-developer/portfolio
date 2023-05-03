AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: " Machine Learning Enginner",
    cardImage: "assets/images/experience-page/Coincent_PNG.png",
    place: "Coincent",
    time: "(Dec, 2022 - Feb, 2023)",
    desp: "<li>Worked as Machine Learning Enginner.</li> <li>Prepare For Microsoft AI 900.</li> <li>Learned Machine Learning.</li>",
  },
  {
    title: "Python Developer Intern",
    cardImage: "assets/images/experience-page/codeclause.png",
    place: "CodeClause",
    time: "(Jan - Feb, 2023)",
    desp: "<li>Worked as Python Intern.</li><li>Worked on Plagiarism Checker in Python , Music Player In Python , Url Shortner In Python , Voice Assistant Using Python .</li>",
  },
 
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
