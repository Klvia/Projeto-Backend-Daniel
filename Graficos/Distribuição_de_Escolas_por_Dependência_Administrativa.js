var grafico04 = {
  {
  const linhas = vl.markLine({ strokeWidth: 2 })
    .encode(
      vl.color().fieldN("tipo").title("Tipo de Rede")
    )

  const pontos = vl.markPoint({ filled: true, size: 60 })
    .encode(
      vl.color().fieldN("tipo").title("Tipo de Rede")
    )

  return vl.layer(linhas, pontos)
    .data(dadosLinha)
    .encode(
      vl.x().fieldN("regiao")
            .title("Localidade da Escola")
            .sort(["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"]),
      vl.y().fieldQ("escolas")
            .title("Quantidade Total de Escolas"),
    )
    .title({
      text: "Distribuição do Número de Escolas por Dependência Administrativa",
      fontSize: 14,
      fontWeight: "bold"
    })
    .width(600)
    .height(350)
    .render()
}
};
vegaEmbed('#Distribuição_de_Escolas_por_Dependência_Administrativa', grafico04);
