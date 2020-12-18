window.addEventListener('DOMContentLoaded', function() {

    //#1
    //Created a button
    let btn = document.createElement('button');
    //cteate text for button
    let btnText = document.createTextNode('Click here!');    btn.appendChild(btnText);
    //append txt to button
    btn.appendChild(btnText);
    //append btn to body
    document.body.appendChild(btn);

    //create event listener
    btn.addEventListener('click', function() {
        alert('Well, hello there!');
    });

    //#2
    //Created event listener from button on HTML
    document.getElementById('btnInput').addEventListener('click', function() {
        text = document.getElementById('txtInput');
        alert(text.value);
    });

    //#3
    //Assigning the div element a variable/
    var c = document.getElementById('test');

    //created handler that will change background color of div when mouse hovers
    c.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'blue';
    });

    //created handler to remove color when mouse exits
    c.addEventListener('mouseout', function(event) {
        event.target.style.backgroundColor = '';
    });

    //#4
    //Get p tag by ID from HTML
    let p = document.getElementById('para');

    //Created event listener when p tag is clicked it will call randomColor
    p.addEventListener('click', function(event) {
        event.target.style.color = randomColor();
    });

    //Created function to generate random color
    //function randomColor() {
    //let color = 'rgb(' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ',';
    //return color;
   
    function randomColor() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let color = `rgb(${r},${g},${b})`;
        return color;
    }

    //#5 Get button from HTML by id
    let b = document.getElementById('btnClick');

    b.addEventListener('click', function() {
        //created a div
        let divContainer = document.createElement('div');
        //created a span
        let span = document.createElement('span');
        //created text for span
        let spanTxt = document.createTextNode('Julie Crotzer');
        //append text to span
        span.appendChild(spanTxt);
        //append span to div
        divContainer.appendChild(span);
        //append div container to body
        document.body.appendChild(divContainer);
        //console.log('true');
    });
    //#6 Created an array of friends
    var friends = [{name:'Amy'}, {name:'Crystal'}, {name:'Sarah'}, {name:'Shelley'}, {name:'Patty'}, {name:'Rachel'},{name:'Sherri'},{name:'Barbara'},{name:'Amanda'},{name:'Wendy'}]
    
    //Get button from HTML
    let b3 = document.getElementById('thirdBtn');

    b3.addEventListener('click', function() {
        let i;

        for(i = 0; i < friends.length; i++) {
            let w = friends[i].name;
            //console.log(w);
        
        //Created an li element to append array objects
        let l = document.createElement('li');
        let listObject = document.createTextNode(w);
        l.appendChild(listObject);

        //Get ul from HTML and append li
        document.getElementById('list').appendChild(l);
        }
    })

});


