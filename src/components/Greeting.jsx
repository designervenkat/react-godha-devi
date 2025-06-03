// rfc
export default function Greeting({ isLoggedIn }) {
   return (
      <div>
         {isLoggedIn && <h2>Welcome Back</h2>}
         {!isLoggedIn && <h2>Please login to your account</h2>}
      </div>
   )
}

// rfce
// function Greeting() {
//   return (
//     <div>Greeting</div>
//   )
// }

// export default Greeting

// rafc
// export const Greeting = () => {
//   return (
//     <div>Greeting</div>
//   )
// }

// rafce
// const Greeting = () => {
//   return (
//     <div>Greeting</div>
//   )
// }

// export default Greeting
