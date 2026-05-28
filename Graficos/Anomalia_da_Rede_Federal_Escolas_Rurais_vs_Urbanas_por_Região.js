(function () {
  var divAlvo = document.getElementById('Anomalia_da_Rede_Federal_Escolas_Rurais_vs_Urbanas_por_Regiao');
  if (!divAlvo) {
    console.error('[Grafico08] DIV não encontrada.');
    return;
  }
  divAlvo.style.minHeight = '380px';

  var dadosFederal = [
    { regiao: "Centro-Oeste", localizacao: "Rural",  escolas: 15  },
    { regiao: "Centro-Oeste", localizacao: "Urbana", escolas: 53  },
    { regiao: "Nordeste",     localizacao: "Rural",  escolas: 32  },
    { regiao: "Nordeste",     localizacao: "Urbana", escolas: 201 },
    { regiao: "Norte",        localizacao: "Rural",  escolas: 11  },
    { regiao: "Norte",        localizacao: "Urbana", escolas: 71  },
    { regiao: "Sudeste",      localizacao: "Rural",  escolas: 22  },
    { regiao: "Sudeste",      localizacao: "Urbana", escolas: 185 },
    { regiao: "Sul",          localizacao: "Rural",  escolas: 14  },
    { regiao: "Sul",          localizacao: "Urbana", escolas: 104 }
  ];

  var ordemRegioes = ["Nordeste", "Sudeste", "Norte", "Sul", "Centro-Oeste"];

  var spec = {
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
              "domain": ["Rural",   "Urbana"],
              "range":  ["#2ecc71", "#3498db"]
            }
          },
          "tooltip": [
            { "field": "regiao",      "type": "nominal",      "title": "Região" },
            { "field": "localizacao", "type": "nominal",      "title": "Localização" },
            { "field": "escolas",     "type": "quantitative", "title": "Escolas Federais" }
          ]
        }
      },
      {
        "mark": { "type": "text", "fontSize": 11, "fontWeight": "bold", "dy": -12 },
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
    ],
    "config": {
      "view": { "stroke": "transparent" }
    }
  };

  vegaEmbed(divAlvo, spec, { actions: false })
    .then(function () { console.log('[Grafico08] OK'); })
    .catch(function (err) { console.error('[Grafico08] Erro:', err); });
})();
