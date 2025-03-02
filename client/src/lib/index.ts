// export const getData = async (endpoint: string) => {
//   try {
//     //Api call
//     const response = await fetch(endpoint, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     //Error check
//     if (!response.ok) {
//       throw new Error('Data fetching Error' + response?.statusText);
//     }

//     //Data return
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log('Error while fetching data', error);
//     throw error;
//   }
// };
