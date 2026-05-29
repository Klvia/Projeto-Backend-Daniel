const especGrafico03 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": {
    "text": "Distribuição de Escolas por Região e Dependência Administrativa",
    "fontSize": 14,
    "fontWeight": "bold"
  },
  "width": 600,
  "height": 400,
  "data": { 
    "url": "dados/meus_dados_processados.csv",
    "format": {
      "type": "csv",
      "parse": {
        "Escolas": "number" 
      }
    }
  },
  "transform": [
    { "filter": "datum['Localidade da Escola'] !== 'Brasil'" }
  ],
  "mark": { "type": "bar", "tooltip": true },
  "encoding": {
    "x": {
      "field": "Localidade da Escola",
      "type": "nominal",
      "title": "Região",
      "sort": ["Norte", "Nordeste", "Centro-Oeste", "Sudeste", "Sul"],
      "axis": { "labelAngle": 0 }
    },
    "y": {
      "aggregate": "sum", 
      "field": "Escolas", 
      "type": "quantitative",
      "title": "Quantidade de Escolas"
    },
    "color": {
      "field": "Categoria 2",
      "type": "nominal",
      "title": "Tipo de Gestão",
      "scale": { "scheme": "viridis" }
    },
    "order": { 
      "field": "Categoria 2", 
      "type": "nominal", 
      "sort": "ascending"
    }
  }
};


vegaEmbed('#Distribuicao_de_Escolas_por_Regiao_e_Dependencia_Administrativa', especGrafico03);
