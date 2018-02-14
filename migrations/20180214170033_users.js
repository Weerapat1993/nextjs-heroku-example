const { Migration } = require('./Migration')

/**
 * Migration Up
 * @param {Migration} db 
 */
exports.up = async db => {
  await db.schema.createTable('users', table => {
    table.uuid('id').notNullable().primary();
    table.string('display_name', 100);
    table.string('image_url', 200);
    table.string('password_hash', 128);
    table.timestamps(false, true);
  });
}

/**
 * Migration Down
 * @param {Migration} db 
 */
exports.down = async db => {
  await db.schema.dropTableIfExists('users')
};
