var grafico06 = {
  vl.markBar()
  .data(dadosPerfil)
  .encode(
    vl.x().fieldN("localizacao")
          .title(null)
          .axis({ labelFontSize: 13, labelFontWeight: "bold" }),
    vl.y().fieldQ("pct")
          .title("Participação (%)")
          .stack("normalize")         
          .axis({ format: "%" ,
                  labelExpr: "datum.value * 100 + '%'" }),
    vl.color().fieldN("tipo")
              .title("Tipo de Rede")
              .scale({
                domain: ["Municipal", "Privada", "Estadual", "Federal"],
                range:  ["#3498db",   "#e74c3c", "#2ecc71",  "#f39c12"]
              }),
    vl.order().fieldN("tipo")
              .sort(["Municipal", "Privada", "Estadual", "Federal"]),
    vl.tooltip([
      { field: "localizacao", title: "Localização" },
      { field: "tipo",        title: "Tipo de Rede" },
      { field: "pct",         title: "Participação (%)", format: ".2f" }
    ])
  )
  .title({
    text: "Perfil de Dependência Administrativa: Rural vs Urbana",
    subtitle: "A rede privada é um fenômeno urbano — quase inexistente no campo",
    fontSize: 14,
    fontWeight: "bold",
    subtitleFontSize: 11,
    subtitleColor: "#e74c3c"
  })
  .width(350)
  .height(400)
  .render()
};
vegaEmbed('#Perfil_de_Dependência_Administrativa:_Rural_vs_Urbana', grafico06);
