const grafico06 = {
  especificacao: {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": {
      "text": "Perfil de Dependência Administrativa: Rural vs Urbana",
      "subtitle": "A rede privada é um fenômeno urbano — quase inexistente no campo",
      "fontSize": 14,
      "fontWeight": "bold",
      "subtitleFontSize": 11,
      "subtitleColor": "#e74c3c"
    },
    "width": 350,
    "height": 400,
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
    "mark": { "type": "bar", "tooltip": true },
    "encoding": {
      "x": {
        "field": "Categoria 1", 
        "type": "nominal",
        "title": null,
        "axis": { "labelFontSize": 13, "labelFontWeight": "bold" }
      },
      "y": {
        "aggregate": "sum",
        "field": "Escolas", 
        "type": "quantitative",
        "title": "Participação (%)",
        "stack": "normalize", // ...e normaliza para criar o efeito de 100%
        "axis": { "format": ".0%" } 
      },
      "color": {
        "field": "Categoria 2", // 
        "type": "nominal",
        "title": "Tipo de Rede",
        "scale": {
          "domain": ["Municipal", "Privada", "Estadual", "Federal"],
          "range":  ["#3498db",  "#e74c3c", "#2ecc71",  "#f39c12"]
        }
      },
      "order": {
        "field": "Categoria 2",
        "type": "nominal",
        "sort": ["Municipal", "Privada", "Estadual", "Federal"]
      }
    }
  }
};


vegaEmbed('#Perfil_de_Dependencia_Administrativa_Rural_vs_Urbana', grafico06.especificacao);
