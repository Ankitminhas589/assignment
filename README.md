# Thanks Aspire for giving me opportunity to demo this project

# It is a basic demo project where we get user data from the mock api and features are listed below
- Custom Bottom tabs
- Debit card screen where you can hide and show card details on a tab
- Set Weekly Limit of spent
- If weekly spent is more then weekly limit then it will show red progress bar to alert you about it
- Maximum limit a user can set is S$50000 for now and if you try to add more it will alert you that you can't set this limit

- Typescript is used in this demo project

# Demo screenshots
are kept in root/screen_shots folder please go through it

# Steps to run this project
Setup react-native Enviornment 
https://reactnative.dev/docs/environment-setup

- Clone project from github
- choose dev branch
# iOS
- In the root Folder run
  yarn or npm install
- cd ios & run
  pod install
- cd .. & run
  npx react-native run-ios
  
  used xCode version- Version 12.4 (12D4e)
  
#  Android
- In the root Folder run
  yarn or npm install
- npx react-native run-android
used Android Studio version- Android Studio Arctic Fox | 2020.3.1 Patch 3

# Some Important paths
- aseets- src/assets 
- fonts- src/assets/fonts
- redux and saga setup- src/core
- navigation- src/navigation
- view-screens- src/stories
- higher order components- src/common/hoc
- common components- src/common/components
- api constants- src/common/utills/constants/api.ts
- other app constants & used text - src/common/utills/constants/constants.ts
- user data related type- src/common/utills/constants/types.ts
- colors: src/common/utills/theme/Colors.tsx

# Main Screens Path
- debit-card-screen- src/stories/BottomTabs/Screens/DebitCardTab/index.tsx
- set-weekly-limit-screen- src/stories/SetLimitScreen/index.tsx


# NOTES:-
- I didn't write the unit test cases but I might add it in future.

# For any Questions or issues feel free to contact me 
- email: mankitminhas@gmail.com
