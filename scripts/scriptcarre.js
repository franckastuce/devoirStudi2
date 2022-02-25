//build square calculation
const result = document.querySelector('mousEvent');

document.getElementById('input').addEventListener("input", (e) => {
    result.innertHTML = `
    <div id="resultR">
    <span class="result"${result}>m²</span>
    `;
})
