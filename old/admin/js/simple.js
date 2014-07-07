$( document ).ready( function() {

       var command_directory = {
         
         'good': function( tokens ) {
         return 'Yep, good!';
         },

          'ted': function( tokens ) {
         return 'TED is awesome! Go check <a href="http://ted.com">TED.com</a> website.';
         },

          'tedx': function( tokens ) {
         return 'We are one of the TEDx events! Go check <a href="http://tedx.ted.com">TEDx</a> website.';
         },

          'asdf': function( tokens ) {
         return 'jkl;';
         },

          'lucas': function( tokens ) {
         return 'Thanks for asking. Lucas is our co-founder. To find lucas please type <comm>find Lucas</comm>.';
         },

          'harbin': function( tokens ) {
         return '哈尔滨, one of the most attractive cities in the world! Famous as the World\'s Favoriate Ice City.';
         },

          'songhuariver': function( tokens ) {
         return '松花江, the mother river of Harbinese.';
         },

          'siri': function( tokens ) {
         return 'That Apple girl? Huh.. People say she is much smarter than me :(';
         },

          'xe': function( tokens ) {
         return '<a href=\"http://xe.com\">XE.com</a>, the world\'s favorite currency site!';
         },

          'google': function( tokens ) {
         return 'A nice place to work. Check out <a href=\'https://www.ted.com/speakers/sergey_brin_and_larry_page\'>Larry Page</a>\'s TED talks.';
         },

         'microsoft': function( tokens ) {
         return 'A nice place to work. Check out <a href=\'http://www.ted.com/talks/bill_gates\'>Bill Gates</a>\'s TED talks.';
         },

          'apple': function( tokens ) {
         return 'I, no, we really wish Steve Jobs had given us a TED talk.';
         },

         'uwaterloo': function( tokens ) {
         return 'Should I say it\'s the best school in the world?';
         },

         'toronto': function( tokens ) {
         return 'snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. snow.. yeh? are you asking why it does not stop?';
         },

         'snow': function( tokens ) {
            snowStorm.toggleSnow();
         },
         
         'enough': function( tokens ) {
         return '~~not enough!';
                
         },
         
         'space': function( tokens ) {
         return '<br>';
                
         },
         
         'fuck': function( tokens ) {
         return 'Oh No';
         },
         
         'ha': function( tokens ) {
         return 'haha';
         }, 
         
         
         'hello': function( tokens ) {
         return 'Hi! I am sure you are saying Hello man!'; 
         },
         
         'ping': function( tokens ) {
         return 'Pong Pong!';
                
         },
         
         'cd': function( tokens ) {
         return 'Directory not available';
                
         },
         
         'dir': function( tokens ) {
         return 'Rooted only';
                
         },
         
         'dos': function( tokens ) {
         return 'Joking me? No Dos here';
                
         },
         
         
         'iloveu': function( tokens ) {
         return 'Me, too!';
                
         },
         
         'iloveyou': function( tokens ) {
         return 'Me, too!';
                
         },
         
         'iphone': function( tokens ) {
         return 'I do have one!';
                
         },
         
         'ipad': function( tokens ) {
         return 'I have an iPad!';
                
         },
         
         'blackberry': function( tokens ) {
         return 'O yes! I have a blackberry! Latest OS!';
                
         },
         
         '我爱洗澡': function( tokens ) {
         return '皮肤好好~嗷嗷嗷嗷~';
                
         },
         
         '龙门飞甲': function( tokens ) {
         return '不知真假，嘎嘎~';
                
         },
         
         '10086': function( tokens ) {
         return '你真当我是客服了？';
                
         },
         
         '110': function( tokens ) {
         return '你真以为我是警察吗？';
                
         },
         
         '911': function( tokens ) {
         return 'Do you think I am a police?';
                
         },
         
         'rosebud': function( tokens ) { 
         return 'Well, +$1000 ^^';
                
         },
                 
         'whosyourdaddy': function( tokens ) {
            return 'Ahhah, you are InViNcIbLe now';
		}
        

      };


      for( var j in command_directory ) {
        $.register_command( j, command_directory[j] );
      }

           });

