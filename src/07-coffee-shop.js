/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  const lowerCaseSize = size.toLocaleLowerCase()
  const lowerCaseType = type.toLocaleLowerCase()
  if(!['small','medium','large'].includes(lowerCaseSize)) {
    return -1
  }
  if(!['regular','latte','cappuccino','mocha'].includes(lowerCaseType)){
    return -1
  }
  switch (lowerCaseSize) {
    case 'small':
    switch(lowerCaseType) {
      case 'regular':
      if(extras.whippedCream && !extras.extraShot){
        return 3 + 0 + 0.50
      }else if(extras.extraShot && !extras.whippedCream){
        return 3 + 0 + 0.75
      }else if (extras.whippedCream && extras.extraShot) {
        return 3 + 0 + 0.75 + 0.50
      }else {
        return 3 + 0
      }
      case 'latte':
      if(extras.whippedCream && !extras.extraShot){
        return 3 + 1 + 0.50
      }else if(extras.extraShot && !extras.whippedCream){
        return 3 + 1 + 0.75
      }else if (extras.whippedCream && extras.extraShot) {
        return 3 + 1 + 0.75 + 0.50
      }else {
        return 3 + 1
      }
      case 'cappuccino':
      if(extras.whippedCream && !extras.extraShot){
        return 3 + 1.5 + 0.50
      }else if(extras.extraShot && !extras.whippedCream){
        return 3 + 1.5 + 0.75
      }else if (extras.whippedCream && extras.extraShot) {
        return 3 + 1.5 + 0.75 + 0.50
      }else {
        return 3 + 1.5
      }
      case 'mocha':
      if(extras.whippedCream && !extras.extraShot){
        return 3 + 2 + 0.50
      }else if(extras.extraShot && !extras.whippedCream){
        return 3 + 2 + 0.75
      }else if (extras.whippedCream && extras.extraShot) {
        return 3 + 2 + 0.75 + 0.50
      }else {
        return 3 + 2
      }
      
    }
    break;
    case 'medium':
    switch(lowerCaseType) {
        case 'regular':
      if(extras.whippedCream && !extras.extraShot){
        return 4 + 0 + 0.50
      }else if(extras.extraShot && !extras.whippedCream){
        return 4 + 0 + 0.75
      }else if (extras.whippedCream && extras.extraShot) {
        return 4 + 0 + 0.75 + 0.50
      }else {
        return 4 + 0
      }
      case 'latte':
      if(extras.whippedCream && !extras.extraShot){
        return 4 + 1 + 0.50
      }else if(extras.extraShot && !extras.whippedCream){
        return 4 + 1 + 0.75
      }else if (extras.whippedCream && extras.extraShot) {
        return 4 + 1 + 0.75 + 0.50
      }else {
        return 4 + 1
      }
      case 'cappuccino':
      if(extras.whippedCream && !extras.extraShot){
        return 4 + 1.5 + 0.50
      }else if(extras.extraShot && !extras.whippedCream){
        return 4 + 1.5 + 0.75
      }else if (extras.whippedCream && extras.extraShot) {
        return 4 + 1.5 + 0.75 + 0.50
      }else {
        return 4 + 1.5
      }
      case 'mocha':
      if(extras.whippedCream && !extras.extraShot){
        return 4 + 2 + 0.50
      }else if(extras.extraShot && !extras.whippedCream){
        return 4 + 2 + 0.75
      }else if (extras.whippedCream && extras.extraShot) {
        return 4 + 2 + 0.75 + 0.50
      }else {
        return 4 + 2
      }
    }
    break;
    case 'large':
    switch(lowerCaseType) {
       case 'regular':
      if(extras.whippedCream && !extras.extraShot){
        return 5 + 0 + 0.50
      }else if(extras.extraShot && !extras.whippedCream){
        return 5 + 0 + 0.75
      }else if (extras.whippedCream && extras.extraShot) {
        return 5 + 0 + 0.75 + 0.50
      }else {
        return 5 + 0
      }
      case 'latte':
      if(extras.whippedCream && !extras.extraShot){
        return 5 + 1 + 0.50
      }else if(extras.extraShot && !extras.whippedCream){
        return 5 + 1 + 0.75
      }else if (extras.whippedCream && extras.extraShot) {
        return 5 + 1 + 0.75 + 0.50
      }else {
        return 5 + 1
      }
      case 'cappuccino':
      if(extras.whippedCream && !extras.extraShot){
        return 5 + 1.5 + 0.50
      }else if(extras.extraShot && !extras.whippedCream){
        return 5 + 1.5 + 0.75
      }else if (extras.whippedCream && extras.extraShot) {
        return 5 + 1.5 + 0.75 + 0.50
      }else {
        return 5 + 1.5
      }
      case 'mocha':
      if(extras.whippedCream && !extras.extraShot){
        return 5 + 2 + 0.50
      }else if(extras.extraShot && !extras.whippedCream){
        return 5 + 2 + 0.75
      }else if (extras.whippedCream && extras.extraShot) {
        return 5 + 2 + 0.75 + 0.50
      }else {
        return 5 + 2
      }
    }
    break;
  }
}
