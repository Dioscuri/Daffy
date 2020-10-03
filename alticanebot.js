const Discord = require('discord.js')
const { callbackify } = require('util')
const client = new Discord.Client()

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)

    client.user.setActivity("Beggars' Banquet")

    //Servers (Guilds) and Channels
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        guild.channels.cache.forEach((channel) =>{
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    } )
  
   })

   client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }

   // Check if it's a command
   if (receivedMessage.content.startsWith("-")){
       processCommand(receivedMessage)
   }

})

//Command Processing
function processCommand(receivedMessage){
    let fullCommand = receivedMessage.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let primaryCommand = splitCommand[0]
    let arguments = splitCommand.slice(1)

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    //Normal Commands
    if (primaryCommand == "roll"){normalroll(arguments, receivedMessage)}
    else if (primaryCommand=="daffybot"){daffyintroduction(receivedMessage)}
    else if(primaryCommand =="help"){help(receivedMessage)}

    //Servants
    else if (primaryCommand == "houyi"){commands.call(houyi, arguments, receivedMessage)}
    else if (primaryCommand == "kanetsugu"){commands.call(kanetsugu, arguments, receivedMessage)}
    else if (primaryCommand == "wellington"){commands.call(wellington, arguments, receivedMessage)}
    else if (primaryCommand == "vaina"){commands.call(vaina, arguments, receivedMessage)}
    else if (primaryCommand == "pandora"){commands.call(pandora, arguments, receivedMessage)}
    else if (primaryCommand == "samson"){commands.call(samson, arguments, receivedMessage)}
    else if (primaryCommand == "johannes"){commands.call(johannes, arguments, receivedMessage)}
    else if (primaryCommand == "draupadi"){commands.call(draupadi, arguments, receivedMessage)}
    else if (primaryCommand == "balaam"){commands.call(balaam, arguments, receivedMessage)}
    else if (primaryCommand == "chamor"){commands.call(chamor, arguments, receivedMessage)}
    else if (primaryCommand == "hildegarde"){commands.call(hildegarde, arguments, receivedMessage)}

    else if (primaryCommand == "saber"){commands.call(saber, arguments, receivedMessage)}
    else if (primaryCommand == "liguang"){commands.call(liguang, arguments, receivedMessage)}
    else if (primaryCommand == "drusus"){commands.call(drusus, arguments, receivedMessage)}
    else if (primaryCommand == "jingu"){commands.call(jingu, arguments, receivedMessage)}
    else if (primaryCommand == "machiavelli"){commands.call(machiavelli, arguments, receivedMessage)}
    else if (primaryCommand == "berserker"){commands.call(berserker, arguments, receivedMessage)}



    //Masters
    else if (primaryCommand == "taipo"){commands.call(taipo, arguments, receivedMessage)}
    else if (primaryCommand == "vindamia"){commands.call(vindamia, arguments, receivedMessage)}
    else if (primaryCommand == "hugh"){commands.call(hugh, arguments, receivedMessage)}
    else if (primaryCommand == "varg"){commands.call(varg, arguments, receivedMessage)}
    else if (primaryCommand == "finis"){commands.call(finis, arguments, receivedMessage)}
    else if (primaryCommand == "calix"){commands.call(calix, arguments, receivedMessage)}
    else if (primaryCommand == "grim"){commands.call(grim, arguments, receivedMessage)}
    else if (primaryCommand == "asenath"){commands.call(asenath, arguments, receivedMessage)}
    else if (primaryCommand == "oriel"){commands.call(oriel, arguments, receivedMessage)}
    else if (primaryCommand == "agata"){commands.call(agata, arguments, receivedMessage)}

    else if (primaryCommand == "ava"){commands.call(ava, arguments, receivedMessage)}
    else if (primaryCommand == "mei"){commands.call(mei, arguments, receivedMessage)}
    else if (primaryCommand == "daffy"){commands.call(daffy, arguments, receivedMessage)}
    else if (primaryCommand == "lawrence"){commands.call(lawrence, arguments, receivedMessage)}
    else if (primaryCommand == "lucya"){commands.call(lucya, arguments, receivedMessage)}


    else {return}

}
//Logistic Functions
function daffyintroduction(receivedMessage){
receivedMessage.channel.send("Hello, Masters! \n \n Please enter '-help' in the chat to see a list of all my functions! \n \n Sincerely, Daffy-cane ")
receivedMessage.channel.send( "<:daffypeek1:682497098049912888>" + "<:daffypeek2:682497098439983123>")
}
function help(receivedMessage){
    const helpembed = {
        color: 0x0099ff,
        title : 'List of Commands and Available Stats',
        description: 'All commands are lowercase \n "-" signals a command \n Note: You can only add one number (ex: +5) to a roll.',
        fields: [
            {name: '\u200b',
                value: '\u200b',
                inline: false,},

            { name: 'Universal Stats: ',
                value: 'STR, END, AGI \n MAG, LCK',
                inline: true},

            { name: 'Noble Phantasm: ',
                value: 'NP',
                inline: true},
            
            { name: 'Master Additional Stats: ',
                value: 'INT, CHAR',
                inline: true},

            {name: '\u200b',
                value: '\u200b',
                inline: false,},

            {name: 'To Show Profiles: ',
                value: '<name> profile \n ex) -samson profile',
                inline: true},

            {name: 'Normal Dice Roll:',
                value: 'roll <# of die>d<sides> \n ex) -roll 1d20 \n ex) -roll 1d20+5',
                inline: true,},

            {name: 'Saving Throws:',
                value: '<name> <stat>save \n ex) -calix strsave \n ex) -calix strsave-3',
                inline: true,},

            {name: 'Modded Rolls:',
                value: '<name> <stat> \n ex) -johannes str \n ex) -johannes str+2',
                inline: true,},

            {name: '\u200b',
                value: '\u200b',
                inline: false,},

            {name: 'Names of Players:',
                value: 'calix, samson, hugh, wellington, grim, johannes, oriel, balaam, chamor, varg, vaina, finis, pandora, daffy, drusus, vindamia, kanetsugu, asenath, draupadi, ava, saber, agata, hildegarde, taipo, houyi, lawrence, jingu, mei, liguang, lucya, machiavelli',
                inline: true,},]
    }

    receivedMessage.channel.send({embed:helpembed})
}

