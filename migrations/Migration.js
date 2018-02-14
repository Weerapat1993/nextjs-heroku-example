/**
 * @typedef {Object} DB
 * @property {Schema} schema
 */

class Schema {

  /**
   * Create Table
   * @param {string} table 
   * @param {(table: Table) => void} callback 
   */
  createTable(table, callback) {

  }

  /**
   * Drop Table If exists
   * @param {string} table 
   */
  dropTableIfExists(table) {

  }
}


// Table
class Table {
  /**
   * UUID
   * @param {string} name
   * @return {this}
   */
  uuid(name) {
    return this
  }

  /**
   * Not Null Able
   * @return {this}
   */
  notNullable() {
    return this
  }

  /**
   * Increments
   * @param {string} name
   * @return {this}
   */
  increments(name) {
    return this
  }

  /**
   * Primary Key
   * @return {this}
   */
  primary() {
    return this
  }

  /**
   * Field Type `String`
   * @param {string} name
   * @param {number} length
   * @return {this}
   */
  string(name, length) {
    return this
  }

  /**
   * Timestamps
   * @param {boolean} field 
   * @param {boolean} limit 
   */
  timestamps(field, limit) {
    return this
  }
}


/** 
 * @constant 
 * @type {DB}
 * @default
 */
exports.Migration = {}
