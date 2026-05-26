var grafico01 = {
  vl.markBar({ color: "skyblue", stroke: "black", strokeWidth: 1 })
  .data(dadosGrafico)
  .encode(
    vl.x().fieldQ("escolas").title("Tipo de Rede (Categoria 2)"),
    vl.y().fieldN("categoria")
          .title("Quantidade Total de Escolas")
          .sort(["Privada", "Municipal", "Federal", "Estadual"]),
  )
  .title("Distribuição do Número de Escolas por Dependência Administrativa")
  .width(700)
  .height(300)
  .render()
};
vegaEmbed('#Distribuição_do_Número_de_Escolas_por_Dependência_Administrativa', grafico01);
