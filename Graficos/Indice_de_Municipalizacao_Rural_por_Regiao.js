(function () {
  var divAlvo = document.getElementById('Indice_de_Municipalizacao_Rural_por_Regiao');
  if (!divAlvo) {
    console.error('[Grafico07] DIV não encontrada.');
    return;
  }
  divAlvo.style.minHeight = '400px';


  var dados = [
    { regiao: "Nordeste",     escolas: 24708, pct: "93,5%" },
    { regiao: "Norte",        escolas: 11714, pct: "87,5%" },
    { regiao: "Sudeste",      escolas: 4998,  pct: "83,0%" },
    { regiao: "Sul",          escolas: 2791,  pct: "70,7%" },
    { regiao: "Centro-Oeste", escolas: 1059,  pct: "70,4%" }
  ];

  var spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
      "text": "Índice de Municipalização Rural por Região",
      "subtitle": "% acima da barra = proporção de municipalização da zona rural",
      "fontSize": 14,
      "fontWeight": "bold",
      "subtitleFontSize": 11,
      "subtitleColor": "#555"
    },
    "data": { "values": dados },
    "width": 500,
    "height": 300,
    "layer": [
      {
        "mark": { "type": "bar", "color": "#2a9d8f" },
        "encoding": {
          "x": {
            "field": "regiao",
            "type": "nominal",
            "sort": ["Nordeste", "Norte", "Sudeste", "Sul", "Centro-Oeste"],
            "title": null,
            "axis": { "labelAngle": 0, "labelFontSize": 12, "labelFontWeight": "bold" }
          },
          "y": {
            "field": "escolas",
            "type": "quantitative",
            "title": "Escolas Rurais Municipais",
            "scale": { "domain": [0, 30000] },
            
          },
          "tooltip": [
            { "field": "regiao",  "type": "nominal",      "title": "Região" },
            { "field": "escolas", "type": "quantitative", "title": "Escolas Municipais", "format": "," },
            { "field": "pct",     "type": "nominal",      "title": "% Municipalização" }
          ]
        }
      },
      {
        "mark": {
          "type": "text",
          "align": "center",
          "baseline": "bottom",
          "dy": -6,
          "fontSize": 13,
          "fontWeight": "bold",
          "color": "#333"
        },
        "encoding": {
          "x": {
            "field": "regiao",
            "type": "nominal",
            "sort": ["Nordeste", "Norte", "Sudeste", "Sul", "Centro-Oeste"]
          },
          "y": { "field": "escolas", "type": "quantitative" },
          "text": { "field": "pct", "type": "nominal" }
        }
      }
    ],
    "config": {
      "view": { "stroke": "transparent" },
      "axis": { "grid": false }
    }
  };

  vegaEmbed(divAlvo, spec, { actions: false })
    .then(function() { console.log('[Grafico07] OK'); })
    .catch(function(err) { console.error('[Grafico07] Erro:', err); });
})();
