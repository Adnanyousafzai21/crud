var rollV, nameV, genV, addV;

const readfile = () => {
    rollV = document.getElementById("rollno").value;
  nameV = document.getElementById("fname").value;
  addV = document.getElementById("address").value;
  genV = document.getElementById("gender").value;
};


document.getElementById("insert").onclick = function () {
  // alert("Hello insert called")
  readfile();
  firebase
    .database()
    .ref("student/" + rollV)
    .set({
      name: nameV,
      rollno: rollV,
      gender: genV,
      address: addV,
    });
  document.getElementById("rollno").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("gender").value = "";
  console.log("Data Inserted");
  alert("Data Inserted");
};
// Read Data from FireBase

document.getElementById("read").onclick = function () {
  readfile();
  // Validating user Exists or not
  //   var fdbRefer = FirebaseDatabase.getInstance().getReference(
  //     "student/" + rollV
  //   );
  //   if (!fdbRefer) {
  //     alert(`student with ${rollV} is not exists`);
  //   }

  firebase
    .database()
    .ref("student/" + rollV)
    .on("value", function (snapshot) {
      document.getElementById("rollno").value = snapshot.val().rollno;
      document.getElementById("fname").value = snapshot.val().name;
      document.getElementById("gender").value = snapshot.val().gender;
      document.getElementById("address").value = snapshot.val().address;
    });
};

// Update Data in FireBase

document.getElementById("update").onclick = function () {
  readfile();
  firebase
    .database()
    .ref("student/" + rollV)
    .update({
      name: nameV,
      //   rollno: rollV,    // remove Rollno, as it is not required
      gender: genV,
      address: addV,
    });
    document.getElementById("rollno").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("gender").value = "";
  console.log("Data Updated");
  alert("Data Updated");
};

// Delete Data in FireBase

document.getElementById("delete").onclick = function () {
  readfile();
  if (confirm("Are u sure want to delete")) {
    document.getElementById("rollno").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("gender").value = "";
    firebase
      .database()
      .ref("student/" + rollV)
      .remove();
    document.getElementById("rollBox").value = "";
    console.log("Data Deleted");
    alert("Data Deleted");
  }
};