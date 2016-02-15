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

function timeToReadView() {
  var body = document.getElementsByTagName('body')[0],
      time = timeToRead(),
      container = document.createElement('div');
      container.className = "time-to-read-view";
      container.textContent = "Time to read: " + time[0] + " minutes, " + time[1] + " seconds";
      body.appendChild(container);
}

timeToReadView();