function liguanglck(){
    if (this.trueName=="Li Guang--The Flying General, The Tiger of Ill Fortune"){
        return "-"
    }

    else {return this.lck}
}

function np_mod(){
    if (this.trueName=="Nero Claudia Drusus--Conqueror of Germania"){
        return "-"
    }

    if (this.trueName=="Balaam--The False Prophet, Accursed Tongue"){
        return "-"
    }

    else {return this.np}
}

//Master Function
 function commands(arguments, receivedMessage){
    savingthrows.call(this, arguments, receivedMessage)
    modrolls.call(this, arguments, receivedMessage)
    showprofile.call(this, arguments, receivedMessage)

    if (this.role=="Master"){
        mastersavingthrows.call(this, arguments, receivedMessage)
        mastermodrolls.call(this, arguments, receivedMessage)}
}

//Profile Function
function showprofile(arguments, receivedMessage){
    if (arguments=="profile"){
        if (this.trueName=="Asenath Waite"){
            return
        }

        if (this.role =="Servant"){                 
            const profileembed = {
                color: 0x0099ff,
                title : this.role + " (" + this.class_container + "): "+ this.trueName,
                thumbnail: {url: this.image,},
                fields: [
                    { name: 'STR: ',
                        value: this.str,
                        inline: true},

                    {name: 'END:',
                        value: this.end,
                        inline: true,},

                    {name: '\u200b',
                        value: '\u200b',
                        inline: false,},

                    {name: 'AGI:',
                        value: this.agi,
                        inline: true,},

                    {name: 'MAG:',
                        value: this.mag,
                        inline: true,},

                    {name: '\u200b',
                        value: '\u200b',
                        inline: false,},

                    
                    {name: 'LUCK:',
                        value: liguanglck.call(this),
                        inline: true,},

                    {name: 'NP:',
                        value: np_mod.call(this),
                        inline: true,},]
            }
            
            receivedMessage.channel.send({embed:profileembed})
        } 
        
        else if (this.role =="Master"){        
            const profileembed = {
                color: 0x0099ff,
                title : this.role + " (" + this.class_container + "): "+ this.trueName,
                thumbnail: {url: this.image,},

                fields: [
                    {name: '\u200b',
                        value: '\u200b',
                        inline: false,},

                    { name: 'STR: ',
                        value: this.str,
                        inline: true},

                    {name: 'END:',
                        value: this.end,
                        inline: true,},

                    {name: 'AGI:',
                        value: this.agi,
                        inline: true,},
                    
                    {name: '\u200b',
                        value: '\u200b',
                        inline: false,},


                    {name: 'MAG:',
                        value: this.mag,
                        inline: true,},

                    {name: 'LUCK:',
                        value: liguanglck.call(this),
                        inline: true,},

                    {name: '\u200b',
                        value: '\u200b',
                        inline: false,},

                    {name: 'INT:',
                        value: this.int,
                        inline: true,},
                    
                    {name: 'CHAR:',
                        value: this.char,
                        inline: true,},]
            }
            receivedMessage.channel.send({embed:profileembed})

        } 
          
    }  
    else return
}

