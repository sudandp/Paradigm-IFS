# Icon & Splash Screen Setup

## Quick Instructions

Since I cannot generate images automatically, please follow these steps:

### Step 1: Create Source Images

Create these 2 files in the `resources/` folder:

1. **`resources/icon.png`**
   - Size: 1024x1024px
   - Your Paradigm Services logo
   - Transparent or dark green background (#0d2818)
   - Centered logo
   - PNG format

2. **`resources/splash.png`**
   - Size: 2732x2732px  
   - Dark green background (#0d2818)
   - Your logo centered
   - PNG format

### Step 2: Generate Android Assets

Once you have the images, run:

```bash
npx capacitor-assets generate --android
```

This will automatically create all required Android icon and splash screen sizes.

### Option: Use Online Tools

**For Icons:**
- Upload to: https://icon.kitchen/
- Select "Android" > "Adaptive Icon"
- Download and place in `android/app/src/main/res/`

**For Splash:**
- Upload to: https://apetools.webprofusion.com/#/tools/imagegorilla
- Generate all Android splash sizes
- Download and place in `android/app/src/main/res/`

### Option: Skip for Now (Use Default)

Android Studio will use default launcher icons. You can:
1. Skip this step for now
2. Open Android Studio
3. Build and test with default icons
4. Add custom icons later

## Next Step

After generating icons (or skipping), run:

```bash
npx cap open android
```

This will open your project in Android Studio where you can build and test the APK!
