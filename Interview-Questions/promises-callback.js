// function getUserData(callbackFunc) {
//   setTimeout(() => {
//     const userData = { id: 1, name: "Manuel", email: "hello@gmail.com" };
//     callbackFunc(userData);
//   }, 1000);
// }

// function displayUserData(user) {
//   console.log(`User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
// }

// getUserData(displayUserData);

// Promises
// function getUserData2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const userData = { id: 2, name: "Chioma", email: "hey@gmail.com" };
//       resolve(userData);
//     }, 1000);
//   });
// }

// getUserData2()
//   .then((user) => {
//     console.log(
//       `User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`
//     );
//   })
//   .catch((err) => {
//     console.error(`Error: ${err}`);
//   });

const users = [
  { id: 1, name: "Emeka Manuel" },
  { id: 2, name: "Manuel Emeka" },
];

// callback functions
function getUserIdByCallback(userId, callbackFunction) {
  // simulate an api request
  setTimeout(() => {
    const user = users.find((user) => user.id === userId);
    if (user) {
      callbackFunction(null, user);
    } else {
      callbackFunction("User Not found", null);
    }
  }, 1000);
}

// promises
function getUserIdByPromise(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === userId);
      if (user) {
        resolve(user);
      } else {
        reject("User Not Found");
      }
    }, 1000);
  });
}

function displayUserDataPromises(user) {
  console.log(`User Id : ${user.id}. User name : ${user.name} `);
}

function displayUserDataCallback(err, user) {
  if (err) {
    console.log(`Error ${err}`);
  } else {
    console.log(`User Id : ${user.id}. User name : ${user.name} `);
  }
}

let userId = 1;

getUserIdByCallback(userId, displayUserDataCallback);

getUserIdByPromise(userId)
  .then(displayUserDataPromises)
  .catch((err) => console.log(`Error: ${err}`));