//Functions for Rolls
//Saving Throws
function savingthrows(arguments, receivedMessage){ 
    let addition = " " + arguments
        addition = addition.substr(1)

        if(addition.includes("+")){splitroll = addition.split("+")}
        else if(addition.includes("-")){splitroll = addition.split("-")}
        else{splitroll=[addition]}

    primary_mod = splitroll[0]

    modsquared=0
    modsquared = parseInt(splitroll[1],10)

    if (!modsquared){
        modsquared=0
        }   

    if(addition.includes("-")){
        modsquared=modsquared*-1
    }

    else if (addition.includes("-")){
        modsquared=modsquared
    }

    if (primary_mod=="strsave"){
        mod=this.str
        modifier_name = "STR"
        rolltype = " Saving Throw"
    }

    else if(primary_mod == "endsave"){
        mod=this.end
        modifier_name = "END"
        rolltype = " Saving Throw"
    }
    else if(primary_mod == "agisave"){
        mod=this.agi
        modifier_name = "AGI"
        rolltype = " Saving Throw"
    }
    else if(primary_mod == "magsave"){
        mod=this.mag
        modifier_name = "MAG"
        rolltype = " Saving Throw"
    }
    else if(primary_mod == "lcksave"){
        mod=this.lck
        modifier_name = "LCK"
        rolltype = " Saving Throw"
    }

    else return

    dice = Math.floor(Math.random() * ((20 - 1) + 1) + 1)
    total= mod + dice + modsquared

    modsquared = 0

    const saverollembed ={
        color: 0x0099ff,
        title : modifier_name + rolltype,
        fields: [
            { name: 'Total: ',
                value: total,},

            {name: 'Rolled:',
                value: dice,
                inline: true,},

            {name: 'Stat Modifier:',
                value: mod,
                inline: true,},]
    }

    if (total>16){
        saverollembed.color = 3066993
    }
    else if (total<17 && total>11){
        saverollembed.color = 1752220
    }
    else if (total<12 && total>5){
        saverollembed.color = 15105570
    }
    else if (total<6){
        saverollembed.color = 15158332
    }

    receivedMessage.channel.send({embed:saverollembed})
}

function mastersavingthrows(arguments, receivedMessage){ 
    let addition = " " + arguments
        addition = addition.substr(1)

        if(addition.includes("+")){splitroll = addition.split("+")}
        else if(addition.includes("-")){splitroll = addition.split("-")}
        else{splitroll=[addition]}

    primary_mod = splitroll[0]

    modsquared=0
    modsquared = parseInt(splitroll[1],10)

    if (!modsquared){
        modsquared=0
        }   

    if(addition.includes("-")){
        modsquared=modsquared*-1
    }

    else if (addition.includes("+")){
        modsquared=modsquared
    }

    if (primary_mod == "intsave"){
        mod=this.int
        modifier_name = "INT"
        rolltype = " Saving Throw"
    }

    else if(primary_mod == "charsave"){
        mod=this.char
        modifier_name = "CHAR"
        rolltype = " Saving Throw"
    }

    else return

    dice = Math.floor(Math.random() * ((20 - 1) + 1) + 1)
    total= mod + dice + modsquared

    const mastersaverollembed ={
        color: 0x0099ff,
        title : modifier_name + rolltype,
        fields: [
            { name: 'Total: ',
                value: total,},

            {name: 'Rolled:',
                value: dice,
                inline: true,},

            {name: 'Stat Modifier:',
                value: mod,
                inline: true,},]
    }

    if (total>16){
        mastersaverollembed.color = 3066993
    }
    else if (total<17 && total>11){
        mastersaverollembed.color = 1752220
    }
    else if (total<12 && total>5){
        mastersaverollembed.color = 15105570
    }
    else if (total<6){
        mastersaverollembed.color = 15158332
    }

    receivedMessage.channel.send({embed:mastersaverollembed})
}

