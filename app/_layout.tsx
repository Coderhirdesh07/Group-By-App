import { Stack } from "expo-router";


// export default function RootLayout() {
//   const [userLogIn,setUserLogIn] = useState<boolean|null>(null);

//    async function checkUserLogIn(){
//         try{
//           const isLoggedInRaw = await retrieveItemFromStorage("loggedIn");
//           const userLoggedIn = isLoggedInRaw === true || isLoggedInRaw === 'true';
//           setUserLogIn(userLoggedIn);
//         }
//         catch(error){
//             console.log(error);
//             setUserLogIn(false);
//         }
//     }
//     useEffect(() => {
//     checkUserLogIn();
//     }, []);

//   return (
//     <Stack screenOptions={{headerShown:false}}>
//       {userLogIn ? (
//         <Stack.Screen name="screen/(tabs)/HomeScreen" />
//       ):
//       (
//         <>
//         <Stack.Screen name="screen/(auth)/Login"/>
//         <Stack.Screen name="screen/(auth)/SignUp"/>
//         </>
//       )
//       }
//     </Stack>
//   )
// }

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}

