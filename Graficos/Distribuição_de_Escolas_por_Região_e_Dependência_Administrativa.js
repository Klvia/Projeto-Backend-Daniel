var grafico03 = {
  
  especificacao: vl.markBar()
    .data(dadosRegioes)
    .encode(
      vl.x().fieldN("regiao")
            .title("Região")
            .sort(["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"]),
      vl.y().fieldQ("escolas")
            .aggregate("sum")
            .title("Quantidade de Escolas")
            .stack(true),
      vl.color().fieldN("tipo")
                .title("Tipo de Gestão")
                .scale({ scheme: "viridis" }),  
      vl.order().fieldN("tipo")                 
    )
    .title({
      text: "Distribuição de Escolas por Região e Dependência Administrativa",
      fontSize: 14,
      fontWeight: "bold"
    })
    .width(600)
    .height(400)
    .render() 
};


vegaEmbed('#Distribuição_de_Escolas_por_Região_e_Dependência_Administrativa', grafico03.especificacao);
