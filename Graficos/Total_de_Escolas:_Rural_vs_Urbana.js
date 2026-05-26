var grafico02 = {
{
  const pontos = vl.markPoint({
    filled: true, opacity: 0.7, stroke: "black", strokeWidth: 2
  })
  .encode(
    vl.x().fieldN("categoria").title(null).scale({ padding: 200 }),
    vl.y().fieldQ("escolas").title("Quantidade de Escolas")
          .scale({ domain: [30000, 160000] }),
    vl.size().fieldQ("escolas").scale({ range: [1000, 8000] }).legend(null),
    vl.color().fieldN("categoria")
              .scale({ domain: ["Rural", "Urbana"], range: ["forestgreen", "royalblue"] })
              .legend(null)
  )

  const rotulos = vl.markText({
    fontWeight: "bold", color: "white", fontSize: 12
  })
  .encode(
    vl.x().fieldN("categoria").title(null).scale({ padding: 200 }),
    vl.y().fieldQ("escolas").title("Quantidade de Escolas")
          .scale({ domain: [30000, 160000] }),
    vl.text().fieldQ("escolas").format(",")
  )

  return vl.layer(pontos, rotulos)
    .data(dadosLocalizacao)
    .title({ text: "Total de Escolas: Rural vs Urbana", fontSize: 14, fontWeight: "bold" })
    .width(400)
    .height(400)
    .render()
}
};
vegaEmbed('#Total_de_Escolas:_Rural_vs_Urbana', grafico02);
