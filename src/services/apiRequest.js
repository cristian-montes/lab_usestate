
export const fetchRequest = async (character) => {
    const URL = `https://damp-cove-34137.herokuapp.com/api/quotes/characters`;

    const res = await fetch(`${URL}/${character}`);
    const data = await res.json();
  
    return data;


}


//THIS IS TO MAKE IT DYNAMIC
// const WITHOUT_BODY_METHODS = ['GET', 'DELETE'];

// export const makeRequest = async (url, method, body) => {
//   const headers = WITHOUT_BODY_METHODS.includes(method)
//     ? {}
//     : { 'Content-Type': 'application/json' };

//   const res = await fetch(url, {
//     method,
//     headers,
//     body: WITHOUT_BODY_METHODS.includes(method) ? null : body,
//   });

//   return res.json();
// };