//Modded Rolls
function modrolls(arguments, receivedMessage){ 
    let addition = " " + arguments
        addition = addition.substr(1)

        if(addition.includes("+")){splitroll = addition.split("+")}
        else if(addition.includes("-")){splitroll = addition.split("-")}
        else{splitroll=[addition]}

    primary_mod = splitroll[0]

    modsquared=0
    modsquared = parseInt(splitroll[1],10)

    if (!modsquared){
        modsquared=0
        }   

    if(addition.includes("-")){
        modsquared=modsquared*-1
    }

    else if (addition.includes("+")){
        modsquared=modsquared
    }

    if (primary_mod == "str"){
        mod=this.str
        modifier_name = "STR "
        rolltype = "Roll"
    }

    else if(primary_mod == "end"){
        mod=this.end
        modifier_name = "END "
        rolltype = "Roll"
    }
    else if(primary_mod == "agi"){
        mod=this.agi
        modifier_name = "AGI "
        rolltype = "Roll"
    }
    else if(primary_mod == "mag"){
        mod=this.mag
        modifier_name= "MAG "
        rolltype = "Roll"
    }
    else if(primary_mod == "lck"){
        mod=this.lck
        modifier_name = "LCK "
        rolltype = "Roll"
    }

    else if(primary_mod == "np"){
        mod=this.np
        modifier_name = "Noble Phantasm "
        rolltype = "Roll"
    }

    else return

    dice = Math.floor(Math.random() * ((20 - 1) + 1) + 1)
    total= mod + dice + modsquared

    const modrollembed ={
        color: 0x0099ff,
        title : modifier_name + rolltype,
        fields: [
            { name: 'Total: ',
                value: total,},

            {name: 'Rolled:',
                value: dice,
                inline: true,},

            {name: 'Stat Modifier:',
                value: mod,
                inline: true,},]
    }

    if (total>16){
        modrollembed.color = 3066993
    }
    else if (total<17 && total>11){
        modrollembed.color = 1752220
    }
    else if (total<12 && total>5){
        modrollembed.color = 15105570
    }
    else if (total<6){
        modrollembed.color = 15158332
    }

    receivedMessage.channel.send({embed:modrollembed})
}


function mastermodrolls(arguments, receivedMessage){ 

    let addition = " " + arguments
    addition = addition.substr(1)

    if(addition.includes("+")){splitroll = addition.split("+")}
    else if(addition.includes("-")){splitroll = addition.split("-")}
    else{splitroll=[addition]}

primary_mod = splitroll[0]

modsquared=0
modsquared = parseInt(splitroll[1],10)

if (!modsquared){
    modsquared=0
    }   

if(addition.includes("-")){
    modsquared=modsquared*-1
}

else if (addition.includes("+")){
    modsquared=modsquared
}
    if (primary_mod == "int"){
        mod=this.int
        modifier_name = "INT "
        rolltype = "Roll"
    }

    else if(primary_mod == "char"){
        mod=this.char
        modifier_name = "CHAR "
        rolltype = "Roll"
    }

    else return

    dice = Math.floor(Math.random() * ((20 - 1) + 1) + 1)
    total= mod + dice

    const mastermodrollembed ={
        color: 0x0099ff,
        title : modifier_name + rolltype,
        fields: [
            { name: 'Total: ',
                value: total,},

            {name: 'Rolled:',
                value: dice,
                inline: true,},

            {name: 'Stat Modifier:',
                value: mod,
                inline: true,},]
    }

    if (total>16){
        mastermodrollembed.color = 3066993
    }
    else if (total<17 && total>11){
        mastermodrollembed.color = 1752220
    }
    else if (total<12 && total>5){
        mastermodrollembed.color = 15105570
    }
    else if (total<6){
        mastermodrollembed.color = 15158332
    }

    receivedMessage.channel.send({embed:mastermodrollembed})
}

