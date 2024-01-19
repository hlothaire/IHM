import { vueTPnote } from "../controleur/class_tpnote.js";

vueTPnote.init({
  div_affichage: document.querySelector("[id=div_affichage]"),
  div_formulaire: document.querySelector("[id=div_formulaire]"),
  select_salles: document.querySelector("[id=select_salles]"),
  btn_ajouter: document.querySelector("[id=btn_ajouter]"),
  btn_retirer: document.querySelector("[id=btn_retirer]"),
  edt_nom: document.querySelector("[id=edt_nom]"),
  chk_info: document.querySelector("[id=chk_info]"),
  edt_machines: document.querySelector("[id=edt_machines]"),
  select_batiment: document.querySelector("[id=select_batiment]"),
  radio_rdc: document.querySelector("[id=radio_rdc]"),
  radio_premier: document.querySelector("[id=radio_premier]"),
  radio_deuxième: document.querySelector("[id=radio_deuxième]"),
  radio_troisième: document.querySelector("[id=radio_troisieme]"),
  btn_valider: document.querySelector("[id=btn_valider]"),
  btn_annuler: document.querySelector("[id=btn_annuler]"),
  compteur: document.querySelector("[id=compteur]"),
});
