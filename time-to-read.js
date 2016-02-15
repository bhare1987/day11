function timeToRead(){
  var content = document.querySelectorAll("article p"),
      contentArray = Array.prototype.slice.call(content),
      totalContent = "",
      totalContentArray = [],
      wpm = 260,
      readTime = 0;
      contentArray.forEach(function(elem,idx){
        totalContent += (" " + elem.textContent.toString());
      });
      console.log(totalContent);
      totalContentArray = totalContent.trim().split(" ");
      console.log(totalContentArray);
      readTime = (totalContentArray.length / wpm);
      console.log(readTime);
      return readTime;
}


// need to just get the empty content (no tags)
// need to handle seconds as well.
