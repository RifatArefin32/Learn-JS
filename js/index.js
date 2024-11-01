
document.getElementById('date-time').innerHTML = Date();

function changeAnimal() {
    document.getElementById("animal-name").innerText = "This is a dog";
    document.getElementById("animal-image").src = "assets/images/dog_1.jpeg";
}

function clearPage() {
    alert("Are you sure?"); // window.alert()
    console.log('you site is going to be hacked');
    document.write("Your page has been hacked");
}

// JS Object Example
const student = {
    name: "Rifat Arefin",
    roll: 1807117,
    cgpa: 3.50,
    
    show: function() {
        console.log("Name: " + this.name);
        console.log("Roll: " + this.roll);
        console.log("CGPA: " + this.cgpa);
    }
}

student.show();
console.log("Access with [] bracket: " + student['name']);