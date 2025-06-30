
    function switchTab(selected) {
      document.querySelectorAll('.content').forEach(c => c.classList.remove('active'));
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.getElementById(selected).classList.add('active');
      event.target.classList.add('active');
    }

  function scrollToDiv() {
    document.getElementById("targetDiv").scrollIntoView({ behavior: "smooth" });
  }
 function scrollToprojects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }
function scrollToeducation() {
    document.getElementById("education").scrollIntoView({ behavior: "smooth" });
  }