var btns = document.getElementsByClassName("btn");
var textarea = document.getElementById("text");
var dropdown = document.querySelector("#dropdown");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    switch (this.innerText) {
      case "Bold":
        textarea.style.fontWeight == "bold"
          ? (textarea.style.fontWeight = "normal")
          : (textarea.style.fontWeight = "bold");
        break;
      case "Italic":
        textarea.style.fontStyle == "italic"
          ? (textarea.style.fontStyle = "normal")
          : (textarea.style.fontStyle = "italic");
        break;
      case "Underline":
        textarea.style.textDecoration == "underline"
          ? (textarea.style.textDecoration = "none")
          : (textarea.style.textDecoration = "underline");
        break;
      case "left":
        textarea.style.textAlign == "left"
          ? (textarea.style.textAlign = "right")
          : (textarea.style.textAlign = "left");
        break;
      case "Right":
        textarea.style.textAlign == "right"
          ? (textarea.style.textAlign = "left")
          : (textarea.style.textAlign = "right");
        break;
      case "Center":
        textarea.style.textAlign == "center"
          ? (textarea.style.textAlign = "left")
          : (textarea.style.textAlign = "center");
        break;
      case "Justify":
        textarea.style.textAlign == "justify"
          ? (textarea.style.textAlign = "left")
          : (textarea.style.textAlign = "justify");
        break;

      default:
        break;
    }
  });
}

dropdown.addEventListener("change", function () {


    switch (this.value) {
        case 'monospace':
            textarea.style.fontFamily = 'monospace'
            break;
        case 'serif':
            textarea.style.fontFamily = 'serif'
            break;
        case 'normal':
            textarea.style.fontFamily = 'sans-serif'
            break;
        case 'poppins':
            textarea.style.fontFamily = "Poppins"
            break;
    
        default:
            break;
    }
});
