import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { JurosCompostoComponent } from "./juros-composto/juros-composto.component";
import { JurosSimplesComponent } from "./juros-simples/juros-simples.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "juros-simples", component: JurosSimplesComponent },
      { path: "juros-composto", component: JurosCompostoComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    JurosCompostoComponent,
    JurosSimplesComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
