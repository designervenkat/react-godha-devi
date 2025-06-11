##### Ensure at least one number and one special character if options are selected

```js
const passwordGenerator = () => {
   let pass = ''
   let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
   let numStr = '0123456789'
   let charStr = '!@#$%^&*~'

   // Ensure at least one number and one special character if options are selected
   if (numbers) {
      str += numStr
      // Add a random number to the password from the numStr string
      pass += numStr.charAt(Math.floor(Math.random() * numStr.length))
   }
   if (character) {
      str += charStr
      // Add a random special character to the password from the charStr string
      pass += charStr.charAt(Math.floor(Math.random() * charStr.length))
   }

   // Fill the remaining characters randomly
   for (let i = pass.length; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
   }

   // Shuffle the password to avoid predictable patterns
   pass = pass
      .split('') // // Converts the password string into an array of individual characters
      .sort(() => 0.5 - Math.random()) // // Randomly sorts the array to shuffle the characters
      .join('') // // Converts the shuffled array back into a string

   setPassword(pass)
}
```
