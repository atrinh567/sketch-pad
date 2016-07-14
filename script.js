var aSquare = "<div id='square' value='0'></div>";
var breakPoint = "<br>";

$("#formIn").hide();

function createGrid(q, r) {
	for (var z = 0; z < q; z++) {
		for (var y = 0; y < r; y++) {
			$(".grid").append(aSquare);
		}
		$(".grid").append(breakPoint);
	}
	$("div#square").bind("mouseover", triggerMe);
}

$("#gridBtn").click(function() {
	var text = $("#gridBtn").text() == "Create New" ? "Cancel" : "Create New";

	if (text == "Create New") {
		$("#gridBtn").removeClass("btn-danger");
		$("#gridBtn").addClass("btn-primary");
		$('#randBtn').css("display", "inline");
		$('#clrBtn').css("display", "inline");
	} else {
		$("#gridBtn").removeClass("btn-primary");
		$("#gridBtn").addClass("btn-danger");
		$('#randBtn').css("display", "none");
		$('#clrBtn').css("display", "none");
	}
	$('#formIn').slideToggle(250);

	$("#gridBtn").text(text);

});

$("#clrBtn").click(function() {
	$('.grid').children('div').each(function() {
		$(this).css("background-color", "white");
	});
});

$('#createBtn').click(function() {
	var numOne = parseInt($("#numOne").val());
	var numTwo = parseInt($("#numTwo").val());

	if (numOne > 0 && numTwo > 0
		&& numOne < 30 && numTwo < 30) {
		$('.grid').html("");
		createGrid(numOne, numTwo);
	} else if (numOne > 30 && numTwo > 30) {
		alert("Number is too BIG! Less than 30 please!");
	} else {
		alert("You must enter a valid number greater than 0!");
	}
});

$('#randBtn').click(function() {
	$('.grid').children('div').each(triggerMe);
});

var getRandomColor = function() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};

function triggerMe() {
	if ($(this).val() < 100) {
		var counter = $(this).val();
		counter++;
		$(this).css("background-color", getRandomColor());
		$(this).val(counter);
	} else {
		$(this).css("background-color", "black");
	}
}

createGrid(10, 10);