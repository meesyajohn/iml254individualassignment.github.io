	function displayExperience() {
            const experienceContent = {
                "Food Review": {
                    text: "I've got the wonderful chance to discover and spread the joys of cuisine from all over the world as an influencer. I started my adventure with modest trips to neighborhood restaurants, meticulously recording every encounter with a passionate palate and keen eye. My reviews began to receive attention over time, drawing in a wide range of readers who were keen to try out new cuisines and tastes. Every review I write is a painstaking synthesis of my own stories and sensory observations, providing my readers with a colorful and reliable story that ranges from fine dining establishments to undiscovered street food treasures. Talking with chefs and other food enthusiasts has not only improved my knowledge of different cuisines throughout the world, but it has also created a community of people who are passionate about food as art. This role has honed my skills in content creation, photography, and social media strategy, all while indulging in my love for gastronomic adventures.",
                    images: ["image/foodreview1.jpg", "image/foodreview2.jpeg", "image/foodreview3.jpeg", "image/foodreview4.jpeg", "image/foodreview5.jpeg", "image/foodreview6.jpeg"]
                },
                "Product Review": {
                    text: "My work as a product review influencer has been characterized by an uncompromising dedication to offering frank and perceptive assessments on a broad variety of products. My reviews found an immediate resonance with readers who were looking for trustworthy information to help them make wise purchases. This position has given me the opportunity to work with several brands and has given me a platform to introduce my followers to cutting-edge products. Every review combines in-depth research, firsthand knowledge, and useful guidance to make sure readers get thorough and reliable information. Through discussions and criticism, I have been able to better understand the needs of my community and hone my talents in social media participation, videography, and content development. My experience as a product review influencer has been dynamic and ever-changing, which motivates me to provide interesting and educational content.",
                    videos: ["video/productreview1.MOV", "video/productreview2.MOV", "video/productreview3.MOV", "video/productreview4.MOV", "video/productreview5.MOV", "video/productreview6.MOV"]
                },
                "Fashion Review": {
                    text: "My experiences as an influencer model have been thrilling and life-changing. I started out by working with regional fashion labels and photographers, displaying a variety of looks and trends on my social media accounts. My ability to capture the essence of different ensembles through imaginative stances and captivating narrative soon attracted notice and resulted in collaborations with renowned fashion houses and cosmetic companies. Every picture shoot has given me the chance to experiment with new looks and expand my creative abilities. It has also allowed me to interact with a group of fashion enthusiasts who follow me online and look up to me for inspiration. The behind-the-scenes work has improved my talents and broadened my appreciation for the modeling craft, from understanding lighting and camera angles to applying cosmetics and styling.",
                    images: ["image/modelling1.jpeg", "image/modelling2.jpeg", "image/modelling3.jpeg", "image/modelling4.jpeg", "image/modelling5.jpeg", "image/modelling6.jpeg"]
                },
                "Movie Premiere": {
                    text: "Being an influencer and going to movie premieres has been an amazing experience full of elegance and excitement. Every premiere is a huge occasion where I get to stroll the red carpet wearing couture attire and take in the thrilling energy of celebration and anticipation. My job is to give my viewers an insider's perspective of these special events by sharing behind-the-scenes photos and videos with celebrities and filmmakers as well as capturing the excitement of the crowd. I get to see much awaited movies before they are officially released, and my fans wait anxiously for my honest opinions and thoughts. I am able to create a sense of inclusion for my audience by bridging the gap between the entertainment business and them because to my special position. Being among the first to see ground-breaking films, interacting with other movie lovers, and building relationships with industry professionals have all contributed to my extremely exciting and enlightening experience as a movie premiere influencer.",
                    images: ["image/moviepremiere1.jpeg", "image/moviepremiere2.jpeg", "image/moviepremiere3.jpeg", "image/moviepremiere4.jpeg", "image/moviepremiere5.jpeg", "image/moviepremiere6.jpeg"]
                }
            };

            const selectedValue = document.getElementById('experienceSelect').value;
            const contentDiv = document.getElementById('experienceContent');

            if (selectedValue) {
                const selectedContent = experienceContent[selectedValue];
                if (selectedValue === "Product Review") {
                    contentDiv.innerHTML = `<h1>${selectedValue}</h1>
                                            <p>${selectedContent.text}</p>
                                            <div class="frames">
                                                <div class="frame"><video src="${selectedContent.videos[0]}" controls></video></div>
                                                <div class="frame"><video src="${selectedContent.videos[1]}" controls></video></div>
                                                <div class="frame"><video src="${selectedContent.videos[2]}" controls></video></div>
                                                <div class="frame"><video src="${selectedContent.videos[3]}" controls></video></div>
                                                <div class="frame"><video src="${selectedContent.videos[4]}" controls></video></div>
                                                <div class="frame"><video src="${selectedContent.videos[5]}" controls></video></div>
                                            </div>`;
                } else {
                    contentDiv.innerHTML = `<h1>${selectedValue}</h1>
                                            <p>${selectedContent.text}</p>
                                            <div class="frames">
                                                <div class="frame"><img src="${selectedContent.images[0]}" alt="${selectedValue} image 1"></div>
                                                <div class="frame"><img src="${selectedContent.images[1]}" alt="${selectedValue} image 2"></div>
                                                <div class="frame"><img src="${selectedContent.images[2]}" alt="${selectedValue} image 3"></div>
                                                <div class="frame"><img src="${selectedContent.images[3]}" alt="${selectedValue} image 4"></div>
                                                <div class="frame"><img src="${selectedContent.images[4]}" alt="${selectedValue} image 5"></div>
                                                <div class="frame"><img src="${selectedContent.images[5]}" alt="${selectedValue} image 6"></div>
                                            </div>`;
                }
            } else {
                contentDiv.innerHTML = `<h1>Experience</h1>
                                        <p>Select an option from the dropdown to see details about my experiences in working.</p>`;
            }
        }

        function scrollToTop() {
            document.documentElement.scrollTop = 0;
        }

        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("scrollTopBtn").style.display = "block";
            } else {
                document.getElementById("scrollTopBtn").style.display = "none";
            }
        }

        document.addEventListener('mousemove', (e) => {
            let glitter = document.createElement('div');
            glitter.classList.add('glitter');
            document.body.appendChild(glitter);

            glitter.style.left = `${e.pageX}px`;
            glitter.style.top = `${e.pageY}px`;

            setTimeout(() => {
                glitter.remove();
            }, 1000);
        });
