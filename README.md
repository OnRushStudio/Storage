# Storage
## Overview
The Storage library is designed to help developers save and manage game data using either the browser's local storage or cookies. This library simplifies the process of persisting game state, player data, and other variables across sessions.

## Tutorial Video
https://youtu.be/f4zbcp6Rbn0

## Demo
https://playcanvas.com/project/1241745/overview/storage-for-games

## Initialization
To initialize the Storage object, you need to provide a key and an options object.

```javascript
this.player = new Storage('Player', {
    level: 1,
    skins: []
});
```

key: A string that represents the key under which the data will be saved in local storage or cookies.
data: An object containing the initial data you want to store.
Options
You can configure how the data is stored using the options object. These options include:

```javascript
this.options = {
    key: key,                          // The key used for storage
    useLocalStorage: true,             // Whether to use local storage (default: true)
    useCookies: true,                  // Whether to use cookies (default: true)
    cookieExpirationDays: 365,         // The number of days before the cookie expires (default: 365)
    ...options                         // Any additional options
};
```

## Example Usage
Initialization and Incrementing a Value

```javascript
// Initialize the Storage object for player data
this.player = new Storage('Player', {
    level: 1,
    skins: []
});

// Increment the player's level
this.player.level++;

// Log the updated level
console.log(this.player.level);
```

## Clearing Data
The Storage object provides a clear function to remove the stored data.

```javascript
// Clear the player data from storage
this.player.clear();
```

## Detailed Explanation
### Initialization
When you create a new Storage object, it will automatically save the provided data into local storage or cookies using the specified key. If the useLocalStorage option is set to true, the data will be saved in local storage. If useCookies is set to true, the data will be saved in cookies. You can choose to use either one or both storage methods based on your requirements.

### Updating Data
Once the Storage object is initialized, you can easily update the stored data by directly modifying the object's properties. Any changes to the object's properties will automatically be saved to the selected storage method(s).

### Clearing Data
The clear function allows you to remove all the data associated with the key from both local storage and cookies.

## Configuration Options
key: The unique identifier for the stored data.
useLocalStorage: A boolean indicating whether to use local storage. Default is true.
useCookies: A boolean indicating whether to use cookies. Default is true.
cookieExpirationDays: The number of days before the cookie expires. Default is 365.
By using this Storage library, you can easily manage game data persistence in your browser-based games, ensuring that player progress and preferences are reliably stored and retrieved.
