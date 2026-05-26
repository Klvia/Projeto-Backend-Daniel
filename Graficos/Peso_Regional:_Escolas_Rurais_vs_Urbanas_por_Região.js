var grafico05 = {
  {
  const ordemRegioes = ["Nordeste", "Norte", "Sul", "Centro-Oeste", "Sudeste"]

  const maxRural  = 27000
  const maxUrbana = 56000

  const barraEsquerda = vl.markBar({ color: "#2ecc71" })
    .encode(
      vl.x().fieldQ("rural")
            .title("← Escolas Rurais")
            .sort("descending")
            .scale({ domain: [0, maxRural] }),
      vl.y().fieldN("regiao")
            .title(null)
            .sort(ordemRegioes),
      vl.tooltip([
        { field: "regiao", title: "Região" },
        { field: "rural",  title: "Escolas Rurais", format: "," }
      ])
    )

  const barraDireita = vl.markBar({ color: "#3498db" })
    .encode(
      vl.x().fieldQ("urbana")
            .title("Escolas Urbanas →")
            .scale({ domain: [0, maxUrbana] }),
      vl.y().fieldN("regiao")
            .title(null)
            .sort(ordemRegioes),
      vl.tooltip([
        { field: "regiao",  title: "Região" },
        { field: "urbana",  title: "Escolas Urbanas", format: "," }
      ])
    )

  const grafEsquerdo = vl.layer(barraEsquerda)
    .data(dadosButterfly)
    .width(280)
    .height(280)

  const grafDireito = vl.layer(barraDireita)
    .data(dadosButterfly)
    .width(280)
    .height(280)

  return vl.hconcat(grafEsquerdo, grafDireito)
    .title({
      text: "Peso Regional: Escolas Rurais vs Urbanas por Região",
      subtitle: "O Nordeste lidera em escolas rurais; o Sudeste domina nas urbanas",
      fontSize: 14,
      fontWeight: "bold",
      subtitleFontSize: 11,
      subtitleColor: "#555"
    })
    .resolve({ scale: { y: "shared" } })
    .render()
}
};
vegaEmbed('#Peso_Regional:_Escolas_Rurais_vs_Urbanas_por_Região', grafico05);
