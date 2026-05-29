const especificacaoGrafico01 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Distribuição do Número de Escolas por Dependência Administrativa",
  "width": 700,
  "height": 300,
  
  
  "data": { 
    "url": "dados/meus_dados_processados.csv" 
  },
  
 
  "mark": {
    "type": "bar",
    "color": "skyblue",
    "stroke": "black",
    "strokeWidth": 1
  },
  
  
  "encoding": {
    "x": {
      "aggregate": "sum",
      "field": "Escolas",
      "type": "quantitative",
      "title": "Quantidade Total de Escolas"
    },
    "y": {
      "field": "Categoria 2",       "type": "nominal",
      "title": "Tipo de Rede (Categoria 2)",
      "sort": ["Privada", "Municipal", "Federal", "Estadual"] 
    }
  }
};


vegaEmbed('#Distribuicao_do_Numero_de_Escolas_por_Dependencia_Administrativa', especificacaoGrafico01);
