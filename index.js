var recipes = {}

function updateObjectWithKeyAndValue (object, key, value){
  return Object.assign({},object, {[key]: value})
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
    object[key] = value
    return object
}

function deleteFromObjectByKey(object, key){
  var newObj = ({}, object)
  return delete newObj.key 
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
<<<<<<< HEAD
  delete object[key]
  return object
=======
  return delete object.key
  Object assign(obj) 
  return Object
>>>>>>> 4753eb7b8a3e6f25ed56f3221857963bb25aef75
}


