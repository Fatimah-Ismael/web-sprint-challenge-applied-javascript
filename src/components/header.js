const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //CREATE ELEMENTS
const paperHeader = document.createElement('div');
const paperDate = document.createElement('span');
const paperTitle = document.createElement('h1');
const paperTemp = document.createElement('span');

//CREATE HIERARCHY
paperHeader.appendChild(paperDate);
paperHeader.appendChild(paperTitle);
paperHeader.appendChild(paperTemp);

//ADD TEXT
paperDate.textContent = date; 
paperTitle.textContent = title; 
paperTemp.textContent = temp; 

//ADD CLASS NAMES
paperHeader.classList.add('header');
paperDate.classList.add('date');
paperTemp.classList.add('temp');
return paperHeader;
}

const headerAppender = (selector) => { 
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  //It should append the header to the element in the DOM that matches the given selector.
  //
const headerEl = Header('temp, date, time')
document.querySelector(selector).appendChild(headerEl);


}

export { Header, headerAppender }
