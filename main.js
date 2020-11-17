	var question = "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?";
	console.log(question);

	var n;
    n = prompt(question, 5);

    if (n <= 25) {

      if (n >= 1)  { console.log('                        #                        '); }
      if (n >= 2)  { console.log('                       ###                       '); }
      if (n >= 3)  { console.log('                      #####                      '); }
      if (n >= 4)  { console.log('                     #######                     '); }
      if (n >= 5)  { console.log('                    #########                    '); }
      if (n >= 6)  { console.log('                   ###########                   '); }
      if (n >= 7)  { console.log('                  #############                  '); }
      if (n >= 8)  { console.log('                 ###############                 '); }
      if (n >= 9)  { console.log('                #################                '); }
      if (n >= 10) { console.log('               ###################               '); }
      if (n >= 11) { console.log('              #####################              '); }
      if (n >= 12) { console.log('             #######################             '); }
      if (n >= 13) { console.log('            #########################            '); }
      if (n >= 14) { console.log('           ###########################           '); }
      if (n >= 15) { console.log('          #############################          '); }
      if (n >= 16) { console.log('         ###############################         '); }
      if (n >= 17) { console.log('        #################################        '); }
      if (n >= 18) { console.log('       ###################################       '); }
      if (n >= 19) { console.log('      #####################################      '); }
      if (n >= 20) { console.log('     #######################################     '); }
      if (n >= 21) { console.log('    #########################################    '); }
      if (n >= 22) { console.log('   ###########################################   '); }
      if (n >= 23) { console.log('  #############################################  '); }
      if (n >= 24) { console.log(' ############################################### '); }
      if (n >= 25) { console.log('#################################################'); }
    }
    else {
      // ne pas afficher pyramide
      console.error( n + " est supperieur à 25");
    }