//Normal Roll
function normalroll(arguments, receivedMessage){
    let roll = " " + arguments
        roll = roll.substr(1)
    let splitroll = roll.split("d")
    let dice_numberstr = splitroll[0]
    let sidesarr = splitroll[1]

    if (!sidesarr){
        return
    }

    if(sidesarr.includes("+")){modifierarr = sidesarr.split("+")}
    else if(sidesarr.includes("-")){modifierarr = sidesarr.split("-")}
    else{modifierarr=[sidesarr]}

    let sidesstr = modifierarr[0]
    let modifierstr =modifierarr[1]

    dice_number= parseInt(dice_numberstr,10)
    sides= parseInt(sidesstr,10)

    if (modifierstr){
        modifier= parseInt(modifierstr,10) + 0
    }
    else {modifier =0}


    if(sidesarr.includes("-")){
        modifier=modifier*-1
    }
    
    else if (sidesarr.includes("+")){
        modifier=modifier
    }


    var i
    total = 0
    for (i=0; i<dice_number; i++){
        total= total + Math.floor(Math.random() * ((sides - 1) + 1) + 1)
    }

    dice_value=total
    total= total + modifier

    if (!total){
        return
    }

    const normalrollembed ={
        
        color: 0x0099ff,
        title : 'Normal Roll',
        fields: [
            { name: 'Total: ',
                value: total,},


            {name: 'Dice Value:',
                value: dice_value,
                inline: true,},

            {name: 'Modifier:',
                value: modifier,
                inline: true,},]
    }

    if (total>16){
        normalrollembed.color = 3066993
    }
    else if (total<17 && total>11){
        normalrollembed.color = 1752220
    }
    else if (total<12 && total>5){
        normalrollembed.color = 15105570
    }
    else if (total<6){
        normalrollembed.color = 15158332
    }


    receivedMessage.channel.send({embed:normalrollembed})
}

//Servant Profiles 
var houyi = {
    trueName: "Hou Yi--The Sunsetter",
    role: "Servant",
    class_container : "Archer",
    str: 4,
    end: 5,
    agi: 3,
    mag: 5,
    lck: 5,
    np: 5,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761435955303022652/HouYi.png`)
  };

var kanetsugu = {
    trueName: "Naoe Kanetsugu--Chief Retainer of the Uesugi Clan",
    role: "Servant",
    class_container : "Lancer",
    str: 3,
    end: 3,
    agi: 4,
    mag: 3,
    lck: 2,
    np: 4,


    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761444910036549632/expression_sheet.png`)
  };

var wellington = {
    trueName: "Arthur Wellesley, Duke of Wellington--The Iron Duke",
    role: "Servant",
    class_container : "Rider",
    str: 3,
    end: 5,
    agi: 2,
    mag: 1,
    lck: 5,
    np: 4,


    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761444916802224128/rider_gdi.png`)
  };

var vaina = {
    trueName: "Vainamoinen--Divine Singer, The Shaper of Worlds",
    role: "Servant",
    class_container : "Caster",
    str: 2,
    end: 3,
    agi: 2,
    mag: 5,
    lck: 3,
    np: 5,


    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761464256721321985/unknown.png`)


  };

var pandora = {
    trueName: "Pandora--The All Giving, Mother of Calamities",
    role: "Servant",
    class_container : "Assassin",
    str: 1,
    end: 4,
    agi: 2,
    mag: 5,
    lck: 3,
    np: 5,


    image: new URL (`https://cdn.discordapp.com/attachments/761415667051528193/761435951133229126/unknown-1.png`)
  };

var samson = {
    trueName: "Samson--Last Judge of Israel",
    role: "Servant",
    class_container : "Berserker",
    str: 5,
    end: 5,
    agi: 5,
    mag: 3,
    lck: 2,
    np: 4,


    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761696981147189258/CE2B6A7F-62FF-4BBE-BDBB-F5C7F3B9DF1E.jpeg`)
  };

var johannes = {
    trueName: "Johannes--The Apostle, Beloved Disciple ",
    role: "Servant",
    class_container : "Ruler",
    str: 2,
    end: 5,
    agi: 2,
    mag: 5,
    lck: 5,
    np: 5,


    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761442235316436992/ruler_card_art_asc2.png`)
  };

