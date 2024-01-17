type TTpnoteForm = {
  div_affichage: HTMLElement;
  div_formulaire: HTMLElement;
  select_salles: HTMLSelectElement;
  btn_ajouter: HTMLInputElement;
  btn_retirer: HTMLInputElement;
  edt_nom: HTMLInputElement;
  chk_info: HTMLInputElement;
  edt_machines: HTMLInputElement;
  select_batiment: HTMLSelectElement;
  radio_rdc: HTMLInputElement;
  radio_premier: HTMLInputElement;
  radio_deuxième: HTMLInputElement;
  radio_troisième: HTMLInputElement;
  btn_valider: HTMLInputElement;
  btn_annuler: HTMLInputElement;
};

class VueTPnote {
  private _form: TTpnoteForm;

  init(form: TTpnoteForm) {
    this._form = form;
    this.form.btn_ajouter.onclick = function (): void {
      vueTPnote.ajouterLigne();
    };
    this.form.btn_retirer.onclick = function (): void {
      vueTPnote.supprimerLigne();
    };
    this.form.btn_valider.onclick = function (): void {
      vueTPnote.validerSaisie();
    };
    this.form.btn_annuler.onclick = function (): void {
      vueTPnote.annuler();
    };
    this._form.div_formulaire.hidden = true;
  }

  get form(): TTpnoteForm {
    return this._form;
  }

  supprimerLigne(): void {
    const noLigne = this.form.select_salles.selectedIndex;
    if (noLigne > -1) {
      this.form.select_salles.remove(noLigne);
    }
  }

  ajouterLigne(): void {
    this.form.div_formulaire.hidden = false;
    this.form.div_affichage.style.pointerEvents = "none";
  }

  validerSaisie(): void {
    const nomSalle: string = this.form.edt_nom.value.trim();
    const batiment: string = this.form.select_batiment.value;
    const etage: string = this._getEtageSelectionne();
    const estSalleInfo: boolean = this.form.chk_info.checked;
    const nbMachines: string = this.form.edt_machines.value;

    let erreur: string = "";
    if (nomSalle.length === 0) {
      erreur += "Nom de la salle à renseigner<br>";
    }
    if (batiment.length === 0) {
      erreur += "Bâtiment à sélectionner<br>";
    }
    if (!etage) {
      erreur += "Étage à sélectionner<br>";
    }
    if (estSalleInfo && nbMachines.length === 0) {
      erreur += "Nombre de machines à renseigner<br>";
    }

    if (erreur.length === 0) {
      let descriptionSalle = `${nomSalle}, bat ${batiment}, ${etage}`;
      if (estSalleInfo) {
        descriptionSalle += `, salle informatique : ${nbMachines} machines`;
      } else {
        descriptionSalle += `, avec vidéo projecteur`;
      }
      this.form.select_salles.options.add(
        new Option(descriptionSalle, nomSalle),
      );

      this.form.edt_nom.value = "";
      this.form.select_batiment.selectedIndex = 0;
      this.form.radio_rdc.checked = false;
      this.form.radio_premier.checked = false;
      this.form.radio_deuxième.checked = false;
      this.form.radio_troisième.checked = false;
      this.form.chk_info.checked = false;
      this.form.edt_machines.value = "";

      this.form.div_formulaire.hidden = true;
      this.form.div_affichage.style.pointerEvents = "auto";
    } else {
      alert("Erreur dans le formulaire: " + erreur);
    }
  }

  private _getEtageSelectionne(): string {
    if (this._form.radio_rdc.checked) return "Rdc";
    if (this._form.radio_premier.checked) return "1er étage";
    if (this._form.radio_deuxième.checked) return "2ème étage";
    if (this._form.radio_troisième.checked) return "3ème étage";
    return "";
  }

  annuler(): void {
    this.form.edt_nom.value = "";
    this.form.select_batiment.selectedIndex = 0;
    this.form.radio_rdc.checked = false;
    this.form.radio_premier.checked = false;
    this.form.radio_deuxième.checked = false;
    this.form.radio_troisième.checked = false;
    this.form.chk_info.checked = false;
    this.form.edt_machines.value = "";

    this.form.div_affichage.style.pointerEvents = "auto";
    this.form.div_formulaire.hidden = true;
  }
}

let vueTPnote = new VueTPnote;
export { vueTPnote }
