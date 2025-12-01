# Changing App Icon - Step by Step Guide

## ✅ App Name Changed!

The app name has been updated from "Paradigm IFS" to **"Paradigm Office"** in:
- ✅ Capacitor config
- ✅ Android strings.xml
- ✅ PWA manifest.json
- ✅ Synced to Android project

---

## 📱 Now: Change the App Icon

You want to use the **green circular pattern icon** from your second screenshot.

### Method 1: Extract Icon from Your Phone (Easiest)

1. **Find the existing app on your phone** (the one with the icon you like)
2. **Use an app icon extractor:**
   - Download: "Icon Changer" or "APK Extractor" from Play Store
   - Or take screenshot and crop just the icon
3. **Save as PNG** (at least 512x512px)
4. **Transfer to computer**

### Method 2: Recreate Similar Icon

Since I can see your icon is a green circular pattern with dots/nodes:

**Quick option:** Use an online icon maker:
1. Go to: https://www.canva.com
2. Create 1024x1024px design
3. Use green circular shapes
4. Add dot pattern
5. Export as PNG

### Step-by-Step: Add Icon to Android

Once you have your icon file (let's call it `paradigm-icon.png`):

#### Step 1: Prepare Icon

1. **Resize icon** to 1024x1024px
2. **Save as:** `icon.png`
3. **Place in:** `E:\onboarding all files\Paradigm Office 2\resources\`

#### Step 2: Generate All Sizes

In PowerShell, run:

```powershell
cd "E:\onboarding all files\Paradigm Office 2"
npx capacitor-assets generate --android
```

This automatically creates all required sizes and places them in:
- `android/app/src/main/res/mipmap-*/`
- All densities (mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi)

#### Step 3: Rebuild App

```powershell
npm run build
npx cap sync android
```

#### Step 4: Rebuild APK in Android Studio

1. Open Android Studio
2. Build → Clean Project
3. Build → Build APK(s)
4. Install new APK on phone

---

## Alternative: Manual Icon Placement

If you have the icon ready now:

### For Quick Testing:

1. **Get your icon file** (PNG, at least 512x512)
2. **Resize to these sizes** using any image editor:
   - 48x48 (mdpi)
   - 72x72 (hdpi)  
   - 96x96 (xhdpi)
   - 144x144 (xxhdpi)
   - 192x192 (xxxhdpi)

3. **Manually copy** to:
   ```
   android/app/src/main/res/
   ├── mipmap-mdpi/ic_launcher.png (48x48)
   ├── mipmap-hdpi/ic_launcher.png (72x72)
   ├── mipmap-xhdpi/ic_launcher.png (96x96)
   ├── mipmap-xxhdpi/ic_launcher.png (144x144)
   └── mipmap-xxxhdpi/ic_launcher.png (192x192)
   ```

4. **Also copy to** (for round icon on some devices):
   ```
   android/app/src/main/res/
   ├── mipmap-mdpi/ic_launcher_round.png (48x48)
   ├── mipmap-hdpi/ic_launcher_round.png (72x72)
   ├── mipmap-xhdpi/ic_launcher_round.png (96x96)
   ├── mipmap-xxhdpi/ic_launcher_round.png (144x144)
   └── mipmap-xxxhdpi/ic_launcher_round.png (192x192)
   ```

5. **Rebuild APK** in Android Studio

---

## Online Tools to Generate Icons

If you want to recreate a similar green circular icon:

**Option 1: Icon Generator**
- https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html
- Upload your base icon
- Choose "No" for shape
- Download all sizes
- Extract to `android/app/src/main/res/`

**Option 2: App Icon Generator**
- https://appicon.co/
- Upload 1024x1024 icon
- Download Android package
- Extract to project

**Option 3: Figma (Professional)**
- Create 1024x1024 design
- Use green circles and dots
- Export as PNG
- Use Capacitor Assets generator

---

## Current Status

✅ App name changed to "Paradigm Office"
⏳ Icon still using default (needs replacement)

## Next Steps

1. **Get/create your green icon** (512x512 or larger)
2. **Place in** `/resources/icon.png`
3. **Run:** `npx capacitor-assets generate --android`
4. **Rebuild:** `npm run build && npx cap sync android`
5. **Build APK** in Android Studio
6. **Install and test!**

---

**Need help getting the icon?** 

If you can extract the PNG from your existing app or create a similar one, I can help you with the rest of the process!
