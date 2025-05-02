
<h2 id="introText"></h2>

  const text = "Hey,Hey, I'm BAHATI ANDY"
  "Welcome to my portfolio! I'm a software development student.";
  
  let i = 0;
  const speed = 50; // speed in ms

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("introText").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  window.onload = typeWriter;

