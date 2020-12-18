//event handler
$(document).ready(function () {

    //#1 Create the button
    let btn = $('<button>Click here!</button>');
    //append the button to body
    $('body').append(btn);
    
    //button event handler
    $(btn).click(function () {
        alert('Howdy there!');
    });

    //#2 Created an event listener from button on html
    $('#btnInput').click(function () {
        let text = $('#txtInput').val();
        alert(text);
    })

    //#3 Assigning the div element with a variable
    var c = $('#test');

    //created an event handler to change background color when hover over
    $(c).mouseover(function(event) {
        event.target.style.backgroundColor = 'red';
     });
    $(c).mouseout(function() {
        event.target.style.backgroundColor = '';
    });

    //#4 
    // Get p from HTML
    let p = $('#para');

    // create random color 
    function randomColor() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let color = `rgb(${r}, ${g}, ${b})`;
        return color;
    }
    //create even handler to p element to call randomColor
    $(p).click(function (event) {        
        event.target.style.color = randomColor();
    });

    //#5 Get button from HTML by id
    let b = $('#btnClick');

    $(b).click(function() {
        //created a div
        let divContainer = $('<div></div>');
        //created a span with text
        let span = $('<span>Julie Crotzer</span>');
        //append span to div
        $(divContainer).append(span);
        //append div to body
        $('body').append(divContainer);
    });

    //#6 Created an array of friends
    var friends = [{name:'Amy'}, {name:'Crystal'}, {name:'Sarah'}, {name:'Shelley'}, {name:'Patty'},{name:'Rachel'},{name:'Sherri'},{name:'Barbara'}, {name:'Amanda'}, {name:'Wendy'}]

    //create an event handler
    $('#thirdBtn').on('click', function() {
        friends.forEach(function(friends){
            $('#list').append('<li>' + friends.name + '</li>');
            
        })
    })

});