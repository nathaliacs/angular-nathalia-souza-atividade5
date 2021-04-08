import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-juros-simples",
  templateUrl: "./juros-simples.component.html",
  styleUrls: ["./juros-simples.component.css"]
})
export class JurosSimplesComponent implements OnInit {
  valorInicial= 0;
  juros= 0;
  nParcelas= 0;

  getJSimples() {
    let valorFinal: number[] = [];
    for (let i = 1; i <= 1; i++)
      valorFinal.push(this.valorInicial * (1 + (this.juros / 100) * this.nParcelas));
    return valorFinal;
  }

  constructor() {}

  ngOnInit() {}
}