var draupadi = {
    trueName: "Draupadi--The Defiant Queen, The Fireborn ",
    role: "Servant",
    class_container : "Avenger",
    str: 2,
    end: 4,
    agi: 4,
    mag: 5,
    lck: 5,
    np: 5,


    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761442234876035122/draupadi_900px_5-11.png`)
  };
  
var balaam = {
    trueName: "Balaam--The False Prophet, Accursed Tongue",
    role: "Servant",
    class_container : "Alter Ego, Human",
    str: 1,
    end: 2,
    agi: 1,
    mag: 3,
    lck: 4,
    np: 0,


    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761435950764261406/AlticaneAlterEgo.jpg`)
  };

var chamor = {
    trueName: "Chamor--The Donkey",
    role: "Servant",
    class_container : "Alter Ego, Donkey",
    str: 4,
    end: 5,
    agi: 2,
    mag: 2,
    lck: 4,
    np: 3,


    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761435950739095563/AlticaneAlterEgo_copy.jpg`)
  };

var hildegarde = {
    trueName: "Hildegarde von Bingen--The Visionary Saint",
    role: "Servant",
    class_container : "Foreigner",
    str: 2,
    end: 3,
    agi: 3,
    mag: 1,
    lck: 5,
    np: 5,


    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761444911421194251/hilde.jpg`)
  };

var saber = {
    trueName: "[REDACTED]--[REDACTED]",
    role: "Servant",
    class_container : "Saber",
    str: 4,
    end: 5,
    agi: 5,
    mag: 3,
    lck: 3,
    np: 5,


    image: new URL('https://cdn.discordapp.com/attachments/761415667051528193/762054653596663848/Kira_Kira_Seiba.jpg')
  };

var liguang = {
    trueName: "Li Guang--The Flying General, The Tiger of Ill Fortune",
    role: "Servant",
    class_container : "Archer",
    str: 5,
    end: 4,
    agi: 5,
    mag: 3,
    lck: 0,
    np: 5,


    image: new URL('https://cdn.discordapp.com/attachments/761415667051528193/761693377937801246/Screen_Shot_2020-10-02_at_1.57.13_PM.png')

  };

var drusus = {
    trueName: "Nero Claudia Drusus--Conqueror of Germania",
    role: "Servant",
    class_container : "Lancer",
    str: 5,
    end: 5,
    agi: 4,
    mag: 2,
    lck: 2,
    np: 0,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761693381189173258/Screen_Shot_2020-10-02_at_1.56.09_PM.png`)
  };

var jingu = {
    trueName: "Jingu--The Queen Regent, Conquerer of the Promised Land",
    role: "Servant",
    class_container : "Rider",
    str: 5,
    end: 5,
    agi: 3,
    mag: 4,
    lck: 2,
    np: 5,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761693383063502848/Screen_Shot_2020-10-02_at_1.55.39_PM.png`)
  };

var machiavelli = {
    trueName: "Niccolo Machiavelli--The Strategist, Statesman of a Fallen World",
    role: "Servant",
    class_container : "Caster",
    str: 1,
    end: 5,
    agi: 3,
    mag: 2,
    lck: 1,
    np: 5,


    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761466801296113684/unknown.png`)
  };

var berserker = {
    trueName: "[REDACTED]",
    role: "Lostbelt King",
    class_container : "Berserker",
    str: 5,
    end: 5,
    agi: 2,
    mag: 2,
    lck: 5,
    np: 5,


    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761467303221002251/IMG_20200602_082003_707.jpg`)
  };


  //Master Profiles
  var taipo = {
    trueName: "Taipo Kalibulanan",
    role: "Master",
    class_container : "Archer",
    str: 1,
    end: 2,
    agi: 1,
    mag: 5,
    lck: 1,

    int: 4,
    char: 3,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761444908229066832/Taipo1.png`)
  };

  var vindamia = {
    trueName: "Vindamia Merem-Iyeaus",
    role: "Master",
    class_container : "Lancer",
    str: 1,
    end: 1,
    agi: 1,
    mag: 5,
    lck: 3,

    int: 5,
    char: 1,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761444908644696094/vindamia.png`)
  };

