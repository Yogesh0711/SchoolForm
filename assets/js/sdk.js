async function fetchDataOnLoad() {
    try {
        await ZOHO.CREATOR.init();
        console.log('initiated')
    } catch (error) {
        console.error("Error:", error);
    }
}
function validateForm() {
    const namePattern = /^[A-Za-z\s]+$/;
    const numberPattern = /^\d{10}$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const studentName = document.getElementById("studentName").value;
    const fatherName = document.getElementById("fatherName").value;
    const motherName = document.getElementById("motherName").value;
    const fatherNumber = document.getElementById("fatherNumber").value;
    const motherNumber = document.getElementById("motherNumber").value;
    const emailValue = document.getElementById("email").value;
    const feesPaid = document.getElementById("fees").value.trim();

    if (!namePattern.test(studentName)) {
        alert("Student name should contain only alphabets.");
        document.getElementById("studentName").value = "";
        document.getElementById("studentName").focus();
        return false;
    }
    if (!namePattern.test(fatherName)) {
        alert("Father's name should contain only alphabets.");
        document.getElementById("fatherName").value = "";
        document.getElementById("fatherName").focus();
        return false;
    }
    if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid Email Address.");
        document.getElementById("email").value = "";
        document.getElementById("email").focus();
        return false;
    }
    if (!namePattern.test(motherName)) {
        alert("Mother's name should contain only alphabets.");
        document.getElementById("motherName").value = "";
        document.getElementById("motherName").focus();
        return false;
    }
    if (!numberPattern.test(fatherNumber)) {
        alert("Father's contact should be a 10-digit number.");
        document.getElementById("fatherNumber").value = "";
        document.getElementById("fatherNumber").focus();
        return false;
    }
    if (!numberPattern.test(motherNumber)) {
        alert("Mother's contact should be a 10-digit number.");
        document.getElementById("motherNumber").value = "";
        document.getElementById("motherNumber").focus();
        return false;
    }
    if (feesPaid === "" || isNaN(feesPaid) || Number(feesPaid) <= 0) {
        alert("Please enter a valid fee amount greater than 0.");
        document.getElementById("fees").value = "";   
        return false;
    }
    return true;
}

async function handleSubmit() {

    if (!validateForm()) return;
    console.log('validation on process')
    const formData = {
        "data":{
        Student_Name: document.getElementById("studentName").value,
        Date_Of_Birth: document.getElementById("dob").value,
        Father_s_Name: document.getElementById("fatherName").value,
        Father_s_Occupation: document.getElementById("fatherOccupation").value,
        Father_s_Number: document.getElementById("fatherNumber").value,
        Mother_s_Name: document.getElementById("motherName").value,
        Mother_s_occupation: document.getElementById("motherOccupation").value,
        Mother_s_Number: document.getElementById("motherNumber").value,
        Address: document.getElementById("address").value,
        City_Type: document.getElementById("addressType").value,
        Gender: document.querySelector('input[name="gender"]:checked').value,
        Email_Address: document.getElementById("email").value,
        Paid_Fees: document.getElementById("fees").value,
        }
    };
    const finalData={
        "data": formData
    }
    // console.log("Form Data:", formData);

    var config = {
        appName: "yogipos",
        formName: "Student_Admission",
        data: formData
    }
    ZOHO.CREATOR.API.addRecord(config).then(function (response) {
        console.log("add record called");
        if (response.code == 3000) {
            console.log("Record added successfully");
        }
        else{
            console.log(response)
            console.log('not inserted')
        }
    });

    // alert("Form submitted successfully!");
}

document.addEventListener('DOMContentLoaded', fetchDataOnLoad);