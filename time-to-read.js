function timeToRead(){
  var content = document.querySelectorAll("article p"),
      contentArray = Array.prototype.slice.call(content),
      totalContent = "",
      totalContentArray = [],
      wpm = 260,
      readMinutes = 0,
      readSeconds = 0,
      readTime = [];
      contentArray.forEach(function(elem,idx){
        totalContent += (" " + elem.textContent.toString());
      });
      totalContentArray = totalContent.trim().split(" ");
      readMinutes = Math.floor(totalContentArray.length / wpm);
      readSeconds = totalContentArray.length % wpm;
      readTime.push(readMinutes, readSeconds);
      return readTime;
}
