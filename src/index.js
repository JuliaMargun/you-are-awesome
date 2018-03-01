// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => { 
		return property
	};

const createNotEnumerableProperty = (property) => {
		Object.defineProperty(Object.prototype, 'property', {
			value: 'value', 
			enumerable: false 
		}); 
		return property;
	};

const createProtoMagicObject = () => {

	createProtoMagicObject.prototype = createProtoMagicObject.__proto__;
	return createProtoMagicObject;
};


const incrementor = () => {
	++incrementor.value;
	return incrementor;
};

incrementor.value = 0;

incrementor.valueOf = () => {
	return incrementor.value;
}

const asyncIncrementor = () => {
	++asyncIncrementor.value;
	return asyncIncrementor.value;
};

asyncIncrementor.value = 0;

const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in twoe
const returnBackInSecond = (parameter) => {
	return new Promise(resolve => {
        setTimeout(() => {
        	return resolve(parameter)
     	}, 1001);
    })
};



const getDeepPropertiesCount = () => {};

const createSerializedObject = () => {};

const toBuffer = () => {};

const sortByProto = (array) => {
	array.sort((a, b) => a.__proto__ - b.__proto__);
	return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;