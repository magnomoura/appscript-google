//*******Configurar Link da Planilha*****

var wbook = SpreadsheetApp.openByUrl('cole o link da planilha aqui');

//*******Configurar nome da Aba que será usada*****

var sheet = wbook.getSheetByName('cole o nome da aba aqui');

function doGet(e) {

  var rows = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).getValues();
  var data = [];

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    var record = {};

//*****Edite a linha abaixo com os nomes da colunas que deseja*****

    record['Nome'] = row[0];
    record['Data Nascimento'] = row[1];
    record['Endereço'] = row[2];

    data.push(record);

  }
  var result = JSON.stringify(data);

  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}
