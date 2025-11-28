/*
  # Rename vehicle column to vehicle_make_model

  1. Changes
    - Rename `vehicle` column to `vehicle_make_model` in `contact_messages` table
  
  2. Notes
    - This is a non-destructive change that preserves all existing data
*/

ALTER TABLE contact_messages 
RENAME COLUMN vehicle TO vehicle_make_model;