exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (tbl) {
    // Primary Key 'id'
    tbl.increments();

    // username
    tbl
      .string('username', 64)
      .notNullable()
      .unique();

    // password
    tbl.string('password', 128);

    // email
    tbl.string('email', 128).unique().notNullable();

    // inactive, active, and banned
    tbl.string('status', 16);

    // Bio for user profile page
    tbl.text('bio', 1000);

    // Link fields for user to input their social information
    tbl.text('github');
    tbl.text('twitter');
    tbl.text('linkedin');

    //User Location Optional (to be used for followers List)
    tbl.string('location', 128);

    // Date in milliseconds
    tbl.bigInteger('created_at').notNullable();

    tbl.bigInteger('last_login').notNullable();

    tbl
      .string('uuid', 36) // for use with pusher
      .notNullable();

    tbl
      .string('email_confirm', 36) // length of uuid
      .index(); // for faster searching
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
