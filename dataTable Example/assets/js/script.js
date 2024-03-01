
   window.onload =()=>{
    var table=document.getElementById('tbody');
    fetch("https://dummyjson.com/users")
    .then(function(res){
        return res.json();
        console.log(res.json());
    })
    .then(function(data){
        for(var i=0;i<data.length; i++){
            console.log(data[i]);
            console.log("hello");
            let user=data[i];
            let tab =  `<tr>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.age}</td>
                        <td>${user.gender}</td>
                        <td>${user.email}</td>
                        </tr>
                `
            table.innerHTML+=tab;    
        }

        $('#exampleTable').DataTable({
                    "data": data.users,
                    "columns" :[
                           {"data":"firstName"},
                           {"data":"lastName"},
                           {"data":"age"},
                           {"data":"gender"},
                           {"data":"email"}
                    ]
                
                })
    })
   }



    // async function getData(){
    //     const records =await fetch('https://dummyjson.com/users');
    //     const data =records.json();
    //     console.log(data);
    //     let tab='';

        // data.users.forEach(function(user){
        //     tab +=  `<tr>
        //             <td>${user.firstName}</td>
        //             <td>${user.lastName}</td>
        //             <td>${user.age}</td>
        //             <td>${user.gender}</td>
        //             <td>${user.email}</td>
        //             </tr>;
        //     `
        // });
        // document.getElementById('tbody').innerHTML =tab;

        //     $('#exampleTable').DataTable({
        //         "data": data.users,
        //         "columns" :[
        //                {"data":"firstName"}
        //                {"data":"lastName"}
        //                {"data":"age"}
        //                {"data":"gender"}
        //                {"data":"email"}
        //         ]
            
        //     })
// }

// $(function() {
//     $("#exampleTable").DataTable();
  
//     // Premade test data, you can also use your own
//     var testDataUrl = "https://raw.githubusercontent.com/chennighan/RapidlyPrototypeJavaScript/master/lesson4/data.json"
  
//     $("#loadData").click(function() {
//       loadData();
//     });
  
//     function loadData() {
//       $.ajax({
//         type: 'GET',
//         url: testDataUrl,
//         contentType: "text/plain",
//         dataType: 'json',
//         success: function (data) {
//           myJsonData = data;
//           populateDataTable(myJsonData);
//         },
//         error: function (e) {
//           console.log("There was an error with your request...");
//           console.log("error: " + JSON.stringify(e));
//         }
//       });
//     }
  
//     // populate the data table with JSON data
//     function populateDataTable(data) {
//       console.log("populating data table...");
//       // clear the table before populating it with more data
//       $("#exampleTable").DataTable().clear();
//       var length = Object.keys(data.customers).length;
//       for(var i = 1; i < length+1; i++) {
//         var customer = data.customers['customer'+i];
  
//         // You could also use an ajax property on the data table initialization
//         $('#exampleTable').dataTable().fnAddData( [
//           customer.first_name,
//           customer.last_name,
//           customer.occupation,
//           customer.email_address
//         ]);
//       }
//     }
//   })();
  