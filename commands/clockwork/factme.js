const Discord = require('discord.js-commando');

class FactOfTheDay extends Discord.Command 
{
    constructor(client)
    {
        super(client, {
            name: "factme",
            group: "clockwork",
            memberName: "factme",
            description: "Display a random Aqualon Fact of the Day"
        });
    }

    async run(message, args) 
    {

	var scoopchannel = "";
	
		
			function crawlmessages(preid, messagecollection) 
			{	
					scoopchannel = scoopchannel + messagecollection.toString();	
					
				if (preid == "none")
				{
				message.guild.channels.get("408726317970751490").fetchMessages({limit: 10}).then(messages => 
						{						
							if(Array.from(messages).length == 10)
							{
								crawlmessages(messages.last().id, Array.from(messages));
							}
							else
							{
								var regmatches = messages.toString().match(/#*```(.*?)```/g);
								var getfact = "There was an uncashed Exception, sorry."; 
								var exceptions = ["436573366842032128", "434514788966465546", "439612340745404446"];
								var cashsearchnone = 0;
								
								if (args.length > 2)
									{
										var targetedsearch = "Oh, sadly I found nothing, try a different search term.";
										regmatches.forEach(function(item, index, arr) 
										{
										
										if (item.toLowerCase().indexOf(args.toLowerCase()) !=-1)
											{
												if (cashsearchnone == 0)
												{
													targetedsearch = "I found the following facts that contain the key word **" + args + "**: \n";
												}
												
												message.channel.send(targetedsearch + item); 
												targetedsearch = "";
												cashsearchnone = 1;
											}
											
										});

										if (cashsearchnone == 0)
												{
												cashsearchnone = 1;
												message.channel.send("Oh, sadly I found nothing, try a different search term.");
												}
									}
									else
									{ 
										do 
										{
											var getfact = regmatches[Math.floor(Math.random() * Math.floor(regmatches.length))];
											/* console.log(regmatches); */
										}while(new RegExp(exceptions.join("|")).test(getfact));
									
										message.channel.send("Did you know this?" + getfact);
									} 
								
								message.channel.send(regmatches.length);
							}
						}).catch(err => {
									console.log(err.stack);
									}); 						
				}
				else
				{
				message.guild.channels.get("408726317970751490").fetchMessages({limit: 10, before: preid}).then(messages => 
						{	
						
							if(Array.from(messages).length == 10)
							{						
								crawlmessages(messages.last().id, Array.from(messages))
							}
							else
							{
								var regmatches = scoopchannel.toString().match(/#*```(.*?)```/g);
								var getfact = "There was an uncashed Exception, sorry."; 
								var exceptions = ["436573366842032128", "434514788966465546"];
								var cashsearchnone = 0;
								if (args.length > 2)
										{
											var targetedsearch = "Oh, sadly I found nothing, try a different search term.";
											regmatches.forEach(function(item, index, arr) 
											{
											
											if (item.toLowerCase().indexOf(args.toLowerCase()) !=-1)
												{
													if (cashsearchnone == 0)
													{
														targetedsearch = "I found the following facts that contain the key word **" + args + "**: \n";
													}
													
													message.channel.send(targetedsearch + item); 
													targetedsearch = "";
													cashsearchnone = 1;
												}
												
											});

											if (cashsearchnone == 0)
													{
													cashsearchnone = 1;
													message.channel.send("Oh, sadly I found nothing, try a different search term.");
													}
										}
										else
										{ 
											do 
											{
												var getfact = regmatches[Math.floor(Math.random() * Math.floor(regmatches.length))];
												/* console.log(regmatches); */
											}while(new RegExp(exceptions.join("|")).test(getfact));
										
											message.channel.send("Did you know this?" + getfact);
										} 
							}
						
						}).catch(err => {
									console.log(err.stack);
									}); 
				}
			}
			
			crawlmessages("none", scoopchannel);
			
    }
}

module.exports = FactOfTheDay;
