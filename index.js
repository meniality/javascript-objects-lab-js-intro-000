var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var newValue = Object.assign({}, object, {[key]: value})
  return newValue
}
