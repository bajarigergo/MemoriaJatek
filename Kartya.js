export default class Kartya {
  #kep = "";
  #allapot = false; // true -> látható, false -> háttér látható
  #szuloElem;
  #kepElem;
  constructor(kep, szuloElem) {
    this.#kep = kep;
    this.#szuloElem = szuloElem;
    this.#allapot = false;
    this.megjelenit();
    this.#kepElem = this.#szuloElem.children("div:last-child").children("img");
    console.log(this.#kepElem);
    this.#kepElem.on("click", () => {
      this.setAllapot(true);
      this.#trigger("kapcsol");
    });
  }
  #trigger() {
    const e = new CustomEvent(esemenynev, { detail: this.#kep });
    window.dispatchEvent(e);
  }
  megjelenit() {
    let txt = `<div class="card col-sm-3">
                <img src="kepek/hatter.jpg" alt="kép">
            </div>`;
    this.#szuloElem.append(txt);
  }
  setAllapot(ertek) {
    if (ertek == true || ertek == false) {
      this.#allapot = ertek;
    }
    this.#felfordit();
  }
  #felfordit() {
    if (this.#allapot) {
      this.#kepElem.attr("src", this.#kep);
    } else {
      this.#kepElem.attr("src", "kep/hatter.jpg");
    }
  }
}
