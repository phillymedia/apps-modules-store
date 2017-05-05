/**
* PHILLY STORE APP
* the core sub-class.
* Contains methods and variables for core functions.
**/

// DEPENDENCIES
// =============================================================================
// APP -------------------------------
// const app = require("../../src/");
// helpers
const helpers = require("helpers");

// THIRD PARTY LIBRARIES -------------------------------
const { unset } = require("lodash");

/*
* PRIVATE PROPERTIES
* const _privateBar;
*/


/*
* PRIVATE METHODS
* function _privateBar(){ const self = this; return this.foo; }
*/

/**
* Get an item by some parameters.
*
* @method findByParams
* @param {Object} req 			Original request, passed from the parent module.
* @param {Function} callback	A callback function.
* @return {Object} 				Returns error object on failure, null on success.
*/
function findByParams(Schema, params, callback) {
	// find the item
	const query = Schema.find(params);
	// make the query lean
	query.lean();
	// execute the query
	query.exec((err, item) => {
		if (err) {
			return callback(err);
		}
		// next!
		return callback(err, item.length !== 0);
	});
}


/*
* PUBLIC METHODS
* Foo.prototype.publicBar = function(){ const self = this; return self.foo; }
* Foo.prototype.publicShell = function(){ return _privateBar.call(this, // any other variables); }
*/

// REUSABLE UTILITIES
/**
* Generic function to insert new reords.
*
* @method add
* @param {String} colName			Name of collection
* @param {Object} params			Content to insert.
* @param {Function} callback		Returns error or result
* @return {Function}
*/
function add(Schema, params, callback) {
	// create the item from params
	// (this will validate based on the schema)
	const schema = new Schema(params);
	// save document
	schema.save(callback);
}

/**
* Find the oldest item at a certain range.
*
* @method find
* @param {Object} req 			Original request, passed from the parent module.
* @param {Function} callback	A callback function.
* @return {Object} 				Returns error object on failure, null on success.
*/
function find(Schema, params, callback) {
	// pull limit if it exists
	const limit = params.limit || 0;
	// remove limit from params
	unset(params, ["limit"]);
	// pull sort if it exists
	const sort = params.sort || false;
	// remove sort from params
	unset(params, ["sort"]);
	// pull skip if it exists
	const skip = params.skip || false;
	// remove skip from params
	unset(params, ["skip"]);
	// find the items
	const query = Schema.find(params);
	// sort
	if (sort) {
		query.sort(sort);
	}
	// skip
	if (skip) {
		query.skip(skip);
	}
	// limit
	query.limit(limit);
	// remove limit from params
	// make the query lean
	query.lean();
	// execute the query
	query.exec(callback);
}

/**
* Get an item by its ID.
*
* @method findById
* @param {Object} req 			Original request, passed from the parent module.
* @param {Function} callback	A callback function.
* @return {Object} 				Returns error object on failure, null on success.
*/
function findById(Schema, id, callback) {
	// find the item
	const query = Schema.findById(id);
	// make the query lean
	query.lean();
	// execute the query
	query.exec((err, item) => {
		// handle errors
		if (err) {
			return callback(err);
		}
		// missing item
		if (!item) {
			return callback(helpers.makeError("MissingID", "Cannot find item.", "logs core"));
		}
		// next!
		return callback(err, item);
	});
}

/**
* Generic function to remove reords.
*
* @method remove
* @param {String} colName			Name of collection
* @param {Object} params			Content to remove.
* @param {Function} callback		Returns error or result
* @return {Function}
*/
function remove(Schema, params, callback) {
	Schema.remove(params, callback);
}

// MORE SPECIFIC FUNCTIONS
/**
* Check if matching record already exists.
*
* @method exists
* @param {String} colName			Name of collection
* @param {Object} params			Content to check.
* @param {Function} callback		Returns error or result
* @return {Function}
*/
function exists(Schema, params, callback) {
	// call find by params
	findByParams(Schema, params, callback);
}

/**
* Clear out records based on given parameters.
*
* @method clearOld
* @param {String} colName			Name of collection
* @param {Object} params			Content to check.
* @param {Function} callback		Returns error or result
* @return {Function}
*/
function clearOld(Schema, params, callback) {
	// find the oldest
	find(Schema, params, (err, limitItem) => {
		// handle errors
		if (err) {
			return callback(err);
		}
		// not at our limit
		if (!limitItem || !limitItem.length) {
			return callback();
		}
		// otherwise, get the date of that item and update params
		params = { date: { $lt: limitItem[0].date } };
		// remove
		remove(Schema, params, callback);
	});
}


/*
* EXPORT THE FINISHED CLASS
* module.exports = className;
*/

module.exports = {
	add,
	remove,
	find,
	findById,
	exists,
	clearOld,
};
