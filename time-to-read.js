var readTime = {
timeToRead: function(wpm){
  var args = Array.prototype.slice.call(arguments),
      content = document.querySelectorAll("article p"),
      contentArray = Array.prototype.slice.call(content),
      totalContent = "",
      totalContentArray = [],
      wps = 0,
      readMinutes = 0,
      readSeconds = 0,
      readTime = [];
      if (typeof args[0] === "undefined") {
        wps = 260 * 60;
      } else {
        wps = wpm * 60;
      }
      contentArray.forEach(function(elem,idx){
        totalContent += (" " + elem.textContent.toString());
      });
      //Regex from http://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex
      totalContentArray = totalContent.trim().replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ").split(" ");
      readMinutes = Math.floor(totalContentArray.length / wps * 60);
      readSeconds = Math.floor(totalContentArray.length % wps / 60);
      readTime.push(readMinutes, readSeconds);
      return readTime;
},
timeToReadView: function(){
  var body = document.getElementsByTagName('body')[0],
      time = readTime.timeToRead(),
      container = document.createElement('div'),
      flag = readTime.timeToReadFlag;
    container.className = "time-to-read-view";
    container.textContent = "Time to read: " + time[0] + " minutes, " + time[1] + " seconds";
    body.appendChild(container);
},
timeToReadFlag: true,
setFlag: function(flag) {
  var newContainer = document.querySelectorAll('.time-to-read-view')[0];
  console.log(newContainer);
  readTime.timeToReadFlag = flag;
  if (readTime.timeToReadFlag === false) {
    newContainer.className += " hide";
  } else if (flag === true) {
    // class manipulation from http://stackoverflow.com/questions/195951/change-an-elements-class-with-javascript
    if (newContainer.classList.contains("hide")) {
      newContainer.classList.remove("hide");
    }
  }
}
}



readTime.timeToReadView();
