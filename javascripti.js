
            //yksi diville liike:
            //Div number one moves here:
            function leftArrow(){
                var ele = document.getElementById('yksi');
                
                ele.style.left = parseInt(ele.style.left) - 5 + "px";
                
            }
            function rightArrow(){
                var ele = document.getElementById('yksi');
                
                ele.style.left = parseInt(ele.style.left) + 5 + "px";

            }
            function upArrow(){
                var ele = document.getElementById('yksi');

                ele.style.top = parseInt(ele.style.top) - 5 + "px";

            }
            function downArrow(){
                var ele = document.getElementById('yksi');

                ele.style.top = parseInt(ele.style.top) + 5 + "px";

            }

            //kaksi diville liike:
            //Div number two moves here:
            function left(){
                var ment = document.getElementById('kaksi');
                ment.style.left = parseInt(ment.style.left) - 5 + "px";
            }
            function right(){
                var ment = document.getElementById('kaksi');
                ment.style.left = parseInt(ment.style.left) + 5 + "px";
            }
            function up(){
                var ment = document.getElementById('kaksi');
                ment.style.top = parseInt(ment.style.top) - 5 + "px";
            }
            function down(){
                var ment = document.getElementById('kaksi');
                ment.style.top = parseInt(ment.style.top) + 5 + "px";
            }
            //here everybody gets keyes assigned to their rules:
            //liike kaikille näppäimistöltä:
            function movingDay(e){
                switch(e.keyCode){
                        //toiselle diville wasd näppylät:
                        //Div number two gets WASD:
                    case 65:
                        leftArrow();
                        //console.log($('#yksi').position());
                        collided();//täällä on uusi funcktio! 15.7. Collided() is a function for the collision detection
                        break;
                    case 68:
                        rightArrow();
                        //console.log($('#yksi').position());
                        collided();
                        break;
                    case 87:
                        upArrow();
                        //console.log($('#yksi').position());
                        collided();
                        break;
                    case 83:
                        downArrow();
                        //console.log($('#yksi').position());
                        collided();
                        break;
                        //ja sit toiselle diville nuolinäppylät:
                        //the Fisrt div gets arrows:
                    case 37:
                        left();
                        collided();
                        break;
                    case 39:
                        right();
                        collided();
                        break;
                    case 38:
                        up();
                        collided();
                        break;
                    case 40:
                        down();
                        collided();
                        break;
                }
            }
            function docReady(){
                //lisätään näppäimistön kuuntelija:
                //adding an event listener for keyes:
                window.addEventListener('keydown', movingDay);
                //Alla olevat varrit ja positionit oleeellisia jotta liike voi tapahtua:
                //These vars and set positions are needed so that movement can happen:
                var y = document.getElementById('yksi');
                var k = document.getElementById('kaksi');
                
                y.style.position = "absolute";
                y.style.left = 300 + "px";
                y.style.top = 200 + "px";
                
                k.style.position = "absolute";
                k.style.left = 0 + "px";
                k.style.top = 0 + "px";
                //tähän asti!
                }
            //jqueryä tähän väliin jos löytyis positio yksi diville:
            $('document').ready(function(){
                console.log($('#yksi').position());//jumaliste, löytyy!!!!
                console.log($('#kaksi').position());
            })
            //uusi function joka on sidottu ekaan näppäimiin!!! 15.7.
            //nyt kummankin divin näppäimis 27.07
            function collided(){
                var eka = document.getElementById('yksi');
                var toka = document.getElementById('kaksi');
                
                var position1 = $('#yksi').position().top;//toimii, antaa yläkulmasijainnin konsoliin numerona. 27.07.
                var position1_left = $('#yksi').position().left;
                
                var position2 = $('#kaksi').position().top;
                var position2_left = $('#kaksi').position().left;
                
                console.log(position2_left + " kaksi");
                console.log(position1_left + " yksi");
                //toimii nyt ykkösen yläreuna kun osuu kakkosen alareunan yli. 27.07
                //the above positions are for number info that we can use for detection, the next if statement is the one that needs work:
                if(position1 <= position2 + 100 //toimii oikean ja alareunan kanssa. 27.07, this works so that the blue div is detected when it goes through the black box but also when i try to go around the black box. Right hand side detection and the bottom detection works but left hand side and top do not. Test the code to see where detection falls apart.
                  // || position1 + 100 >= position2
                   && position1_left <= position2_left + 100
                   || position1 + 100 >= position2
                   && position1_left + 100 < position2_left
                   //toimii oikean ja alareunan kanssa. 27.07
                   
                  ){
                    $('#kaksi').css('color', 'red');
                }else{
                    $('#kaksi').css('color', 'black');
                }
                

                /*console.log(eka.style.left + eka.style.width);
                console.log(toka.style.left + toka.style.width);*/
                
                //17.07. lisätty varrit heightille ja topille:
                /*
                var eka_korkeus = eka.position().top + (100 + "px");
                var eka_leveys = eka.style.width;
                var eka_vasen = eka.style.left;
                var eka_yla = eka.position.top();
                
                var toka_korkeus = toka.position().top + (100 + "px");
                var toka_leveys = toka.style.width;
                var toka_vasen = toka.style.left;
                var toka_yla = toka.position.top();//yla ja korkeus muutettu position attribuuteix 27.07. !!! ei toimi.
                console.log(toka_korkeus)
                //toimii oikea reuna suhteessa toisen kuution vasempaan reunaan!!!!! 15.7. (eka_leveys + eka_vasen) < toka_vasen
                //kirjoitetaan törmäys ehto uusixi 17.07. : toimii kummallisesti.... ei vielä oikein, nurinpäin?
                */
                
                //tehdään kaikki uusixi collisionista 27.07.
                $()
            }