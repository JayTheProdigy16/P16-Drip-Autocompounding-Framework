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
Subscribe to my channel! https://www.youtube.com/channel/UC0ecqg1Re5QMj7iYofCLPAQ

Feel free to make donations towards my supra =D (also my buddy address)
0x4710F25d8eecC7Be969ed7A31745aA9c4eB2C919

FAQ:
Is this secure? Your private keys are never stored, transferred across the network, or exposed to ANY 3rd party. You must enter your private key every time you start the bot. An attacker would need to compromise your system and dump your memory while the bot is running to have any chance of obtaining your private key. Once beta testing is complete I will compile a version for Linux and put out a video on how to essentially turn the bot into a "hardware wallet" (Raspberry Pi 4 with a hardened Linux distro) which will minimize the risk surface as much as possible since no unnecessary functionality is enabled for an attacker to leverage.

Why do I need to enter my private key? Although even I myself wish this was not the case, due to the nature of the blockchain there is simply no way to circumvent the bot necessitating your private key in order to sign the rehydrate transaction on your behalf. Not providing the bot with your private keys would require the bot to forward the transaction to your browser wallet, which would prompt you to manually sign and send the transaction, which defeated the purpose of automating the process.

Do I need to leave my browser open? No, this is a real automated compounder and does not move your mouse around your screen and click around. It is completely self isolated and can be ran in the background regardless of the state of your browser, and you can use your mouse  . In future versions I plan to add a feature to let you shrink the bot to your hidden processes dropdown so its truly out of the way.

Does this work for Animal Farm or Drip Garden? No, this is only for the Drip faucet. However, once i develop this framework to where I like it, I will be creating automated compounders for Drip's ecosystem as well as any other Defi protocols you might want to automate.

Does this support multiple wallets? Not at the moment, however before the full release this feature is a must have.
