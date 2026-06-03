// Function to book ticket
function bookTicket(){

    // Get values from input fields
    let passengerName = document.getElementById("name").value;
    let phoneNumber = document.getElementById("phone").value;
    let destination = document.getElementById("destination").value;

    // Check if fields are empty
    if(passengerName === "" || phoneNumber === "" || destination === ""){

        alert("Please fill all fields");

    }else{

        // Success Message
        alert(
            "Ticket booked successfully!\n\n" +
            "Passenger Name: " + passengerName +
            "\nPhone Number: " + phoneNumber +
            "\nDestination: " + destination
        );

        // Clear form after submission
        document.getElementById("ticketForm").reset();
    }
}

// Function to validate passenger name
function validateName(){

    let nameField = document.getElementById("name");

    // Allow only alphabets and spaces
    nameField.value = nameField.value.replace(/[^A-Za-z\s]/g, "");
}



// Function to validate phone number
function validatePhone(){

    let phoneField = document.getElementById("phone");

    // Allow only numbers
    phoneField.value = phoneField.value.replace(/[^0-9]/g, "");
}



// Function to book ticket
function bookTicket(){

    let passengerName = document.getElementById("name").value.trim();
    let phoneNumber = document.getElementById("phone").value.trim();
    let destination = document.getElementById("destination").value;
    let paymentMethod =document.getElementById("paymentMethod").value;
    let ticketPrice =document.getElementById("price").value;

// Tanzania phone number pattern
    let phonePattern = /^(07\d{8}|06\d{8}|\+2557\d{8}|\+2556\d{8})$/;


    // Check empty fields
    if(passengerName === "" || phoneNumber === "" || destination === ""){

        alert("Please fill all fields");
        return;

    }

     // Empty Validation
    if(
        passengerName === "" ||
        phoneNumber === "" ||
        destination === "" ||
        price === "" ||
        paymentMethod === ""
    ){

        alert("Please fill all fields");

        return;
    }

    // Validate phone number
    if (!phonePattern.test(phoneNumber)) {
        alert( "Invalid phone number!\n\n" +
            "Accepted formats:\n" +
            "07XXXXXXXX\n" +
            "06XXXXXXXX\n" +
            "+2557XXXXXXXX\n" +
            "+2556XXXXXXXX"
        );
        return;
    }

    // Generate Current Date
    let currentDate = new Date().toLocaleString();

    // Insert Ticket Information
    document.getElementById("ticketName").innerHTML =
    passengerName;

    document.getElementById("ticketPhone").innerHTML =
    phoneNumber;

    document.getElementById("ticketDestination").innerHTML =
    destination;

    document.getElementById("ticketDate").innerHTML =
    currentDate;

     // Show Ticket
    document.getElementById("ticket").style.display = "block";

      // Success Message
    alert("Ticket generated successfully!");
}

// Print Ticket Function
function printTicket(){

    window.print();
}

// Download Ticket as PDF
function downloadTicket(){

     // Check jsPDF
    if(window.jspdf === undefined){

        alert("jsPDF library failed to load");

        return;
    }

    // Access jsPDF
    const { jsPDF } = window.jspdf;

    // Create PDF
    let doc = new jsPDF();



    // Get Ticket Information
    let passengerName =
    document.getElementById("ticketName").innerText;

    let phoneNumber =
    document.getElementById("ticketPhone").innerText;

    let destination =
    document.getElementById("ticketDestination").innerText;

    let payment =
    document.getElementById("ticketPayment").innerText;

    let date =
    document.getElementById("ticketDate").innerText;

    

    // Create Image Object
    let img = new Image();

    // Important for local image loading
    img.crossOrigin = "Anonymous";

    // Bus image path
    img.src = "bus.png";


    // When image loads successfully
    img.onload = function(){

        // Add Watermark Image
        doc.addImage(
            img,
            "PNG",
            40,
            60,
            130,
            80
        );



        // PDF Title
        doc.setFontSize(20);

        doc.text(
            "Mwendokasi BUS TICKET",
            60,
            20
        );



        // Ticket Information
        doc.setFontSize(14);

        doc.text(
            "Passenger Name: " + passengerName,
            20,
            40
        );

        doc.text(
            "Phone Number: " + phoneNumber,
            20,
            55
        );

        doc.text(
            "Destination: " + destination,
            20,
            70
        );

        doc.text(
            "Ticket Price: " + price,
            20,
            85
        );

        doc.text(
            "Payment Method: " + payment,
            20,
            100
        );

        doc.text(
            "Date: " + date,
            20,
            115
        );

        // Footer
        doc.setFontSize(12);

        doc.text(
            "Thank you for choosing Mwendokasi!",
            20,
            150
        );

        // Save PDF
        doc.save("Mwendokasi_Bus_Ticket.pdf");
    };

    // If image fails to load
    img.onerror = function(){

        alert(
            "Failed to load bus watermark image.\n" +
            "Make sure bus.png is in the same folder."
        );
    };
}

// Calculate Ticket Price
function calculatePrice(){

    let destination =
    document.getElementById("destination").value;

    let priceField =
    document.getElementById("price");



    // Destination Prices
    if(destination === "Kimara"){

        priceField.value = "650 TZS";

    }

    else if(destination === "Kivukoni"){

        priceField.value = "1000 TZS";

    }

    else if(destination === "Morocco"){

        priceField.value = "800 TZS";

    }

    else if(destination === "Ubungo"){

        priceField.value = "700 TZS";

    }

    else if(destination === "Gerezani"){

        priceField.value = "900 TZS";

    }

    else{

        priceField.value = "";
    }
}


    // Load Watermark Image
    let img = new Image();

    img.src = "bus.png";



    img.onload = function(){

        // Add Watermark Image
        doc.addImage(
            img,
            "PNG",
            40,
            60,
            130,
            80
        );



        // Make Text Visible
        doc.setFontSize(20);

        doc.text(
            "Mwendokasi BUS TICKET",
            60,
            20
        );

        doc.setFontSize(14);

        doc.text(
            "Passenger Name: " + passengerName,
            20,
            50
        );

        doc.text(
            "Phone Number: " + phoneNumber,
            20,
            70
        );

        doc.text(
            "Destination: " + destination,
            20,
            90
        );

        doc.text(
            "Date: " + date,
            20,
            110
        );

        doc.text(
            "Thank you for choosing Mwendokasi!",
            20,
            150
        );



        // Save PDF
        doc.save("Mwendokasi_Bus_Ticket.pdf");
    };

    // Automatic Image Slider

let slides =
document.querySelectorAll(".slide");

let currentSlide = 0;



function showSlide(index){

    // Remove active class
    slides.forEach((slide) => {

        slide.classList.remove("active");
    });



    // Show current image
    slides[index].classList.add("active");
}



// Change Image Every 5 Seconds
setInterval(() => {

    currentSlide++;

    // Restart slider
    if(currentSlide >= slides.length){

        currentSlide = 0;
    }



    showSlide(currentSlide);

}, 3000);

// Comment Submission Function
function submitComment(event){

    // Prevent page refresh
    event.preventDefault();



    // Get Form Values
    let fullName =
    document.getElementById("commentName").value.trim();

    let email =
    document.getElementById("commentEmail").value.trim();

    let comment =
    document.getElementById("commentText").value.trim();



    // Validation
    if(
        fullName === "" ||
        email === "" ||
        comment === ""
    ){

        alert(
            "Please fill all fields"
        );

        return;
    }



    // Success Message
    alert(
        "Comment submitted successfully!\n\n" +

        "Thank you " + fullName +

        " for your feedback."
    );



    // Reset Form
    event.target.reset();
}