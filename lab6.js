"use strict";

$(document).ready(() => {
  let sub = "NatureIsFuckingLit";

  
  $.get(`https://www.reddit.com/r/${sub}/.json`, (stuff) => {
    $(".title").append(`${stuff.data.children[1].data.subreddit_name_prefixed}`)
    for (let x=1; x<=10; x++){
      $("body").append(`<section class="main">
      <p><a href="https://www.reddit.com/${stuff.data.children[x].data.permalink}">${stuff.data.children[x].data.title}</a></p>
      <img src="${stuff.data.children[x].data.thumbnail}">
      </section>
      `)
    };
  });
  
  $(document).on("click", "button", () => {
    sub = $("input").val();
    $("#input").val("");
    $(".main").remove(); 
    $(".title").empty();   
    $.get(`https://www.reddit.com/r/${sub}/.json`, (stuff) => {
      $(".title").append(`${stuff.data.children[1].data.subreddit_name_prefixed}`);
    for (let x=1; x<=10; x++){
      $("body").append(`<section class="main">
      <p><a href="https://www.reddit.com/${stuff.data.children[x].data.permalink}">${stuff.data.children[x].data.title}</a></p>
      <img src="${stuff.data.children[x].data.thumbnail}">
      </section>
      `);
    };
    sub = "";
    });
  });
})
