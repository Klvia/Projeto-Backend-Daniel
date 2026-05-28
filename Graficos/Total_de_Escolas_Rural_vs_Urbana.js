const dadosLocalizacao = [
  { "Categoria 1": "Rural", "Escolas": 55141 },
  { "Categoria 1": "Urbana", "Escolas": 140224 }
];


const especificacaoGrafico02 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Total de Escolas: Rural vs Urbana",
    "fontSize": 14,
    "fontWeight": "bold"
  },
  "width": 400,
  "height": 400,
  "data": { 
    "values": dadosLocalizacao 
  },
  "layer": [
    {
     
      "mark": {
        "type": "point",
        "filled": true,
        "opacity": 0.7,
        "stroke": "black",
        "strokeWidth": 2
      },
      "encoding": {
        "x": {
          "field": "Categoria 1",
          "type": "nominal",
          "title": null,
          "scale": { "padding": 200 }
        },
        "y": {
          "field": "Escolas", 
          "type": "quantitative",
          "title": "Quantidade de Escolas",
          "scale": { "domain": [30000, 160000] }
        },
        "size": {
          "field": "Escolas",
          "type": "quantitative",
          "scale": { "range": [1000, 8000] },
          "legend": null
        },
        "color": {
          "field": "Categoria 1", 
          "type": "nominal",
          "scale": {
            "domain": ["Rural", "Urbana"],
            "range": ["forestgreen", "royalblue"]
          },
          "legend": null
        }
      }
    },
    {
    
      "mark": {
        "type": "text",
        "fontWeight": "bold",
        "color": "white",
        "fontSize": 12
      },
      "encoding": {
        "x": {
          "field": "Categoria 1", 
          "type": "nominal"
        },
        "y": {
          "field": "Escolas", 
          "type": "quantitative"
        },
        "text": {
          "field": "Escolas", 
          "type": "quantitative",
          "format": ","
        }
      }
    }
  ]
};


vegaEmbed('#Total_de_Escolas_Rural_vs_Urbana', especificacaoGrafico02);
