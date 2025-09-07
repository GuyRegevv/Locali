# 🌱 Seed Files Guide

This guide explains which seed files to use and when, based on your needs.

## 📁 Current Seed Files

### ✅ **RECOMMENDED FILES (Use These)**

#### 1. `seed-expanded-lists.cjs` ⭐ **MAIN FILE**
**When to use:** For your presentation and general use
- **What it does:** Creates 20 diverse lists across 5 cities with real Google Place IDs
- **Categories:** Food, culture, nightlife, shopping, entertainment, nature
- **Cities:** New York, Paris, London, Berlin, Tokyo
- **Result:** 20 lists, ~80 places, all with working Google Places API integration

```bash
node prisma/seed-expanded-lists.cjs
```

#### 2. `cleanup-database.cjs` 🧹 **CLEANUP FILE**
**When to use:** When you want to clean up and keep only the best data
- **What it does:** Removes old/duplicate lists, keeps only the latest Google Places API data
- **Result:** Clean database with only high-quality lists

```bash
node prisma/cleanup-database.cjs
```

### 🔄 **ALTERNATIVE FILES (Use if needed)**

#### 3. `seed-with-google-api.cjs` 
**When to use:** If you want the original 5 basic lists
- **What it does:** Creates 5 basic lists (coffee, hidden gems, vintage, street art, ramen)
- **Result:** 5 lists, ~25 places

```bash
node prisma/seed-with-google-api.cjs
```

#### 4. `seed.cjs` (Original)
**When to use:** Only if you want to start completely fresh with basic demo data
- **What it does:** Creates basic demo data (may include some fake Google Place IDs)
- **Result:** Basic demo lists

```bash
node prisma/seed.cjs
```

### ❌ **DEPRECATED FILES (Don't use these)**

- `seed-real-only.cjs` - Old version, use `seed-expanded-lists.cjs` instead
- `seed-real-places.cjs` - Old version, use `seed-expanded-lists.cjs` instead  
- `seed-working-places.cjs` - Old version, use `seed-expanded-lists.cjs` instead

## 🎯 **Recommended Workflow**

### For Your Presentation (Clean Start):
```bash
# 1. Reset database completely
npx prisma db push --force-reset

# 2. Add only the expanded lists (includes users)
node prisma/seed-expanded-lists.cjs
```

### For Development/Testing:
```bash
# Just add more lists (won't create duplicate users)
node prisma/seed-expanded-lists.cjs
```

### For Cleanup (if you have duplicates):
```bash
# 1. Reset database completely
npx prisma db push --force-reset

# 2. Add only the expanded lists
node prisma/seed-expanded-lists.cjs
```

## 📊 **Current Database State**

After running `seed-expanded-lists.cjs`, you should have:
- **20 Lists** with diverse themes
- **80 Places** with real Google Place IDs
- **7 Users** for realistic engagement
- **Multiple likes** showing user interaction

## 🔧 **Troubleshooting**

### If you get "Google Places API key not found":
1. Check your `.env` file has `GOOGLE_PLACES_API_KEY=your_key_here`
2. Make sure the key is valid and has Places API enabled

### If you want to add more lists:
1. Edit `seed-expanded-lists.cjs`
2. Add more list templates to the `searchQueries` array
3. Run the script again

### If you want to clean up:
1. Run `cleanup-database.cjs` to remove old data
2. Run `seed-expanded-lists.cjs` to add fresh data

## 🎉 **Summary**

**For your presentation, use:**
- `seed-expanded-lists.cjs` - Creates diverse, high-quality lists
- `cleanup-database.cjs` - Cleans up old data when needed

**Ignore the other files** - they're either old versions or for specific use cases.
