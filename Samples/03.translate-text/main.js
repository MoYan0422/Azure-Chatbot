<<<<<<< HEAD
$(document).ready(function(){
    //do something
    $("#thisButton").click(function(){
=======
$(document).ready(function () {
    //do something
    $("#thisButton").click(function () {
>>>>>>> 1a98e286888b6cb0292dc94ce2f10e17caf04965
        processTranslate();
    });
});

function processTranslate() {
<<<<<<< HEAD
    
    let uriBase = "https://api.cognitive.microsofttranslator.com/translate";
    let params = {
        "api-version": "3.0",
        "to": "zh-Hant"
    };
    //取得要翻譯的文字
    let sourceTranslateText = document.getElementById("inputText").value;
    
=======

    let uriBase = "https://api.cognitive.microsofttranslator.com/translate";
    let params = {
        "api-version": "3.0",
        "to": "zh-Hant,ar,yue,lzh,zh-Hans,en,ja"
    };
    //取得要翻譯的文字
    let sourceTranslateText = document.getElementById("inputText").value;

>>>>>>> 1a98e286888b6cb0292dc94ce2f10e17caf04965
    //送出分析
    $.ajax({
        url: uriBase + "?" + $.param(params),
        // Request header
<<<<<<< HEAD
        beforeSend: function(xhrObj){
            xhrObj.setRequestHeader("Content-Type","application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
            // 如果不是設定全域，就要加上這一行指定你所選擇的區域
            // xhrObj.setRequestHeader("Ocp-Apim-Subscription-Region", "eastus");
=======
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", subscriptionKey);
            // 如果不是設定全域，就要加上這一行指定你所選擇的區域
            // xhrObj.setRequestHeader("Ocp-Apim-Subscription-Region", "eastus");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Region", "japaneast");
>>>>>>> 1a98e286888b6cb0292dc94ce2f10e17caf04965
        },
        type: "POST",
        // Request body
        data: '[{"Text": ' + '"' + sourceTranslateText + '"}]',
    })
<<<<<<< HEAD
    .done(function(data) {
        //顯示JSON內容
        $("#responseTextArea").val(JSON.stringify(data, null, 2));
        //修改下面這一行將翻譯結果顯示於右方
        $("#translateResult").text();
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        //丟出錯誤訊息
        var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
        errorString += (jqXHR.responseText === "") ? "" : jQuery.parseJSON(jqXHR.responseText).message;
        alert(errorString);
    });
=======
        .done(function (data) {
            //顯示JSON內容
            $("#responseTextArea").val(JSON.stringify(data, null, 2));
            //修改下面這一行將翻譯結果顯示於右方
            $("#translateResult").empty()
            for (let x = 0; x < data[0].translations.length; x++) {
                $("#translateResult").append(data[0].translations[x].text + "<br>");
            }
            // $("#translateResult").text(data[0].translations[0].text);

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            //丟出錯誤訊息
            var errorString = (errorThrown === "") ? "Error. " : errorThrown + " (" + jqXHR.status + "): ";
            errorString += (jqXHR.responseText === "") ? "" : jQuery.parseJSON(jqXHR.responseText).message;
            alert(errorString);
        });
>>>>>>> 1a98e286888b6cb0292dc94ce2f10e17caf04965
};