import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-juros-composto",
  templateUrl: "./juros-composto.component.html",
  styleUrls: ["./juros-composto.component.css"]
})
export class JurosCompostoComponent implements OnInit {
  valorInicial: number;
  juros: number;
  nParcelas: number;


  getJurosComposto() {
    let valorFinal = [];
    for (let i = 0; i <= this.nParcelas - 1; i ++)
      valorFinal.push(
        this.valorInicial * Math.pow(1 + (this.juros/100), i + 1));
    
    return valorFinal;

  }

  constructor() {}

  ngOnInit() {}
}
