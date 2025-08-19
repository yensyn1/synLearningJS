import "./styles.css";
import excursiones from "./const/excursiones.mjs";

const app = document.getElementById("app");
const excursionsCont = document.querySelector(".excursionesCont");
const excursionesToShow = [];

excursiones.map((ref) => {
  excursionesToShow.push(`
                          <div class="excursion">
                              <h1>${ref.name}</h1>
                              <h2>Con un precio de $${ref.precio} DOP</h2>
                              <p>${ref.descripcion}</p>
                          </div>
                          `);
});

excursionsCont.innerHTML = excursionesToShow.join("");
