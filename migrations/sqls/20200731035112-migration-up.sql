CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


CREATE TABLE table_one (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name TEXT NOT NULL
);

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON table_one
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TABLE table_two (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  name TEXT NOT NULL,
  table_one_id uuid NOT NULL
);

ALTER TABLE table_two ADD CONSTRAINT fk_table_two_table_one FOREIGN KEY (table_one_id) REFERENCES table_one(id) ON DELETE CASCADE ON UPDATE NO ACTION;

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON table_two
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();