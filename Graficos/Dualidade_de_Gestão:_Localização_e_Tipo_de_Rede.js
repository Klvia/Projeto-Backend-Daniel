var grafico09 = {
  {
  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
      "text": "Dualidade de Gestão: Localização × Tipo de Rede",
      "subtitle": "O Estado foca no urbano; o Município domina o rural. A rede privada quase desaparece no campo.",
      "fontSize": 14,
      "fontWeight": "bold",
      "subtitleFontSize": 11,
      "subtitleColor": "#555"
    },
    "data": { "values": dadosHeatmap },
    "width": 340,
    "height": 200,
    "layer": [
      {
        "mark": { "type": "rect", "cornerRadius": 4 },
        "encoding": {
          "x": {
            "field": "tipo", "type": "nominal",
            "title": "Tipo de Rede",
            "sort": ["Municipal", "Estadual", "Privada", "Federal"],
            "axis": { "labelFontSize": 12, "labelFontWeight": "bold", "titleFontSize": 12 }
          },
          "y": {
            "field": "localizacao", "type": "nominal",
            "title": null,
            "sort": ["Urbana", "Rural"],
            "axis": { "labelFontSize": 14, "labelFontWeight": "bold" }
          },
          "color": {
            "field": "escolas", "type": "quantitative",
            "title": "Nº de Escolas",
            "scale": {
              "scheme": "blues",
              "domain": [0, 65000]
            },
            "legend": {
              "titleFontSize": 11,
              "labelFontSize": 10,
              "gradientLength": 180
            }
          },
          "tooltip": [
            { "field": "localizacao", "type": "nominal",      "title": "Localização" },
            { "field": "tipo",        "type": "nominal",      "title": "Tipo de Rede" },
            { "field": "escolas",     "type": "quantitative", "title": "Escolas", "format": "," }
          ]
        }
      },
      {
        "mark": { "type": "text", "fontSize": 13, "fontWeight": "bold" },
        "encoding": {
          "x": {
            "field": "tipo", "type": "nominal",
            "sort": ["Municipal", "Estadual", "Privada", "Federal"]
          },
          "y": {
            "field": "localizacao", "type": "nominal",
            "sort": ["Urbana", "Rural"]
          },
          "text": { "field": "escolas", "type": "quantitative", "format": "," },
          "color": {
            "condition": { "test": "datum.escolas > 30000", "value": "white" },
            "value": "#333"
          }
        }
      }
    ]
  }

  const div = document.createElement("div")
  await embed(div, spec, { actions: false })
  return div
}
};
vegaEmbed('#Dualidade_de_Gestão:_Localização_e_Tipo_de_Rede', grafico09);
