import { defineDb, defineTable, column } from "astro:db";

// https://astro.build/db/config

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true, optional: false, unique: true }),
    username: column.text({ unique: true, optional: false }),
    password: column.text({ optional: true }),
    github_id: column.text({ optional: true, unique: true }),
  },
});

const Session = defineTable({
  columns: {
    id: column.text({ optional: false, unique: true }),
    userId: column.text({ optional: false, references: () => User.columns.id }),
    expiresAt: column.number({ optional: false }),
  },
});

export default defineDb({
  tables: {
    User,
    Session,
  },
});
