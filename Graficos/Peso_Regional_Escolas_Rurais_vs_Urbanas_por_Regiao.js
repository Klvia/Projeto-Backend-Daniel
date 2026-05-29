const grafico05 = {
  especificacao: {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
      "text": "Peso Regional: Escolas Rurais vs Urbanas por Região",
      "subtitle": "O Nordeste lidera em escolas rurais; o Sudeste domina nas urbanas",
      "fontSize": 14,
      "fontWeight": "bold",
      "subtitleFontSize": 11,
      "subtitleColor": "#555"
    },
    "data": {
      "url": "dados/meus_dados_processados.csv",
      "format": {
        "type": "csv",
        "parse": { "Escolas": "number" }
      }
    },
    "transform": [
      // Remove a linha do Brasil para não distorcer as regiões
      { "filter": "datum['Localidade da Escola'] !== 'Brasil'" }
    ],
    "hconcat": [
      {
        "title": "← Escolas Rurais",
        "width": 250,
        "height": 280,
        "transform": [
          { "filter": "datum['Categoria 1'] === 'Rural'" }
        ],
        "mark": { "type": "bar", "color": "#2ecc71", "tooltip": true },
        "encoding": {
          "x": {
            "aggregate": "sum",
            "field": "Escolas",
            "type": "quantitative",
            "title": null,
            "sort": "descending",
            "scale": { "domain": [0, 30000] }
          },
          "y": {
            "field": "Localidade da Escola",
            "type": "nominal",
            "title": null,
            "sort": ["Nordeste", "Norte", "Sul", "Centro-Oeste", "Sudeste"],
            "axis": { "values": ["Nordeste", "Norte", "Sul", "Centro-Oeste", "Sudeste"] }
          }
        }
      },
      {
        "title": "Escolas Urbanas →",
        "width": 250,
        "height": 280,
        "transform": [
          { "filter": "datum['Categoria 1'] === 'Urbana'" }
        ],
        "mark": { "type": "bar", "color": "#3498db", "tooltip": true },
        "encoding": {
          "x": {
            "aggregate": "sum",
            "field": "Escolas",
            "type": "quantitative",
            "title": null,
            "scale": { "domain": [0, 60000] }
          },
          "y": {
            "field": "Localidade da Escola",
            "type": "nominal",
            "title": null,
            "sort": ["Nordeste", "Norte", "Sul", "Centro-Oeste", "Sudeste"],
            "axis": { "values": ["Nordeste", "Norte", "Sul", "Centro-Oeste", "Sudeste"] }
          }
        }
      }
    ],
    "resolve": {
      "scale": { "y": "shared" }
    }
  }
};

const el05 = document.getElementById('Peso_Regional_Escolas_Rurais_vs_Urbanas_por_Regiao');
vegaEmbed(el05, grafico05.especificacao);
