const body = document.querySelector("body"),
        toggle = document.querySelector(".toggle");

      let getMode = localStorage.getItem("mode");
      if (getMode && getMode === "dark") {
        body.classList.add("dark");
        toggle.classList.add("active");
      }

      toggle.addEventListener("click", () => {
        body.classList.toggle("dark");

        if (!body.classList.contains("dark")) {
          return localStorage.setItem("mode", "light");
        }
        localStorage.setItem("mode", "dark");
      });

      toggle.addEventListener("click", () => toggle.classList.toggle("active"));

      let bg =document.getElementById("bg");
      let moon =document.getElementById("moon");
      let mountain =document.getElementById("mountain");
      let road =document.getElementById("road");
      let text =document.getElementById("text");
      window.addEventListener("scroll", function() {
        var value = window.scrollY; /* ฟังชันเลื่อนmouse*/
        bg.style.top = value * 0.5 + "px";
        moon.style.top = -value * 0.5 + "px";
        mountain.style.top = -value * 0.15 + "px";
        road.style.top = -value * 0.15 + "px";
        text.style.top = value * 1 + "px";

      })
