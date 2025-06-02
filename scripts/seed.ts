#!/usr/bin/env node

/**
 * Database Seeding Script
 *
 * This script seeds the database with sample data for the Engineering Resource Management System.
 *
 * Usage:
 *   npm run seed
 *   or
 *   npx tsx scripts/seed.ts
 */

import { seedDatabase } from "../lib/seed-data"

async function main() {
  console.log("🚀 Engineering Resource Management System - Database Seeding")
  console.log("=" * 60)

  try {
    await seedDatabase()
    process.exit(0)
  } catch (error) {
    console.error("Failed to seed database:", error)
    process.exit(1)
  }
}

// Run the seeding script
main()
