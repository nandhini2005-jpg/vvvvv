// ===== Navbar Active on Scroll =====
let sections = document.querySelectorAll("section, .about, .menu, .gallery, .review, .order, .team");
let navLinks = document.querySelectorAll("nav ul li a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (id && top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        let target = document.querySelector("nav ul li a[href*=" + id + "]");
        if (target) target.classList.add("active");
      });
    }
  });
};

// ===== Small Card (Favourite Button) =====
let favButtons = document.querySelectorAll(".small_card i");
favButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    if (btn.classList.contains("active")) {
      btn.style.color = "#fac031";
    } else {
      btn.style.color = "#000";
    }
  });
});

// ===== Gallery Button Click =====
let galleryBtns = document.querySelectorAll(".gallery_btn");
galleryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("You clicked: " + btn.innerText + " 🎨");
  });
});

// ===== Review Button Click =====
let reviewBtns = document.querySelectorAll(".gallery_btn");
galleryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("You clicked: " + btn.innerText + " 🎨");
  });
});


// ===== Review Card Hover Social Icons Animation =====
let reviewCards = document.querySelectorAll(".review_card");
reviewCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    let socials = card.querySelectorAll(".review_social i");
    socials.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.opacity = "1";
        icon.style.transform = "translateY(-8px)";
      }, index * 100);
    });
  });

  card.addEventListener("mouseleave", () => {
    let socials = card.querySelectorAll(".review_social i");
    socials.forEach(icon => {
      icon.style.opacity = "0";
      icon.style.transform = "translateY(0)";
    });
  });
});

// ===== Order Form Validation =====
let orderForm = document.querySelector(".order form");
if (orderForm) {
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputs = orderForm.querySelectorAll("input");
    let valid = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        valid = false;
      } else {
        input.style.border = "2px solid #fac031";
      }
    });

    if (valid) {
      alert("✅ Order placed successfully! 🎉");
      orderForm.reset();
    } else {
      alert("⚠️ Please fill all fields!");
    }
  });
}

// ===== Scroll to Top Button =====
let scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.fontSize = "18px";
scrollBtn.style.background = "#fac031";
scrollBtn.style.color = "#fff";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1001";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});