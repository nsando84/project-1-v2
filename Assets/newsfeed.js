var nytAPIKey = "&api-key=iabwIkv6ykHl3BTclLtwozsw8QZXDrxl";
var companyArticlesElement = $(".company-articles");


function getArticleSearchSettings(q) {
    console.log("1: " + q);
    var query = "&q=" + q
    console.log("query value: " + query);
    // var beginDate = "begin_date=20190801"
    // var endDate = "&end_date=20200813"
    
    var articleSearchSettings = {
        "url": "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + query + nytAPIKey,
        "method": "GET",
    }

    console.log("Article Search Settings: " + articleSearchSettings);
    return articleSearchSettings
}

function getCompanyArticles(q) {
    console.log("2" + q);
    $.ajax(getArticleSearchSettings(q)).done(function(response) {
        var articleData = (response.response.docs)
        setTimeout(function() {
            for (let index = 0; index < articleData.length; index++) {
                var articleDiv = $("<div>");
                
                var cardImgDiv = $("<div>");
                cardImgDiv.attr("class", "card-image");

                articleDiv.attr("class", "card");

                var articleLink = $("<a>");

                var articleImage = $("<img>");


                articleLink.attr("href", articleData[index].web_url);
                articleLink.text(articleData[index].abstract);

                if (articleData[index].multimedia[17] != null) {
                    articleImage.attr("src", "https://www.nytimes.com/" + articleData[index].multimedia[17].url);
                    cardImgDiv.append(articleImage);
                } else {
                    articleImage.attr("src", "");
                    cardImgDiv.append(articleImage);
            }
                articleDiv.append([cardImgDiv, articleLink]);
                companyArticlesElement.append(articleDiv);
            }
        }, 2000)
    });
}










