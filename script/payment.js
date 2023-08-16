
//   // Open Razorpay checkout form
//   var rzp = new Razorpay(options);
//   rzp.open();
// });

// var buyNowButton = document.getElementById('buy-now-button');
//     // var loadingScreen = document.getElementById('loading-screen');
     
//     //   loadingScreen.style.display = 'block';
//         // document.querySelector("body").style.opacity = "0.1"
//         // document.querySelector("body").children.style.opacity = "0.5"
// let amount = 46030 * 100;
//         var options = {
//           key: 'rzp_test_PuIvwrP2D7FLip',
//           amount: amount, // Amount in paisa (e.g., 10000 = ₹100)
//           currency: 'INR',
//           name: 'Alcazar-Travels',
//           description: 'Product Description',
//           handler: function(response) {
         
//             window.location.href = '../index.html';
//           },
//           prefill: {
//             name: 'Masai School',
//             email: 'm@example.com',
//             contact: '9876543210'
//           },
//           notes: {
//             address: '1234, Test Address'
//           },
//           theme: {
//             color: 'brown'
//           }
//         };
//         console.log(options)
//         // Open Razorpay checkout form
//         var rzp = new Razorpay(options);
//         rzp.open();




document.getElementById('buy-now-button').addEventListener('click', handlePayment);
var script = document.createElement('script');
script.src = 'https://checkout.razorpay.com/v1/checkout.js';
document.head.appendChild(script);

// Set your Razorpay API key
var razorpayApiKey = 'rzp_test_PuIvwrP2D7FLip';

// Function to handle the payment
function handlePayment() {
 
    
    var options = {
        key: razorpayApiKey,
        amount: 46030*100, 
        currency: 'INR', 
        name: 'Oestin -  Hotel & Resort',
        description: 'Purchase Description',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4ICAkIDQkICAkICBYPDQoYDRsLFQkWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Fys/OD84NzQ5OjcBCgoKDgwOGg4PGjclHyE2MjgrLTgzOC0rKysrODUrKy0tKys0LSstKy0rLSsrKysrKysrNysrKysrKysrKysrK//AABEIAFAAUAMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAEAAUGAgMB/8QAORAAAAUBBAgEBAQHAQAAAAAAAAECAwQFBhESIRMVNVR0k7LRFDFBUSIyYYEjcZHxQlKSobHh8CT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAbEQACAwEBAQAAAAAAAAAAAAAAAQIRMVESIf/aAAwDAQACEQMRAD8A4WrVOSioTUJmTEIRMWSUk8oiQWI/qCa2lb9N56u4qztKdxrnUYGMpKkblJ2/ozW0rfpvPV3FraVv03nq7gYhaRPT6M1tK36bz1dxa2lb9N56u4GIKQ9PozW0rfpvPV3FraVv03nq7gYgpD0+jNbSt+m89XcLpNTkrqENCpkxaFzEEpJvKMlliL6jIDKNtKDxrfUQjSosZO19Ks7Snca51GBhlZ2lO41zqMDFWElrIQhCmSEIQAhCEAIMo20oPGt9RAYZRtpQeNb6iEeGo6irO0p3GudRjsLCwI8GhVa1siKzUF050mYsdZYkE58PxKL1+ZP7jj6ztKdxrnUY6Cxdp2KfGnUaew5JpFWL8TCfxxlfzF+hf05AsEtZuWbto7aKpM0WrR4NRg1FzRILQpaVDMyywGX7jBOw0l+uVOlRjZNmlOnpJbi9EhlH8JrP3u9vb2GvSn6BZuTrZmoTq/LYIzixfDKjEyq7zUZln9v0vHuxdtoxOVpmrJQbdckE+p02TfbQr2UgszLy/TMUyc/VLEzYMuDG/wDLOTVlkmLKad0rT5+1/f7D1W7ESqWthlUmlTH5MxMcmGpGNbbh+RKIyK7/AK8aVctEh2rU1hNckv0eC4hwnGYSYHhFFfebaPv6/wBwi39cptQpkdpqQisVcpWJdTKF4AzRnkrLM/L/AEAPpbywx01dIXEp2BmQ20w8XiMWlkKPyzVl+ZZDEqVmpNQrkynQqHq56DHSt2nlMTJ0JXFnjM8/mLIvcatp7Rw5tbsvMak6RimR45SV6NadCaV3nldn9vsNKDa6AzbC0NW8YaIk6l6OO/onPxF3I9Lry+U/P2AHK1yxEyk01NUW5T5Mcn9G6TT2mOKr2Vld9Mrxi0baUHjW+oh0kGtxm7CVGjLfuqEisE62xgUeNPwZ33Xeh+o5ujbSg8a31EI8NR1FWdpTuNc6jAwys7Snca51GBgsEtZCCoUYn0SFGaiNmOa0kXqY9RoyDjPvrJz8FabkkeG+/wCwpkGIOfZZbjsvYJJ+IJVxY0/Bcf5CqcAoxtGjEtDzfrcdxgAIhsKpKELbbNbmJcZS1ZlkohjgCDKNtKDxrfUQGGUbaUHjW+ohHhqOoqztKdxrnUYGNerUySuoTVphzFoXMWaVEyoyWWI/oCaplbjN5CuwiapFlF2/h+02QTCZN6zbUuOZIMr/ADHpMw1wpDTjq3HFrTgIzNfqPGqZW4zeQrsLVMrcZvIV2FtE8vh5kPJXEiNkd62ceIrrrrzyGkc9lTisajW23hcbPCfzEXkM/VMrcZvIV2FqmVuM3kK7BaHl8GtT21GypblyvDrJZ4VHcZmMt1pKCvS+26d/yklRf5IffVMrcZvIV2FqmVuM3kK7BaHl8BhlG2lB41vqIWqZW4zeQrsF0mmSUVCGtUOYhCJiDUo2VESCxF9BG1RYxdr4f//Z', 
        handler: function(response) {
            window.location.href = '../index.html';
        },
        prefill: {
            name: 'Name',
            email: 'johndoe@example.com'
        }
    };
    var razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
}



