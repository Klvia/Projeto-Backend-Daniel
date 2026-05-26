var grafico07 = {
  
  especificacao: (async () => {
    const ordemRegioes = ["Nordeste", "Norte", "Sudeste", "Sul", "Centro-Oeste"];
    const ordemTipos   = ["Municipal"];

    const spec = {
      "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
      "title": {
        "text": "Índice de Municipalização Rural por Região",
        "subtitle": "Número acima da barra Municipal = % de municipalização da zona rural",
        "fontSize": 14,
        "fontWeight": "bold",
        "subtitleFontSize": 11,
        "subtitleColor": "#555"
      },
      "data": { "values": dadosMunicipal },
      "facet": {
        "field": "regiao",
        "type": "nominal",
        "sort": ordemRegioes,
        "header": { "title": null, "labelFontSize": 13, "labelFontWeight": "bold" }
      },
      "columns": 5,
      "spec": {
        "width": 130,
        "height": 280,
        "layer": [
          {
            "mark": "bar",
            "encoding": {
              "x": {
                "field": "tipo", "type": "nominal",
                "sort": ordemTipos, "title": null,
                "axis": { "labelAngle": 0, "labelFontSize": 11 }
              },
              "y": { "field": "escolas", "type": "quantitative", "title": "Escolas Rurais" },
              
              "tooltip": [
                { "field": "regiao",       "type": "nominal",      "title": "Região" },
                { "field": "tipo",         "type": "nominal",      "title": "Tipo de Rede" },
                { "field": "escolas",      "type": "quantitative", "title": "Escolas", "format": "," },
                { "field": "pctMunicipal", "type": "quantitative", "title": "% Municipalização", "format": ".1f" }
              ]
            }
          },
          {
            "mark": { "type": "text", "align": "center", "dy": -8, "fontSize": 10, "fontWeight": "bold", "color": "#333" },
            "transform": [{ "filter": "datum.tipo === 'Municipal'" }],
            "encoding": {
              "x": { "field": "tipo", "type": "nominal", "sort": ordemTipos },
              "y": { "field": "escolas", "type": "quantitative" },
              "text": { "field": "pctMunicipal", "type": "quantitative", "format": ".1f" }
            }
          }
        ]
      }
    };

    const div = document.createElement("div");
   
    await embed(div, spec, { actions: false });
    return div;
  })() 
};


vegaEmbed('#Índice_de_Municipalização_Rural_por_Região', grafico07.especificacao);
