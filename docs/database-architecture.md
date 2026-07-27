# Wiki Database Architecture

## Database Strategy

Development Database:
SQLite3

Future Migration:
PostgreSQL / MySQL compatible through Adapter Layer.

## Architecture

Application
    |
Repository Layer
    |
Database Adapter
    |
SQLite3


## Components

### Database Adapter
Location:
backend/src/database/adapters

Purpose:
Database engine abstraction.

### Repository Layer
Location:
backend/src/database/repositories

Purpose:
Business logic کو SQL سے isolate کرنا.

### Migration System
Location:
backend/src/database/migrations

Purpose:
Controlled schema versioning.

### Seed System
Location:
backend/src/database/seeds

Purpose:
Development and testing data.

## Current Schema

Tables:

- articles
- article_links
- translations
- crawl_queue
- migrations

