/*
  # Create contact_messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text) - Contact's full name
      - `email` (text) - Contact's email address
      - `phone` (text, nullable) - Contact's phone number (optional)
      - `vehicle` (text, nullable) - Vehicle make and model (optional)
      - `message` (text) - The message content from the contact
      - `created_at` (timestamptz) - Timestamp when the message was submitted
      - `status` (text) - Message status (new, read, replied) with default 'new'

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for inserting messages (public access for form submissions)
    - Add policy for reading messages (authenticated users only)

  3. Notes
    - Phone and vehicle fields are optional
    - Messages are timestamped automatically
    - Status field helps track which messages have been handled
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  vehicle text,
  message text NOT NULL,
  status text DEFAULT 'new' NOT NULL,
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contact messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);