function GetCCToken() {
alert('start');
var obj = {
  "app_id": "1dc1937c-ba11-41b2-ac20-dbf2159d50ee",
  "included_segments": ["All"],
  "data": {"foo": "bar"},
  "contents": {"en": "English Message"}
}
alert(obj)
    var tokenID = "";
    $.ajax({

        type: "POST",
        url: "https://onesignal.com/api/v1/notifications",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(obj),
        async: false,
        cache: false,
        success: function (data) {
         alert(data);   
        }
    });
    
}