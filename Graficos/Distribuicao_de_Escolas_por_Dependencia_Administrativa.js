const grafico04 = {
  especificacao: {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
      "text": "Distribuição do Número de Escolas por Dependência Administrativa",
      "fontSize": 14,
      "fontWeight": "bold"
    },
    "width": 600,
    "height": 350,
    "data": {
      "url": "dados/meus_dados_processados.csv",
      "format": {
        "type": "csv",
        "parse": { "Escolas": "number" }
      }
    },
    "transform": [
      { "filter": "datum['Localidade da Escola'] !== 'Brasil'" }
    ],
    "encoding": {
      "x": {
        "field": "Localidade da Escola",
        "type": "nominal",
        "title": "Região",
        "sort": ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"]
      },
      "y": {
        "aggregate": "sum",
        "field": "Escolas",
        "type": "quantitative",
        "title": "Quantidade Total de Escolas"
      }
    },
    "layer": [
      {
        "mark": { "type": "line", "strokeWidth": 2 },
        "encoding": {
          "color": {
            "field": "Categoria 2",
            "type": "nominal",
            "title": "Tipo de Rede",
            "scale": { "scheme": "viridis" }
          }
        }
      },
      {
        "mark": { "type": "point", "filled": true, "size": 60 },
        "encoding": {
          "color": {
            "field": "Categoria 2",
            "type": "nominal"
          }
        }
      }
    ]
  }
};


vegaEmbed('#Distribuicao_de_Escolas_por_Dependencia_Administrativa', grafico04.especificacao);
