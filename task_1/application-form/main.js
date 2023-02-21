import "./style.css";
import swal from "sweetalert";

document.querySelector("#app").innerHTML = `
<div>
<h1 class="title">Application for Software Engineering Role</h1>
<form
  action="https://sheetdb.io/api/v1/xuwu66iw1sbk8"
  method="post"
  id="sheetdb-form"
  class="form"
>
  <div class="form-group">
    <label for="firstName" class="label">First Name:</label>
    <input type="text" id="firstName" name="data[firstName]" class="input" />
  </div>

  <div class="form-group">
    <label for="lastName" class="label">Last Name:</label>
    <input type="text" id="lastName" name="data[lastName]" class="input" />
  </div>

  <div class="form-group">
    <label for="email" class="label">Email:</label>
    <input type="email" id="email" name="data[email]" class="input" />
  </div>

  <div class="form-group">
    <label for="phone" class="label">Phone Number:</label>
    <input type="tel" id="phone" name="data[phone]" class="input" />
  </div>

  <div class="form-group">
    <label for="portfolio" class="label">Portfolio Link:</label>
    <input type="url" id="portfolio" name="data[portfolio]" class="input" />
  </div>

  <div class="form-group">
    <label for="whyHire" class="label">Why should we hire you?:</label>
    <textarea id="whyHire" name="data[whyHire]" class="input"></textarea>
  </div>

  <button type="submit" class="button">Submit</button>
</form>
</div>
`;

var form = document.getElementById("sheetdb-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      swal(
        "Great!",
        "Form submitted successfully!",
        "success"
      );
    });
});