var hugh = {
    trueName: "Hughaih (Hugh) Clegg-Ogden",
    role: "Master",
    class_container : "Rider",
    str: 1,
    end: 1,
    agi: 3,
    mag: 0,
    lck: 4,

    int: 5,
    char: 3,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761442232124964886/hugh.png`)
  };

var varg = {
    trueName: "Varg Inse",
    role: "Master",
    class_container : "Caster",
    str: 2,
    end: 3,
    agi: 2,
    mag: 1,
    lck: 3,

    int: 4,
    char: 2,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761462003021119488/Screen_Shot_2020-10-01_at_10.36.32_PM.png`)
  };

var finis = {
    trueName: "Finis Noname McNosonomine",
    role: "Master",
    class_container : "Assassin",
    str: 4,
    end: 3,
    agi: 1,
    mag: 3,
    lck: 1,

    int: 4,
    char: 1,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761461993097003008/Screen_Shot_2020-10-01_at_10.35.01_PM.png`)
  };
  
 var calix = {
    trueName: "Calix Rikimaru ",
    role: "Master",
    class_container : "Berserker",
    str: 1,
    end: 4,
    agi: 2,
    mag: 5,
    lck: 1,

    int: 3,
    char: 1,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761696983588274226/IMG_0283_copy.JPG`)
  };

var grim = {
    trueName: "Michalis Grimaud Roach ",
    role: "Master",
    class_container : "Ruler",
    str: 2,
    end: 4,
    agi: 2,
    mag: 2,
    lck: 3,

    int: 3,
    char: 1,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761446424667226152/michgrimroach_design_ver_1.png`)
  };

var asenath = {
    trueName: "Asenath Waite",
    role: "Master",
    class_container : "Overseer",
    str: 5,
    end: 1,
    agi: 1,
    mag: 5,
    lck: 5,

    int: 5,
    char: 5,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761463067044610078/unknown.png`)
  };
  
var oriel = {
    trueName: "Oriel",
    role: "Master",
    class_container : "Alter Ego",
    str: 2,
    end: 2,
    agi: 1,
    mag: 2,
    lck: 3,

    int: 2,
    char: 5,

    image: new URL('https://cdn.discordapp.com/attachments/761415667051528193/761433508488019988/oriole_CE.jpg')
  };

var agata = {
    trueName: "Agata",
    role: "Master",
    class_container : "Foreigner",
    str: 2,
    end: 2,
    agi: 1,
    mag: 1,
    lck: 3,

    int: 3,
    char: 5,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761462001607507968/Screen_Shot_2020-10-01_at_10.37.18_PM.png`)
  };

var ava = {
    trueName: "Ava Lunése",
    role: "Master",
    class_container : "LB Saber",
    str: 2,
    end: 1,
    agi: 3,
    mag: 5,
    lck: 1,

    int: 2,
    char: 3,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761444908191449108/Ava_UPDATED.jpg`)
  };

var mei = {
    trueName: "Mei-Ling Liu",
    role: "Master",
    class_container : "LB Archer",
    str: 4,
    end: 2,
    agi: 3,
    mag: 1,
    lck: 3,

    int: 2,
    char: 2,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761459763312721931/u7R_lPWznswy8cCJHBKHnOuNEs1Xooic7jEvVI4VMrejCQIreW9_fQbS-WWV4HpwIQBB9tGnZs9gFZNOZ4trOkmNxWjAl0qCFUkh.png`)
  };

var daffy = {
    trueName: "Daffodil",
    role: "Master",
    class_container : "LB Lancer",
    str: 1,
    end: 1,
    agi: 1,
    mag: 4,
    lck: 1,

    int: 5,
    char: 4,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761442238076158022/daffy.png`)
  };

var lawrence = {
    trueName: "Lawrence Igsem",
    role: "Master",
    class_container : "LB Rider",
    str: 1,
    end: 2,
    agi: 2,
    mag: 3,
    lck: 1,

    int: 4,
    char: 4,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761452775111655464/unknown.png`)
  };

var lucya = {
    trueName: "Lucya Nikotolvska",
    role: "Master",
    class_container : "LB Caster",
    str: 2,
    end: 2,
    agi: 4,
    mag: 3,
    lck: 1,

    int: 5,
    char: 0,

    image: new URL(`https://cdn.discordapp.com/attachments/761415667051528193/761452907374575636/unknown.png`)
  };

client.login("NzYwNjUwOTM0MDM1NDE1MTMw.X3PJYg.w_cDzTureMlr-tdDonffRvWkgmM") // Replace XXXXX with your bot tok en