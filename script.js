document.getElementById("openFolder").addEventListener("click", () => {
  document.getElementById("caseSection").classList.remove("hidden");

  document.getElementById("caseText").textContent = "";
  document.getElementById("analysisText").textContent = "";

  typeText("caseText", 
    "Patient Ava Reynolds (26) was found unconscious in the hospital restroom at 08:42. No ID found. CPR performed for 2 minutes. Currently in ICU under monitoring."
  );

  typeText("analysisText", 
    "Likely cause: blunt force trauma or possible undiagnosed neurological condition. Pupils were non-reactive. Staff reports indicate potential foul play. MRI pending."
  );

  document.getElementById("caseDate").textContent = new Date().toLocaleDateString();
});

function typeText(id, text) {
  let el = document.getElementById(id);
  let i = 0;
  let interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 30);
}

function submitDiagnosis() {
  const input = document.getElementById("diagnosis").value;
  if (input.trim()) {
    document.getElementById("userFeedback").textContent = "Your input: " + input;
    console.log("Diagnosis submitted:", input);
  }
}
