// Navigation Menu
$("#search-icon").click(function () {
  $(".nav").toggleClass("search");
  $(".nav").toggleClass("no-search");
  $(".search-input").toggleClass("search-active");
});

$(".menu-toggle").click(function () {
  $(".nav").toggleClass("mobile-nav");
  $(this).toggleClass("is-active");
});

// Hero Slider
$(document).ready(function () {
  $(".slideEventImg i:eq(1)").click(function () {
    if ($(".slideEventImg .OneSlide.activeImg").is(":last-of-type"))
      $(".slideEventImg img:first-of-type")
        .addClass("activeImg")
        .siblings()
        .removeClass("activeImg");
    else
      $(".slideEventImg .OneSlide.activeImg")
        .removeClass("activeImg")
        .next()
        .addClass("activeImg");
  });

  $(".slideEventImg i:eq(0)").click(function () {
    if ($(".slideEventImg .OneSlide.activeImg").is(":first-of-type"))
      $(".slideEventImg .OneSlide:last-of-type")
        .addClass("activeImg")
        .siblings()
        .removeClass("activeImg");
    else
      $(".slideEventImg .OneSlide.activeImg")
        .removeClass("activeImg")
        .prev()
        .addClass("activeImg");
  });
}); //ready

// Simple Modal component

$(document).ready(function () {
  $("#openModal").click(function () {
    $("#myModal").show();
  });

  $(".close").click(function () {
    $("#myModal").hide();
  });

  $(window).click(function (event) {
    if ($(event.target).is("#myModal")) {
      $("#myModal").hide();
    }
  });
});

// Carousel
$(document).ready(function () {
  const totalSlides = $(".slide").length;
  const visibleSlides = 3; // Number of slides to show at once
  let currentIndex = 0;

  // Clone slides to create an infinite effect
  $(".slides").append($(".slide").clone()); // Duplicate the set of slides

  function updateSlides() {
    const newTransform = `translateX(-${
      (currentIndex * 100) / visibleSlides
    }%)`;
    $(".slides").css("transform", newTransform);
  }

  function nextSlide() {
    currentIndex++;

    // If we reach the duplicated slides, reset index to the start.
    if (currentIndex === totalSlides) {
      currentIndex = 0;
      $(".slides").css("transitionDuration", "0s"); // Disable transition for instant jump
      updateSlides(); // Update to reset position without animation
      setTimeout(() => {
        $(".slides").css("transitionDuration", "0.5s"); // Re-enable transition after jump
      }, 20);
    } else {
      updateSlides();
    }
  }

  // Set interval to automatically switch slides every 3 seconds
  setInterval(nextSlide, 3000);
});

// Collapse FAQ
$(document).ready(function () {
  // Toggle the FAQ answer on question click
  $(".faq-question").click(function () {
    const answer = $(this).next(".faq-answer");
    answer.slideToggle(); // Slide up/down for smooth transition
    $(this)
      .find(".toggle-icon")
      .text($(this).find(".toggle-icon").text() === "+" ? "−" : "+"); // Change icon
  });
});









document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector(".carousel");
  let items = carousel.querySelectorAll(".item");
  let dotsContainer = document.querySelector(".dots");

  // Insert dots into the DOM
  items.forEach((_, index) => {
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.dataset.index = index;
    dotsContainer.appendChild(dot);
  });

  let dots = document.querySelectorAll(".dot");

  // Function to show a specific item
  function showItem(index) {
    items.forEach((item, idx) => {
      item.classList.remove("active");
      dots[idx].classList.remove("active");
      if (idx === index) {
        item.classList.add("active");
        dots[idx].classList.add("active");
      }
    });
  }

  // Event listeners for buttons
  document.querySelector(".prev").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index - 1 + items.length) % items.length);
  });

  document.querySelector(".next").addEventListener("click", () => {
    let index = [...items].findIndex((item) =>
      item.classList.contains("active")
    );
    showItem((index + 1) % items.length);
  });

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      let index = parseInt(dot.dataset.index);
      showItem(index);
    });
  });
});






