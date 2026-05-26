var grafico08 = {
  
  especificacao: (async () => {
    const ordemRegioes = ["Nordeste", "Sudeste", "Norte", "Sul", "Centro-Oeste"];

    const spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "title": {
        "text": "Anomalia da Rede Federal: Escolas Rurais vs Urbanas por Região",
        "subtitle": "A Rede Federal age como pontos de excelência — minimalista e equilibrada",
        "fontSize": 14,
        "fontWeight": "bold",
        "subtitleFontSize": 11,
        "subtitleColor": "#555"
      },
      "data": { "values": dadosFederal },
      "width": 500,
      "height": 300,
      "layer": [
        {
          "mark": { "type": "line", "color": "#ccc", "strokeWidth": 2 },
          "encoding": {
            "x": { "field": "escolas", "type": "quantitative" },
            "y": {
              "field": "regiao", "type": "nominal",
              "sort": ordemRegioes, "title": null,
              "axis": { "labelFontSize": 13, "labelFontWeight": "bold" }
            },
            "detail": { "field": "regiao", "type": "nominal" }
          }
        },
        {
          "mark": { "type": "point", "filled": true, "size": 120, "strokeWidth": 1.5 },
          "encoding": {
            "x": {
              "field": "escolas", "type": "quantitative",
              "title": "Número de Escolas Federais",
              "axis": { "grid": true, "gridDash": [4, 4], "gridOpacity": 0.5 }
            },
            "y": {
              "field": "regiao", "type": "nominal",
              "sort": ordemRegioes, "title": null,
              "axis": { "labelFontSize": 13, "labelFontWeight": "bold" }
            },
            "color": {
              "field": "localizacao", "type": "nominal",
              "title": "Localização",
              "scale": {
                "domain": ["Rural",     "Urbana"],
                "range":  ["#2ecc71",   "#3498db"]
              }
            },
            "tooltip": [
              { "field": "regiao",       "type": "nominal",      "title": "Região" },
              { "field": "localizacao",  "type": "nominal",      "title": "Localização" },
              { "field": "escolas",      "type": "quantitative", "title": "Escolas Federais" }
            ]
          }
        },
        {
          "mark": {
            "type": "text", "fontSize": 11, "fontWeight": "bold",
            "dy": -12
          },
          "encoding": {
            "x": { "field": "escolas", "type": "quantitative" },
            "y": { "field": "regiao",  "type": "nominal", "sort": ordemRegioes },
            "text": { "field": "escolas", "type": "quantitative" },
            "color": {
              "field": "localizacao", "type": "nominal",
              "scale": {
                "domain": ["Rural",   "Urbana"],
                "range":  ["#2ecc71", "#3498db"]
              }
            }
          }
        }
      ]
    };

    const div = document.createElement("div");
    await embed(div, spec, { actions: false });
    return div;
  })() 
};


vegaEmbed('#Anomalia_da_Rede_Federal:_Escolas_Rurais_vs_Urbanas_por_Região', grafico08.especificacao);
