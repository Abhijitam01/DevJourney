/*
  # Initial Schema for DevJourney

  1. New Tables
    - `profiles`
      - Extends Supabase auth.users
      - Stores user profile information
    - `projects`
      - Main projects table
      - Stores project details and metadata
    - `journey_entries`
      - Documents project progress
      - Contains markdown content and metadata
    - `project_tags`
      - Tags for categorizing projects
    - `project_likes`
      - Tracks user likes on projects

  2. Security
    - RLS enabled on all tables
    - Policies for read/write access
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE NOT NULL,
  full_name text,
  bio text,
  avatar_url text,
  website text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Create projects table
CREATE TABLE projects (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    title text NOT NULL,
    description text,
    cover_image text,
    
)
