# P16 DACF V1.6
Prodigy16 Drip Auto-Compounder Framework
Basic Setup: Download the exe, then create a folder wherever named whatever. Move the exe to that folder and run it one time, it will generate a configuration file
which you can edit by right clicking> Show more options(Only windows 11)> Open with Notepad. Run the bot again and it will begin functioning.
By default the bot will compound once daily at 12:00am.

Advanced Setup (modifying compounding frequency): In the Config.json you'll see   "schedule": "0 0 * * ",
The bot uses Cron expression in order to determine the compounding frequency.  If you would like to modify this you can use https://cron.help/ . For example, modifying the schedule parameter in Config.json to 
"0 0,7 * * * " would make the bot compound at 12am and 7am.
"* * * * * " would make the bot compound every minute
"0 0,7 1-15 * *" would make the bot compound at 12am and 7am from the 1st to the 15th of the month, and vice versa.
Once you've modified the schedule to your liking simply save Config.json and start or restart the bot to load the new configuration.

Join my Discord! https://discord.gg/agJBJ8eA9J

Feel free to make donations towards my supra =D 
0x4710F25d8eecC7Be969ed7A31745aA9c4eB2C919
