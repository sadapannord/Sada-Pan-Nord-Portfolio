const visitorHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#firstName").value.trim();
  const lastName = document.querySelector("#lastName").value.trim();
  const company = document.getElementById("company").value;
  const email = document.getElementById("email").value;
  console.log(firstName, lastName, company, email);
  if (firstName && lastName && company && email) {
    const response = await fetch("/api/contactMe", {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, company, email }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("testing");
    } else {
      alert(response.statusText);
    }
  }
  console.log("fetch it failed");
};

document
  .querySelector(".visitorLog")
  .addEventListener("submit", visitorHandler);
